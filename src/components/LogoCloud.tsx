import React from 'react';

const LogoCloud: React.FC = () => {
    return (
        <section className="pb-24 border-b border-slate-100/50">
            <div className="max-w-7xl mx-auto px-6 text-center">

                <p className="text-sm font-semibold text-slate-500 mb-10 tracking-wide uppercase">Trusted by revenue teams at</p>

                {/* Logo Grid */}
                <div className="flex flex-wrap justify-center gap-x-12 gap-y-10 items-center max-w-5xl mx-auto grayscale opacity-80">

                    {/* Whop.com */}
                    <div className="flex items-center gap-2 hover:opacity-100 transition-opacity cursor-default">
                        <div className="font-sans font-black text-2xl text-slate-900 tracking-tighter">Whop</div>
                    </div>

                    {/* Commission Club */}
                    <div className="flex items-center gap-2 hover:opacity-100 transition-opacity cursor-default">
                        <div className="font-serif font-bold text-xl text-slate-900 italic">Commission Club</div>
                    </div>

                    {/* framelabs.so */}
                    <div className="flex items-center gap-2 hover:opacity-100 transition-opacity cursor-default">
                        <div className="font-mono font-medium text-lg text-slate-800 tracking-tight">framelabs.so</div>
                    </div>

                    {/* The Sovereign Man */}
                    <div className="flex items-center gap-2 hover:opacity-100 transition-opacity cursor-default">
                        <div className="w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center text-white font-serif font-bold text-xs">S</div>
                        <div className="font-serif font-bold text-lg text-slate-900 uppercase tracking-widest text-[10px]">The Sovereign Man</div>
                    </div>

                    {/* Momentum.io */}
                    <div className="flex items-center gap-1.5 hover:opacity-100 transition-opacity cursor-default">
                        <div className="w-5 h-5 bg-blue-600 rounded-sm skew-x-[-10deg]"></div>
                        <div className="font-sans font-bold text-xl text-slate-900 tracking-tight">Momentum.io</div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default LogoCloud;