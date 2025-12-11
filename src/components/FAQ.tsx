
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How is Callix different from Gong or Chorus?",
    answer: "Traditional conversation intelligence platforms focus primarily on sales coaching. Callix connects your sales intelligence directly to your marketing strategy—showing you which ads to run, which customers to target, and which campaigns actually drive revenue, not just which reps need coaching."
  },
  {
    question: "Is this difficult to implement?",
    answer: "No. One-click integration with your meeting platform (Zoom/Google Meet). Connect your CRM. You're analyzing calls within 10 minutes. Our customer success team handles the heavy lifting during onboarding."
  },
  {
    question: "Will this work for my industry?",
    answer: "Callix works for any business with sales calls."
  },
  {
    question: "How much time does this require from my team?",
    answer: "Our AI handles all the analysis automatically. Most teams find they save time by eliminating lengthy feedback meetings between sales and marketing."
  },
  {
    question: "Does this replace our CRM?",
    answer: "No. Callix enhances your existing CRM by automatically logging calls and enriching contact records with intelligence your CRM can't capture on its own."
  },
  {
    question: "What about call recording compliance?",
    answer: "Callix includes built-in consent management for call recording. We're compliant with regulations across all major markets including GDPR, CCPA, and state-specific recording laws."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-slate-900 mb-3 sm:mb-4">Frequently Asked Questions</h2>
          <p className="text-sm sm:text-base text-slate-500 font-light">Everything you need to know about the platform.</p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-lg overflow-hidden transition-all duration-200 hover:shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 sm:p-6 text-left"
              >
                <span className={`text-xs sm:text-sm font-semibold transition-colors pr-4 ${openIndex === index ? 'text-emerald-700' : 'text-slate-900'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-4 h-4 text-emerald-500 shrink-0" />
                ) : (
                  <Plus className="w-4 h-4 text-slate-400 shrink-0" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="p-4 sm:p-6 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
