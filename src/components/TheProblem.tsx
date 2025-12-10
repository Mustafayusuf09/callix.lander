
import React from 'react';
import {
    NoSymbolIcon, ChartBarIcon, BeakerIcon, MinusCircleIcon
} from '@heroicons/react/24/solid';
import { X } from 'lucide-react';

const TheProblem: React.FC = () => {
    return (
        <section className="w-full bg-white border-b border-slate-200 overflow-hidden">
            <div className="grid lg:grid-cols-2 min-h-[600px]">

                {/* Left Column: Visual UI (The List) */}
                <div className="relative bg-[#F8FAFC] p-8 lg:p-16 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-200">

                    {/* Background Gradient - Neutral */}
                    <div className="absolute inset-0 bg-gradient-to-bl from-slate-100/50 to-slate-50/50"></div>

                    {/* Floating List Card */}
                    <div className="relative z-10 w-full max-w-md bg-white rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-200 overflow-hidden">

                        {/* Card Header */}
                        <div className="px-6 py-4 border-b border-slate-100 bg-white flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></div>
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Recent Campaigns (Manual)</span>
                            </div>
                            <span className="text-[10px] font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded">Last 30 Days</span>
                        </div>

                        {/* List Items */}
                        <div className="divide-y divide-slate-50">

                            {/* Item 1 */}
                            <div className="p-4 hover:bg-slate-50 transition-colors flex items-center justify-between group">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-500 shrink-0">
                                        <NoSymbolIcon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-slate-900">Broad Targeting Test</div>
                                        <div className="text-[10px] text-slate-500 mt-0.5 flex items-center gap-2">
                                            <span>Spend: $4,200</span>
                                            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                                            <span className="text-red-500">ROAS: 0.6x</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end gap-1">
                                    <img src="https://cdn.simpleicons.org/meta/0081FB" alt="Meta" className="w-4 h-4 opacity-60" />
                                    <span className="text-[10px] font-medium px-1.5 py-0.5 bg-red-50 text-red-600 rounded border border-red-100">
                                        Failed
                                    </span>
                                </div>
                            </div>

                            {/* Item 2 */}
                            <div className="p-4 hover:bg-slate-50 transition-colors flex items-center justify-between group">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
                                        <ChartBarIcon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-slate-900">Copy Variant B</div>
                                        <div className="text-[10px] text-slate-500 mt-0.5 flex items-center gap-2">
                                            <span>Spend: $1,850</span>
                                            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                                            <span className="text-orange-500">CPA: $145</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end gap-1">
                                    <img src="https://cdn.simpleicons.org/x/000000" alt="X" className="w-4 h-4 opacity-40" />
                                    <span className="text-[10px] font-medium px-1.5 py-0.5 bg-orange-50 text-orange-600 rounded border border-orange-100">
                                        Fatigued
                                    </span>
                                </div>
                            </div>

                            {/* Item 3 */}
                            <div className="p-4 hover:bg-slate-50 transition-colors flex items-center justify-between group">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                                        <BeakerIcon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-slate-900">Generic Value Prop</div>
                                        <div className="text-[10px] text-slate-500 mt-0.5 flex items-center gap-2">
                                            <span>Spend: $8,500</span>
                                            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                                            <span>CTR: 0.4%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end gap-1">
                                    <img src="/logos/google-ads-new.png" alt="Google Ads" className="w-5 h-5" />
                                    <span className="text-[10px] font-medium px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded border border-slate-200">
                                        Learning
                                    </span>
                                </div>
                            </div>

                            {/* Item 4 */}
                            <div className="p-4 hover:bg-slate-50 transition-colors flex items-center justify-between group opacity-60">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 shrink-0">
                                        <MinusCircleIcon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-slate-900">Retargeting V1</div>
                                        <div className="text-[10px] text-slate-500 mt-0.5 flex items-center gap-2">
                                            <span>Spend: $2,100</span>
                                            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                                            <span className="text-red-500">No Conv.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end gap-1">
                                    <img src="https://cdn.simpleicons.org/youtube/FF0000" alt="YouTube" className="w-5 h-5 opacity-80" />
                                    <span className="text-[10px] font-medium px-1.5 py-0.5 bg-slate-100 text-slate-500 rounded border border-slate-200">
                                        Paused
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Right Column: Text Content */}
                <div className="relative p-12 lg:p-24 flex flex-col justify-center">

                    {/* Subtle Grid Background (fainter) */}
                    {/* Soft Green Gradient Background */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-emerald-100/50 via-transparent to-transparent"></div>

                    <div className="relative z-10 max-w-lg">
                        <h4 className="text-sm font-semibold text-red-500 uppercase tracking-wide mb-6">
                            The Disconnect
                        </h4>
                        <h2 className="text-3xl lg:text-4xl font-serif text-slate-900 leading-[1.1] mb-6">
                            Your Sales Team Is Sitting On A Revenue Gold Mine
                        </h2>
                        <p className="text-lg text-slate-500 font-light leading-relaxed mb-6">
                            Every sales call contains valuable insights: which customers actually buy, what makes them decide, and the exact language that converts them.
                        </p>

                        <p className="text-md font-medium text-slate-700 mb-4">
                            But most revenue teams are missing it:
                        </p>

                        <ul className="space-y-4 mb-8">
                            {[
                                "Running campaigns without knowing which customers convert best",
                                "Split-testing dozens of ad variations into oblivion praying to find the next “winner”",
                                "Spending hours in alignment meetings trying to understand \"lead quality\""
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-500 font-light">
                                    <X className="w-5 h-5 text-red-500 mt-0.5 shrink-0" strokeWidth={2.5} />
                                    <span className="leading-snug">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="text-xl font-serif text-slate-900 italic">
                            Callix Fixes That.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TheProblem;
