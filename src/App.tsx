
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSuite from './components/ProductSuite';
import TranscriptAnalysis from './components/TranscriptAnalysis';
import HowItWorks from './components/HowItWorks';
import TheProblem from './components/TheProblem';
import TheSolution from './components/TheSolution';
import UsVsThem from './components/UsVsThem';
import Automations from './components/Automations';
import Integrations from './components/Integrations';
import SecurityIntegrations from './components/SecurityIntegrations';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full aurora-bg text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900 relative">
      {/* Vertical line texture overlay - absolute to top, fades out via CSS mask */}
      <div className="absolute top-0 left-0 right-0 h-screen pointer-events-none blur-stripes z-0"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <ProductSuite />
          <TranscriptAnalysis />
          <HowItWorks />
          <TheProblem />
          <TheSolution />
          <UsVsThem />
          <Automations />
          <Integrations />
          <SecurityIntegrations />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}
