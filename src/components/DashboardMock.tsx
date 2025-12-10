import React from 'react';
import { Play, Zap, Calendar, ChevronDown, Mic, Video, MousePointerClick } from 'lucide-react';

const DashboardMock: React.FC = () => {
    return (
        <div className="relative group perspective-1000 w-full max-w-[800px] mx-auto lg:ml-auto">
            {/* Floating Card Container */}
            <div className="bg-white rounded-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] border border-slate-200/60 overflow-hidden">

                {/* Fake Browser Toolbar */}
                <div className="h-9 bg-[#F9FAFB] border-b border-slate-100 flex items-center justify-between px-4">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row h-[480px]">
                    {/* Main Content Area */}
                    <div className="flex-1 p-6 overflow-y-auto bg-white relative">

                        {/* Header */}
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-emerald-600 flex items-center justify-center text-white font-bold text-xs shadow-sm">C</div>
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-900">Campaign #1042</h3>
                                    <p className="text-[10px] text-slate-500">Target: SaaS Founders</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button className="text-[11px] font-medium px-3 py-1.5 text-slate-600 hover:bg-slate-50 rounded">Edit</button>
                                <button className="text-[11px] font-medium px-3 py-1.5 bg-[#0F172A] text-white rounded shadow-sm hover:bg-slate-800">Launch Ads</button>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 mb-5">
                            <h4 className="text-xs font-semibold text-slate-900">Workflow: Call to Ad</h4>
                        </div>

                        {/* Input Source Section */}
                        <div className="mb-6">
                            <h5 className="text-[11px] font-medium text-slate-900 mb-2">Input Source</h5>
                            <div className="w-full bg-[#F8FAFC] rounded-lg border border-slate-100 p-3">
                                <div className="flex gap-4 mb-3">
                                    <div className="w-1/2">
                                        <label className="text-[9px] uppercase font-bold text-slate-400 tracking-wider mb-1 block">Call Date</label>
                                        <div className="bg-white border border-slate-200 rounded px-2 py-1.5 text-[11px] text-slate-700 flex justify-between items-center shadow-sm">
                                            <span>Today, 2:00 PM</span>
                                            <Calendar className="w-3 h-3 text-slate-400" />
                                        </div>
                                    </div>
                                    <div className="w-1/2">
                                        <label className="text-[9px] uppercase font-bold text-slate-400 tracking-wider mb-1 block">Duration</label>
                                        <div className="bg-white border border-slate-200 rounded px-2 py-1.5 text-[11px] text-slate-700 flex justify-between items-center shadow-sm">
                                            <span>45 mins</span>
                                            <ChevronDown className="w-3 h-3 text-slate-400" />
                                        </div>
                                    </div>
                                </div>

                                {/* Line Items */}
                                <div className="space-y-1">
                                    {[
                                        { name: 'Raw Recording', type: 'Audio', status: 'Uploaded' },
                                        { name: 'Transcript', type: 'Text', status: 'Processed' },
                                        { name: 'Key Moments', type: 'AI Analysis', status: 'Extracted', magic: true },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center justify-between py-1.5 border-b border-slate-100 last:border-0 border-dashed">
                                            <div className="flex items-center gap-1.5">
                                                <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded flex items-center gap-1 ${item.magic ? 'text-emerald-700 bg-emerald-50' : 'text-slate-600 bg-slate-100'}`}>
                                                    {item.name}
                                                    {item.magic && <Zap className="w-2 h-2" />}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-4 text-[9px]">
                                                <div className="flex items-center gap-1 text-slate-500 w-16">
                                                    {item.name === 'Raw Recording' ? <Mic className="w-2.5 h-2.5" /> : <MousePointerClick className="w-2.5 h-2.5" />}
                                                    {item.type}
                                                </div>
                                                <span className="text-slate-600 font-medium w-16 text-right">{item.status}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Generated Output Section */}
                        <div className="relative">
                            {/* Overlay to imply next step */}
                            <div className="absolute inset-0 bg-white/40 z-10 pointer-events-none"></div>

                            <h5 className="text-[11px] font-medium text-slate-900 mb-2">Generated Assets</h5>
                            <div className="w-full bg-[#F8FAFC] rounded-lg border border-slate-100 p-3">
                                <div className="flex gap-4 mb-3">
                                    <div className="w-1/2">
                                        <label className="text-[9px] uppercase font-bold text-slate-400 tracking-wider mb-1 block">Platform</label>
                                        <div className="bg-white border border-slate-200 rounded px-2 py-1.5 text-[11px] text-slate-700 flex justify-between items-center shadow-sm">
                                            <span>Facebook / IG</span>
                                            <ChevronDown className="w-3 h-3 text-slate-400" />
                                        </div>
                                    </div>
                                    <div className="w-1/2">
                                        <label className="text-[9px] uppercase font-bold text-slate-400 tracking-wider mb-1 block">Format</label>
                                        <div className="bg-white border border-slate-200 rounded px-2 py-1.5 text-[11px] text-slate-700 flex justify-between items-center shadow-sm">
                                            <span>Vertical Video</span>
                                            <ChevronDown className="w-3 h-3 text-slate-400" />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    {[
                                        { name: 'Video Hook', type: 'Variant A', status: 'Ready' },
                                        { name: 'Video Body', type: 'Variant A', status: 'Ready' },
                                        { name: 'Ad Copy', type: 'Gen AI', status: 'Written', magic: true },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center justify-between py-1.5 border-b border-slate-100 last:border-0 border-dashed">
                                            <div className="flex items-center gap-1.5">
                                                <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded flex items-center gap-1 ${item.magic ? 'text-emerald-700 bg-emerald-50' : 'text-teal-700 bg-teal-50'}`}>
                                                    {item.name}
                                                    {item.magic && <Zap className="w-2 h-2" />}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-4 text-[9px]">
                                                <div className="flex items-center gap-1 text-slate-500 w-16">
                                                    <Video className="w-2.5 h-2.5" />
                                                    {item.type}
                                                </div>
                                                <span className="text-slate-600 font-medium w-16 text-right">{item.status}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar (Right) */}
                    <div className="hidden sm:block w-[240px] bg-[#F8FAFC] border-l border-slate-100 p-5 relative">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-5 h-5 bg-emerald-600 rounded text-[9px] flex items-center justify-center text-white font-bold">C</div>
                            <div>
                                <span className="text-xs font-semibold text-slate-900 block leading-tight">Callix AI</span>
                                <span className="text-[9px] text-slate-400 block">Status: Optimizing</span>
                            </div>
                        </div>

                        <div className="space-y-4 mt-6">
                            <div>
                                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-2">Performance Est.</p>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-[10px] items-start">
                                        <span className="text-slate-600">Est. CTR</span>
                                        <span className="text-slate-900 font-medium">2.4%</span>
                                    </div>
                                    <div className="bg-emerald-50 rounded p-1.5 -mx-1.5">
                                        <div className="flex justify-between text-[10px] items-start mb-0.5">
                                            <span className="text-emerald-900 font-medium">Lead Quality</span>
                                            <span className="text-emerald-700">High</span>
                                        </div>
                                        <div className="w-full h-1 bg-emerald-100 rounded-full overflow-hidden">
                                            <div className="w-3/4 h-full bg-emerald-400"></div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between text-[10px] items-start">
                                        <span className="text-slate-600">Target CPA</span>
                                        <span className="text-slate-900 font-medium">&lt; $25.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-3 border-t border-slate-200">
                                <div className="flex justify-between text-[10px] mb-1">
                                    <span className="text-slate-500">Daily Budget</span>
                                    <span className="text-slate-500">Auto-scale</span>
                                </div>
                                <div className="flex justify-between text-xs font-semibold text-slate-900">
                                    <span>Projected Leads</span>
                                    <span>45 / day</span>
                                </div>
                            </div>
                        </div>

                        {/* Signature Block */}
                        <div className="absolute bottom-6 left-5 right-5">
                            <div className="bg-emerald-50 border border-emerald-100 rounded p-2 mb-4">
                                <p className="text-[9px] text-emerald-800 leading-tight">
                                    <span className="font-bold">Optimization:</span> Active<br />
                                    <span className="font-bold">Creative:</span> Auto-testing
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="group/play cursor-pointer">
                    <div className="w-20 h-20 bg-slate-900/90 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm transition-transform duration-300 group-hover/play:scale-110">
                        <Play className="w-8 h-8 text-white ml-1 fill-white" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardMock;