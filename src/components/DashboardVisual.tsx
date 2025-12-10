import React from 'react';
import { Play } from 'lucide-react';

export const DashboardVisual: React.FC = () => {
    return (
        <div className="relative w-full max-w-[580px] mx-auto lg:mx-0 lg:ml-auto">
            {/* Video Container */}
            <div className="relative aspect-video bg-white rounded-xl shadow-xl border border-gray-200/80 overflow-hidden group cursor-pointer transition-transform hover:scale-[1.01]">
                {/* Mock UI Background */}
                <div className="absolute inset-0 flex flex-col opacity-40 pointer-events-none select-none">
                    {/* Header */}
                    <div className="h-10 border-b border-gray-100 flex items-center px-4 gap-4 bg-gray-50/50">
                        <div className="w-16 h-1.5 bg-gray-300 rounded-full"></div>
                        <div className="flex-1"></div>
                        <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                    </div>
                    <div className="flex-1 flex overflow-hidden">
                        {/* Sidebar */}
                        <div className="w-32 border-r border-gray-100 p-3 space-y-3 hidden sm:block bg-gray-50/30">
                            <div className="w-full h-1.5 bg-gray-200 rounded-full"></div>
                            <div className="w-3/4 h-1.5 bg-gray-100 rounded-full"></div>
                            <div className="w-5/6 h-1.5 bg-gray-100 rounded-full"></div>
                            <div className="w-4/5 h-1.5 bg-gray-100 rounded-full mt-6"></div>
                            <div className="w-2/3 h-1.5 bg-gray-100 rounded-full"></div>
                        </div>
                        {/* Main Content */}
                        <div className="flex-1 p-4 space-y-4 bg-white">
                            <div className="flex justify-between items-center">
                                <div className="w-1/3 h-4 bg-gray-200 rounded"></div>
                                <div className="w-16 h-6 bg-gray-100 rounded"></div>
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                                <div className="h-16 bg-gray-50 rounded-lg border border-gray-100"></div>
                                <div className="h-16 bg-gray-50 rounded-lg border border-gray-100"></div>
                                <div className="h-16 bg-gray-50 rounded-lg border border-gray-100"></div>
                            </div>
                            <div className="h-28 bg-gray-50 rounded-lg border border-gray-100 w-full flex items-center justify-center">
                                <div className="w-full h-full p-3 flex items-end gap-1.5 opacity-50">
                                    <div className="w-full bg-gray-200 rounded-t h-[40%]"></div>
                                    <div className="w-full bg-gray-300 rounded-t h-[70%]"></div>
                                    <div className="w-full bg-gray-200 rounded-t h-[50%]"></div>
                                    <div className="w-full bg-gray-300 rounded-t h-[80%]"></div>
                                    <div className="w-full bg-gray-200 rounded-t h-[60%]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Play Overlay */}
                <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px] flex items-center justify-center transition-all duration-300 group-hover:bg-white/20">
                    <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-6 h-6 text-gray-900 fill-current ml-0.5" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardVisual;
