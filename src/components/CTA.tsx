
import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white via-emerald-50/30 to-white relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl lg:text-5xl font-serif text-slate-900 mb-6 tracking-tight">
          Ready To See Your Revenue Intelligence?
        </h2>

        <p className="text-lg text-slate-500 font-light mb-10 max-w-2xl mx-auto">
          Book a personalized demo and we'll show you:
        </p>

        <ul className="max-w-xl mx-auto space-y-4 mb-12 text-left bg-white/60 rounded-2xl p-6 border border-slate-200 backdrop-blur-sm shadow-sm">
          {[
            "Which customer profiles in your pipeline have the highest close rates",
            "The exact messaging patterns from your best calls",
            "How much revenue you're leaving on the table"
          ].map((item, i) => <li key={i} className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shrink-0 shadow-sm shadow-emerald-200 mt-0.5">
              <Check className="w-3 h-3 text-white" strokeWidth={3} />
            </div>
            <span className="text-slate-600 font-normal leading-snug">{item}</span>
          </li>
          )}
        </ul>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="group relative px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-medium transition-all shadow-lg shadow-emerald-200 hover:shadow-emerald-300 flex items-center gap-2 text-sm md:text-base">
            Schedule Your Demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
