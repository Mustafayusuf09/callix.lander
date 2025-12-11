
import React from 'react';
import { Link } from 'react-router-dom';
import { Lock } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-slate-100 pt-12 sm:pt-16 lg:pt-24 pb-8 sm:pb-12 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-10 lg:gap-8 mb-12 sm:mb-16 lg:mb-24">

                    {/* Brand Column */}
                    <div className="col-span-2 sm:col-span-2 lg:col-span-2 flex flex-col items-start">
                        {/* Logo */}
                        <div className="mb-4 sm:mb-6 select-none">
                            <img
                                src="/logos/callix-logo.png"
                                alt="Callix"
                                className="h-10 sm:h-12 lg:h-14 object-contain"
                            />
                        </div>

                        <p className="text-sm sm:text-[15px] text-slate-500 leading-relaxed mb-6 sm:mb-10 max-w-[280px] font-light">
                            Executive-grade conversation intelligence for modern revenue teams.
                        </p>

                        {/* SOC Badge */}
                        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-slate-200 rounded-md shadow-sm">
                            <Lock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-700" />
                            <span className="text-[10px] sm:text-xs font-bold text-slate-900">SOC-2 Type II</span>
                        </div>
                    </div>

                    {/* Spacer Column to push links to the right */}
                    <div className="hidden lg:block lg:col-span-1"></div>

                    {/* Product Column */}
                    <div className="lg:col-span-1">
                        <h4 className="text-[10px] sm:text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 sm:mb-6 lg:mb-8">PRODUCT</h4>
                        <ul className="space-y-3 sm:space-y-4 lg:space-y-5">
                            {["Features", "Integrations", "Enterprise", "Security"].map(link => (
                                <li key={link}>
                                    <a href="#" className="text-sm sm:text-[15px] text-slate-500 hover:text-emerald-600 transition-colors font-normal">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div className="lg:col-span-1">
                        <h4 className="text-[10px] sm:text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 sm:mb-6 lg:mb-8">COMPANY</h4>
                        <ul className="space-y-3 sm:space-y-4 lg:space-y-5">
                            {["About Us", "Careers", "Blog", "Contact"].map(link => (
                                <li key={link}>
                                    <a href="#" className="text-sm sm:text-[15px] text-slate-500 hover:text-emerald-600 transition-colors font-normal">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect Column */}
                    <div className="lg:col-span-1">
                        <h4 className="text-[10px] sm:text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 sm:mb-6 lg:mb-8">CONNECT</h4>
                        <ul className="space-y-3 sm:space-y-4 lg:space-y-5">
                            {["Twitter / X", "LinkedIn"].map(link => (
                                <li key={link}>
                                    <a href="#" className="text-sm sm:text-[15px] text-slate-500 hover:text-emerald-600 transition-colors font-normal">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-6 sm:pt-8 lg:pt-10 border-t border-slate-100 text-xs sm:text-sm font-light text-slate-400 gap-4">
                    <p className="text-center md:text-left">&copy; 2025 Callix Inc. All rights reserved.</p>
                    <div className="flex gap-4 sm:gap-6 lg:gap-8">
                        <Link to="/privacy" className="hover:text-slate-600 transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-slate-600 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
