import React from 'react';
import { Check, X } from 'lucide-react';

const UsVsThem: React.FC = () => {
    const tools = ['Callix', 'ChatGPT', 'Fireflies', 'Gong', 'Hyros', 'Chorus', 'Arcads'];

    const features = [
        { name: "Summarizes Calls", values: [true, true, true, true, false, true, false] },
        { name: "Identifies Buyer Signals", values: [true, true, false, false, true, false, false] },
        { name: "Generate Ads Automatically", values: [true, false, false, false, false, false, true] },
        { name: "Forecasts Lead Quality", values: [true, false, false, false, true, false, false] },
        { name: "For High Ticket GTM Teams", values: [true, false, false, true, false, false, false] },
        { name: "Pixel Optimization", values: [true, false, false, false, true, false, false] },
        { name: "Live Budget Allocation", values: [true, false, false, false, false, false, false] },
        { name: "Sales Team Performance Coaching", values: [true, false, false, true, false, true, false] },
        { name: "Aligns Sales & Marketing Teams", values: [true, false, false, false, false, false, false] },
    ];

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 relative overflow-hidden">
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f010_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f010_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes borderGlow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .shimmer-border {
          background: linear-gradient(90deg, transparent, rgba(16,185,129,0.4), transparent);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
        .glow-border {
          animation: borderGlow 2s ease-in-out infinite;
        }
      `}</style>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-10 sm:mb-12 lg:mb-16">
                    <h4 className="text-xs sm:text-sm font-semibold text-emerald-600 uppercase tracking-wide mb-3 sm:mb-4">
                        Why Callix?
                    </h4>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-slate-900 leading-tight mb-3 sm:mb-4">
                        One Platform. <span className="text-emerald-600">Every Feature.</span>
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-slate-500 max-w-2xl mx-auto px-2">
                        See why leading teams choose Callix over fragmented solutions.
                    </p>
                </div>

                {/* Table with Magic UI styling - Horizontally scrollable on mobile */}
                <div className="relative">
                    {/* Animated border glow */}
                    <div className="absolute -inset-[1px] bg-gradient-to-r from-emerald-500/0 via-emerald-500/30 to-emerald-500/0 rounded-2xl shimmer-border"></div>

                    {/* Scroll hint on mobile */}
                    <div className="sm:hidden text-center text-xs text-slate-400 mb-2 flex items-center justify-center gap-1">
                        <span>←</span>
                        <span>Scroll to compare</span>
                        <span>→</span>
                    </div>

                    <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-200 overflow-hidden shadow-xl">
                        {/* Scrollable container for mobile */}
                        <div className="overflow-x-auto">
                            <div className="min-w-[700px]">
                                {/* Table Header */}
                                <div className="grid grid-cols-9 bg-slate-100 border-b border-slate-200">
                                    <div className="col-span-2 p-3 sm:p-4 lg:p-5">
                                        <span className="text-xs sm:text-sm font-semibold text-slate-700">Feature</span>
                                    </div>
                                    {tools.map((tool, i) => (
                                        <div
                                            key={i}
                                            className={`p-3 sm:p-4 lg:p-5 text-center border-l border-slate-200 ${i === 0 ? 'bg-emerald-50' : ''}`}
                                        >
                                            {i === 0 ? (
                                                <span className="text-xs sm:text-sm font-bold text-emerald-600">{tool}</span>
                                            ) : (
                                                <span className="text-[10px] sm:text-xs font-medium text-slate-500">{tool}</span>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Table Body */}
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className={`grid grid-cols-9 ${index !== features.length - 1 ? 'border-b border-slate-100' : ''} hover:bg-slate-50 transition-colors`}
                                    >
                                        <div className="col-span-2 p-3 sm:p-4 lg:p-5 flex items-center">
                                            <span className="text-xs sm:text-sm text-slate-700">{feature.name}</span>
                                        </div>
                                        {feature.values.map((has, i) => (
                                            <div
                                                key={i}
                                                className={`p-3 sm:p-4 lg:p-5 flex items-center justify-center border-l border-slate-100 ${i === 0 ? 'bg-emerald-50/50' : ''}`}
                                            >
                                                {has ? (
                                                    <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-lg flex items-center justify-center bg-emerald-500 shadow-lg shadow-emerald-500/30">
                                                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" strokeWidth={3} />
                                                    </div>
                                                ) : (
                                                    <X className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" strokeWidth={2} />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-10 sm:mt-12 text-center">
                    <p className="text-xs sm:text-sm text-slate-500 mb-3 sm:mb-4">
                        Stop paying for 5 tools. Get everything in one.
                    </p>
                    <button className="w-full sm:w-auto px-6 py-3 bg-[#1A1A1A] hover:bg-black text-white rounded-full font-medium transition-all shadow-xl shadow-emerald-900/5 hover:shadow-emerald-900/10 text-sm inline-flex items-center justify-center">
                        Book A Free "Prove It" Demo Today
                    </button>
                </div>
            </div>
        </section>
    );
};

export default UsVsThem;
