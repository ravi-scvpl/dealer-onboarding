'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Script from 'next/script';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Building2, MapPin, Camera, CheckCircle,
  ChevronRight, ChevronLeft, Upload, Loader2,
  Trash2, Crosshair, Info, Search, AlertCircle
} from 'lucide-react';
import toast from 'react-hot-toast';
import { Layout } from '@/components/Layout';
import { cn } from '@/lib/utils';
import { analyzeImageAction, submitOnboardingAction } from './actions';
import { compressImage } from '@/lib/imageCompression'; // Need to create this helper
import { uploadImageAction } from '@/lib/uploadAction';
import categories from '@/lib/category';

// --- Sub-components ---
interface AddressSearchProps {
  onAddressSelect: (address: string) => void;
}

const AddressSearch = ({ onAddressSelect }: AddressSearchProps) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      componentRestrictions: { country: "in" },
    },
    debounce: 500, // Debounced as requested
  });

  const handleSelect = async (address: string) => {
    setValue(address, false);
    clearSuggestions();
    onAddressSelect(address);
  };

  return (
    <div className="relative">
      <label className="label-utility">Search & Auto-fill Address</label>
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={!ready}
          className="input-premium pl-12"
          placeholder="Search your store location..."
        />
      </div>

      <AnimatePresence>
        {status === "OK" && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-50 w-full bg-white mt-1 rounded-xl shadow-xl border border-slate-100 overflow-hidden"
          >
            {data.map((suggestion) => (
              <li
                key={suggestion.place_id}
                onClick={() => handleSelect(suggestion.description)}
                className="px-4 py-3 hover:bg-slate-50 cursor-pointer text-sm border-b border-slate-50 last:border-none flex items-start gap-3"
              >
                <MapPin size={16} className="text-slate-300 mt-0.5 shrink-0" />
                <span className="text-slate-700 font-medium">{suggestion.description}</span>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};


// --- Form Schemas ---
const step1Schema = z.object({
  storeName: z.string()
    .min(3, 'Store name is too short')
    .max(100, 'Store name is too long')
    .refine(val => !/(https?:\/\/|www\.|\.com|\.in$|\.in\s)/.test(val.toLowerCase()), 'Website URLs not allowed in name')
    .refine(val => !/\d{10}/.test(val), 'Phone numbers not allowed in name'),
  dealerName: z.string().min(2, 'Name is too short'),
  category: z.string().min(1, 'Primary category is required'),
});

const step2Schema = z.object({
  line1: z.string().min(5, 'Address is too short'),
  landmark: z.string().optional(),
  locality: z.string().min(3, 'Locality is required'),
  city: z.string().min(2, 'City is required'),
  state: z.string().min(2, 'State is required'),
  pincode: z.string().regex(/^\d{6}$/, 'Enter valid 6-digit pincode'),
});

type Step1Data = z.infer<typeof step1Schema>;
type Step2Data = z.infer<typeof step2Schema>;

interface Props {
  user: any; // From NextAuth
  dealerProfile: any;
}

export default function OnboardingFlow({ user, dealerProfile }: Props) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [googleMapsLoaded, setGoogleMapsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.google) {
      setGoogleMapsLoaded(true);
    }
  }, []);

  // Data States
  const [step1Data, setStep1Data] = useState<Step1Data | null>(null);
  const [step2Data, setStep2Data] = useState<Step2Data | null>(null);
  const [location, setLocation] = useState<{ lat: number, lng: number, accuracy?: number } | null>(null);
  const [images, setImages] = useState<{
    file: Blob,
    type: string,
    preview: string,
    analysis?: any,
    isAnalyzing?: boolean
  }[]>([]);
  const [uploadingMedia, setUploadingMedia] = useState(false);

  // Forms
  const { register, handleSubmit, formState: { errors }, setValue: setValueStep1 } = useForm<Step1Data>({
    resolver: zodResolver(step1Schema)
  });

  // Category Autocomplete State
  const [categorySearch, setCategorySearch] = useState('');
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  const filteredCategories = React.useMemo(() => {
    if (!categorySearch || categorySearch.length < 2) return [];
    const searchLower = categorySearch.toLowerCase();
    return categories
      .filter(c => c.displayName.toLowerCase().includes(searchLower))
      .slice(0, 50);
  }, [categorySearch]);

  const handleSelectCategory = (displayName: string) => {
    setValueStep1('category', displayName, { shouldValidate: true });
    setCategorySearch(displayName);
    setShowCategoryDropdown(false);
  };

  const {
    register: registerStep2,
    handleSubmit: handleSubmitStep2,
    setValue: setValueStep2,
    formState: { errors: errors2 }
  } = useForm<Step2Data>({
    resolver: zodResolver(step2Schema)
  });

  // Moved usePlacesAutocomplete to AddressSearch sub-component to ensure it only runs when Google Maps is ready


  // --- Handlers ---
  const handleStep1 = (data: Step1Data) => {
    setStep1Data(data);
    setCurrentStep(2);
  };

  const handleStep2 = (data: Step2Data) => {
    setStep2Data(data);
    setCurrentStep(3);
  };

  const captureLocation = () => {
    if (!navigator.geolocation) return toast.error('Geolocation not supported');

    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          accuracy: pos.coords.accuracy
        });
        setLoading(false);
        toast.success('Location captured exactly');
      },
      (err) => {
        console.error(err);
        setLoading(false);
        toast.error('Permission denied. Please enable location.');
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Strict GMB & User requested validation
    const isUnsupported = 
      file.type === 'image/avif' || file.name.toLowerCase().endsWith('.avif') ||
      file.type === 'image/heic' || file.name.toLowerCase().endsWith('.heic') ||
      file.type === 'image/heif' || file.name.toLowerCase().endsWith('.heif');
    
    if (isUnsupported) {
      return toast.error('Format not supported. Please upload photos in JPG or PNG format only.');
    }

    if (file.size > 5 * 1024 * 1024) return toast.error('File too large (max 5MB)');

    setUploadingMedia(true);
    const compressed = await compressImage(file);
    const preview = URL.createObjectURL(compressed);

    // Add to list with "analyzing" state
    const newImageIndex = images.length;
    setImages(prev => [...prev, { file: compressed, type, preview, isAnalyzing: true }]);
    setUploadingMedia(false);

    try {
      // 1. Convert to base64 for AI analysis
      const reader = new FileReader();
      reader.readAsDataURL(compressed);
      reader.onloadend = async () => {
        const base64data = reader.result as string;

        // 2. Call AI Analysis (Server Action)
        const analysis = await analyzeImageAction(base64data, type);

        // 3. Update state with analysis
        setImages(prev => prev.map((img, idx) =>
          idx === newImageIndex ? { ...img, analysis, isAnalyzing: false } : img
        ));

        if (!analysis.isHighQuality) {
          toast.error(`Image quality issue: ${analysis.issues[0]}`, { duration: 4000 });
        } else {
          toast.success('AI verification passed');
        }
      };
    } catch (error) {
      console.error("AI Analysis Failed:", error);
      setImages(prev => prev.map((img, idx) =>
        idx === newImageIndex ? { ...img, isAnalyzing: false } : img
      ));
    }
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const submitOnboarding = async () => {
    if (!user || !step1Data || !step2Data || !location) return;
    if (images.length < 1) return toast.error('Please upload at least the storefront photo');

    setLoading(true);
    try {
      // Upload images to DigitalOcean Spaces
      const mediaUrls = await Promise.all(
        images.map(async (img) => {
          const timestamp = Date.now();
          const brandFolder = dealerProfile.brandId;
          const dealerFolder = dealerProfile.id;
          const fileName = `DHGMBDealersInvite/${brandFolder}/${dealerFolder}/${img.type}_${timestamp}.jpg`;
          
          const formData = new FormData();
          formData.append('file', img.file as File);
          
          const result = await uploadImageAction(formData, fileName);
          if (!result.success || !result.url) {
            throw new Error(result.error || "Upload failed");
          }

          return {
            url: result.url,
            type: img.type,
            timestamp: new Date().toISOString()
          };
        })
      );

      const result = await submitOnboardingAction({
        dealerId: dealerProfile.id,
        brandId: dealerProfile.brandId,
        storeName: step1Data.storeName,
        category: step1Data.category,
        address: {
          ...step2Data,
          full: `${step2Data.line1}, ${step2Data.locality}, ${step2Data.city}, ${step2Data.state}, ${step2Data.pincode}`
        },
        location: {
          ...location,
          method: 'browser-gps',
        },
        media: mediaUrls,
      });

      if (result.success) {
        toast.success('Onboarding submitted successfully');
        router.push(`/${dealerProfile.brandId}/thank-you`);
      } else {
        toast.error('Submission failed: ' + result.error);
      }
    } catch (error: any) {
      console.error(error);
      toast.error('Submission failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  // --- Address Auto-fill ---
  const handleSelectAddress = async (description: string) => {
    try {
      const results = await getGeocode({ address: description });
      const { lat, lng } = await getLatLng(results[0]);
      setLocation({ lat, lng, accuracy: 10 });

      const components = results[0].address_components;
      const getComponent = (types: string[]) => {
        const comp = components.find(c => types.some(t => c.types.includes(t)));
        return comp?.long_name || '';
      };

      setValueStep2('line1', description.split(',')[0], { shouldValidate: true });
      setValueStep2('locality', getComponent(['sublocality_level_1', 'sublocality']), { shouldValidate: true });
      setValueStep2('city', getComponent(['locality']), { shouldValidate: true });
      setValueStep2('state', getComponent(['administrative_area_level_1']), { shouldValidate: true });
      const pc = getComponent(['postal_code']);
      if (/^\d{6}$/.test(pc)) setValueStep2('pincode', pc, { shouldValidate: true });

      toast.success('Address auto-filled');
    } catch (error) {
      toast.error('Could not parse address. Please enter manually.');
    }
  };

  // --- Step Renders ---
  const renderStep1 = () => (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
          <Building2 size={24} />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-900">Basic Information</h2>
          <p className="text-sm text-slate-500">Let's start with your store identity</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(handleStep1)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="label-utility">Official Store Name</label>
            <input {...register('storeName')} className="input-premium" placeholder="e.g. Agarwal Electronics" />
            {errors.storeName && <p className="text-[10px] font-bold text-red-500 mt-1 uppercase tracking-wider">{errors.storeName.message}</p>}
          </div>
          
          <div>
            <label className="label-utility">Owner / Contact Name</label>
            <input {...register('dealerName')} className="input-premium" placeholder="Your full name" />
            {errors.dealerName && <p className="text-[10px] font-bold text-red-500 mt-1 uppercase tracking-wider">{errors.dealerName.message}</p>}
          </div>

          <div className="relative">
            <label className="label-utility">Business Category</label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
              <input type="hidden" {...register('category')} />
              <input
                value={categorySearch}
                onChange={(e) => {
                  setCategorySearch(e.target.value);
                  setShowCategoryDropdown(true);
                  setValueStep1('category', e.target.value, { shouldValidate: true });
                }}
                onFocus={() => setShowCategoryDropdown(true)}
                onBlur={() => setTimeout(() => setShowCategoryDropdown(false), 200)}
                className="input-premium pl-12"
                placeholder="Search category (e.g., Electronics)"
              />
            </div>

            <AnimatePresence>
              {showCategoryDropdown && filteredCategories.length > 0 && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute z-50 w-full bg-white mt-1 rounded-xl shadow-xl border border-slate-100 overflow-hidden max-h-60 overflow-y-auto"
                >
                  {filteredCategories.map((cat) => (
                    <li
                      key={cat.name}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        handleSelectCategory(cat.displayName);
                      }}
                      className="px-4 py-3 hover:bg-slate-50 cursor-pointer text-sm border-b border-slate-50 last:border-none flex items-start gap-3"
                    >
                      <Building2 size={16} className="text-slate-300 mt-0.5 shrink-0" />
                      <span className="text-slate-700 font-medium">{cat.displayName}</span>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
            {errors.category && <p className="text-[10px] font-bold text-red-500 mt-1 uppercase tracking-wider">{errors.category.message}</p>}
          </div>
        </div>

        <button type="submit" className="btn-primary w-full md:w-fit md:px-12 flex items-center justify-center gap-2 mt-4 ml-auto">
          Next Step <ChevronRight size={18} />
        </button>
      </form>
    </motion.div>
  );

  const renderStep2 = () => (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <button onClick={() => setCurrentStep(1)} className="p-2 -ml-2 text-slate-400 hover:text-slate-600">
          <ChevronLeft size={20} />
        </button>
        <div>
          <h2 className="text-xl font-bold text-slate-900">Store Address</h2>
          <p className="text-sm text-slate-500">Provide accurate address details</p>
        </div>
      </div>

      <div className="space-y-4">
        {googleMapsLoaded ? (
          <AddressSearch onAddressSelect={handleSelectAddress} />
        ) : (
          <div className="relative">
            <label className="label-utility">Search & Auto-fill Address</label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
              <input
                disabled
                className="input-premium pl-12"
                placeholder="Loading map services..."
              />
            </div>
          </div>
        )}

        <div className="h-px bg-slate-100 my-2" />

        <form onSubmit={handleSubmitStep2(handleStep2)} className="space-y-6">
        <AddressSearch onAddressSelect={handleSelectAddress} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="label-utility">Street Address / House No.</label>
            <input {...registerStep2('line1')} className="input-premium" placeholder="Building name, street..." />
            {errors2.line1 && <p className="text-[10px] font-bold text-red-500 mt-1 uppercase tracking-wider">{errors2.line1.message}</p>}
          </div>

          <div>
            <label className="label-utility">Locality / Area</label>
            <input {...registerStep2('locality')} className="input-premium" placeholder="e.g. Sector 12" />
            {errors2.locality && <p className="text-[10px] font-bold text-red-500 mt-1 uppercase tracking-wider">{errors2.locality.message}</p>}
          </div>

          <div>
            <label className="label-utility">City</label>
            <input {...registerStep2('city')} className="input-premium" placeholder="City" />
            {errors2.city && <p className="text-[10px] font-bold text-red-500 mt-1 uppercase tracking-wider">{errors2.city.message}</p>}
          </div>

          <div>
            <label className="label-utility">State</label>
            <input {...registerStep2('state')} className="input-premium" placeholder="State" />
            {errors2.state && <p className="text-[10px] font-bold text-red-500 mt-1 uppercase tracking-wider">{errors2.state.message}</p>}
          </div>

          <div>
            <label className="label-utility">Pincode</label>
            <input {...registerStep2('pincode')} className="input-premium" placeholder="6-digit code" />
            {errors2.pincode && <p className="text-[10px] font-bold text-red-500 mt-1 uppercase tracking-wider">{errors2.pincode.message}</p>}
          </div>
        </div>

        <button type="submit" className="btn-primary w-full md:w-fit md:px-12 flex items-center justify-center gap-2 mt-4 ml-auto">
          Next Step <ChevronRight size={18} />
        </button>
      </form>
      </div>
    </motion.div>
  );

  const renderStep3 = () => (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <button onClick={() => setCurrentStep(2)} className="p-2 -ml-2 text-slate-400 hover:text-slate-600">
          <ChevronLeft size={20} />
        </button>
        <div>
          <h2 className="text-xl font-bold text-slate-900">Exact Location</h2>
          <p className="text-sm text-slate-500">Stand at the store entrance and click below</p>
        </div>
      </div>

      <div className="card-premium border-indigo-600/10 bg-indigo-50/10 text-center py-10 shadow-inner">
        {!location ? (
          <div className="space-y-4">
            <div className="w-16 h-16 bg-white border border-slate-100 rounded-2xl flex items-center justify-center mx-auto shadow-sm text-indigo-600">
              <Crosshair size={32} />
            </div>
            <button onClick={captureLocation} disabled={loading} className="btn-primary w-fit mx-auto">
              {loading ? <Loader2 className="animate-spin" /> : 'Pin Exact Location'}
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-emerald-50 text-emerald-600 px-4 py-2 rounded-xl flex items-center justify-center gap-2 mx-auto w-fit text-[11px] font-bold uppercase tracking-widest border border-emerald-100">
              <CheckCircle size={16} />
              <span>Precise View Active</span>
            </div>
            <div className="text-[10px] text-slate-500 font-mono bg-white p-3 rounded-xl border border-slate-100 shadow-sm w-fit mx-auto">
              {location.lat.toFixed(6)}, {location.lng.toFixed(6)} <br />
              ACCURACY: ±{location.accuracy?.toFixed(1)}m
            </div>
            <button onClick={captureLocation} className="text-indigo-600 font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-1 mx-auto underline">
              Recapture GPS
            </button>
          </div>
        )}
      </div>

      <button onClick={() => setCurrentStep(4)} disabled={!location} className="btn-primary w-full flex items-center justify-center gap-2">
        Next Step <ChevronRight size={18} />
      </button>
    </motion.div>
  );

  const renderStep4 = () => (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <button onClick={() => setCurrentStep(3)} className="p-2 -ml-2 text-slate-400 hover:text-slate-600">
          <ChevronLeft size={20} />
        </button>
        <div>
          <h2 className="text-xl font-bold text-slate-900">Upload Photos</h2>
          <p className="text-sm text-slate-500">Capture the best look of your store</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {[
          { id: 'storefront', label: 'Store Front', mandatory: true },
          { id: 'signage', label: 'Shop Board', mandatory: false },
          { id: 'indoor', label: 'Indoor View', mandatory: false }
        ].map((type) => {
          const existing = images.find(img => img.type === type.id);
          return (
            <div key={type.id} className={cn("relative group", type.mandatory && "col-span-2")}>
              {existing && !existing.isAnalyzing && existing.analysis && !existing.analysis.isHighQuality && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-3 p-3 bg-red-50 border border-red-100 rounded-xl"
                >
                  <div className="flex items-center gap-2 mb-1.5 text-red-600">
                    <AlertCircle size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Rejection Reasons</span>
                  </div>
                  <ul className="space-y-1">
                    {existing.analysis.issues.map((issue: string, i: number) => (
                      <li key={i} className="text-[11px] text-red-500 font-medium leading-tight flex items-start gap-1.5">
                        <span className="mt-1 w-1 h-1 bg-red-400 rounded-full shrink-0" />
                        {issue}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {existing ? (
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                  <img src={existing.preview} alt={type.label} className="w-full h-full object-cover" />

                  <div className="absolute top-2 right-2">
                    {existing.isAnalyzing ? (
                      <div className="bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1 text-[9px] font-bold text-indigo-600 animate-pulse">
                        <Loader2 size={10} className="animate-spin" /> ANALYZING
                      </div>
                    ) : existing.analysis ? (
                      <div className={cn(
                        "px-2 py-1 rounded-lg flex items-center gap-1 text-[9px] font-black tracking-widest border",
                        existing.analysis.isHighQuality ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-red-50 text-red-600 border-red-100"
                      )}>
                        {existing.analysis.isHighQuality ? "APPROVED" : "REJECTED"}
                      </div>
                    ) : null}
                  </div>

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 flex justify-between items-end">
                    <div>
                      <p className="text-[10px] font-black text-white uppercase tracking-widest">{type.label}</p>
                    </div>
                    <button onClick={() => removeImage(images.indexOf(existing))} className="p-1.5 bg-red-600/20 hover:bg-red-600 text-red-400 hover:text-white rounded-lg transition-all">
                      <Trash2 size={12} />
                    </button>
                  </div>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center aspect-video bg-white border-2 border-dashed border-slate-200 rounded-2xl cursor-pointer hover:border-accent hover:bg-accent/5 transition-all">
                  <Upload size={32} className="text-slate-300 mb-2" />
                  <span className="text-xs font-semibold text-slate-600">{type.label}</span>
                  {type.mandatory && <span className="text-[10px] text-red-400 mt-1">Mandatory *</span>}
                  <input type="file" accept="image/jpeg,image/png" className="hidden" onChange={(e) => handleImageUpload(e, type.id)} disabled={uploadingMedia} />
                </label>
              )}
            </div>
          );
        })}
      </div>

      <button
        onClick={() => setCurrentStep(5)}
        disabled={!images.find(i => i.type === 'storefront')?.analysis?.isHighQuality}
        className="btn-primary w-full flex items-center justify-center gap-2 mt-4"
      >
        Preview Submission <ChevronRight size={18} />
      </button>
    </motion.div>
  );

  const renderStep5 = () => (
    <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <button onClick={() => setCurrentStep(4)} className="p-2 -ml-2 text-slate-400 hover:text-slate-600">
          <ChevronLeft size={20} />
        </button>
        <div>
          <h2 className="text-xl font-bold text-slate-900">Review Submission</h2>
          <p className="text-sm text-slate-500">Double check everything before submitting</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="card-premium space-y-4">
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Store Profile</h3>
            <p className="text-lg font-bold text-slate-800">{step1Data?.storeName}</p>
            <p className="text-sm text-slate-600">{step1Data?.category} • {step1Data?.dealerName}</p>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Full Address</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {step2Data?.line1}, {step2Data?.locality}, {step2Data?.city}, {step2Data?.state} - {step2Data?.pincode}
            </p>
          </div>
        </div>

        <button onClick={submitOnboarding} disabled={loading} className="btn-primary w-full py-4 text-lg shadow-lg shadow-accent/20 bg-accent hover:bg-accent/90">
          {loading ? <Loader2 className="animate-spin mx-auto" /> : 'Confirm & Submit'}
        </button>
      </div>
    </motion.div>
  );

  return (
    <Layout>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places&loading=async&callback=Function.prototype`}
        strategy="afterInteractive"
        onLoad={() => setGoogleMapsLoaded(true)}
      />
      <div className="mb-10">
        <div className="flex justify-between items-end mb-3">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Step {currentStep} of 5</span>
          <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md">{Math.round((currentStep / 5) * 100)}% Done</span>
        </div>
        <div className="h-2 w-full bg-slate-200/50 rounded-full overflow-hidden border border-slate-200/20">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(currentStep / 5) * 100}%` }}
            className="h-full bg-indigo-600"
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}
        {currentStep === 4 && renderStep4()}
        {currentStep === 5 && renderStep5()}
      </AnimatePresence>
    </Layout>
  );
}
