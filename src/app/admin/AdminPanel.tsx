'use client';

import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { motion } from 'framer-motion';
import { Plus, Check, X, Users, FileText, Send, Building2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { cn } from '@/lib/utils';
import { addInviteAction, bulkInviteAction, updateSubmissionStatusAction, adminLogoutAction, addBrandAction, updateBrandAction, deleteBrandAction } from './actions';
import { LogOut, FileSpreadsheet, Download, Upload, Loader2, Tag, Edit2, Trash, Globe, Phone, Mail, MapPin, Briefcase, User, ReceiptText, Camera } from 'lucide-react';
import * as XLSX from 'xlsx';

import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '@/lib/firebase';

interface Props {
  invites: any[];
  submissions: any[];
  brands: any[];
}

export default function AdminPanel({ invites, submissions, brands }: Props) {
    const [newInvite, setNewInvite] = useState({ mobile: '', name: '', code: '', brandId: '' });
    const [bulkBrandId, setBulkBrandId] = useState('');
    const [loading, setLoading] = useState(false);
    const [bulkLoading, setBulkLoading] = useState(false);
    const [tab, setTab] = useState<'invites' | 'submissions' | 'brands'>('invites');

    // Brand Management State
    const [showBrandForm, setShowBrandForm] = useState(false);
    const [editingBrand, setEditingBrand] = useState<any>(null);
    const [brandData, setBrandData] = useState({
        id: '', name: '', logo: '', address: '', contactNumber: '', email: '', 
        websiteUrl: '', category: '', contactPersonName: '', 
        billingAddress: '', taxId: ''
    });

    const handleBulkUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (!bulkBrandId) {
            toast.error('Please select a Brand for bulk upload');
            e.target.value = '';
            return;
        }

        setBulkLoading(true);
        const reader = new FileReader();
        reader.onload = async (evt) => {
            try {
                const dataArray = evt.target?.result;
                const wb = XLSX.read(dataArray, { type: 'array' });
                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];
                const rawData = XLSX.utils.sheet_to_json(ws) as any[];

                // Map data to expected format with case-insensitive and whitespace-robust header matching
                const dealers = rawData.map(row => {
                    // Normalize keys (trim and lowercase)
                    const normalizedRow: any = {};
                    Object.keys(row).forEach(key => {
                        normalizedRow[key.trim().toLowerCase()] = row[key];
                    });

                    return {
                        mobileNumber: String(normalizedRow['mobilenumber'] || normalizedRow['mobile'] || normalizedRow['phone'] || normalizedRow['contact'] || '').trim(),
                        dealerName: String(normalizedRow['dealername'] || normalizedRow['name'] || normalizedRow['dealer'] || '').trim(),
                        dealerCode: String(normalizedRow['dealercode'] || normalizedRow['code'] || '').trim(),
                    };
                }).filter(d => d.mobileNumber && d.dealerName);

                if (dealers.length === 0) {
                    toast.error('No valid dealer data found. Please check column headers (mobileNumber, dealerName).');
                    return;
                }

                const result = await bulkInviteAction(dealers, bulkBrandId);
                if (result.success) {
                    toast.success(`Successfully uploaded ${result.count} invitations`);
                } else {
                    toast.error('Bulk upload failed: ' + result.error);
                }
            } catch (error) {
                console.error("Bulk Upload Error:", error);
                toast.error('Error parsing file');
            } finally {
                setBulkLoading(false);
                e.target.value = '';
            }
        };
        reader.readAsArrayBuffer(file);
    };

    const handleAddInvite = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newInvite.mobile || !newInvite.name || !newInvite.brandId) {
            return toast.error('Fill required fields (including Brand)');
        }

        setLoading(true);
        try {
            const formatted = newInvite.mobile.startsWith('+') ? newInvite.mobile : `+91${newInvite.mobile}`;
            const result = await addInviteAction({
                mobileNumber: formatted,
                dealerName: newInvite.name,
                dealerCode: newInvite.code,
                brandId: newInvite.brandId,
            });
            if (result.success) {
                toast.success('Invite created');
                setNewInvite({ mobile: '', name: '', code: '', brandId: '' });
            } else {
                toast.error('Failed to add invite: ' + result.error);
            }
        } catch (error) {
            toast.error('Failed to add invite');
        } finally {
            setLoading(false);
        }
    };

    const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setLoading(true);
        try {
            const fileName = `brands/${Date.now()}_${file.name}`;
            const storageRef = ref(storage, fileName);
            await uploadBytes(storageRef, file);
            const url = await getDownloadURL(storageRef);
            setBrandData({ ...brandData, logo: url });
            toast.success('Logo uploaded');
        } catch (error) {
            toast.error('Logo upload failed');
        } finally {
            setLoading(false);
        }
    };

    const handleBrandSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!brandData.id) return toast.error('ID / Slug is required');
        if (!brandData.name) return toast.error('Brand name is required');
        if (!brandData.logo) return toast.error('Logo is required');

        setLoading(true);
        try {
            const result = editingBrand 
                ? await updateBrandAction(editingBrand.id, brandData)
                : await addBrandAction(brandData);
            
            if (result.success) {
                toast.success(editingBrand ? 'Brand updated' : 'Brand added');
                setShowBrandForm(false);
                setEditingBrand(null);
                setBrandData({ id: '', name: '', logo: '', address: '', contactNumber: '', email: '', websiteUrl: '', category: '', contactPersonName: '', billingAddress: '', taxId: '' });
            } else {
                toast.error('Failed: ' + result.error);
            }
        } catch (error) {
            toast.error('Operation failed');
        } finally {
            setLoading(false);
        }
    };

    const handleEditBrand = (brand: any) => {
        setEditingBrand(brand);
        setBrandData({
            id: brand.id || '',
            name: brand.name || '',
            logo: brand.logo || '',
            address: brand.address || '',
            contactNumber: brand.contactNumber || '',
            email: brand.email || '',
            websiteUrl: brand.websiteUrl || '',
            category: brand.category || '',
            contactPersonName: brand.contactPersonName || '',
            billingAddress: brand.billingAddress || '',
            taxId: brand.taxId || ''
        });
        setShowBrandForm(true);
        setTab('brands');
    };

    const handleDeleteBrand = async (id: string) => {
        if (!confirm('Are you sure? This will affect all associated dealers and invites.')) return;
        setLoading(true);
        try {
            const result = await deleteBrandAction(id);
            if (result.success) toast.success('Brand deleted');
            else toast.error('Failed: ' + result.error);
        } catch (error) {
            toast.error('Delete failed');
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
                    <button 
                        onClick={() => setTab('brands')}
                        className={cn("px-4 py-2 rounded-lg text-sm font-bold transition-all", tab === 'brands' ? "bg-white text-slate-900 shadow-sm" : "text-slate-500")}
                    >
                        <div className="flex items-center gap-2"><Tag size={16} /> Brands</div>
                    </button>
                </div>

                {tab === 'invites' ? (
                    <div className="space-y-6">
                        <form onSubmit={handleAddInvite} className="card-premium space-y-4">
                            <h3 className="font-bold text-sm">Add New Invitation</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                <select
                                    className="input-premium py-2 text-sm appearance-none"
                                    value={newInvite.brandId}
                                    onChange={e => setNewInvite({...newInvite, brandId: e.target.value})}
                                >
                                    <option value="">Select Brand</option>
                                    {brands.map(brand => (
                                        <option key={brand.id} value={brand.id}>{brand.name}</option>
                                    ))}
                                </select>
                                <input 
                                    className="input-premium py-2 text-sm" 
                                    placeholder="Dealer Code (Optional)" 
                                    value={newInvite.code}
                                    onChange={e => setNewInvite({...newInvite, code: e.target.value})}
                                />
                            </div>
                            <button className="btn-primary w-full py-2 text-sm flex items-center justify-center gap-2" disabled={loading}>
                                <Plus size={16} /> Invite Dealer
                            </button>
                        </form>

                        <div className="card-premium space-y-4 border-dashed border-2 border-slate-200 bg-slate-50/30">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <FileSpreadsheet className="text-emerald-600" size={18} />
                                    <h3 className="font-bold text-sm text-slate-800">Bulk Invitation</h3>
                                </div>
                                <div className="flex items-center gap-3">
                                    {bulkLoading && <Loader2 className="animate-spin text-indigo-600" size={16} />}
                                    <button 
                                        onClick={() => {
                                            const ws = XLSX.utils.json_to_sheet([{ mobileNumber: '9876543210', dealerName: 'Sample Dealer', dealerCode: 'D123' }]);
                                            const wb = XLSX.utils.book_new();
                                            XLSX.utils.book_append_sheet(wb, ws, "Template");
                                            XLSX.writeFile(wb, "dealer_invite_template.xlsx");
                                        }}
                                        className="flex items-center gap-2 text-[10px] font-bold text-slate-500 hover:text-indigo-600 transition-colors bg-white px-3 py-1.5 rounded-lg border border-slate-200"
                                    >
                                        <Download size={14} /> Download Sample
                                    </button>
                                </div>
                            </div>
                            
                            <p className="text-[10px] text-slate-500 leading-relaxed">
                                Upload an Excel (.xlsx) or CSV file with columns: <b>mobileNumber</b> and <b>dealerName</b>. 
                            </p>

                            <div className="space-y-3">
                                <select
                                    className="input-premium py-2 text-xs appearance-none bg-white"
                                    value={bulkBrandId}
                                    onChange={e => setBulkBrandId(e.target.value)}
                                >
                                    <option value="">Select Brand for Bulk Upload</option>
                                    {brands.map(brand => (
                                        <option key={brand.id} value={brand.id}>{brand.name}</option>
                                    ))}
                                </select>

                                <label className={cn(
                                    "w-full btn-primary bg-emerald-600 hover:bg-emerald-700 py-2 text-sm cursor-pointer flex items-center justify-center gap-2",
                                    (bulkLoading || !bulkBrandId) && "opacity-50 cursor-not-allowed"
                                )}>
                                    <Upload size={16} /> 
                                    {bulkLoading ? 'Processing...' : 'Upload File'}
                                    <input 
                                        type="file" 
                                        className="hidden" 
                                        accept=".xlsx, .xls, .csv" 
                                        onChange={handleBulkUpload}
                                        disabled={bulkLoading || !bulkBrandId}
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="space-y-2">
                            {invites.map(invite => (
                                <div key={invite.id} className="p-4 bg-white rounded-xl border border-slate-100 flex items-center justify-between">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <p className="text-sm font-bold text-slate-800">{invite.dealerName}</p>
                                            <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-md flex items-center gap-1">
                                                <Building2 size={10} /> {invite.brand.name}
                                            </span>
                                        </div>
                                        <p className="text-[10px] text-slate-400 font-mono">{invite.mobileNumber} • {invite.dealerCode}</p>
                                    </div>
                                    <span className={cn("text-[10px] font-bold px-2 py-1 rounded-full", invite.status === 'invited' ? "bg-blue-50 text-blue-600" : "bg-green-50 text-green-600")}>
                                        {invite.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : tab === 'submissions' ? (
                    <div className="space-y-4">
                        {submissions.length === 0 && <p className="text-center text-slate-400 py-10 text-sm">No submissions yet.</p>}
                        {submissions.map(sub => (
                            <div key={sub.id} className="card-premium">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <p className="text-sm font-bold text-slate-900">{sub.storeName}</p>
                                        <p className="text-[10px] text-slate-400">{sub.dealer.dealerName} • {sub.dealer.brand.name}</p>
                                    </div>
                                    <span className={cn(
                                        "text-[10px] font-bold px-2 py-1 rounded-full",
                                        sub.status === 'pending' ? "bg-amber-50 text-amber-600" :
                                        sub.status === 'approved' ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
                                    )}>
                                        {sub.status.toUpperCase()}
                                    </span>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Address</p>
                                        <p className="text-xs text-slate-600">{sub.line1}, {sub.city}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Category</p>
                                        <p className="text-xs text-slate-600">{sub.category}</p>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <button 
                                        onClick={() => handleUpdateStatus(sub.id!, sub.dealerId, 'approved')}
                                        className="flex-1 py-2 bg-emerald-50 text-emerald-600 rounded-lg text-[10px] font-bold hover:bg-emerald-100 transition-colors flex items-center justify-center gap-1"
                                    >
                                        <Check size={14} /> Approve
                                    </button>
                                    <button 
                                        onClick={() => handleUpdateStatus(sub.id, sub.dealerId, 'rejected')}
                                        className="flex-1 py-2 bg-rose-50 text-rose-600 rounded-lg text-[10px] font-bold hover:bg-rose-100 transition-colors flex items-center justify-center gap-1"
                                    >
                                        <X size={14} /> Reject
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-bold text-slate-900">Brand Management</h2>
                            <button 
                                onClick={() => {
                                    setEditingBrand(null);
                                    setBrandData({ id: '', name: '', logo: '', address: '', contactNumber: '', email: '', websiteUrl: '', category: '', contactPersonName: '', billingAddress: '', taxId: '' });
                                    setShowBrandForm(!showBrandForm);
                                }}
                                className="btn-primary py-2 px-4 text-xs flex items-center gap-2"
                            >
                                {showBrandForm ? <X size={14} /> : <Plus size={14} />}
                                {showBrandForm ? 'Cancel' : 'Add New Brand'}
                            </button>
                        </div>

                        {showBrandForm && (
                            <form onSubmit={handleBrandSubmit} className="card-premium space-y-4">
                                <h3 className="font-bold text-sm">{editingBrand ? 'Edit Brand' : 'Create New Brand'}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">ID / Slug (e.g. jkcement) *</label>
                                        <div className="relative">
                                            <Tag className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                                            <input 
                                                className="input-premium py-2 pl-9 text-sm disabled:opacity-50" 
                                                placeholder="jkcement" 
                                                value={brandData.id}
                                                onChange={e => setBrandData({...brandData, id: e.target.value.toLowerCase().replace(/[^a-z0-9]/g, '')})}
                                                disabled={!!editingBrand}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Brand Name *</label>
                                        <div className="relative">
                                            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                                            <input 
                                                className="input-premium py-2 pl-9 text-sm" 
                                                placeholder="e.g. JK Cement" 
                                                value={brandData.name}
                                                onChange={e => setBrandData({...brandData, name: e.target.value})}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Brand Logo *</label>
                                        <div className="flex gap-3">
                                            <div className="relative flex-1">
                                                <Camera className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                                                <input 
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleLogoUpload}
                                                    className="hidden"
                                                    id="brand-logo-upload"
                                                />
                                                <label 
                                                    htmlFor="brand-logo-upload"
                                                    className="input-premium py-2 pl-9 text-sm flex items-center justify-between cursor-pointer hover:bg-slate-50"
                                                >
                                                    <span className="truncate">{brandData.logo ? 'Logo selected' : 'Upload Logo'}</span>
                                                    <Upload size={14} className="text-slate-400" />
                                                </label>
                                            </div>
                                            {brandData.logo && (
                                                <img src={brandData.logo} alt="Logo Preview" className="w-10 h-10 rounded-lg object-contain border border-slate-100 bg-white" />
                                            )}
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Contact Number</label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                                            <input 
                                                className="input-premium py-2 pl-9 text-sm" 
                                                placeholder="+91..." 
                                                value={brandData.contactNumber}
                                                onChange={e => setBrandData({...brandData, contactNumber: e.target.value})}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                                            <input 
                                                className="input-premium py-2 pl-9 text-sm" 
                                                placeholder="contact@brand.com" 
                                                value={brandData.email}
                                                onChange={e => setBrandData({...brandData, email: e.target.value})}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Website URL</label>
                                        <div className="relative">
                                            <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                                            <input 
                                                className="input-premium py-2 pl-9 text-sm" 
                                                placeholder="www.brand.com" 
                                                value={brandData.websiteUrl}
                                                onChange={e => setBrandData({...brandData, websiteUrl: e.target.value})}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Category</label>
                                        <div className="relative">
                                            <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                                            <input 
                                                className="input-premium py-2 pl-9 text-sm" 
                                                placeholder="e.g. Construction" 
                                                value={brandData.category}
                                                onChange={e => setBrandData({...brandData, category: e.target.value})}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Contact Person</label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                                            <input 
                                                className="input-premium py-2 pl-9 text-sm" 
                                                placeholder="Name" 
                                                value={brandData.contactPersonName}
                                                onChange={e => setBrandData({...brandData, contactPersonName: e.target.value})}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Tax ID (GSTIN/VAT)</label>
                                        <div className="relative">
                                            <ReceiptText className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                                            <input 
                                                className="input-premium py-2 pl-9 text-sm" 
                                                placeholder="Tax ID" 
                                                value={brandData.taxId}
                                                onChange={e => setBrandData({...brandData, taxId: e.target.value})}
                                            />
                                        </div>
                                    </div>
                                    <div className="md:col-span-2 space-y-1">
                                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Office Address</label>
                                        <div className="relative">
                                            <MapPin className="absolute left-3 top-4 text-slate-400" size={14} />
                                            <textarea 
                                                className="input-premium py-2 pl-9 text-sm min-h-[80px]" 
                                                placeholder="Full office address..." 
                                                value={brandData.address}
                                                onChange={e => setBrandData({...brandData, address: e.target.value})}
                                            />
                                        </div>
                                    </div>
                                    <div className="md:col-span-2 space-y-1">
                                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Billing Address</label>
                                        <div className="relative">
                                            <ReceiptText className="absolute left-3 top-4 text-slate-400" size={14} />
                                            <textarea 
                                                className="input-premium py-2 pl-9 text-sm min-h-[80px]" 
                                                placeholder="Full billing address..." 
                                                value={brandData.billingAddress}
                                                onChange={e => setBrandData({...brandData, billingAddress: e.target.value})}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button className="btn-primary w-full py-3 text-sm flex items-center justify-center gap-2" disabled={loading}>
                                    {loading ? <Loader2 className="animate-spin" size={18} /> : (editingBrand ? <Edit2 size={18} /> : <Check size={18} />)}
                                    {editingBrand ? 'Update Brand Details' : 'Save Brand'}
                                </button>
                            </form>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {brands.map(brand => (
                                <div key={brand.id} className="card-premium group relative">
                                    <div className="flex items-center gap-4 mb-4">
                                        {brand.logo ? (
                                            <img src={brand.logo} alt={brand.name} className="w-12 h-12 rounded-xl object-contain border border-slate-100" />
                                        ) : (
                                            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center font-bold text-lg border border-indigo-100">
                                                {brand.name[0]}
                                            </div>
                                        )}
                                        <div>
                                            <h4 className="font-bold text-slate-900">{brand.name}</h4>
                                            <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">{brand.category || 'No Category'}</p>
                                        </div>
                                        
                                        <div className="ml-auto flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button onClick={() => handleEditBrand(brand)} className="p-2 text-slate-400 hover:text-indigo-600 bg-white rounded-lg border border-slate-100 shadow-sm">
                                                <Edit2 size={14} />
                                            </button>
                                            <button onClick={() => handleDeleteBrand(brand.id)} className="p-2 text-slate-400 hover:text-rose-600 bg-white rounded-lg border border-slate-100 shadow-sm">
                                                <Trash size={14} />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-y-3 gap-x-2">
                                        {brand.contactNumber && (
                                            <div className="flex items-center gap-2 text-[10px] text-slate-500">
                                                <Phone size={10} className="text-slate-300" /> {brand.contactNumber}
                                            </div>
                                        )}
                                        {brand.email && (
                                            <div className="flex items-center gap-2 text-[10px] text-slate-500 truncate">
                                                <Mail size={10} className="text-slate-300" /> {brand.email}
                                            </div>
                                        )}
                                        {brand.taxId && (
                                            <div className="flex items-center gap-2 text-[10px] text-slate-500">
                                                <ReceiptText size={10} className="text-slate-300" /> {brand.taxId}
                                            </div>
                                        )}
                                        {brand.websiteUrl && (
                                            <div className="flex items-center gap-2 text-[10px] text-slate-500 truncate">
                                                <Globe size={10} className="text-slate-300" /> {brand.websiteUrl}
                                            </div>
                                        )}
                                    </div>

                                    {brand.address && (
                                        <div className="mt-3 pt-3 border-t border-slate-50 flex items-start gap-2 text-[10px] text-slate-400 italic">
                                            <MapPin size={10} className="text-slate-300 mt-0.5" />
                                            <span className="line-clamp-1">{brand.address}</span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
}
