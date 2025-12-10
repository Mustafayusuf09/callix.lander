import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Scale, UserCheck, CreditCard, AlertTriangle, Gavel, HelpCircle } from 'lucide-react';

const TermsOfService: React.FC = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const sections = [
        {
            icon: UserCheck,
            title: "Lorem Ipsum Dolor",
            content: [
                {
                    subtitle: "Consectetur Adipiscing",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
                },
                {
                    subtitle: "Ullamco Laboris",
                    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
                },
                {
                    subtitle: "Sunt in Culpa",
                    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa."
                }
            ]
        },
        {
            icon: FileText,
            title: "Sed Ut Perspiciatis",
            content: [
                {
                    subtitle: "Nemo Enim Ipsam",
                    text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
                },
                {
                    subtitle: "Neque Porro",
                    text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt."
                },
                {
                    subtitle: "Ut Labore Et Dolore",
                    text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."
                }
            ]
        },
        {
            icon: Scale,
            title: "Quis Autem Vel",
            content: [
                {
                    subtitle: "Eum Iure Reprehenderit",
                    text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat."
                },
                {
                    subtitle: "At Vero Eos",
                    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores."
                },
                {
                    subtitle: "Et Harum Quidem",
                    text: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit."
                }
            ]
        },
        {
            icon: CreditCard,
            title: "Temporibus Autem",
            content: [
                {
                    subtitle: "Quibusdam Et Aut",
                    text: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae."
                },
                {
                    subtitle: "Itaque Earum Rerum",
                    text: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
                },
                {
                    subtitle: "Omnis Voluptas",
                    text: "Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus."
                }
            ]
        },
        {
            icon: AlertTriangle,
            title: "Nam Libero Tempore",
            content: [
                {
                    subtitle: "Cum Soluta Nobis",
                    text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus."
                },
                {
                    subtitle: "Omnis Voluptas",
                    text: "Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet."
                },
                {
                    subtitle: "Ut Et Voluptates",
                    text: "Ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus."
                }
            ]
        },
        {
            icon: Gavel,
            title: "Reiciendis Voluptatibus",
            content: [
                {
                    subtitle: "Maiores Alias",
                    text: "Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Lorem ipsum dolor sit amet."
                },
                {
                    subtitle: "Consectetur Adipiscing",
                    text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                },
                {
                    subtitle: "Quis Nostrud",
                    text: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
                }
            ]
        },
        {
            icon: HelpCircle,
            title: "Voluptate Velit Esse",
            content: [
                {
                    subtitle: "Cillum Dolore",
                    text: "Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."
                },
                {
                    subtitle: "Deserunt Mollit",
                    text: "Deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque."
                },
                {
                    subtitle: "Laudantium Totam",
                    text: "Laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white font-sans">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
                <div className="max-w-5xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="flex items-center gap-3 text-slate-600 hover:text-emerald-600 transition-colors group">
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            <span className="text-sm font-medium">Back to Home</span>
                        </Link>
                        <img src="/logos/callix-logo.png" alt="Callix" className="h-10 object-contain" />
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <motion.section
                className="pt-20 pb-16 px-6"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.6 }}
            >
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-8">
                        <FileText className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm font-medium text-emerald-700">Lorem Ipsum</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Terms of Service
                    </h1>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <p className="text-sm text-slate-400 mt-6">
                        Last updated: December 10, 2025
                    </p>
                </div>
            </motion.section>

            {/* Content Sections */}
            <section className="pb-24 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="space-y-8">
                        {sections.map((section, index) => (
                            <motion.div
                                key={section.title}
                                className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm hover:shadow-md transition-shadow"
                                initial="hidden"
                                animate="visible"
                                variants={fadeIn}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="p-3 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl">
                                        <section.icon className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <h2 className="text-2xl font-semibold text-slate-900 pt-2">
                                        {section.title}
                                    </h2>
                                </div>
                                <div className="space-y-6 pl-16">
                                    {section.content.map((item, itemIndex) => (
                                        <div key={itemIndex}>
                                            <h3 className="text-base font-semibold text-slate-800 mb-2">
                                                {item.subtitle}
                                            </h3>
                                            <p className="text-slate-500 leading-relaxed">
                                                {item.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact Box */}
                    <motion.div
                        className="mt-12 bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-2xl p-8 border border-emerald-100"
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <div className="text-center">
                            <h3 className="text-xl font-semibold text-slate-900 mb-3">
                                Lorem Ipsum Dolor Sit?
                            </h3>
                            <p className="text-slate-600 mb-4">
                                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <a
                                href="mailto:legal@callix.io"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition-colors"
                            >
                                Contact Lorem Team
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-50 border-t border-slate-100 py-12">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <img src="/logos/callix-logo.png" alt="Callix" className="h-10 object-contain mx-auto mb-6" />
                    <p className="text-sm text-slate-400">
                        © 2025 Callix Inc. All rights reserved.
                    </p>
                    <div className="flex justify-center gap-6 mt-4">
                        <Link to="/privacy" className="text-sm text-slate-500 hover:text-emerald-600 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link to="/terms" className="text-sm text-slate-500 hover:text-emerald-600 transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default TermsOfService;
