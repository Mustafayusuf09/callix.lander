
import React, { useState } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Product', hasDropdown: false },
    { name: 'How it works', hasDropdown: false },
    { name: 'Why callix?', hasDropdown: false },
    { name: 'FAQ’S', hasDropdown: false },
  ];

  return (
    <div className="relative z-50 flex flex-col font-sans shadow-sm">
      {/* Announcement Banner */}
      <div className="bg-[#166534] text-white text-[13px] font-medium py-2.5 px-4 text-center relative z-50">
        <a href="#" className="inline-flex items-center justify-center gap-1 hover:opacity-90 transition-opacity">
          Introducing Callix: your AI engine that listens to sales calls and generates scroll-stopping ads.
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Main Navbar - Solid White */}
      <nav className="bg-white border-b border-slate-100 py-4 w-full relative z-50">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center cursor-pointer group">
            <img
              src="/logos/callix-logo.png"
              alt="Callix"
              className="h-12 object-contain"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button key={link.name} className="flex items-center gap-1 text-[15px] font-medium text-slate-600 hover:text-slate-900 transition-colors">
                {link.name}
                {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5 mt-0.5 opacity-60 stroke-[2.5]" />}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-[15px] font-medium text-slate-600 hover:text-slate-900 transition-colors px-3">
              Log In
            </button>
            <button className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-[14px] font-medium rounded-full transition-colors shadow-lg shadow-slate-900/10">
              Book Demo
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-slate-800" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 flex flex-col gap-4 shadow-xl md:hidden">
            {navLinks.map((link) => (
              <a key={link.name} href="#" className="text-lg font-medium text-slate-700 py-2 border-b border-slate-50">
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-2">
              <a href="#" className="text-lg font-medium text-slate-900 py-2">Log In</a>
              <button className="w-full py-3 bg-slate-900 text-white rounded-full font-medium">Book Demo</button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
