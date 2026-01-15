import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingParticles from "@/components/FloatingParticles";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Server, Shield, Zap, Clock, Users, Globe, ArrowRight, CheckCircle, MapPin, Cpu, HardDrive, Wifi, Star, Award } from "lucide-react";
import serverHero from "@/assets/server-hero-new.jpg";

const ServerAsiaPacific = () => {
  useEffect(() => {
    document.title = "Asia Pacific Server - La Herpaile";
  }, []);

  const locations = [
    {
      city: "Singapore",
      region: "Southeast Asia Hub",
      latency: "< 3ms",
      features: ["Financial Hub", "Premium Tier-1", "24/7 Support"],
      flag: "🇸🇬"
    },
    {
      city: "Tokyo",
      region: "Japan - East",
      latency: "< 5ms",
      features: ["Gaming Optimized", "Ultra Low Latency", "Enterprise Grade"],
      flag: "🇯🇵"
    },
    {
      city: "Osaka",
      region: "Japan - West",
      latency: "< 6ms",
      features: ["Disaster Recovery", "Business Continuity", "High Availability"],
      flag: "🇯🇵"
    },
    {
      city: "Seoul",
      region: "South Korea",
      latency: "< 4ms",
      features: ["K-Gaming Hub", "Fastest Network", "5G Ready"],
      flag: "🇰🇷"
    },
    {
      city: "Jakarta",
      region: "Indonesia",
      latency: "< 8ms",
      features: ["Emerging Market", "Local Compliance", "Growing Hub"],
      flag: "🇮🇩"
    },
    {
      city: "Sydney",
      region: "Australia - East",
      latency: "< 10ms",
      features: ["Oceania Hub", "Enterprise Ready", "Premium Support"],
      flag: "🇦🇺"
    },
    {
      city: "Melbourne",
      region: "Australia - South",
      latency: "< 12ms",
      features: ["Business Center", "Data Sovereignty", "High Security"],
      flag: "🇦🇺"
    },
  ];

  const features = [
    { icon: Zap, title: "Ultra Low Latency", description: "Optimized routing across 7 strategic APAC locations with sub-10ms response" },
    { icon: Shield, title: "Advanced Security", description: "Multi-layer protection with local compliance for each region" },
    { icon: Clock, title: "99.99% Uptime", description: "Reliable infrastructure with cross-region redundancy" },
    { icon: Users, title: "Multilingual Support", description: "24/7 support in English, Japanese, Korean, Chinese & more" },
  ];

  const specs = [
    { icon: MapPin, text: "7 Strategic APAC Locations" },
    { icon: Cpu, text: "AMD EPYC & Intel Xeon" },
    { icon: HardDrive, text: "NVMe SSD Storage" },
    { icon: Wifi, text: "10Gbps Network Speed" },
    { icon: Star, text: "Unlimited Bandwidth" },
    { icon: Award, text: "Free SSL Certificate" },
  ];

  return (
    <main className="min-h-screen relative overflow-hidden">
      <FloatingParticles />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-32">
        <div className="absolute inset-0">
          <img src={serverHero} alt="Asia Pacific Server" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/85 to-foreground/70" />
        </div>

        <div className="absolute top-20 left-20 w-72 h-72 bg-accent/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/15 rounded-full blur-3xl" />

        <div className="absolute top-32 right-32 w-4 h-4 bg-accent rounded-full animate-bounce delay-300" />
        <div className="absolute bottom-40 left-40 w-3 h-3 bg-primary rounded-full animate-bounce delay-500" />

        <div className="container relative z-10 text-center px-4">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent/30 to-primary/30 backdrop-blur-md rounded-full border border-accent/40 mb-8 shadow-lg shadow-accent/20">
            <span className="text-accent font-bold text-lg">🌏 Asia Pacific Region</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-8">
            Asia Pacific <span className="text-gradient-warm drop-shadow-lg">Premium Server</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
            High-performance hosting across <span className="text-accent font-semibold">7 strategic locations</span> optimized for the dynamic Asia-Pacific market
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/server-info">
              <Button variant="hero" size="lg" className="group text-lg px-8 py-6 shadow-2xl shadow-primary/30">
                Apply Now
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border border-white/40 text-white bg-white/10 hover:bg-white/25 backdrop-blur-sm text-lg px-8 py-6 font-semibold shadow-md hover:shadow-lg transition-all duration-300">Learn More</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Server Locations Section */}
      <section className="py-24 bg-gradient-to-b from-background via-card/50 to-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-accent/25 to-primary/25 rounded-full text-accent font-bold mb-6 text-lg shadow-lg">
              🗺️ Server Locations
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              <span className="text-gradient-warm">7 Strategic</span> APAC Locations
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              Choose the perfect data center location for your needs across Asia Pacific
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <Link
                key={index}
                to="/server-info"
                className="group relative block p-8 rounded-3xl bg-gradient-to-br from-card via-card/80 to-background border border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden"
              >

                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{location.flag}</span>
                    <span className="px-3 py-1 bg-secondary/20 text-secondary text-sm font-bold rounded-full">
                      {location.latency}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-1 group-hover:text-accent transition-colors">{location.city}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{location.region}</p>

                  <div className="space-y-2">
                    {location.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-background via-accent/5 to-background relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-accent/25 to-primary/25 rounded-full text-accent font-bold mb-6 text-lg">
              ⚡ Why Choose Asia Pacific Server
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              <span className="text-gradient-warm">Regional</span> Excellence
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-gradient-to-br from-card to-background border border-border/50 hover:border-accent/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-accent/15"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/25 to-primary/25 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <feature.icon className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-primary/5" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-secondary/25 to-accent/25 rounded-full text-secondary font-bold mb-6 text-lg">
                🔧 Technical Specifications
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Server <span className="text-gradient-warm">Specifications</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specs.map((spec, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/30 backdrop-blur-sm hover:border-accent/30 transition-all duration-300 hover:shadow-lg group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <spec.icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-lg font-semibold">{spec.text}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <Link to="/server-info">
                <Button variant="hero" size="lg" className="group text-lg px-10 py-6 shadow-2xl shadow-primary/25">
                  <Server className="mr-3 w-6 h-6" />
                  Get Started Today
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ServerAsiaPacific;