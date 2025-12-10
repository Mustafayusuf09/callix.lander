
import React from 'react';
import {
    Shield, Lock, Check, Users, FileCheck, Key, Eye, Globe
} from 'lucide-react';

const SecurityIntegrations: React.FC = () => {
    return (
        <section className="py-24 bg-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="mb-16 max-w-2xl">
                    <h2 className="text-sm font-semibold text-emerald-600 uppercase tracking-wide mb-4">Security & Compliance</h2>
                    <h3 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 leading-tight">
                        Your data is protected by <br />
                        <span className="text-emerald-700">enterprise-grade security</span>
                    </h3>
                    <p className="text-lg text-slate-500 font-light leading-relaxed">
                        We take security seriously. Your conversations and insights are protected by the same technology trusted by leading tech giants.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                    {/* Card 1: Role-Based Access (Top Left) */}
                    <div className="md:col-span-6 group bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden relative">
                        {/* Visual */}
                        <div className="relative h-48 mb-6 flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 to-slate-50/50 rounded-xl" />
                            <div className="w-[320px] bg-white rounded-lg shadow-xl shadow-slate-200/50 border border-slate-100 p-6 flex flex-col gap-4 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                                {/* Certificate Background Pattern */}
                                <div className="absolute top-0 right-0 p-4 opacity-[0.03]">
                                    <Shield className="w-32 h-32 text-emerald-900" />
                                </div>
                                <div className="flex items-center gap-4 relative z-10">
                                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center border-4 border-emerald-50 shadow-sm">
                                        <Check className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-slate-900">SOC 2 Type II</div>
                                        <div className="text-xs text-slate-500 flex items-center gap-1">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                            Certified & Audited
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2 mt-1 relative z-10">
                                    <div className="flex items-center justify-between text-xs bg-slate-50/80 p-2 rounded border border-slate-100">
                                        <span className="text-slate-600 font-medium">Security Controls</span>
                                        <span className="text-emerald-700 font-bold text-[10px] bg-emerald-100/50 px-1.5 py-0.5 rounded border border-emerald-100">PASS</span>
                                    </div>
                                    <div className="flex items-center justify-between text-xs bg-slate-50/80 p-2 rounded border border-slate-100">
                                        <span className="text-slate-600 font-medium">Availability</span>
                                        <span className="text-emerald-700 font-bold text-[10px] bg-emerald-100/50 px-1.5 py-0.5 rounded border border-emerald-100">PASS</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="mb-2 flex items-center gap-2">
                                <Check className="w-5 h-5 text-emerald-500" />
                                <h4 className="font-semibold text-slate-900">SOC 2 Type II</h4>
                            </div>
                            <p className="text-sm text-slate-500 leading-relaxed">Fully audited and compliant with rigorous security standards.</p>
                        </div>
                    </div>

                    {/* Card 2: SSO Integration (Top Middle) */}
                    <div className="md:col-span-3 group bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden relative">
                        {/* Animated Dot Matrix Background */}
                        <div className="absolute inset-0 opacity-40">
                            <div className="absolute inset-0 bg-[radial-gradient(#10b981_1.5px,transparent_1.5px)] [background-size:20px_20px] [mask-image:linear-gradient(to_bottom,black_0%,transparent_80%)]"></div>
                        </div>

                        <div className="relative h-48 mb-6 flex items-center justify-center">
                            <div className="relative group-hover:-translate-y-1 transition-transform duration-300">
                                {/* Glow effect behind button */}
                                <div className="absolute -inset-1 bg-emerald-500/30 rounded-full blur-md group-hover:bg-emerald-500/40 transition-colors"></div>
                                <button className="relative bg-emerald-500 text-white px-6 py-2.5 rounded-full font-medium text-sm shadow-sm hover:shadow-md hover:bg-emerald-600 transition-all border border-emerald-400/50">
                                    Sign in with SSO
                                </button>
                            </div>
                        </div>
                        <div className="relative z-10">
                            <div className="mb-2 flex items-center gap-2">
                                <Users className="w-5 h-5 text-slate-400" />
                                <h4 className="font-semibold text-slate-900">SSO Integration</h4>
                            </div>
                            <p className="text-sm text-slate-500 leading-relaxed">Enterprise single sign-on with Okta, Google, and more.</p>
                        </div>
                    </div>

                    {/* Card 3: SOC 2 Type II (Top Right) */}
                    <div className="md:col-span-3 group bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden relative">
                        {/* Visual */}
                        <div className="relative h-48 mb-6 flex items-center justify-center">
                            <div className="absolute inset-0 bg-slate-50/50 rounded-xl" />
                            <div className="w-[200px] bg-white rounded-lg shadow-lg shadow-slate-200/50 border border-slate-200 overflow-hidden transform group-hover:-translate-y-1 transition-transform duration-500">
                                <div className="px-3 py-2 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                                    <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide">Team Access</span>
                                    <Users className="w-3 h-3 text-slate-400" />
                                </div>
                                <div className="p-1 space-y-1">
                                    <div className="flex items-center justify-between p-2 hover:bg-slate-50 rounded cursor-default group/item transition-colors">
                                        <div className="flex items-center gap-2">
                                            <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[9px] font-bold">JD</div>
                                            <div className="text-[10px] font-medium text-slate-700">John D.</div>
                                        </div>
                                        <div className="text-[9px] bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded border border-emerald-100 font-medium">Admin</div>
                                    </div>
                                    <div className="flex items-center justify-between p-2 hover:bg-slate-50 rounded cursor-default group/item transition-colors">
                                        <div className="flex items-center gap-2">
                                            <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[9px] font-bold">AS</div>
                                            <div className="text-[10px] font-medium text-slate-700">Sarah S.</div>
                                        </div>
                                        <div className="text-[9px] bg-slate-50 text-slate-500 px-1.5 py-0.5 rounded border border-slate-100">Manager</div>
                                    </div>
                                    <div className="flex items-center justify-between p-2 hover:bg-slate-50 rounded cursor-default group/item transition-colors">
                                        <div className="flex items-center gap-2">
                                            <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-[9px] font-bold">mk</div>
                                            <div className="text-[10px] font-medium text-slate-700">Mike K.</div>
                                        </div>
                                        <div className="text-[9px] bg-slate-50 text-slate-400 px-1.5 py-0.5 rounded border border-slate-100">Viewer</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="mb-2 flex items-center gap-2">
                                <Key className="w-5 h-5 text-slate-400" />
                                <h4 className="font-semibold text-slate-900">Role-Based Access</h4>
                            </div>
                            <p className="text-sm text-slate-500 leading-relaxed">Granular permissions to control who sees what.</p>
                        </div>
                    </div>

                    {/* Card 4: Consent Management (Bottom Left) */}
                    <div className="md:col-span-3 group bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden relative">
                        <div className="relative h-48 mb-6 flex items-center justify-center">
                            <div className="absolute inset-0 bg-slate-100/50 rounded-xl" />
                            {/* Real UI Mockup */}
                            <div className="w-[220px] bg-white rounded-xl shadow-lg shadow-slate-200/50 border border-slate-100 overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                                {/* Window Header */}
                                <div className="px-4 py-3 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                                        <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide">Compliance</div>
                                    </div>
                                    <div className="flex items-center gap-1.5 px-2 py-0.5 bg-red-50 rounded-full border border-red-100">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                                        <span className="text-[9px] font-bold text-red-600">REC</span>
                                    </div>
                                </div>

                                {/* UI Body */}
                                <div className="p-4 space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-[11px] font-semibold text-slate-900">Auto-Consent</div>
                                            <div className="text-[9px] text-slate-400">Play disclosure msg</div>
                                        </div>
                                        {/* Toggle Active */}
                                        <div className="w-8 h-4.5 bg-emerald-500 rounded-full relative shadow-inner cursor-pointer">
                                            <div className="absolute right-0.5 top-0.5 w-3.5 h-3.5 bg-white rounded-full shadow-sm"></div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between opacity-50">
                                        <div>
                                            <div className="text-[11px] font-semibold text-slate-900">Encryption</div>
                                            <div className="text-[9px] text-slate-400">AES-256 Enabled</div>
                                        </div>
                                        {/* Toggle Disabled/Inactive state logic visualization */}
                                        <div className="w-8 h-4.5 bg-slate-200 rounded-full relative shadow-inner">
                                            <div className="absolute right-0.5 top-0.5 w-3.5 h-3.5 bg-white rounded-full shadow-sm"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="mb-2 flex items-center gap-2">
                                <Eye className="w-5 h-5 text-slate-400" />
                                <h4 className="font-semibold text-slate-900">Consent Management</h4>
                            </div>
                            <p className="text-sm text-slate-500 leading-relaxed">Built-in recording consent and compliance controls.</p>
                        </div>
                    </div>

                    {/* Card 5: GDPR & CCPA (Bottom Middle) */}
                    <div className="md:col-span-3 group bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden relative">
                        <div className="relative h-48 mb-6 flex items-center justify-center">
                            <div className="absolute inset-0 bg-slate-50 rounded-xl" />
                            <div className="w-[200px] bg-white rounded-lg shadow-lg shadow-slate-200/50 border border-slate-200 overflow-hidden group-hover:shadow-xl transition-all duration-500 transform group-hover:-translate-y-1">
                                <div className="p-3 border-b border-slate-100 bg-slate-50/50 flex items-center gap-2">
                                    <Globe className="w-3 h-3 text-slate-400" />
                                    <span className="text-[10px] font-semibold text-slate-600">Privacy Center</span>
                                </div>
                                <div className="p-3 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] text-slate-600 font-medium">Data Export</span>
                                        <div className="w-5 h-5 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-100 transition-colors cursor-pointer border border-emerald-100">
                                            <div className="w-2 h-2 border-b-2 border-r-2 border-emerald-600 transform rotate-45 mb-0.5"></div>
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <div className="flex justify-between">
                                            <span className="text-[10px] text-slate-600 font-medium">Cookie Consent</span>
                                            <span className="text-[9px] text-emerald-600 font-medium">Active</span>
                                        </div>
                                        <div className="flex gap-1">
                                            <div className="flex-1 h-1 bg-emerald-500 rounded-full"></div>
                                            <div className="flex-1 h-1 bg-emerald-500 rounded-full"></div>
                                            <div className="flex-1 h-1 bg-emerald-500 rounded-full"></div>
                                            <div className="flex-1 h-1 bg-slate-200 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="pt-1">
                                        <div className="w-full text-[9px] text-center text-red-500 bg-red-50 py-1.5 rounded border border-red-100 cursor-pointer hover:bg-red-100 transition-colors font-medium">
                                            Request Deletion
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="mb-2 flex items-center gap-2">
                                <FileCheck className="w-5 h-5 text-slate-400" />
                                <h4 className="font-semibold text-slate-900">GDPR & CCPA</h4>
                            </div>
                            <p className="text-sm text-slate-500 leading-relaxed">Complete privacy compliance for global data protection.</p>
                        </div>
                    </div>

                    {/* Card 6: AES-256 Encryption (Bottom Right) */}
                    <div className="md:col-span-6 group bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden relative">
                        {/* Subtle gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-white to-slate-50/50 pointer-events-none" />

                        <div className="relative h-48 mb-6 flex items-center justify-center">
                            {/* Light background pattern */}
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-slate-50 rounded-xl border border-slate-100" />

                            {/* Floating Encryption UI */}
                            <div className="relative z-10 w-full max-w-[340px] bg-white rounded-xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-500">
                                {/* Header */}
                                <div className="px-5 py-3 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-sm">
                                            <Lock className="w-4 h-4 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-slate-900">AES-256-GCM</div>
                                            <div className="text-[10px] text-slate-500">Military-grade encryption</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 rounded-full border border-emerald-100">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                        <span className="text-[10px] font-semibold text-emerald-700">Active</span>
                                    </div>
                                </div>

                                {/* Body */}
                                <div className="p-5 space-y-4">
                                    {/* Encryption strength bar */}
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-[11px] font-medium text-slate-600">Encryption Strength</span>
                                            <span className="text-[11px] font-bold text-emerald-600">256-bit</span>
                                        </div>
                                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 w-full rounded-full" />
                                        </div>
                                    </div>

                                    {/* Key details */}
                                    <div className="flex items-center justify-between bg-slate-50 rounded-lg px-4 py-3 border border-slate-100">
                                        <div className="flex items-center gap-3">
                                            <Key className="w-4 h-4 text-slate-400" />
                                            <div>
                                                <div className="text-[10px] text-slate-500">Key Fingerprint</div>
                                                <div className="text-xs font-mono font-medium text-slate-700">0x7f...3a9c</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1 text-emerald-600">
                                            <Shield className="w-4 h-4" />
                                            <span className="text-[10px] font-semibold">Verified</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10">
                            <div className="mb-2 flex items-center gap-2">
                                <Lock className="w-5 h-5 text-emerald-500" />
                                <h4 className="font-semibold text-slate-900">AES-256 Encryption</h4>
                            </div>
                            <p className="text-sm text-slate-500 leading-relaxed">Bank-level encryption for all data at rest and in transit.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SecurityIntegrations;
