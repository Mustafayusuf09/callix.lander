
import React from 'react';

// All integrations data with real logo URLs
const integrations = [
    {
        name: 'Zoom',
        logo: '/logos/zoom.png',
    },
    {
        name: 'Google Meet',
        logo: '/logos/google-meet.png',
    },
    {
        name: 'Microsoft Teams',
        logo: '/logos/microsoft-teams.png',
    },
    {
        name: 'Salesforce',
        logo: '/logos/salesforce.png',
    },
    {
        name: 'HubSpot',
        logo: 'https://cdn.simpleicons.org/hubspot/FF7A59',
    },
    {
        name: 'GoHighLevel',
        logo: '/logos/gohighlevel.png',
    },
    {
        name: 'Pipedrive',
        logo: '/logos/pipedrive.png',
    },
    {
        name: 'Meta Ads',
        logo: 'https://cdn.simpleicons.org/meta/0081FB',
    },
    {
        name: 'Google Ads',
        logo: '/logos/google-ads.png',
    },
    {
        name: 'LinkedIn Ads',
        logo: '/logos/linkedin.png',
    },
    {
        name: 'Google Calendar',
        logo: '/logos/google-calendar.png',
    },
    {
        name: 'Outlook',
        logo: '/logos/outlook.png',
    },
    {
        name: 'Calendly',
        logo: 'https://cdn.simpleicons.org/calendly/006BFF',
    },
    {
        name: 'Zapier',
        logo: '/logos/zapier.png',
    },
];

const Integrations: React.FC = () => {
    return (
        <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-50/80 via-white to-slate-50/60 border-b border-slate-100 relative overflow-hidden">

            {/* CSS for marquee animation */}
            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes flowRight {
          0% { left: 0%; }
          100% { left: 100%; }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        .data-flow-dot {
          animation: flowRight 1.5s linear infinite;
        }
      `}</style>

            {/* Subtle background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-100/30 via-transparent to-emerald-50/20 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header Content */}
                <div className="mb-16 max-w-2xl">
                    <h2 className="text-sm font-medium text-emerald-600 mb-4">Integrations</h2>
                    <h3 className="text-5xl lg:text-6xl font-serif text-slate-800 mb-6 tracking-tight font-normal">
                        Seamless Integrations
                    </h3>
                    <p className="text-lg text-slate-500 font-light leading-relaxed max-w-lg">
                        Callix connects with the tools you already use. Sync your meetings, CRM, calendar, and marketing platforms effortlessly.
                    </p>
                </div>

            </div>

            {/* Marquee Logo Strip - Full Width */}
            <div className="relative overflow-hidden">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-emerald-50/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50/60 to-transparent z-10 pointer-events-none" />

                {/* Marquee container - two identical strips for seamless loop */}
                <div className="flex">
                    <div className="flex animate-marquee">
                        {integrations.map((integration, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 group flex items-center"
                            >
                                {/* Connector Line */}
                                <div className="w-10 h-[2px] bg-gradient-to-r from-slate-200 to-slate-300"></div>

                                <div className="flex flex-col items-center gap-3 px-6 py-5 rounded-2xl bg-slate-50/50 border border-slate-100 hover:border-emerald-200 hover:bg-white transition-all duration-300 hover:shadow-lg hover:shadow-emerald-100/50 cursor-pointer">
                                    <div className="w-10 h-10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                        <img
                                            src={integration.logo}
                                            alt={integration.name}
                                            className="w-8 h-8 object-contain"
                                            loading="lazy"
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-slate-600 whitespace-nowrap">{integration.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex animate-marquee" aria-hidden="true">
                        {integrations.map((integration, index) => (
                            <div
                                key={`dup-${index}`}
                                className="flex-shrink-0 group flex items-center"
                            >
                                {/* Connector Line */}
                                <div className="w-10 h-[2px] bg-gradient-to-r from-slate-200 to-slate-300"></div>

                                <div className="flex flex-col items-center gap-3 px-6 py-5 rounded-2xl bg-slate-50/50 border border-slate-100 hover:border-emerald-200 hover:bg-white transition-all duration-300 hover:shadow-lg hover:shadow-emerald-100/50 cursor-pointer">
                                    <div className="w-10 h-10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                        <img
                                            src={integration.logo}
                                            alt={integration.name}
                                            className="w-8 h-8 object-contain"
                                            loading="lazy"
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-slate-600 whitespace-nowrap">{integration.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Integrations;
