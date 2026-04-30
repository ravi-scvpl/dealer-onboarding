'use client';

import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { motion } from 'framer-motion';
import { Plus, Check, X, Users, FileText, Send } from 'lucide-react';
import toast from 'react-hot-toast';
import { cn } from '@/lib/utils';
import { addInviteAction, updateSubmissionStatusAction, adminLogoutAction } from './actions';
import { LogOut } from 'lucide-react';

interface Props {
  invites: any[];
  submissions: any[];
}

export default function AdminPanel({ invites, submissions }: Props) {
    const [newInvite, setNewInvite] = useState({ mobile: '', name: '', code: '' });
    const [loading, setLoading] = useState(false);
    const [tab, setTab] = useState<'invites' | 'submissions'>('invites');

    const handleAddInvite = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newInvite.mobile || !newInvite.name) return toast.error('Fill required fields');

        setLoading(true);
        try {
            const formatted = newInvite.mobile.startsWith('+') ? newInvite.mobile : `+91${newInvite.mobile}`;
            const result = await addInviteAction({
                mobileNumber: formatted,
                dealerName: newInvite.name,
                dealerCode: newInvite.code,
            });
            if (result.success) {
                toast.success('Invite created');
                setNewInvite({ mobile: '', name: '', code: '' });
            } else {
                toast.error('Failed to add invite: ' + result.error);
            }
        } catch (error) {
            toast.error('Failed to add invite');
        } finally {
            setLoading(false);
        }
    };

    const handleUpdateStatus = async (subId: string, dealerId: string, status: string) => {
        setLoading(true);
        try {
            const result = await updateSubmissionStatusAction(subId, dealerId, status);
            if (result.success) {
                toast.success('Status updated to ' + status);
            } else {
                toast.error('Update failed: ' + result.error);
            }
        } catch (error) {
            toast.error('Update failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout>
            <div className="space-y-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900">Admin View</h1>
                        <p className="text-xs text-slate-500 font-medium">Manage invitations and reviews</p>
                    </div>
                    <button 
                        onClick={async () => {
                            await adminLogoutAction();
                            window.location.reload();
                        }}
                        className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                        title="Logout"
                    >
                        <LogOut size={20} />
                    </button>
                </div>

                <div className="flex bg-slate-200 p-1 rounded-xl w-fit">
                    <button 
                        onClick={() => setTab('invites')}
                        className={cn("px-4 py-2 rounded-lg text-sm font-bold transition-all", tab === 'invites' ? "bg-white text-slate-900 shadow-sm" : "text-slate-500")}
                    >
                        <div className="flex items-center gap-2"><Users size={16} /> Invites</div>
                    </button>
                    <button 
                        onClick={() => setTab('submissions')}
                        className={cn("px-4 py-2 rounded-lg text-sm font-bold transition-all", tab === 'submissions' ? "bg-white text-slate-900 shadow-sm" : "text-slate-500")}
                    >
                        <div className="flex items-center gap-2"><FileText size={16} /> Submissions</div>
                    </button>
                </div>

                {tab === 'invites' ? (
                    <div className="space-y-6">
                        <form onSubmit={handleAddInvite} className="card-premium space-y-4">
                            <h3 className="font-bold text-sm">Add New Invitation</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <input 
                                    className="input-premium py-2 text-sm" 
                                    placeholder="Mobile (9876543210)" 
                                    value={newInvite.mobile}
                                    onChange={e => setNewInvite({...newInvite, mobile: e.target.value})}
                                />
                                <input 
                                    className="input-premium py-2 text-sm" 
                                    placeholder="Dealer Name" 
                                    value={newInvite.name}
                                    onChange={e => setNewInvite({...newInvite, name: e.target.value})}
                                />
                            </div>
                            <button className="btn-primary w-full py-2 text-sm flex items-center justify-center gap-2" disabled={loading}>
                                <Plus size={16} /> Invite Dealer
                            </button>
                        </form>

                        <div className="space-y-2">
                            {invites.map(invite => (
                                <div key={invite.id} className="p-4 bg-white rounded-xl border border-slate-100 flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-bold text-slate-800">{invite.dealerName}</p>
                                        <p className="text-[10px] text-slate-400 font-mono">{invite.mobileNumber} • {invite.dealerCode}</p>
                                    </div>
                                    <span className={cn("text-[10px] font-bold px-2 py-1 rounded-full", invite.status === 'invited' ? "bg-blue-50 text-blue-600" : "bg-green-50 text-green-600")}>
                                        {invite.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {submissions.length === 0 && <p className="text-center text-slate-400 py-10 text-sm">No submissions yet.</p>}
                        {submissions.map(sub => (
                            <div key={sub.id} className="card-premium space-y-4">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-bold text-slate-800">{sub.storeName}</h3>
                                        <p className="text-[10px] text-slate-500">{sub.address.locality}, {sub.address.city}</p>
                                    </div>
                                    <span className="text-[10px] font-bold bg-amber-50 text-amber-600 px-2 py-1 rounded-full">
                                        {sub.status}
                                    </span>
                                </div>
                                <div className="grid grid-cols-3 gap-2">
                                    {(sub.media as any[]).map((img, i) => (
                                        <img key={i} src={img.url} alt="" className="w-full aspect-square object-cover rounded-lg border border-slate-100" />
                                    ))}
                                </div>
                                <div className="flex gap-2 pt-2">
                                    <button 
                                        onClick={() => handleUpdateStatus(sub.id!, sub.dealerId, 'approved')}
                                        className="flex-1 bg-green-600 text-white py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1"
                                    >
                                        <Check size={14} /> Approve
                                    </button>
                                    <button 
                                        onClick={() => handleUpdateStatus(sub.id!, sub.dealerId, 'gmb_live')}
                                        className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1"
                                    >
                                        <Send size={14} /> Go Live
                                    </button>
                                    <button 
                                        onClick={() => handleUpdateStatus(sub.id!, sub.dealerId, 'rejected_or_needs_changes')}
                                        className="bg-red-50 text-red-600 px-3 py-2 rounded-lg text-xs font-bold"
                                    >
                                        <X size={14} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </Layout>
    );
}
