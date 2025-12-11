import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { DashboardVisual } from './DashboardVisual';

const Hero: React.FC = () => {
    return (
        <section className="relative w-full bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-20 sm:pt-20 sm:pb-28 lg:pt-32 lg:pb-44">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-12 items-center">
                    {/* Left Content */}
                    <div className="max-w-xl z-10 text-center lg:text-left mx-auto lg:mx-0">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.15] font-serif font-normal text-gray-900 tracking-[-0.02em] mb-4 sm:mb-6">
                            Turn Your Sales Calls Into{' '}
                            <span className="lg:block">Scroll Stopping Ads</span>
                        </h1>

                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-md mx-auto lg:mx-0">
                            Callix analyzes your sales calls, extracts the exact language that drives intent, and turns it into ad copy and video scripts proven to convert.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center lg:justify-start gap-3 mb-8 sm:mb-12">
                            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 bg-white border border-gray-300 rounded-full text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors">
                                <Play className="w-4 h-4 fill-gray-900" />
                                Watch Demo
                            </button>

                            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 bg-gray-900 rounded-full text-sm font-medium text-white hover:bg-gray-800 transition-colors">
                                Book Your Demo
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="max-w-md relative pl-4 sm:pl-5 mx-auto lg:mx-0 text-left">
                            {/* Vertical green line */}
                            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-green-300 via-green-400 to-green-300 rounded-full"></div>

                            <p className="text-sm sm:text-base text-gray-600 italic leading-relaxed mb-4 sm:mb-5">
                                "Callix surfaced the real reasons our best customers buy — and turned it into messaging that produced $5M off $240k in spend."
                            </p>

                            <div className="flex items-center gap-3">
                                <img
                                    src="/logos/founder.jpg"
                                    alt="Malcolm Bryant"
                                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-gray-200"
                                />
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">
                                        Malcolm Bryant
                                    </p>
                                    <p className="text-[10px] sm:text-[11px] text-gray-500 uppercase tracking-wide leading-tight">
                                        Founder • Former Head of Performance Marketing @ Whop.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="w-full relative lg:pl-8 lg:order-last">
                        {/* Green gradient glow behind video */}
                        <div
                            className="absolute -top-20 sm:-top-40 -right-10 sm:-right-10 w-[400px] sm:w-[700px] h-[350px] sm:h-[600px] pointer-events-none"
                            style={{
                                background: 'radial-gradient(ellipse at center, rgba(16, 185, 129, 0.5) 0%, rgba(16, 185, 129, 0.35) 30%, rgba(16, 185, 129, 0.15) 60%, transparent 85%)',
                                filter: 'blur(50px)',
                            }}
                        />
                        <DashboardVisual />
                    </div>
                </div>

                {/* Footer / Social Proof Text */}
                <div className="text-center mt-10 sm:mt-12 lg:mt-16">
                    <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3 font-medium">Trusted by revenue teams at</p>
                    <p className="text-[9px] sm:text-[10px] lg:text-xs font-bold tracking-[0.1em] sm:tracking-[0.15em] text-gray-400 uppercase px-2">
                        Whop.com • Commission Club • YouTube Portal • The Sovereign Man • Momentum.io
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
