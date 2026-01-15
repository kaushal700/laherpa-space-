import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingParticles from "@/components/FloatingParticles";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Server, Shield, Zap, Clock, Users, Globe, ArrowRight, CheckCircle, MapPin, Cpu, HardDrive, Wifi, Star, Award } from "lucide-react";
import serverHero from "@/assets/server-hero-new.jpg";

const ServerUSA = () => {
  useEffect(() => {
    document.title = "USA Server - La Herpaile";
  }, []);

  const locations = [
    {
      city: "Virginia",
      region: "East Coast",
      latency: "< 5ms",
      features: ["Enterprise Data Center", "AWS Direct Connect", "Low Latency Gaming"],
      flag: "🏛️"
    },
    {
      city: "Ohio",
      region: "Midwest",
      latency: "< 8ms",
      features: ["Cost Effective", "High Redundancy", "Business Applications"],
      flag: "🌾"
    },
    {
      city: "Oregon",
      region: "Pacific Northwest",
      latency: "< 10ms",
      features: ["Green Energy", "Tech Hub", "Streaming Optimized"],
      flag: "🌲"
    },
    {
      city: "California",
      region: "West Coast",
      latency: "< 6ms",
      features: ["Silicon Valley", "Premium Tier", "Global Connectivity"],
      flag: "🌴"
    },
  ];

  const features = [
    { icon: Zap, title: "Ultra Fast Speed", description: "Lightning-fast connectivity with premium US infrastructure across 4 strategic locations" },
    { icon: Shield, title: "Enterprise Security", description: "Bank-grade encryption, DDoS protection & SOC2 compliance" },
    { icon: Clock, title: "99.99% Uptime", description: "Guaranteed reliability with multi-zone redundant systems" },
    { icon: Users, title: "24/7 Expert Support", description: "Round-the-clock US-based expert assistance" },
  ];

  const specs = [
    { icon: MapPin, text: "4 Strategic US Locations" },
    { icon: Cpu, text: "Latest Intel Xeon & AMD EPYC" },
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
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={serverHero}
            alt="USA Server"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/85 to-foreground/70" />
        </div>

        {/* Animated Glow Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/15 rounded-full blur-3xl" />

        {/* Floating Elements */}
        <div className="absolute top-32 right-32 w-4 h-4 bg-primary rounded-full animate-bounce delay-300" />
        <div className="absolute bottom-40 left-40 w-3 h-3 bg-secondary rounded-full animate-bounce delay-500" />
        <div className="absolute top-1/2 right-20 w-2 h-2 bg-accent rounded-full animate-ping" />

        <div className="container relative z-10 text-center px-4">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/30 to-accent/30 backdrop-blur-md rounded-full border border-primary/40 mb-8 shadow-lg shadow-primary/20">
            <span className="text-primary font-bold text-lg">🌏 United States of America</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-8">
            USA <span className="text-gradient-warm drop-shadow-lg">Premium Server</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
            Experience enterprise-grade RDP hosting from <span className="text-primary font-semibold">4 strategic locations</span> across America with unmatched performance and security
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
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
        </div>

        {/* Shimmer Effect */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-primary/25 to-accent/25 rounded-full text-primary font-bold mb-6 text-lg shadow-lg">
              🗺️ Server Locations
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              <span className="text-gradient-warm">4 Strategic</span> US Locations
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              Choose the perfect data center location for your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {locations.map((location, index) => (
              <Link
                key={index}
                to="/server-info"
                className="group relative block p-8 rounded-3xl bg-gradient-to-br from-card via-card/80 to-background border border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden"
              >

                {/* Card Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{location.flag}</span>
                    <span className="px-3 py-1 bg-secondary/20 text-secondary text-sm font-bold rounded-full">
                      {location.latency}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{location.city}</h3>
                  <p className="text-muted-foreground mb-4">{location.region}</p>

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
      <section className="py-24 bg-gradient-to-b from-background via-primary/5 to-background relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-primary/25 to-accent/25 rounded-full text-primary font-bold mb-6 text-lg">
              ⚡ Why Choose USA Server
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              <span className="text-gradient-warm">Premium</span> Features
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              Experience world-class hosting with our US-based infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-gradient-to-br from-card to-background border border-border/50 hover:border-primary/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/15"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/25 to-accent/25 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <feature.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-secondary/25 to-primary/25 rounded-full text-secondary font-bold mb-6 text-lg">
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
                  className="flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:shadow-lg group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <spec.icon className="w-6 h-6 text-primary" />
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

export default ServerUSA;