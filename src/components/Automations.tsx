
import React, { useState, useEffect, useRef } from 'react';
import {
    MessageSquare, X,
    TrendingUp, ArrowUpRight, GraduationCap
} from 'lucide-react';

const Automations: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [step, setStep] = useState(0);
    const [expandedImage, setExpandedImage] = useState<string | null>(null);

    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    // Animation Sequence
    useEffect(() => {
        if (!isVisible) return;

        const sequence = async () => {
            // Step 1: Transcript Active
            await new Promise(r => setTimeout(r, 500));
            setStep(1);

            // Step 2: Highlight Insight & Show Dot
            await new Promise(r => setTimeout(r, 800));
            setStep(2);

            // Step 3: Draw Branch 1 (Ad)
            await new Promise(r => setTimeout(r, 600));
            setStep(3);

            // Step 4: Draw Branch 2 (Coaching)
            await new Promise(r => setTimeout(r, 600));
            setStep(4);

            // Step 5: Draw Branch 3 (Chat)
            await new Promise(r => setTimeout(r, 600));
            setStep(5);
        };

        sequence();
    }, [isVisible]);

    return (
        <section ref={sectionRef} className="py-16 sm:py-20 lg:py-32 bg-slate-50 border-b border-slate-200 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
                    <h4 className="text-xs sm:text-sm font-semibold text-emerald-600 uppercase tracking-wide mb-3 sm:mb-4">
                        The Engine
                    </h4>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-slate-900 leading-[1.1] mb-4 sm:mb-6">
                        One Conversation. <br className="hidden md:block" /> Infinite Value.
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-slate-500 font-light leading-relaxed px-2">
                        Callix takes a single sales call and automatically distributes the intelligence to every team that needs it.
                    </p>
                </div>

                {/* Animation Grid */}
                <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-center relative min-h-[500px] lg:min-h-[600px]">

                    {/* LEFT COLUMN: Transcript (Source) - Spans 5 columns */}
                    <div className="lg:col-span-5 relative z-10 h-full flex items-center">
                        <div className="w-full relative group">
                            {/* Background layers */}
                            <div className="absolute inset-0 bg-[#F8FAFC] rounded-xl sm:rounded-2xl border border-slate-200 -z-10 transform rotate-1 transition-transform group-hover:rotate-0"></div>
                            <div className="absolute inset-0 bg-white rounded-xl sm:rounded-2xl -z-10 shadow-xl"></div>

                            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden relative min-h-[400px] sm:min-h-[480px] lg:min-h-[550px] flex flex-col justify-start">

                                {/* Header */}
                                <div className="absolute top-0 left-0 right-0 px-4 sm:px-5 py-3 sm:py-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center z-20">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500">
                                            <MessageSquare className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <span className="text-xs font-bold text-slate-900 block">Discovery Call</span>
                                            <span className="text-[10px] text-slate-400">ID: #88219 • 12m ago</span>
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-medium px-2 py-1 bg-emerald-50 text-emerald-700 rounded border border-emerald-100 flex items-center gap-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                                        Live
                                    </span>
                                </div>

                                {/* Transcript Feed */}
                                <div className="p-6 pt-20 space-y-6 text-sm relative flex-1 overflow-hidden">

                                    {/* Dialogue 1 */}
                                    <div className="flex gap-3 opacity-60">
                                        <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500 shrink-0">R</div>
                                        <div>
                                            <div className="text-[10px] font-bold text-slate-400 mb-1">Rep (04:12)</div>
                                            <p className="text-slate-600 text-xs">Curious about your current tech stack. What CRM are you guys living in?</p>
                                        </div>
                                    </div>

                                    {/* Dialogue 2 */}
                                    <div className="flex gap-3 opacity-60">
                                        <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-[10px] font-bold text-blue-600 shrink-0">P</div>
                                        <div>
                                            <div className="text-[10px] font-bold text-blue-600 mb-1">Prospect (04:15)</div>
                                            <p className="text-slate-800 text-xs">We're on Salesforce. But honestly, the data hygiene is a nightmare right now.</p>
                                        </div>
                                    </div>

                                    {/* Dialogue 3 */}
                                    <div className="flex gap-3 opacity-60">
                                        <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500 shrink-0">R</div>
                                        <div>
                                            <div className="text-[10px] font-bold text-slate-400 mb-1">Rep (04:22)</div>
                                            <p className="text-slate-600 text-xs">Is that slowing down the team?</p>
                                        </div>
                                    </div>

                                    {/* Dialogue 4 (The Insight) */}
                                    <div className={`flex gap-3 transition-opacity duration-500 ${step >= 1 ? 'opacity-100' : 'opacity-40'}`}>
                                        <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-[10px] font-bold text-blue-600 shrink-0">P</div>
                                        <div className="relative">
                                            <div className="text-[10px] font-bold text-blue-600 mb-1">Prospect (04:42)</div>
                                            <div className="text-slate-800 text-xs leading-relaxed relative z-10 bg-white/50">
                                                "Big time. We're wasting hours on manual data entry. We need something that <span className={`transition-all duration-700 ${step >= 2 ? 'bg-emerald-100 text-emerald-800 px-1 rounded shadow-sm ring-1 ring-emerald-200' : ''}`}>syncs instantly</span> or it's a no-go."
                                            </div>
                                        </div>
                                    </div>

                                    {/* Dialogue 5 */}
                                    <div className={`flex gap-3 transition-opacity duration-500 ${step >= 2 ? 'opacity-60' : 'opacity-0'}`}>
                                        <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500 shrink-0">R</div>
                                        <div>
                                            <div className="text-[10px] font-bold text-slate-400 mb-1">Rep (04:45)</div>
                                            <p className="text-slate-600 text-xs">Understood. Native integration is a must-have then.</p>
                                        </div>
                                    </div>

                                    {/* Dialogue 6 */}
                                    <div className={`flex gap-3 transition-opacity duration-500 ${step >= 2 ? 'opacity-60' : 'opacity-0'}`}>
                                        <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-[10px] font-bold text-blue-600 shrink-0">P</div>
                                        <div>
                                            <div className="text-[10px] font-bold text-blue-600 mb-1">Prospect (04:48)</div>
                                            <p className="text-slate-800 text-xs">Exactly. If I have to chase reps to log calls, I'm losing money.</p>
                                        </div>
                                    </div>

                                    {/* Bottom Fade */}
                                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* MIDDLE COLUMN: Connectors (SVG) - Spans 2 columns */}
                    {/* z-0 ensures lines go UNDER the cards */}
                    <div className="lg:col-span-2 relative h-full hidden lg:block pointer-events-none z-0">
                        <svg
                            className="absolute inset-0 w-full h-full overflow-visible"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                        >
                            {/* Path to Top (Ad) */}
                            {/* Coordinates extended from -50 to 150 to ensure overlap behind cards */}
                            <path
                                d="M -50 50 C 20 50, 80 16, 150 16"
                                fill="none"
                                stroke="#10b981"
                                strokeWidth="1.5"
                                vectorEffect="non-scaling-stroke"
                                pathLength="1"
                                strokeDasharray="1"
                                strokeDashoffset={step >= 3 ? 0 : 1}
                                className="transition-[stroke-dashoffset] duration-1000 ease-in-out"
                            />

                            {/* Path to Middle (Coach) - Straight Line */}
                            <path
                                d="M -50 50 L 150 50"
                                fill="none"
                                stroke="#10b981"
                                strokeWidth="1.5"
                                vectorEffect="non-scaling-stroke"
                                pathLength="1"
                                strokeDasharray="1"
                                strokeDashoffset={step >= 4 ? 0 : 1}
                                className="transition-[stroke-dashoffset] duration-1000 ease-in-out"
                            />

                            {/* Path to Bottom (Chat) */}
                            <path
                                d="M -50 50 C 20 50, 80 84, 150 84"
                                fill="none"
                                stroke="#10b981"
                                strokeWidth="1.5"
                                vectorEffect="non-scaling-stroke"
                                pathLength="1"
                                strokeDasharray="1"
                                strokeDashoffset={step >= 5 ? 0 : 1}
                                className="transition-[stroke-dashoffset] duration-1000 ease-in-out"
                            />
                        </svg>
                    </div>

                    {/* RIGHT COLUMN: Outputs (3 Cards) - Spans 5 columns */}
                    {/* RIGHT COLUMN: Outputs (3 Cards) - Spans 5 columns */}
                    <div className="lg:col-span-5 flex flex-col justify-between h-full relative z-10 py-4">

                        {/* Output 1: Ad Generator */}
                        <div className={`transform transition-all duration-700 ${step >= 3 ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
                            <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition-shadow flex gap-4 items-center relative group">
                                <div
                                    className="w-20 h-20 bg-slate-100 rounded-lg shrink-0 overflow-hidden relative shadow-inner cursor-pointer"
                                    onClick={() => setExpandedImage('/ad-generated.png')}
                                >
                                    <img
                                        src="/ad-generated.png"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        alt="Ad Generated"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                        <ArrowUpRight className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-center mb-1">
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Ad Generation</div>
                                        <div className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full ring-1 ring-emerald-100">Ready</div>
                                    </div>
                                    <h4 className="text-sm font-bold text-slate-900 mb-2 truncate">Instant Ads</h4>
                                    <div className="flex items-center gap-2 text-[10px] text-slate-500">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                                        Based on buyer psychology
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Output 2: Sales Coach */}
                        <div className={`transform transition-all duration-700 delay-100 ${step >= 4 ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
                            <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-3 relative">
                                    <div className="flex items-center gap-2.5">
                                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center shrink-0 shadow-md shadow-orange-200">
                                            <GraduationCap className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-[9px] font-bold text-orange-500 uppercase tracking-wider mb-0.5">Sales Coach</div>
                                            <h4 className="text-sm font-bold text-slate-900">Objection Detected</h4>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 bg-orange-100 border border-orange-200 px-1.5 py-0.5 rounded-full">
                                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
                                        <span className="text-[9px] font-bold text-orange-700">Live</span>
                                    </div>
                                </div>

                                {/* Severity Meter */}
                                <div className="mb-3">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-[9px] font-medium text-slate-500">Objection Severity</span>
                                        <span className="text-[9px] font-bold text-orange-600">Medium-High</span>
                                    </div>
                                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full w-[70%] bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 rounded-full transition-all duration-1000" />
                                    </div>
                                </div>

                                {/* Objection Details */}
                                <div className="bg-slate-50 rounded-lg border border-slate-100 p-2.5 mb-2.5">
                                    <div className="flex items-center gap-1.5 mb-1">
                                        <MessageSquare className="w-3 h-3 text-slate-400" />
                                        <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wide">Prospect Said</span>
                                    </div>
                                    <p className="text-[11px] text-slate-700 italic leading-relaxed">
                                        "We've tried other tools before and the data never syncs properly..."
                                    </p>
                                </div>

                                {/* AI Tip */}
                                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border border-orange-200 p-2.5 relative">
                                    <div className="absolute -top-2 left-3 bg-orange-500 text-white text-[7px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wide">
                                        AI Tip
                                    </div>
                                    <div className="flex gap-1.5 mt-1">
                                        <span className="text-sm">💡</span>
                                        <p className="text-[11px] text-orange-800 font-medium leading-relaxed">
                                            Position the 1-click sync as the fix for their "data hygiene" nightmare.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Output 3: AI Chat */}
                        <div className={`transform transition-all duration-700 delay-200 ${step >= 5 ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
                            <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition-shadow relative">
                                <div className="flex items-center justify-between mb-3 border-b border-slate-50 pb-2">
                                    <div className="flex items-center gap-2">
                                        <img
                                            src="/callix-ai-icon.png"
                                            alt="Callix AI"
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                        <span className="text-xs font-bold text-slate-900">LLM</span>
                                    </div>
                                    <span className="text-[9px] text-slate-400">Just now</span>
                                </div>

                                <div className="space-y-2.5">
                                    <div className="flex justify-end">
                                        <div className="bg-slate-100 text-slate-700 text-[10px] px-3 py-2 rounded-2xl rounded-tr-sm max-w-[85%]">
                                            Get me the briefing on my last sales call
                                        </div>
                                    </div>
                                    <div className="flex justify-start">
                                        <div className="bg-emerald-50 text-emerald-800 text-[10px] px-3 py-2 rounded-2xl rounded-tl-sm max-w-[95%] border border-emerald-100 shadow-sm leading-relaxed">
                                            <div className="font-bold mb-1">Briefing Generated:</div>
                                            <ul className="space-y-1 mb-2">
                                                <li>• <span className="font-semibold">Pain Point:</span> Manual Salesforce Entry</li>
                                                <li>• <span className="font-semibold">Sentiment:</span> Frustrated 😟</li>
                                                <li>• <span className="font-semibold">Action:</span> Pitch 1-Click Integration</li>
                                            </ul>
                                            <div className="mt-1.5 pt-1.5 border-t border-emerald-200/50 flex items-center gap-1 cursor-pointer hover:text-emerald-900 transition-colors">
                                                <span>View Full Transcript</span>
                                                <TrendingUp className="w-3 h-3" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                {/* CTA Button */}
                <div className="flex justify-center mt-16">
                    <button className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-full transition-all shadow-xl shadow-slate-900/10 hover:shadow-slate-900/20 hover:scale-105">
                        Book a Demo
                    </button>
                </div>

            </div>

            {/* Lightbox Modal */}
            {expandedImage && (
                <div
                    className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-200"
                    onClick={() => setExpandedImage(null)}
                >
                    <div
                        className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
                            onClick={() => setExpandedImage(null)}
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <img
                            src={expandedImage}
                            alt="Expanded View"
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Automations;
