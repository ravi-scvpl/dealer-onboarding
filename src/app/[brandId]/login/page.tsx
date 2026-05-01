'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ArrowRight, AlertCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import { Layout } from '@/components/Layout';
import { auth } from '@/lib/firebase';
import { RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult } from 'firebase/auth';
import { setCookie } from 'nookies';
import { checkInvitationAction, getBrandDetailsAction } from './actions';

interface Props {
  params: Promise<{ brandId: string }>;
}

export default function LoginPage({ params }: Props) {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [loading, setLoading] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const [brandDetails, setBrandDetails] = useState<{name: string, logoUrl?: string | null} | null>(null);
  const router = useRouter();

  useEffect(() => {
    // 1. Handle Brand context from Params
    const initBrand = async () => {
      const { brandId } = await params;
      if (brandId) {
        setCookie(null, 'selected_brand_id', brandId, {
          maxAge: 60 * 60 * 24, // 1 day
          path: '/',
        });
        
        // Fetch brand details
        const res = await getBrandDetailsAction(brandId);
        if (res.success && res.brand) {
          setBrandDetails({ name: res.brand.name, logoUrl: res.brand.logoUrl });
        }
      }
    };
    initBrand();

    // 2. Disable app verification for testing on localhost
    if (process.env.NODE_ENV === 'development') {
      auth.settings.appVerificationDisabledForTesting = true;
    }

    // 3. Initialize RecaptchaVerifier
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'invisible',
        'callback': (response: any) => {
          // reCAPTCHA solved
        }
      });
    }
  }, []);

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length < 10) return toast.error('Enter a valid mobile number');

    setLoading(true);
    const phoneNumber = `+91${phone}`;
    
    try {
      // 1. Verify invitation in database for this specific brand
      const { brandId } = await params;
      const inviteCheck = await checkInvitationAction(phoneNumber, brandId);
      if (!inviteCheck.success) {
        toast.error(inviteCheck.error || 'Invitation verification failed');
        setLoading(false);
        return;
      }

      // 2. Proceed with Firebase OTP if invited
      const appVerifier = window.recaptchaVerifier;
      const result = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      setConfirmationResult(result);
      setStep('otp');
      toast.success('OTP sent successfully');
    } catch (error: any) {
      console.error(error);
      toast.error(error.message || 'Failed to send OTP');
      // Reset recaptcha on error
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.render().then((widgetId: any) => {
          if (window.grecaptcha) {
            window.grecaptcha.reset(widgetId);
          }
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length < 6) return toast.error('Enter 6-digit OTP');
    if (!confirmationResult) return toast.error('Please request OTP first');

    setLoading(true);
    try {
      const result = await confirmationResult.confirm(otp);
      const user = result.user;
      
      // Store UID in a cookie so server components can read it
      setCookie(null, 'userId', user.uid, {
        maxAge: 30 * 24 * 60 * 60, // 30 days
        path: '/',
      });
      
      toast.success('Login successful');
      const { brandId } = await params;
      router.push(`/${brandId}/onboarding`);
    } catch (error: any) {
      console.error(error);
      toast.error(error.message || 'Invalid OTP');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 flex flex-col items-center"
        >
          {brandDetails?.logoUrl && (
            <img 
              src={brandDetails.logoUrl} 
              alt={brandDetails.name} 
              className="h-16 min-w-[64px] bg-slate-50 rounded-lg mb-4 object-contain"
              onError={(e) => console.error("Failed to load logo from URL:", brandDetails.logoUrl)}
            />
          )}
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Authorized Partner Login</h1>
          <p className="text-slate-500">Securely onboard your store to {brandDetails?.name || 'our platform'}</p>
        </motion.div>

        <div className="card-premium">
          <AnimatePresence mode="wait">
            {step === 'phone' ? (
              <motion.form 
                key="phone-step"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onSubmit={handleSendOtp}
                className="space-y-6"
              >
                <div>
                  <label className="label-utility">Mobile Number</label>
                  <div className="flex border-2 border-slate-100 rounded-xl px-4 py-3 bg-slate-50 items-center gap-3 focus-within:border-indigo-600/20 focus-within:bg-white focus-within:ring-4 focus-within:ring-indigo-600/5 transition-all">
                    <span className="text-sm font-bold text-slate-400 border-r pr-3 border-slate-200">+91</span>
                    <input 
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                      placeholder="98765 43210"
                      className="bg-transparent text-sm font-bold focus:outline-none flex-1 placeholder:text-slate-300"
                      disabled={loading}
                      autoFocus
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="btn-primary w-full py-4 text-sm flex items-center justify-center gap-2"
                  disabled={loading || phone.length < 10}
                >
                  {loading ? 'Sending...' : 'Request OTP'}
                  {!loading && <ArrowRight size={18} />}
                </button>
              </motion.form>
            ) : (
              <motion.form 
                key="otp-step"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleVerifyOtp}
                className="space-y-6"
              >
                <div>
                  <button 
                    type="button"
                    onClick={() => setStep('phone')}
                    className="text-[10px] text-indigo-600 font-bold uppercase tracking-widest mb-4 hover:underline"
                  >
                    ← Back to Phone
                  </button>
                  <label className="label-utility">Verification Code</label>
                  <input 
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    placeholder="000000"
                    className="input-premium text-center text-3xl tracking-[0.4em] font-black h-20"
                    disabled={loading}
                    autoFocus
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn-primary w-full py-4 flex items-center justify-center gap-2"
                  disabled={loading || otp.length < 6}
                >
                  {loading ? 'Verifying...' : 'Start Onboarding'}
                  {!loading && <ArrowRight size={18} />}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
        
        {/* Invisible Recaptcha Container */}
        <div id="recaptcha-container"></div>
      </div>
    </Layout>
  );
}

// Add TypeScript definition for window.recaptchaVerifier
declare global {
  interface Window {
    recaptchaVerifier: any;
    grecaptcha: any;
  }
}
