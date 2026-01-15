import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Globe, Lock, Zap, Monitor, Rocket, Sparkles, Star, CheckCircle, Shield, Cpu, Smartphone, Server, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import resourcesHero from "@/assets/resources-hero.jpg";
import resourcesRdp from "@/assets/resources-rdp.jpg";
import resourcesStart from "@/assets/resources-start.jpg";

const Resources = () => {
  useEffect(() => {
    document.title = "Resources - La Herpaile";
  }, []);
  const keyBenefits = [
    { icon: Globe, title: "Work from Anywhere", desc: "Access your files, apps, and desktop remotely.", color: "from-primary to-accent" },
    { icon: Shield, title: "Secure Connections", desc: "Advanced encryption ensures your data stays safe.", color: "from-secondary to-primary" },
    { icon: Zap, title: "High Performance", desc: "Smooth, lag-free remote access even for heavy applications.", color: "from-golden to-accent" },
    { icon: Smartphone, title: "Multi-Device Support", desc: "Connect from PC, laptop, tablet, or mobile.", color: "from-accent to-golden" }
  ];

  const useCases = [
    "Remote work and telecommuting",
    "Software testing and development",
    "Hosting apps and websites remotely"
  ];

  const howToChoose = [
    { title: "Performance & Speed", desc: "Choose servers with fast CPUs, ample RAM, and SSD storage to handle multiple tasks efficiently.", icon: Cpu },
    { title: "Security", desc: "Look for RDP solutions with encryption, firewalls, and strong authentication to protect your data.", icon: Shield },
    { title: "Accessibility", desc: "Your server should support multiple devices and operating systems so you can work anytime, anywhere.", icon: Globe },
    { title: "Cost Efficiency", desc: "Compare pricing plans and features to find an RDP server that fits your budget without compromising performance.", icon: Zap },
    { title: "Support & Reliability", desc: "Opt for providers offering 24/7 technical support and guaranteed uptime for uninterrupted access.", icon: Server }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - Full Screen Like About Us */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0 z-0">
          <img
            src={resourcesHero}
            alt="Resources and RDP Servers"
            className="w-full h-full object-cover scale-110 animate-[scale-in_1.5s_ease-out_forwards]"
          />
          {/* Multi-layer Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/30 to-foreground/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-accent/20" />

          {/* Animated Mesh Gradient */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/40 via-transparent to-transparent animate-pulse" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent/30 via-transparent to-transparent animate-pulse" style={{ animationDelay: "1.5s" }} />
          </div>

          {/* Animated Glow Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/30 to-accent/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-secondary/30 to-golden/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] morph-shape" />
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-20 left-10 w-24 h-24 border-2 border-primary-foreground/20 rounded-full floating-slow backdrop-blur-sm" />
        <div className="absolute top-32 right-16 w-16 h-16 bg-gradient-to-br from-golden/30 to-accent/20 rounded-full floating blur-sm" />
        <div className="absolute bottom-32 left-16 w-12 h-12 bg-gradient-to-br from-primary/40 to-secondary/30 rounded-full floating-fast" />
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-golden/50 rounded-full floating animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-accent/40 rounded-full floating-slow" />

        {/* Floating Stars */}
        <Star className="absolute top-1/4 right-[20%] w-6 h-6 text-golden/40 floating-slow animate-pulse" />
        <Star className="absolute bottom-1/3 left-[15%] w-4 h-4 text-primary-foreground/30 floating" />
        <Zap className="absolute top-[40%] left-[10%] w-5 h-5 text-accent/30 floating-fast" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground pt-32">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-3 rounded-full glass-card mb-8 animate-fade-up border border-primary-foreground/20 shadow-2xl">
            <Server className="w-5 h-5 text-golden animate-pulse" />
            <span className="text-sm font-bold tracking-[0.2em] uppercase bg-gradient-to-r from-golden via-primary-foreground to-golden bg-clip-text text-transparent">
              RDP & Cloud Resources
            </span>
            <Server className="w-5 h-5 text-golden animate-pulse" />
          </div>

          <h1
            className="font-display text-5xl md:text-7xl lg:text-9xl font-black mb-8 animate-fade-up tracking-tight"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="block text-shadow-hero drop-shadow-2xl">RESOURCES</span>
            <span className="block bg-gradient-to-r from-golden via-accent to-primary bg-clip-text text-transparent animate-gradient-x drop-shadow-lg text-4xl md:text-6xl lg:text-7xl">
              & RDP SERVERS
            </span>
          </h1>

          <p
            className="max-w-2xl mx-auto text-lg md:text-xl opacity-90 mb-12 font-light animate-fade-up leading-relaxed text-primary-foreground/90"
            style={{ animationDelay: "0.2s" }}
          >
            Unlock the power of remote desktop access.
            Connect securely to a computer anywhere in the world.
          </p>

          {/* Stats Preview */}
          <div
            className="mt-10 grid grid-cols-3 gap-6 max-w-xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            {[
              { number: "99.9%", label: "Uptime", icon: "⚡" },
              { number: "24/7", label: "Support", icon: "💬" },
              { number: "100%", label: "Secure", icon: "🔒" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="group text-center p-4 rounded-2xl glass-card hover:bg-primary-foreground/10 transition-all duration-500 cursor-pointer hover:scale-105 border border-primary-foreground/10"
              >
                <div className="text-2xl mb-2 group-hover:animate-bounce-soft">{stat.icon}</div>
                <div className="font-display text-3xl md:text-4xl font-black bg-gradient-to-r from-golden to-accent bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-xs uppercase tracking-widest opacity-80 mt-1 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Green Accent Bar */}
      <div className="h-2 bg-gradient-to-r from-primary via-accent to-primary" />

      {/* Our Mission with RDP */}
      <section className="py-20 bg-gradient-to-b from-background via-card to-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <Star className="w-6 h-6 text-golden animate-pulse" />
              <span className="text-4xl">🌴</span>
              <Star className="w-6 h-6 text-golden animate-pulse" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Mission with <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">RDP</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-4">
              At <span className="font-semibold text-primary">La Herpa</span>, we use <span className="font-semibold text-foreground">RDP servers</span> to connect rural NGOs, volunteers, and organizations across India.
            </p>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our mission is to <span className="font-semibold text-foreground">empower small initiatives</span> through <span className="text-primary">reliable digital access</span> — because <span className="font-semibold text-foreground">technology should serve humanity</span>.
            </p>
          </div>
        </div>
      </section>

      {/* What is an RDP Server */}
      <section className="py-20 bg-gradient-to-b from-card via-background to-card relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-[100px]" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60" />
              <img
                src={resourcesRdp}
                alt="RDP Server Access"
                className="relative rounded-2xl shadow-elegant w-full h-96 object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                <Monitor className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                What is an <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">RDP Server</span> and Why You Need One
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Unlock the power of <span className="font-semibold text-foreground">remote desktop access</span> with an <span className="font-semibold text-primary">RDP Server</span>. Whether you're a business professional, developer, or tech enthusiast, an RDP server allows you to <span className="text-foreground">connect securely to a computer anywhere in the world</span>.
              </p>
            </div>
          </div>

          {/* Key Benefits Grid */}
          <div className="mb-12">
            <h3 className="font-display text-xl font-bold text-foreground mb-8 text-center">
              Key <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Benefits</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-gradient-to-br from-card via-background to-card border border-border/50 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 group"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform`}>
                    <benefit.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{benefit.title}</h4>
                  <p className="text-muted-foreground text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-card via-background to-card border border-border/50 shadow-card mb-12">
            <h3 className="font-display text-xl font-bold text-foreground mb-6">
              Use <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Cases</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {useCases.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-border/30 group hover:shadow-card transition-all duration-300">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pro Tip */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-golden/10 via-accent/10 to-golden/10 border border-golden/30 flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-golden to-accent flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-2xl">💡</span>
            </div>
            <div>
              <span className="font-bold text-foreground">Pro Tip: </span>
              <span className="text-muted-foreground">Choose an RDP server with <span className="font-semibold text-foreground">high-speed SSD storage</span> and <span className="font-semibold text-foreground">24/7 uptime</span> for <span className="text-primary">seamless performance</span>.</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link to="/server-info">
              <Button
                variant="hero"
                size="xl"
                className="group relative overflow-hidden btn-ripple glow-primary shadow-2xl"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Apply for RDP Server
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How to Choose the Best RDP Server */}
      <section className="py-20 bg-gradient-to-b from-background via-card to-background relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-48 h-48 bg-golden/5 rounded-full blur-[80px]" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              How to Choose the <span className="bg-gradient-to-r from-golden to-accent bg-clip-text text-transparent">Best RDP Server</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Looking for the <span className="font-semibold text-foreground">perfect RDP server</span>? Here's what you need to know:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {howToChoose.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-card via-background to-card border border-border/50 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="font-bold text-foreground">{index + 1}. {item.title}</span>
                </div>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-card to-accent/10 border border-border/50 shadow-elegant text-center">
            <h4 className="font-display text-xl font-bold text-foreground mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Conclusion</span>
            </h4>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A <span className="font-semibold text-foreground">reliable RDP server</span> can <span className="text-primary font-semibold">boost productivity</span>, <span className="text-secondary font-semibold">simplify workflows</span>, and <span className="text-accent font-semibold">keep your data secure</span>. Make the smart choice today and take your remote work to the next level.
            </p>
          </div>
        </div>
      </section>

      {/* Get Started Today */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" />
        <div className="absolute top-0 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/3 w-48 h-48 bg-accent/10 rounded-full blur-[80px]" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/30 to-golden/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60" />
              <img
                src={resourcesStart}
                alt="Get Started Today"
                className="relative rounded-2xl shadow-elegant w-full h-96 object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-accent to-golden text-foreground px-6 py-3 rounded-xl shadow-lg flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                <span className="font-bold">Start Today</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 rounded-3xl glass-card border border-border/30 shadow-elegant">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-golden flex items-center justify-center shadow-lg animate-pulse">
                  <Rocket className="w-7 h-7 text-foreground" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  Get Started <span className="bg-gradient-to-r from-accent to-golden bg-clip-text text-transparent">Today</span>
                </h2>
              </div>

              <p className="text-muted-foreground mb-8 text-lg">
                Want to host your own secure RDP Server? We're here to help you get started!
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact-us">
                  <Button
                    variant="heroOutline"
                    size="lg"
                    className="group backdrop-blur-md hover:backdrop-blur-lg transition-all duration-500 border-2"
                  >
                    Contact Us
                  </Button>
                </Link>
                <Link to="/server">
                  <Button
                    variant="hero"
                    size="lg"
                    className="group relative overflow-hidden btn-ripple glow-primary shadow-2xl"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      🌴 Server Initiative
                      <Sparkles className="w-5 h-5 group-hover:animate-wiggle" />
                    </span>
                  </Button>
                </Link>
              </div>

              <p className="text-muted-foreground mt-6 text-sm">
                Join our Server Initiative to get a <span className="text-primary font-semibold">free demo</span> today!
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;