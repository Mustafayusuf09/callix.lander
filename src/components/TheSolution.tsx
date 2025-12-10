
import React from 'react';
import {
    Users, ArrowRight, Zap, MessageSquare
} from 'lucide-react';

const TheSolution: React.FC = () => {
    return (
        <section className="w-full bg-white border-y border-slate-200 overflow-hidden">
            <div className="grid lg:grid-cols-2 min-h-[600px]">

                {/* Left Column: Text Content */}
                <div className="relative p-12 lg:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-200 order-2 lg:order-1 bg-white">
                    {/* Grid Background */}
                    {/* Soft Green Gradient Background */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-emerald-100/50 via-transparent to-transparent"></div>

                    <div className="relative z-10 max-w-lg">
                        <h4 className="text-sm font-semibold text-emerald-600 uppercase tracking-wide mb-6">
                            The Breakthrough
                        </h4>
                        <h2 className="text-3xl lg:text-4xl font-serif text-slate-900 leading-[1.1] mb-6">
                            What If Every Sales Call Automatically Became Actionable Revenue Intelligence?
                        </h2>
                        <p className="text-lg text-slate-500 font-light leading-relaxed mb-8">
                            Callix AI analyzes your sales conversations to surface the patterns that drive revenue:
                        </p>

                        <ul className="space-y-4 mb-8">
                            {[
                                "Identify your highest-converting customer profiles and what makes them buy",
                                "Generate ad creatives based on actual buyer language from winning calls",
                                "Pin Point common objections that are killing deals",
                                "Track which marketing campaigns deliver quality leads vs. tire-kickers"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <ArrowRight className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                                    <span className="text-slate-700 leading-snug">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="text-lg text-slate-500 font-light leading-relaxed mb-10">
                            Think of it as your revenue intelligence layer—connecting what happens in sales calls to what you do in marketing.
                        </p>

                        <button className="px-6 py-3 bg-[#1A1A1A] hover:bg-black text-white rounded-full font-medium transition-all shadow-xl shadow-emerald-900/5 hover:shadow-emerald-900/10 text-sm inline-flex items-center self-start">
                            Book A Free “Prove It” Demo Today
                        </button>
                    </div>
                </div>

                {/* Right Column: Visual UI */}
                <div className="relative bg-[#F8FAFC] p-8 lg:p-16 flex items-center justify-center order-1 lg:order-2">

                    {/* Background Gradient - Neutral */}
                    <div className="absolute inset-0 bg-gradient-to-bl from-slate-100/50 to-slate-50/50"></div>

                    {/* Floating UI Card: Revenue Intelligence */}
                    <div className="relative z-10 w-full max-w-md bg-white rounded-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-200 overflow-hidden">

                        {/* Header */}
                        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-white">
                            <div>
                                <span className="text-sm font-semibold text-slate-900 block">Revenue Pattern #804</span>
                                <span className="text-[10px] text-slate-500">Auto-detected from 42 calls</span>
                            </div>
                            <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                                High Confidence
                            </span>
                        </div>

                        <div className="p-6 space-y-6">

                            {/* Insight Section: Customer Profile */}
                            <div className="space-y-3">
                                <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                                    <Users className="w-3 h-3" />
                                    Winning Profile
                                </h5>
                                <div className="bg-[#F8FAFC] border border-slate-100 rounded-lg p-3 flex items-center justify-between">
                                    <div className="flex items-center gap-3">

                                        <div>
                                            <div className="text-xs font-bold text-slate-900">SaaS Founders</div>
                                            <div className="text-[10px] text-slate-500">Seed to Series A</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xs font-bold text-emerald-600">32%</div>
                                        <div className="text-[9px] text-slate-400">Close Rate</div>
                                    </div>
                                </div>
                            </div>

                            {/* Insight Section: Buyer Language */}
                            <div className="space-y-3">
                                <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                                    <MessageSquare className="w-3 h-3" />
                                    Buyer Logic / Language
                                </h5>
                                <div className="bg-[#F8FAFC] border border-slate-100 rounded-lg p-3">
                                    <div className="flex items-start gap-2 mb-2">

                                        <p className="text-xs text-slate-700 italic">"We need <span className="font-bold bg-amber-50 text-amber-800 px-1 rounded">speed of implementation</span>. We can't wait 3 months for results."</p>
                                    </div>
                                    <div className="pl-5 text-[10px] text-slate-400">
                                        Mentioned in 85% of closed-won deals
                                    </div>
                                </div>
                            </div>

                            {/* Connecting Arrow */}
                            <div className="flex justify-center -my-2">
                                <ArrowRight className="w-4 h-4 text-slate-300 rotate-90" />
                            </div>

                            {/* Action Section: Generated Campaign */}
                            <div className="relative overflow-hidden rounded-lg border border-emerald-100 bg-emerald-50/50 p-4">
                                <div className="flex items-center justify-between mb-3">
                                    <h5 className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
                                        <Zap className="w-3 h-3" />
                                        Automated Action
                                    </h5>
                                    <span className="text-[9px] font-medium text-emerald-600 bg-white px-2 py-0.5 rounded shadow-sm">
                                        Ready to Launch
                                    </span>
                                </div>

                                <div className="bg-white rounded border border-emerald-100 shadow-sm p-3 flex gap-3 items-center">
                                    <div className="w-10 h-10 bg-slate-900 rounded flex items-center justify-center shrink-0">
                                        <span className="text-[8px] text-white font-bold text-center leading-tight">Fast<br />ROI</span>
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-bold text-slate-900 mb-0.5">Campaign: Speed to Value</div>
                                        <div className="text-[9px] text-slate-500 leading-tight">
                                            "Deploy in days, not months. The fastest way to ROI for SaaS Founders."
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default TheSolution;
