'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Layout } from '@/components/Layout';
import { 
  MapPin, Store, ClipboardCheck, Smartphone, 
  ShieldCheck, Users, FileText, ChevronRight, 
  Map, Navigation, Search
} from 'lucide-react';
import { cn } from '@/lib/utils';

const slides = [
  {
    id: 1,
    headline: "Put Your Store on the Digital Map",
    subtext: "Share your correct store details so customers near you can find your business on Google Maps and reach your doorstep easily.",
    visual: (
      <div className="relative w-48 h-48 mx-auto flex items-center justify-center bg-blue-50 rounded-full shadow-inner border border-blue-100">
        <Store size={64} className="text-indigo-600" />
        <motion.div 
          animate={{ y: [-5, 5, -5] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute -top-4 -right-2 bg-white p-3 rounded-full shadow-lg border border-slate-100"
        >
          <MapPin size={32} className="text-red-500" />
        </motion.div>
      </div>
    ),
    cta: "Start Digital KYC"
  },
  {
    id: 2,
    headline: "Correct Details Build Customer Trust",
    subtext: "Your shop name, address, phone number, timings, and photos help customers know that your business is genuine, active, and easy to contact.",
    visual: (
      <div className="relative w-48 h-48 mx-auto flex items-center justify-center bg-emerald-50 rounded-full shadow-inner border border-emerald-100">
        <ClipboardCheck size={72} className="text-emerald-600" />
      </div>
    ),
    cta: "Continue"
  },
  {
    id: 3,
    headline: "Be Found When Customers Search Near You",
    subtext: "When people search for products like cement, paint, or building materials nearby, your verified business profile can help them choose your store.",
    visual: (
      <div className="relative w-48 h-48 mx-auto flex items-center justify-center bg-sky-50 rounded-full shadow-inner border border-sky-100">
        <Smartphone size={72} className="text-sky-600" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute bottom-4 right-0 bg-white px-3 py-2 rounded-xl shadow-md border border-slate-100 flex items-center gap-2"
        >
          <Search size={14} className="text-slate-400" />
          <span className="text-[10px] font-bold text-slate-700">Cement near me</span>
        </motion.div>
      </div>
    ),
    cta: "Next"
  },
  {
    id: 4,
    headline: "Your Digital KYC Powers Your GMB Listing",
    subtext: "Accurate information helps Dottt create or update your Google Business Profile properly and reduces chances of rejection, wrong location, duplicate listing, or customer confusion.",
    visual: (
      <div className="relative w-48 h-48 mx-auto flex items-center justify-center bg-indigo-50 rounded-full shadow-inner border border-indigo-100">
        <ShieldCheck size={72} className="text-indigo-600" />
        <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
          <Map size={24} className="text-emerald-500" />
        </div>
      </div>
    ),
    cta: "Continue"
  },
  {
    id: 5,
    headline: "Bring More Customers to Your Doorstep",
    subtext: "A complete and accurate profile can improve calls, direction requests, store visits, and trust among new buyers.",
    visual: (
      <div className="relative w-48 h-48 mx-auto flex items-center justify-center bg-amber-50 rounded-full shadow-inner border border-amber-100">
        <Users size={72} className="text-amber-600" />
        <motion.div 
          animate={{ x: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute -bottom-2 -left-2 bg-white p-3 rounded-full shadow-lg border border-slate-100"
        >
          <Navigation size={24} className="text-blue-500" />
        </motion.div>
      </div>
    ),
    cta: "Complete Store Details"
  },
  {
    id: 6,
    headline: "Keep These Details Ready",
    subtext: "Store name, owner name, mobile number, full address, pincode, business category, store photos, GST or business proof if required, and opening hours.",
    visual: (
      <div className="relative w-48 h-48 mx-auto flex items-center justify-center bg-slate-100 rounded-full shadow-inner border border-slate-200">
        <FileText size={72} className="text-slate-600" />
      </div>
    ),
    cta: "Begin Now"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    } else {
      router.push('/dottt/login'); // Or any default brand route
    }
  };

  const handleSkip = () => {
    router.push('/dottt/login');
  };

  return (
    <Layout>
      <div className="flex flex-col h-[calc(100vh-80px)] max-h-[800px] justify-between relative overflow-hidden bg-white/50 rounded-3xl border border-slate-100/50 shadow-sm">
        
        {/* Skip Button (Hidden on first screen) */}
        <div className="h-14 flex items-center justify-end px-6">
          <AnimatePresence>
            {currentSlide > 0 && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleSkip}
                className="text-sm font-bold text-slate-400 hover:text-slate-600 uppercase tracking-wider"
              >
                Skip
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Slider Content */}
        <div className="flex-1 flex flex-col justify-center px-6 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="text-center space-y-8"
            >
              {slides[currentSlide].visual}
              
              <div className="space-y-4 px-2">
                <h1 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                  {slides[currentSlide].headline}
                </h1>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-sm mx-auto">
                  {slides[currentSlide].subtext}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer: Progress & CTA */}
        <div className="p-6 bg-white/80 backdrop-blur-md border-t border-slate-100 space-y-6">
          {/* Progress Dots */}
          <div className="flex justify-center gap-2">
            {slides.map((_, idx) => (
              <div 
                key={idx}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  currentSlide === idx 
                    ? "w-6 bg-indigo-600" 
                    : "w-1.5 bg-slate-200"
                )}
              />
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20 transition-all active:scale-[0.98]"
          >
            {slides[currentSlide].cta} <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </Layout>
  );
}
