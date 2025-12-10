
import React from 'react';
import { Lock } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-slate-100 pt-24 pb-12 font-sans">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-24">

                    {/* Brand Column */}
                    <div className="lg:col-span-2 flex flex-col items-start">
                        {/* Logo */}
                        <div className="mb-6 select-none">
                            <img
                                src="/logos/callix-logo.png"
                                alt="Callix"
                                className="h-14 object-contain"
                            />
                        </div>

                        <p className="text-[15px] text-slate-500 leading-relaxed mb-10 max-w-[280px] font-light">
                            Executive-grade conversation intelligence for modern revenue teams.
                        </p>

                        {/* SOC Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-md shadow-sm">
                            <Lock className="w-3.5 h-3.5 text-slate-700" />
                            <span className="text-xs font-bold text-slate-900">SOC-2 Type II</span>
                        </div>
                    </div>

                    {/* Spacer Column to push links to the right */}
                    <div className="hidden lg:block lg:col-span-1"></div>

                    {/* Product Column */}
                    <div className="lg:col-span-1">
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-8">PRODUCT</h4>
                        <ul className="space-y-5">
                            {["Features", "Integrations", "Enterprise", "Security"].map(link => (
                                <li key={link}>
                                    <a href="#" className="text-[15px] text-slate-500 hover:text-emerald-600 transition-colors font-normal">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div className="lg:col-span-1">
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-8">COMPANY</h4>
                        <ul className="space-y-5">
                            {["About Us", "Careers", "Blog", "Contact"].map(link => (
                                <li key={link}>
                                    <a href="#" className="text-[15px] text-slate-500 hover:text-emerald-600 transition-colors font-normal">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect Column */}
                    <div className="lg:col-span-1">
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-8">CONNECT</h4>
                        <ul className="space-y-5">
                            {["Twitter / X", "LinkedIn"].map(link => (
                                <li key={link}>
                                    <a href="#" className="text-[15px] text-slate-500 hover:text-emerald-600 transition-colors font-normal">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-slate-100 text-sm font-light text-slate-400">
                    <p className="mb-4 md:mb-0">&copy; 2025 Callix Inc. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-slate-600 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
