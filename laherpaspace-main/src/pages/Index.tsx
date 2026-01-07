import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImpactStats from "@/components/ImpactStats";
import HowWeHelp from "@/components/HowWeHelp";
import WaysToHelp from "@/components/WaysToHelp";
import SecondChance from "@/components/SecondChance";
import DonationBanner from "@/components/DonationBanner";
import Footer from "@/components/Footer";
import FloatingParticles from "@/components/FloatingParticles";

const Index = () => {
  useEffect(() => {
    document.title = "La Herpaile - Animal Rescue & Welfare Organization";
  }, []);
  return (
    <main className="min-h-screen relative">
      <FloatingParticles />
      <Navbar />
      <Hero />
      <ImpactStats />
      <HowWeHelp />
      <WaysToHelp />
      <SecondChance />
      <DonationBanner />
      <Footer />
    </main>
  );
};

export default Index;