
import React, { useState, useEffect, useRef } from 'react';
import {
    Mic, Video, Play, MoreHorizontal,
    ArrowRight, ArrowLeft, CheckCircle, Download,
    SkipBack, SkipForward, Copy, MessageCircle, Sparkles, Search,
    Phone, MousePointer, FileText, Link, Paperclip
} from 'lucide-react';

const HowItWorks: React.FC = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [activeTab, setActiveTab] = useState<'ai-chat' | 'transcript' | 'customer-journey'>('transcript');

    // Refs for the visual sections to trigger state changes
    const step1Ref = useRef<HTMLDivElement>(null);
    const step2Ref = useRef<HTMLDivElement>(null);
    const step3Ref = useRef<HTMLDivElement>(null);

    // Steps Data
    const steps = [
        {
            id: 0,
            label: "Automatic Call Capture",
            description: "Callix integrates with Zoom and Google Meet in one click. Every call is automatically recorded, transcribed, and analyzed—no manual work required."
        },
        {
            id: 1,
            label: "AI-Powered Analysis",
            description: "Our AI identifies the revenue patterns in your conversations: customer profiles, buying intent language, and common objections."
        },
        {
            id: 2,
            label: "Marketing Intelligence",
            description: "Stop wasting ad spend. Use AI to attract higher quality leads and increase your ROAS."
        }
    ];

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px', // Trigger exactly at the center line
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target === step1Ref.current) setActiveStep(0);
                    if (entry.target === step2Ref.current) setActiveStep(1);
                    if (entry.target === step3Ref.current) setActiveStep(2);
                }
            });
        }, observerOptions);

        if (step1Ref.current) observer.observe(step1Ref.current);
        if (step2Ref.current) observer.observe(step2Ref.current);
        if (step3Ref.current) observer.observe(step3Ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section className="bg-white border-t border-slate-200 relative z-20">
            <div className="max-w-7xl mx-auto px-6">
                {/* Main Flex Container - Right column height determines total section height */}
                <div className="lg:flex items-start relative">

                    {/* LEFT SIDE: Sticky Content */}
                    {/* sticky top-0 + h-screen ensures it pins to the viewport while parent scrolls */}
                    <div className="lg:w-1/2 h-auto lg:h-screen sticky top-0 self-start flex flex-col justify-center py-20 lg:py-0 pr-0 lg:pr-16 order-2 lg:order-1 z-10">

                        <div className="mb-12">
                            <h4 className="text-sm font-semibold text-emerald-600 uppercase tracking-wide mb-4">
                                How it works
                            </h4>
                            <h2 className="text-4xl lg:text-5xl font-serif text-slate-900 leading-[1.1] mb-6">
                                How Conversations Become Marketing Assets
                            </h2>
                            <p className="text-lg text-slate-500 font-light font-medium tracking-tight">
                                From Call → Insight → Campaign
                            </p>
                        </div>

                        {/* Steps Navigation List */}
                        <div className="space-y-8 relative">

                            {/* Vertical connecting line */}
                            <div className="absolute left-[19px] top-4 bottom-10 w-px bg-slate-200 -z-10 hidden lg:block"></div>

                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className={`transition-all duration-500 ease-out group cursor-default`}
                                >
                                    <div className="flex items-start gap-6">
                                        {/* Step Number Indicator */}
                                        <div className={`hidden lg:flex w-10 h-10 rounded-full border-2 items-center justify-center text-sm font-bold shrink-0 transition-all duration-500 z-10 bg-white ${activeStep === index
                                            ? 'border-emerald-500 text-emerald-600 scale-110 shadow-lg shadow-emerald-100'
                                            : 'border-slate-200 text-slate-300'
                                            }`}>
                                            {index + 1}
                                        </div>

                                        <div className={`transition-all duration-500 ${activeStep === index ? 'opacity-100 translate-x-0' : 'opacity-40 translate-x-0'}`}>
                                            <h3 className={`text-2xl font-serif transition-colors duration-300 ${activeStep === index ? 'text-slate-900' : 'text-slate-400'
                                                }`}>
                                                {step.label}
                                            </h3>

                                            {/* Description - Collapsible */}
                                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeStep === index ? 'max-h-48 opacity-100 mt-3' : 'max-h-0 opacity-0'
                                                }`}>
                                                <p className="text-base text-slate-500 font-light leading-relaxed max-w-sm">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 lg:pl-16">
                            <button className="px-6 py-3 bg-[#1A1A1A] hover:bg-black text-white rounded-full font-medium transition-all shadow-xl shadow-emerald-900/5 hover:shadow-emerald-900/10 text-sm inline-flex items-center gap-2 group">
                                Book A Demo Today
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* RIGHT SIDE: Scrolling Visuals */}
                    <div className="lg:w-1/2 order-1 lg:order-2 pb-24 lg:pb-0">

                        {/* STEP 1 VISUAL: Automatic Call Capture */}
                        {/* Increased height to delay scroll transition (150vh) */}
                        <div ref={step1Ref} className="min-h-screen lg:min-h-[150vh] flex items-center justify-center py-24 lg:py-0">
                            <div className="w-full relative group px-4 lg:px-0">
                                {/* Visual Mockup - Google Meet Style (Light) */}
                                <div className="bg-white rounded-2xl overflow-hidden relative shadow-xl border border-slate-200 transition-all">

                                    {/* Google Meet Header */}
                                    <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
                                        <div className="flex items-center gap-3">
                                            <span className="text-slate-900 text-sm font-medium">Discovery Call</span>
                                            <span className="text-slate-300 text-xs">|</span>
                                            <span className="text-slate-500 text-xs">12:34</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-red-50 rounded-full border border-red-100">
                                                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                                <span className="text-xs font-medium text-red-500">REC</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Main Content */}
                                    <div className="p-4">
                                        {/* Callix Notetaker - Full Width at Top */}
                                        <div className="relative h-20 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl overflow-hidden border border-emerald-200 mb-3">
                                            <div className="absolute inset-0 flex items-center justify-center gap-4">
                                                {/* Bot Icon */}
                                                <img
                                                    src="/callix-ai-icon.png"
                                                    alt="Callix Notetaker"
                                                    className="w-16 h-16 object-contain"
                                                />
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-semibold text-emerald-700">Callix Notetaker</span>
                                                    {/* Taking notes indicator */}
                                                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                                                        <span>taking notes</span>
                                                        <span className="flex gap-0.5">
                                                            <span className="w-1 h-1 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                                            <span className="w-1 h-1 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                                            <span className="w-1 h-1 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Participant Grid - 2 people side by side */}
                                        <div className="grid grid-cols-2 gap-3 mb-4">
                                            {/* You */}
                                            <div className="relative aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
                                                <img
                                                    src="/sales-rep.png"
                                                    alt="Sales Rep"
                                                    className="absolute inset-0 w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                                <div className="absolute bottom-2 left-2">
                                                    <span className="px-2 py-0.5 bg-black/60 backdrop-blur-sm rounded text-[11px] font-medium text-white">You</span>
                                                </div>
                                            </div>

                                            {/* Prospect */}
                                            <div className="relative aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden border-2 border-emerald-400">
                                                <img
                                                    src="/prospect.png"
                                                    alt="Prospect"
                                                    className="absolute inset-0 w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                                <div className="absolute bottom-2 left-2">
                                                    <span className="px-2 py-0.5 bg-black/60 backdrop-blur-sm rounded text-[11px] font-medium text-white">Prospect</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom Controls - Light Theme */}
                                    <div className="bg-slate-50 border-t border-slate-100 py-4 px-6">
                                        <div className="flex items-center justify-center gap-3">
                                            <button className="w-12 h-12 bg-slate-200 hover:bg-slate-300 rounded-full flex items-center justify-center transition-colors">
                                                <Mic className="w-5 h-5 text-slate-600" />
                                            </button>
                                            <button className="w-12 h-12 bg-slate-200 hover:bg-slate-300 rounded-full flex items-center justify-center transition-colors">
                                                <Video className="w-5 h-5 text-slate-600" />
                                            </button>
                                            <button className="w-12 h-12 bg-slate-200 hover:bg-slate-300 rounded-full flex items-center justify-center transition-colors">
                                                <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                                                </svg>
                                            </button>
                                            <button className="px-5 py-3 bg-red-500 hover:bg-red-600 rounded-full text-sm font-medium text-white transition-colors flex items-center gap-2">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08c-.18-.17-.29-.42-.29-.7 0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28-.79-.74-1.69-1.36-2.67-1.85-.33-.16-.56-.5-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z" />
                                                </svg>
                                                Leave
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* STEP 2 VISUAL: AI-Powered Analysis */}
                        {/* Increased height to delay scroll transition (150vh) */}
                        <div ref={step2Ref} className="min-h-screen lg:min-h-[150vh] flex items-center justify-center py-24 lg:py-0">
                            <div className="w-full relative group px-4 lg:px-0">
                                {/* Visual Mockup - Deal Analysis Dashboard */}
                                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden relative shadow-xl transition-all">

                                    {/* Main Content Grid */}
                                    <div className="grid grid-cols-1 lg:grid-cols-2">

                                        {/* Left Side - Video & Summary */}
                                        <div className="border-r border-slate-100">
                                            {/* Header */}
                                            <div className="p-4 border-b border-slate-100">
                                                <div className="flex items-center gap-2 text-[10px] text-slate-400 mb-2">
                                                    <ArrowLeft className="w-3 h-3" />
                                                    <span>Back to Deal Analysis</span>
                                                </div>
                                                <h3 className="text-sm font-bold text-slate-900">Lucas Berger and Ashley Lockheart</h3>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <div className="flex items-center gap-1">
                                                        <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-[8px] font-bold text-emerald-700">AL</div>
                                                        <span className="text-[9px] text-slate-400">Nov 16 2025, 11:00 AM</span>
                                                    </div>
                                                    <span className="text-[8px] bg-emerald-500 text-white px-1.5 py-0.5 rounded-full font-medium">Contacted</span>
                                                    <div className="flex items-center gap-1 text-[9px] text-slate-500 ml-auto">
                                                        <CheckCircle className="w-3 h-3" />
                                                        <span>Probability</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Video Player - Google Meet Recording Style */}
                                            <div className="bg-[#202124] aspect-video relative overflow-hidden">
                                                {/* Two participants side by side */}
                                                <div className="absolute inset-0 grid grid-cols-2">
                                                    <div className="relative">
                                                        <img
                                                            src="/sales-rep.png"
                                                            alt="Ashley Lockheart"
                                                            className="w-full h-full object-cover"
                                                        />
                                                        <div className="absolute bottom-2 left-2">
                                                            <span className="px-1.5 py-0.5 bg-black/60 rounded text-[8px] text-white">Ashley Lockheart</span>
                                                        </div>
                                                    </div>
                                                    <div className="relative">
                                                        <img
                                                            src="/prospect.png"
                                                            alt="Lucas Berger"
                                                            className="w-full h-full object-cover"
                                                        />
                                                        <div className="absolute bottom-2 left-2">
                                                            <span className="px-1.5 py-0.5 bg-black/60 rounded text-[8px] text-white">Lucas Berger</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Pause overlay */}
                                                <div className="absolute inset-0 bg-black/20" />
                                                <div className="absolute top-2 right-2 text-[9px] text-white/70">02:13:00</div>
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                                                        <Play className="w-6 h-6 text-slate-900 fill-slate-900 ml-1" />
                                                    </div>
                                                </div>
                                                {/* Progress Bar */}
                                                <div className="absolute bottom-0 left-0 right-0 px-3 pb-2">
                                                    <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                                                        <div className="h-full w-1/4 bg-emerald-500 rounded-full"></div>
                                                    </div>
                                                    <div className="flex justify-between text-[8px] text-white/70 mt-1">
                                                        <span>00:31</span>
                                                        <span>02:13:00</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Video Controls */}
                                            <div className="flex items-center justify-center gap-3 py-2 border-b border-slate-100">
                                                <SkipBack className="w-4 h-4 text-slate-400" />
                                                <div className="w-7 h-7 bg-emerald-500 rounded-full flex items-center justify-center">
                                                    <Play className="w-3 h-3 text-white fill-white ml-0.5" />
                                                </div>
                                                <SkipForward className="w-4 h-4 text-slate-400" />
                                                <Download className="w-4 h-4 text-slate-400 ml-4" />
                                                <Copy className="w-4 h-4 text-slate-400" />
                                                <MessageCircle className="w-4 h-4 text-slate-400" />
                                            </div>

                                            {/* General Summary */}
                                            <div className="p-3">
                                                <div className="flex items-center gap-1 text-[9px] text-amber-600 mb-2">
                                                    <Sparkles className="w-3 h-3" />
                                                    <span className="font-medium">General Summary</span>
                                                </div>
                                                <h4 className="text-[11px] font-bold text-slate-900 mb-1">Scaling Strategy and Systems</h4>
                                                <p className="text-[9px] text-slate-500 leading-relaxed mb-2">
                                                    Lucas is positioned well for growth with strong client satisfaction, but lacks systematic infrastructure to scale beyond $15K monthly.
                                                </p>
                                                <ul className="text-[8px] text-slate-500 space-y-1">
                                                    <li className="flex items-start gap-1">
                                                        <span className="text-slate-400">•</span>
                                                        <span>Primary growth constraint is time allocation (00:38)</span>
                                                    </li>
                                                    <li className="flex items-start gap-1">
                                                        <span className="text-slate-400">•</span>
                                                        <span>Current acquisition relies on passive referrals (00:12)</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Right Side - Tabs & Content */}
                                        <div className="bg-slate-50/50 flex flex-col h-full">
                                            {/* Tabs */}
                                            <div className="flex items-center border-b border-slate-100 px-4">
                                                <button
                                                    onClick={() => setActiveTab('ai-chat')}
                                                    className={`text-[10px] py-2 px-3 transition-colors ${activeTab === 'ai-chat' ? 'text-slate-900 font-medium border-b-2 border-emerald-500' : 'text-slate-400 hover:text-slate-600'}`}
                                                >
                                                    AI Chat
                                                </button>
                                                <button
                                                    onClick={() => setActiveTab('transcript')}
                                                    className={`text-[10px] py-2 px-3 transition-colors ${activeTab === 'transcript' ? 'text-slate-900 font-medium border-b-2 border-emerald-500' : 'text-slate-400 hover:text-slate-600'}`}
                                                >
                                                    Transcript
                                                </button>
                                                <button
                                                    onClick={() => setActiveTab('customer-journey')}
                                                    className={`text-[10px] py-2 px-3 transition-colors ${activeTab === 'customer-journey' ? 'text-slate-900 font-medium border-b-2 border-emerald-500' : 'text-slate-400 hover:text-slate-600'}`}
                                                >
                                                    Customer Journey
                                                </button>
                                                <Search className="w-3 h-3 text-slate-400 ml-auto" />
                                            </div>

                                            {/* AI Chat Content */}
                                            {activeTab === 'ai-chat' && (
                                                <div className="p-4 flex-1 flex flex-col min-h-[400px]">
                                                    <h3 className="text-sm font-semibold text-slate-900 mb-2">Hello, Ashley</h3>
                                                    <p className="text-[10px] text-emerald-600 mb-3 leading-relaxed">
                                                        I am your AI Assistant who can help you answer any question from your meeting, generate content and more.
                                                    </p>
                                                    <p className="text-[9px] text-slate-500 mb-3">Try asking...</p>

                                                    {/* Suggested Prompts */}
                                                    <div className="space-y-2 mb-4">
                                                        <div className="flex items-center gap-2 p-2.5 bg-white border border-slate-200 rounded-lg hover:border-emerald-300 cursor-pointer transition-colors">
                                                            <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                                                            <span className="text-[10px] text-slate-700">Call Scoring</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 p-2.5 bg-white border border-slate-200 rounded-lg hover:border-emerald-300 cursor-pointer transition-colors">
                                                            <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                                                            <span className="text-[10px] text-slate-700">Prospect Analysis</span>
                                                        </div>
                                                    </div>

                                                    {/* Spacer to push chat input to bottom */}
                                                    <div className="flex-1" />

                                                    {/* Chat Input */}
                                                    <div className="flex items-center gap-3 px-4 py-3 bg-slate-100 rounded-full">
                                                        <Paperclip className="w-4 h-4 text-slate-400" />
                                                        <span className="text-[8px] text-slate-500 flex-1">Ask Callix about your deals, meetings, or anything else</span>
                                                        <div className="flex gap-1.5">
                                                            <button className="w-7 h-7 bg-gradient-to-br from-teal-600 to-teal-700 rounded-lg flex items-center justify-center shadow-sm">
                                                                <Mic className="w-3.5 h-3.5 text-white" />
                                                            </button>
                                                            <button className="w-7 h-7 bg-gradient-to-br from-teal-700 to-teal-800 rounded-lg flex items-center justify-center shadow-sm">
                                                                <ArrowRight className="w-3.5 h-3.5 text-white rotate-[-90deg]" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <p className="text-[8px] text-slate-400 text-center mt-2">We're not perfect, yet. Callix may occasionally make mistakes.</p>
                                                </div>
                                            )}

                                            {/* Transcript Content */}
                                            {activeTab === 'transcript' && (
                                                <div className="p-4 space-y-4 flex-1 overflow-y-auto min-h-[400px]">
                                                    {/* Message 1 */}
                                                    <div className="flex gap-3 w-full">
                                                        <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-[8px] font-bold text-emerald-700 shrink-0">AL</div>
                                                        <div className="flex-1">
                                                            <div className="text-[11px] font-medium text-slate-900">Ashley Lockheart <span className="text-emerald-500">00:00</span></div>
                                                            <p className="text-[11px] text-slate-600 leading-relaxed">Thanks for taking the time to chat with me today, Lucas. I understand you're looking to scale your consulting business?</p>
                                                        </div>
                                                    </div>
                                                    {/* Message 2 */}
                                                    <div className="flex gap-3 w-full">
                                                        <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-[8px] font-bold text-amber-700 shrink-0">LB</div>
                                                        <div className="flex-1">
                                                            <div className="text-[11px] font-medium text-slate-900">Lucas Berger <span className="text-amber-500">00:05</span></div>
                                                            <p className="text-[11px] text-slate-600 leading-relaxed">Yes, exactly. I've been doing pretty well locally, but I'm hitting a ceiling.</p>
                                                        </div>
                                                    </div>
                                                    {/* Message 3 */}
                                                    <div className="flex gap-3 w-full">
                                                        <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-[8px] font-bold text-emerald-700 shrink-0">AL</div>
                                                        <div className="flex-1">
                                                            <div className="text-[11px] font-medium text-slate-900">Ashley Lockheart <span className="text-emerald-500">00:09</span></div>
                                                            <p className="text-[11px] text-slate-600 leading-relaxed">I see. What's your current monthly revenue looking like?</p>
                                                        </div>
                                                    </div>
                                                    {/* Message 4 */}
                                                    <div className="flex gap-3 w-full">
                                                        <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-[8px] font-bold text-amber-700 shrink-0">LB</div>
                                                        <div className="flex-1">
                                                            <div className="text-[11px] font-medium text-slate-900">Lucas Berger <span className="text-amber-500">00:12</span></div>
                                                            <p className="text-[11px] text-slate-600 leading-relaxed">Right now I'm averaging around $15K per month, but it's inconsistent. Some months are great, others not so much.</p>
                                                        </div>
                                                    </div>
                                                    {/* Message 5 */}
                                                    <div className="flex gap-3 w-full">
                                                        <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-[8px] font-bold text-emerald-700 shrink-0">AL</div>
                                                        <div className="flex-1">
                                                            <div className="text-[11px] font-medium text-slate-900">Ashley Lockheart <span className="text-emerald-500">00:19</span></div>
                                                            <p className="text-[11px] text-slate-600 leading-relaxed">And what would you consider a successful outcome from working together?</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Customer Journey Content */}
                                            {activeTab === 'customer-journey' && (
                                                <div className="p-4 flex-1 overflow-y-auto min-h-[400px]">
                                                    <h3 className="text-sm font-semibold text-slate-900 mb-1">Customer Journey</h3>
                                                    <p className="text-[11px] text-slate-500 mb-4">Here is the journey of the customer from the initial contact to the current status.</p>

                                                    {/* Journey Timeline */}
                                                    <div className="space-y-3 w-full">
                                                        {/* Booked */}
                                                        <div className="flex gap-3 w-full">
                                                            <div className="flex flex-col items-center">
                                                                <Phone className="w-3.5 h-3.5 text-slate-400" />
                                                                <div className="w-px h-full bg-slate-200 mt-1" />
                                                            </div>
                                                            <div className="flex-1">
                                                                <div className="text-[11px] font-medium text-slate-900">Booked <span className="text-emerald-500">2025-11-16 14:10:34</span></div>
                                                                <p className="text-[11px] text-slate-500">Strategy Call with Ashley Lockheart</p>
                                                            </div>
                                                        </div>
                                                        {/* Reached */}
                                                        <div className="flex gap-3 w-full">
                                                            <div className="flex flex-col items-center">
                                                                <Download className="w-3.5 h-3.5 text-slate-400" />
                                                                <div className="w-px h-full bg-slate-200 mt-1" />
                                                            </div>
                                                            <div className="flex-1">
                                                                <div className="text-[11px] font-medium text-slate-900">Reached <span className="text-emerald-500">2025-11-16 07:26:54</span></div>
                                                                <p className="text-[11px] text-slate-500">qualified application stage</p>
                                                            </div>
                                                        </div>
                                                        {/* Opted in */}
                                                        <div className="flex gap-3 w-full">
                                                            <div className="flex flex-col items-center">
                                                                <FileText className="w-3.5 h-3.5 text-slate-400" />
                                                                <div className="w-px h-full bg-slate-200 mt-1" />
                                                            </div>
                                                            <div className="flex-1">
                                                                <div className="text-[11px] font-medium text-slate-900">Opted in <span className="text-emerald-500">2025-11-16 07:26:41</span></div>
                                                            </div>
                                                        </div>
                                                        {/* Achieved */}
                                                        <div className="flex gap-3 w-full">
                                                            <div className="flex flex-col items-center">
                                                                <MousePointer className="w-3.5 h-3.5 text-slate-400" />
                                                                <div className="w-px h-full bg-slate-200 mt-1" />
                                                            </div>
                                                            <div className="flex-1">
                                                                <div className="text-[11px] font-medium text-slate-900">Achieved <span className="text-emerald-500">2025-11-16 07:26:41</span></div>
                                                                <p className="text-[11px] text-slate-500">clicked</p>
                                                            </div>
                                                        </div>
                                                        {/* Clicked */}
                                                        <div className="flex gap-3 w-full">
                                                            <div className="flex flex-col items-center">
                                                                <Link className="w-3.5 h-3.5 text-slate-400" />
                                                            </div>
                                                            <div className="flex-1">
                                                                <div className="text-[11px] font-medium text-slate-900">Clicked <span className="text-emerald-500">2025-11-08 21:26:21</span></div>
                                                                <p className="text-[11px] text-slate-500">10/17 CONTROL | DQ TEST 1% | s...</p>
                                                                <p className="text-[11px] text-slate-500">Tracked URL: <span className="text-emerald-500 hover:underline cursor-pointer">Open Link</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* STEP 3 VISUAL: Marketing Intelligence */}
                        <div ref={step3Ref} className="min-h-screen lg:min-h-[120vh] flex items-center justify-center py-24 lg:py-0">
                            <div className="w-full relative group px-4 lg:px-0">
                                {/* Visual Mockup */}
                                <div className="bg-slate-50 rounded-2xl border border-slate-200 aspect-square md:aspect-[4/3] overflow-hidden relative shadow-xl transition-all flex items-center justify-center p-8">

                                    {/* Instagram Ad Mockup */}
                                    <div className="w-full max-w-[280px] bg-white rounded-xl border border-slate-200 shadow-lg overflow-hidden scale-100 group-hover:scale-105 transition-transform duration-300">

                                        {/* Instagram Header */}
                                        <div className="p-3 flex items-center gap-3 border-b border-slate-100">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                                                <img src="/callix-ai-icon.png" alt="Callix" className="w-6 h-6 object-contain" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-xs font-bold text-slate-900">callix.io</div>
                                                <div className="text-[10px] text-slate-400">Sponsored</div>
                                            </div>
                                            <MoreHorizontal className="w-4 h-4 text-slate-400" />
                                        </div>

                                        {/* Ad Creative Image */}
                                        <div className="relative">
                                            <img
                                                src="/ad-creative.png"
                                                alt="Ad Creative"
                                                className="w-full h-auto object-contain"
                                            />
                                        </div>

                                        {/* Instagram Actions */}
                                        <div className="p-3 border-t border-slate-100">
                                            <div className="flex items-center gap-4 mb-2">
                                                <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                                <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                                                <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                                                <svg className="w-5 h-5 text-slate-700 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
                                            </div>
                                            <div className="text-[10px] text-slate-500">2,847 likes</div>
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

export default HowItWorks;
