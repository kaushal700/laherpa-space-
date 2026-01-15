import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingParticles from "@/components/FloatingParticles";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Server, Shield, Zap, Clock, Users, Globe, ArrowRight, CheckCircle, MapPin, Cpu, HardDrive, Wifi, Star, Award } from "lucide-react";
import serverHero from "@/assets/server-hero-new.jpg";

const ServerSouthAmerica = () => {
  useEffect(() => {
    document.title = "South America Server - La Herpaile";
  }, []);

  const locations = [
    {
      city: "São Paulo",
      region: "Brazil",
      latency: "< 2ms",
      features: ["LATAM Hub", "Financial Center", "Premium Tier-1"],
      flag: "🇧🇷"
    },
  ];

  const features = [
    { icon: Zap, title: "LATAM Optimized", description: "Ultra-low latency across all Latin American countries from São Paulo hub" },
    { icon: Shield, title: "Regional Security", description: "Full compliance with Brazilian LGPD and regional data regulations" },
    { icon: Clock, title: "99.99% Uptime", description: "Reliable South American infrastructure with local redundancy" },
    { icon: Users, title: "Portuguese & Spanish", description: "Native language support team available 24/7" },
  ];

  const specs = [
    { icon: MapPin, text: "São Paulo Data Center" },
    { icon: Cpu, text: "AMD EPYC Processors" },
    { icon: HardDrive, text: "NVMe SSD Storage" },
    { icon: Wifi, text: "10Gbps Network Speed" },
    { icon: Star, text: "Unlimited Bandwidth" },
    { icon: Award, text: "Free SSL Certificate" },
  ];

  const coverage = [
    { country: "Argentina", flag: "🇦🇷", latency: "< 15ms" },
    { country: "Chile", flag: "🇨🇱", latency: "< 20ms" },
    { country: "Colombia", flag: "🇨🇴", latency: "< 25ms" },
    { country: "Peru", flag: "🇵🇪", latency: "< 25ms" },
    { country: "Uruguay", flag: "🇺🇾", latency: "< 18ms" },
    { country: "Paraguay", flag: "🇵🇾", latency: "< 20ms" },
  ];

  return (
    <main className="min-h-screen relative overflow-hidden">
      <FloatingParticles />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-32">
        <div className="absolute inset-0">
          <img src={serverHero} alt="South America Server" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/85 to-foreground/70" />
        </div>

        <div className="absolute top-20 left-20 w-72 h-72 bg-secondary/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/15 rounded-full blur-3xl" />

        <div className="absolute top-32 right-32 w-4 h-4 bg-secondary rounded-full animate-bounce delay-300" />
        <div className="absolute bottom-40 left-40 w-3 h-3 bg-accent rounded-full animate-bounce delay-500" />

        <div className="container relative z-10 text-center px-4">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-secondary/30 to-accent/30 backdrop-blur-md rounded-full border border-secondary/40 mb-8 shadow-lg shadow-secondary/20">
            <span className="text-secondary font-bold text-lg">🌎 South America</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-8">
            South America <span className="text-gradient-warm drop-shadow-lg">Premium Server</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
            Premium hosting from <span className="text-secondary font-semibold">São Paulo, Brazil</span> - the gateway to Latin America with local infrastructure and support
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

      {/* Server Location Section */}
      <section className="py-24 bg-gradient-to-b from-background via-card/50 to-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-secondary/25 to-accent/25 rounded-full text-secondary font-bold mb-6 text-lg shadow-lg">
              🗺️ Primary Location
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              <span className="text-gradient-warm">São Paulo</span> Data Center
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              The heart of Latin America's digital infrastructure
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-16">
            {locations.map((location, index) => (
              <Link
                key={index}
                to="/server-info"
                className="group relative block p-12 rounded-3xl bg-gradient-to-br from-card via-card/80 to-background border border-border/50 hover:border-secondary/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-secondary/20 overflow-hidden"
              >

                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 text-center">
                  <span className="text-7xl mb-6 block">{location.flag}</span>
                  <h3 className="text-4xl font-bold mb-2 group-hover:text-secondary transition-colors">{location.city}</h3>
                  <p className="text-muted-foreground text-xl mb-4">{location.region}</p>
                  <span className="inline-block px-6 py-3 bg-secondary/20 text-secondary text-xl font-bold rounded-full mb-6">
                    {location.latency} latency
                  </span>

                  <div className="flex flex-wrap justify-center gap-4 mt-6">
                    {location.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-card/80 rounded-full border border-border/50">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Regional Coverage */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Regional Coverage from São Paulo</h3>
            <p className="text-muted-foreground">Low latency connectivity to all major Latin American countries</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {coverage.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-2xl bg-card/50 border border-border/30 text-center hover:border-secondary/30 transition-all duration-300 hover:shadow-lg group"
              >
                <span className="text-3xl block mb-2">{item.flag}</span>
                <h4 className="font-semibold group-hover:text-secondary transition-colors">{item.country}</h4>
                <span className="text-sm text-muted-foreground">{item.latency}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-background via-secondary/5 to-background relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-secondary/25 to-accent/25 rounded-full text-secondary font-bold mb-6 text-lg">
              ⚡ Why Choose South America Server
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              <span className="text-gradient-warm">LATAM</span> Excellence
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-gradient-to-br from-card to-background border border-border/50 hover:border-secondary/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-secondary/15"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary/25 to-accent/25 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <feature.icon className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-secondary transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-accent/5" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-accent/25 to-secondary/25 rounded-full text-accent font-bold mb-6 text-lg">
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
                  className="flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/30 backdrop-blur-sm hover:border-secondary/30 transition-all duration-300 hover:shadow-lg group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <spec.icon className="w-6 h-6 text-secondary" />
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

export default ServerSouthAmerica;