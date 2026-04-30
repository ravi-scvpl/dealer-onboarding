'use client';

import React, { useState } from 'react';
import { adminLoginAction } from './actions';
import { Layout } from '@/components/Layout';
import { Lock, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';

export default function AdminLogin() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        
        const formData = new FormData(e.currentTarget);
        try {
            const result = await adminLoginAction(formData);
            if (result.success) {
                toast.success('Authenticated');
                window.location.reload();
            } else {
                toast.error(result.error || 'Invalid credentials');
            }
        } catch (error) {
            toast.error('Authentication failed');
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

                    <form onSubmit={handleSubmit} className="card-premium space-y-4 p-8">
                        <div>
                            <label className="label-utility">Username</label>
                            <input 
                                name="username"
                                required
                                className="input-premium" 
                                placeholder="Admin ID" 
                            />
                        </div>
                        <div>
                            <label className="label-utility">Password</label>
                            <input 
                                type="password"
                                name="password"
                                required
                                className="input-premium" 
                                placeholder="••••••••" 
                            />
                        </div>
                        <button 
                            type="submit" 
                            disabled={loading}
                            className="btn-primary w-full py-3 flex items-center justify-center gap-2"
                        >
                            {loading ? <Loader2 className="animate-spin" /> : 'Enter Admin Panel'}
                        </button>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
