
import React from 'react';
import {
  MicrophoneIcon,
  IdentificationIcon,
  PhotoIcon,
  PresentationChartLineIcon,
  MagnifyingGlassIcon,
  ArrowTrendingUpIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    title: "Conversation Intelligence",
    description: "See every insight buried in your sales calls. AI transcribes with 99.2% accuracy and surfaces topics, questions, and engagement patterns automatically.",
    icon: MicrophoneIcon,
  },
  {
    title: "Customer Profile Intelligence",
    description: "Understand exactly who converts and why. Automatic customer categorization with conversion, AOV, and LTV insights by profile.",
    icon: IdentificationIcon,
  },
  {
    title: "Ad Creative Generation",
    description: "Turn real buyer language into high-performing ads. AI transforms call insights into targeted copy, scripts, and campaign messaging that actually converts.",
    icon: PhotoIcon,
  },
  {
    title: "Sales Performance Tools",
    description: "Give your reps the data they need to win more. Benchmark performance, surface objections, and reveal patterns that drive more consistent closes.",
    icon: PresentationChartLineIcon,
  },
  {
    title: "AI Search",
    description: "Ask anything and get instant answers from your entire call library. Conversational search finds trends, competitor mentions, and insights you can drop straight into briefs.",
    icon: MagnifyingGlassIcon,
  },
  {
    title: "Attribution & Analytics",
    description: "Know exactly which channels drive real revenue. Full-funnel UTM tracking with CAC, lead quality, and ROI dashboards tied back to closed deals.",
    icon: ArrowTrendingUpIcon,
  }
];

const ProductSuite: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-white border-b border-slate-100 relative overflow-hidden">

      {/* Radar Illustration (Absolute Positioned on Right) */}
      <div className="absolute top-0 right-[-10%] md:right-0 w-[800px] h-[800px] pointer-events-none opacity-100 hidden md:block">
        <svg viewBox="0 0 800 800" className="w-full h-full">
          {/* Center Point */}
          <circle cx="400" cy="400" r="4" fill="#cbd5e1" />

          {/* Concentric Circles (Dashed) */}
          <circle cx="400" cy="400" r="150" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="400" cy="400" r="300" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="400" cy="400" r="450" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />

          {/* Radial Lines */}
          <line x1="400" y1="400" x2="800" y2="0" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="400" y1="400" x2="800" y2="800" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="400" y1="400" x2="0" y2="800" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="400" y1="400" x2="0" y2="0" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="400" y1="400" x2="850" y2="400" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />

          {/* Colored Dots (Planets) */}
          {/* Inner Orbit */}
          <circle cx="506" cy="294" r="6" fill="#d8b4fe" /> {/* Purple */}

          {/* Middle Orbit */}
          <circle cx="188" cy="400" r="6" fill="#cbd5e1" /> {/* Grey */}

          {/* Outer Orbit */}
          <circle cx="612" cy="612" r="6" fill="#bae6fd" /> {/* Blue */}
          <circle cx="700" cy="100" r="6" fill="#d8b4fe" /> {/* Purple Top Right */}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header Content */}
        <div className="mb-24 max-w-2xl">
          <h2 className="text-sm font-medium text-slate-500 mb-4">Callix Product Suite</h2>
          <h3 className="text-5xl lg:text-6xl font-serif text-slate-800 mb-8 tracking-tight font-normal">
            Get to know Callix
          </h3>
          <p className="text-lg text-slate-500 font-light leading-relaxed max-w-lg">
            Replace broken tools with Callix, the only platform that helps you run Creative Strategy at the speed of sales.
          </p>
        </div>

        {/* Feature Grid - Plain Minimal Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mb-4 transition-colors">
                <feature.icon className="w-5 h-5 text-slate-600 group-hover:text-emerald-500 transition-colors" />
              </div>

              <h4 className="text-[17px] font-semibold text-slate-900 mb-3">{feature.title}</h4>

              <p className="text-[14px] text-slate-500 leading-relaxed font-normal">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSuite;
