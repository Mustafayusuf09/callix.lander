
import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';

const TranscriptAnalysis: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.4 } // Trigger when 40% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Set scan complete after animation finishes (4 seconds)
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setScanComplete(true);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-24 bg-[#F8FAFC] overflow-hidden relative border-t border-slate-200">

      {/* Soft Green Gradient Background */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-emerald-100/50 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-semibold text-emerald-600 uppercase tracking-wide mb-4">
            Transcript Analysis
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 leading-tight">
            Transform every call into a high-performing marketing asset
          </h3>
          <p className="text-lg text-slate-500 font-light">
            AI analyzes your conversations in real time and turns buying signals, narratives, and proof points into polished ads your marketing team can ship immediately.
          </p>
        </div>

        {/* Workflow Graphic */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0 relative">

          {/* Left Side: Inputs (Logos) */}
          <div className="flex lg:flex-col gap-6 lg:gap-16 lg:mr-12 relative z-10">
            {[
              {
                name: "Zoom",
                logo: "/logos/zoom.png"
              },
              {
                name: "Google Meet",
                logo: "/logos/google-meet.png"
              },
              {
                name: "Microsoft Teams",
                logo: "/logos/microsoft-teams.png"
              },
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="w-16 h-16 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center hover:scale-105 transition-transform duration-300 z-20 relative p-2">
                  <img src={item.logo} alt={item.name} className="w-full h-full object-contain" />
                </div>
              </div>
            ))}
          </div>

          {/* Center: The Transcript Card */}
          <div className="relative w-full max-w-[500px] shrink-0">
            {/* Connecting Lines SVG (Desktop only) */}
            <svg className="absolute inset-0 w-full h-full -z-10 hidden lg:block overflow-visible pointer-events-none">
              {/* Left Connectors: Aligning to Icon Centers at Y = 122, 250, 378 */}
              <path d="M-48 122 C -24 122, -24 250, 0 250" fill="none" stroke="#E2E8F0" strokeWidth="1" />
              <path d="M-48 250 L 0 250" fill="none" stroke="#E2E8F0" strokeWidth="1" />
              <path d="M-48 378 C -24 378, -24 250, 0 250" fill="none" stroke="#E2E8F0" strokeWidth="1" />

              {/* Right Connectors: Aligning to Icon Centers at Y = 122, 250, 378 */}
              <path d="M500 250 C 524 250, 524 122, 548 122" fill="none" stroke="#E2E8F0" strokeWidth="1" />
              <path d="M500 250 L 548 250" fill="none" stroke="#E2E8F0" strokeWidth="1" />
              <path d="M500 250 C 524 250, 524 378, 548 378" fill="none" stroke="#E2E8F0" strokeWidth="1" />
            </svg>

            <div className="bg-white rounded-xl shadow-2xl shadow-slate-200/50 border border-slate-200 overflow-hidden relative h-[500px]">

              {/* Card Header */}
              <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Source: Zoom Recording</div>
                  <div className="text-sm font-semibold text-slate-800">Discovery: Acme Corp</div>
                </div>
                <div className="px-2 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded uppercase tracking-wide">
                  Processing
                </div>
              </div>

              {/* Transcript Content */}
              <div className="p-8 space-y-6 text-sm relative">

                {/* Scan Line Animation (Vertical Line moving Left to Right) */}
                {/* Only renders when visible, runs once */}
                <div className={`absolute top-0 bottom-0 w-[2px] bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.6)] z-20 ${isVisible ? 'animate-[scan_4s_ease-in-out_forwards]' : 'opacity-0'}`}></div>

                {/* Dialogue Items */}
                <div className="space-y-1">
                  <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Sales Rep (02:14)</div>
                  <p className="text-slate-600">So looking at Q4, what is the single biggest bottleneck to hitting that revenue target?</p>
                </div>

                <div className="space-y-1 relative group">
                  <div className="text-[10px] font-bold text-emerald-600 uppercase mb-1 flex items-center gap-1">
                    Prospect (02:18)
                    <CheckCircle2 className="w-3 h-3" />
                  </div>
                  <p className="text-slate-800 leading-relaxed">
                    "Honestly, our <span
                      className={`px-1 py-0.5 rounded font-medium box-decoration-clone ${isVisible ? 'animate-reveal-highlight' : ''}`}
                      style={{ animationDelay: '1.5s', backgroundColor: 'transparent' }}
                    >acquisition costs have doubled</span> since iOS 14.
                    We're spending way too much on broad targeting."
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Sales Rep (02:25)</div>
                  <p className="text-slate-600">That makes sense. If we could fix that, what's the goal?</p>
                </div>

                <div className="space-y-1">
                  <div className="text-[10px] font-bold text-emerald-600 uppercase mb-1 flex items-center gap-1">
                    Prospect (02:28)
                    <CheckCircle2 className="w-3 h-3" />
                  </div>
                  <p className="text-slate-800 leading-relaxed">
                    "We need to hit <span
                      className={`px-1 py-0.5 rounded font-medium box-decoration-clone ${isVisible ? 'animate-reveal-highlight' : ''}`}
                      style={{ animationDelay: '2.5s', backgroundColor: 'transparent' }}
                    >$5M ARR by year end</span> to trigger our Series B raise."
                  </p>
                </div>
              </div>

              {/* Bottom Status Bar */}
              <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 bg-white border rounded-full shadow-lg px-4 py-2 flex items-center gap-3 z-30 transition-all duration-500 ${scanComplete ? 'border-emerald-200' : 'border-slate-200'}`}>
                {scanComplete ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Loader2 className="w-4 h-4 text-emerald-600 animate-spin" />
                )}
                <span className={`text-xs font-medium ${scanComplete ? 'text-emerald-700' : 'text-slate-700'}`}>
                  {scanComplete ? 'Signals Extracted' : 'Extracting Buying Signals...'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Outputs (Ad Platforms) */}
          <div className="flex lg:flex-col gap-6 lg:gap-16 lg:ml-12 relative z-10 mt-8 lg:mt-0">
            {[
              { name: "Meta Ads", logo: "https://cdn.simpleicons.org/meta/0081FB" },
              { name: "LinkedIn Ads", logo: "/logos/linkedin.png" },
              { name: "TikTok Ads", logo: "https://cdn.simpleicons.org/tiktok/000000" },
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="w-16 h-16 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center hover:scale-105 transition-transform duration-300 p-3.5">
                  <img src={item.logo} alt={item.name} className="w-full h-full object-contain" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { left: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        @keyframes reveal-highlight {
          0% { background-color: transparent; color: inherit; }
          100% { background-color: rgba(209, 250, 229, 0.8); color: #064e3b; }
        }
        .animate-reveal-highlight {
          animation: reveal-highlight 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default TranscriptAnalysis;
