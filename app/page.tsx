import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import BentoDifferentials from '@/components/BentoDifferentials';
import ThemesShowcase from '@/components/ThemesShowcase';
import PartyCalculator from '@/components/PartyCalculator';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import LeadForm from '@/components/LeadForm';
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
      <BentoDifferentials />
      <ThemesShowcase />
      <PartyCalculator />
      <HowItWorks />
      <Testimonials />
      <LeadForm />
      <FAQ />
      <InstagramFeed />
      <Footer />
      <ClientOnly>
        <FloatingWhatsApp />
      </ClientOnly>
    </main>
  );
}
