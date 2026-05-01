'use client';

import React, { useState, useEffect } from 'react';
import { adminOtpLoginAction } from './actions';
import { Layout } from '@/components/Layout';
import { Lock, ArrowRight, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { auth } from '@/lib/firebase';
import { RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult } from 'firebase/auth';
import { motion, AnimatePresence } from 'framer-motion';

export default function AdminLogin() {
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const [step, setStep] = useState<'phone' | 'otp'>('phone');
    const [loading, setLoading] = useState(false);
    const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);

    useEffect(() => {
        if (process.env.NODE_ENV === 'development') {
            auth.settings.appVerificationDisabledForTesting = true;
        }

        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
                'size': 'invisible',
            });
        }
    }, []);

    const handleSendOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        if (phone.length < 10) return toast.error('Enter a valid mobile number');

        setLoading(true);
        const phoneNumber = `+91${phone}`;

        try {
            const appVerifier = window.recaptchaVerifier;
            const result = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
            setConfirmationResult(result);
            setStep('otp');
            toast.success('OTP sent to admin');
        } catch (error: any) {
            console.error(error);
            toast.error(error.message || 'Failed to send OTP');
            if (window.recaptchaVerifier) {
                window.recaptchaVerifier.render().then((widgetId: any) => {
                    if (window.grecaptcha) window.grecaptcha.reset(widgetId);
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
            await confirmationResult.confirm(otp);
            const phoneNumber = `+91${phone}`;

            const result = await adminOtpLoginAction(phoneNumber);
            if (result.success) {
                toast.success('Admin authenticated');
                window.location.reload();
            } else {
                toast.error(result.error || 'Authentication failed');
            }
        } catch (error: any) {
            console.error(error);
            toast.error(error.message || 'Invalid OTP');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout>
            <div className="min-h-[60vh] flex flex-col items-center justify-center">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center">
                        <div className="mx-auto w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 mb-4">
                            <Lock size={32} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">Admin Login</h2>
                        <p className="text-sm text-slate-500">Restricted Access Only</p>
                    </div>

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
                                        <label className="label-utility">Admin Mobile Number</label>
                                        <div className="flex border-2 border-slate-100 rounded-xl px-4 py-3 bg-slate-50 items-center gap-3 focus-within:border-indigo-600/20 focus-within:bg-white focus-within:ring-4 focus-within:ring-indigo-600/5 transition-all">
                                            <span className="text-sm font-bold text-slate-400 border-r pr-3 border-slate-200">+91</span>
                                            <input
                                                type="tel"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                                                placeholder="99999 99999"
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
                                        {loading ? <Loader2 className="animate-spin" size={18} /> : 'Request Admin OTP'}
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
                                        <label className="label-utility">Admin Verification Code</label>
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
                                        {loading ? <Loader2 className="animate-spin" size={18} /> : 'Verify & Enter Panel'}
                                        {!loading && <ArrowRight size={18} />}
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                    <div id="recaptcha-container"></div>
                </div>
            </div>
        </Layout>
    );
}

declare global {
    interface Window {
        recaptchaVerifier: any;
        grecaptcha: any;
    }
}
