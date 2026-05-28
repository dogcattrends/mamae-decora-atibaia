import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import CoverageStrip from '@/components/CoverageStrip';
import MiniLeadCapture from '@/components/MiniLeadCapture';
import BentoDifferentials from '@/components/BentoDifferentials';
import ThemesShowcase from '@/components/ThemesShowcase';
import PartyCalculator from '@/components/PartyCalculator';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import LeadForm from '@/components/LeadForm';
import FAQ from '@/components/FAQ';
import WhatsAppBroadcast from '@/components/WhatsAppBroadcast';
import InstagramFeed from '@/components/InstagramFeed';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ClientOnly from '@/components/ClientOnly';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Stats />
      <MiniLeadCapture />
      <CoverageStrip />
      <BentoDifferentials />
      <ThemesShowcase />
      <PartyCalculator />
      <HowItWorks />
      <Testimonials />
      <LeadForm />
      <FAQ />
      <WhatsAppBroadcast />
      <InstagramFeed />
      <Footer />
      <ClientOnly>
        <FloatingWhatsApp />
      </ClientOnly>
    </main>
  );
}
