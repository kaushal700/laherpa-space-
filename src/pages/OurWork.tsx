import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Monitor, Heart, Users, Leaf, Rocket, Sparkles, Star, Zap, CheckCircle, Globe, Server } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ourworkHero from "@/assets/ourwork-hero.jpg";
import ourworkRdp from "@/assets/ourwork-rdp.jpg";
import ourworkCommunity from "@/assets/ourwork-community.jpg";
import ourworkFuture from "@/assets/ourwork-future.jpg";

const OurWork = () => {
  useEffect(() => {
    document.title = "Our Work - La Herpaile";
  }, []);
  const rdpPrograms = [
    "Work remotely from any location",
    "Manage online training and data safely",
    "Run projects and reports with cloud efficiency"
  ];

  const ngoSupport = [
    "Website setup and management",
    "Email & cloud storage for NGOs",
    "Training on safe online collaboration"
  ];

  const volunteerPrograms = [
    "Digital literacy",
    "Data security",
    "Environmental & social initiatives"
  ];

  const futureInitiatives = [
    "Free RDP demo access for NGOs",
    "Online dashboard for volunteers",
    "Partner programs with hosting providers",
    "Awareness campaigns for data privacy & digital rights"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - Full Screen Like About Us */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0 z-0">
          <img
            src={ourworkHero}
            alt="Our Work at La Herpaille"
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
            <Sparkles className="w-5 h-5 text-golden animate-pulse" />
            <span className="text-sm font-bold tracking-[0.2em] uppercase bg-gradient-to-r from-golden via-primary-foreground to-golden bg-clip-text text-transparent">
              Technology for Everyone
            </span>
            <Sparkles className="w-5 h-5 text-golden animate-pulse" />
          </div>

          <h1
            className="font-display text-5xl md:text-7xl lg:text-9xl font-black mb-8 animate-fade-up tracking-tight"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="block text-shadow-hero drop-shadow-2xl">OUR</span>
            <span className="block bg-gradient-to-r from-golden via-accent to-primary bg-clip-text text-transparent animate-gradient-x drop-shadow-lg">
              WORK
            </span>
          </h1>

          <p
            className="max-w-2xl mx-auto text-lg md:text-xl opacity-90 mb-12 font-light animate-fade-up leading-relaxed text-primary-foreground/90"
            style={{ animationDelay: "0.2s" }}
          >
            Empowering communities, NGOs, and volunteers through
            digital access, remote tools, and social impact initiatives.
          </p>

          {/* Stats Preview */}
          <div
            className="mt-10 grid grid-cols-3 gap-6 max-w-xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            {[
              { number: "50+", label: "NGOs Helped", icon: "🏢" },
              { number: "100+", label: "Projects", icon: "🚀" },
              { number: "1K+", label: "Lives Changed", icon: "✨" },
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

      {/* Introduction Section */}
      <section className="py-20 bg-gradient-to-b from-background via-card to-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <Star className="w-6 h-6 text-golden animate-pulse" />
              <span className="text-4xl">🏝️</span>
              <Star className="w-6 h-6 text-golden animate-pulse" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Work</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-4">
              At <span className="font-semibold text-primary">La Herpaille</span>, our work revolves around one simple idea — "<span className="text-primary font-medium">Technology for Everyone.</span>"
            </p>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We empower communities, NGOs, and volunteers through <span className="font-semibold text-foreground">digital access, remote tools, and social impact initiatives</span>.
              Our projects focus on <span className="font-semibold text-foreground">connecting rural change-makers with modern technology</span> so they can work, learn, and grow — anywhere in the world.
            </p>
          </div>
        </div>
      </section>

      {/* 1. RDP & Server Access Programs */}
      <section className="py-20 bg-gradient-to-b from-card via-background to-card relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-[100px]" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60" />
              <img
                src={ourworkRdp}
                alt="RDP & Server Access"
                className="relative rounded-2xl shadow-elegant w-full h-96 object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                <Server className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg glow-primary">
                  <Monitor className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  RDP & Server <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Access Programs</span>
                </h3>
              </div>

              <p className="text-muted-foreground mb-6 text-lg">
                We provide <span className="font-semibold text-foreground">secure and affordable RDP servers</span> to NGOs and small organizations. These servers help teams:
              </p>

              <ul className="space-y-4 mb-6">
                {rdpPrograms.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-muted-foreground border-l-4 border-primary/50 pl-4 italic">
                Our goal: to make <span className="font-semibold text-foreground">digital workspaces accessible to every social worker and volunteer</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. NGO Digital Support */}
      <section className="py-20 bg-gradient-to-b from-background via-card to-background relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-48 h-48 bg-golden/5 rounded-full blur-[80px]" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="p-10 rounded-3xl bg-gradient-to-br from-card via-background to-card border border-border/50 shadow-elegant">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-golden to-accent flex items-center justify-center shadow-lg">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                NGO <span className="bg-gradient-to-r from-golden to-accent bg-clip-text text-transparent">Digital Support</span>
              </h3>
            </div>

            <p className="text-muted-foreground mb-6 text-lg">
              We help NGOs adopt new technology for communication, fundraising, and impact tracking. Our digital support includes:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {ngoSupport.map((item, index) => (
                <div key={index} className="p-6 rounded-2xl bg-gradient-to-br from-golden/10 to-accent/10 border border-border/30 hover:shadow-card transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-golden to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-5 h-5 text-foreground" />
                  </div>
                  <p className="text-foreground font-medium">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground italic text-center border-t border-border/30 pt-6">
              By bringing digital tools to grassroots level, we make sure <span className="text-primary font-medium">no NGO is left behind</span>.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Volunteer & Community Programs */}
      <section className="py-20 bg-gradient-to-b from-card via-background to-card relative overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-[100px]" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center shadow-lg">
                  <Users className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  Volunteer & <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Community Programs</span>
                </h3>
              </div>

              <p className="text-muted-foreground mb-6 text-lg">
                Our volunteers play a big role in spreading awareness about:
              </p>

              <ul className="space-y-4 mb-6">
                {volunteerPrograms.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-muted-foreground">
                We organize workshops, <span className="font-semibold text-foreground">remote training sessions</span>, and community projects — all powered by technology.
              </p>
            </div>

            {/* Image */}
            <div className="order-1 md:order-2 relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary/30 to-primary/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60" />
              <img
                src={ourworkCommunity}
                alt="Community Programs"
                className="relative rounded-2xl shadow-elegant w-full h-96 object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-secondary to-primary text-primary-foreground px-6 py-3 rounded-xl shadow-lg flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="font-bold">Community First</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Sustainable Tech for Change */}
      <section className="py-20 bg-gradient-to-b from-background via-card to-background relative overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-secondary/5 rounded-full blur-[80px]" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="p-10 rounded-3xl bg-gradient-to-br from-secondary/10 via-card to-primary/10 border border-border/50 shadow-elegant text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center shadow-lg mx-auto mb-6 animate-pulse">
              <Leaf className="w-10 h-10 text-primary-foreground" />
            </div>

            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              Sustainable Tech for <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Change</span>
            </h3>

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We believe technology should not only connect people but also <span className="font-semibold text-foreground">protect the planet</span>.
              That's why we promote <span className="font-semibold text-primary">energy-efficient hosting, green servers</span>, and sustainable digital practices.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Future Initiatives */}
      <section className="py-20 bg-gradient-to-b from-card via-background to-card relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/30 to-golden/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60" />
              <img
                src={ourworkFuture}
                alt="Future Initiatives"
                className="relative rounded-2xl shadow-elegant w-full h-96 object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-accent to-golden rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                <Rocket className="w-8 h-8 text-foreground" />
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-golden flex items-center justify-center shadow-lg">
                  <Rocket className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  Future <span className="bg-gradient-to-r from-accent to-golden bg-clip-text text-transparent">Initiatives</span>
                </h3>
              </div>

              <p className="text-muted-foreground mb-6 text-lg">
                We are working on exciting new projects:
              </p>

              <ul className="space-y-4">
                {futureInitiatives.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent to-golden flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-4 h-4 text-foreground" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Together for Digital Empowerment CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" />
        <div className="absolute top-0 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/3 w-48 h-48 bg-accent/10 rounded-full blur-[80px]" />

        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="p-10 rounded-3xl glass-card border border-border/30 shadow-elegant text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Star className="w-6 h-6 text-golden animate-pulse" />
              <Heart className="w-8 h-8 text-primary animate-pulse" />
              <Star className="w-6 h-6 text-golden animate-pulse" />
            </div>

            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Together for <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Digital Empowerment</span>
            </h3>

            <p className="text-muted-foreground mb-2 text-lg">
              Every small effort counts.
            </p>

            <p className="text-muted-foreground mb-8">
              When you donate, volunteer, or simply share our <span className="font-semibold text-foreground">mission</span> — you help us make technology a tool for social good.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/volunteer">
                <Button
                  variant="heroOutline"
                  size="xl"
                  className="group relative overflow-hidden btn-ripple glow-primary shadow-2xl"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Join Us
                </Button>
              </Link>
              <Link to="/donate">
                <Button
                  variant="hero"
                  size="xl"
                  className="group relative overflow-hidden btn-ripple glow-primary shadow-2xl"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    Donate Now
                    <Sparkles className="w-5 h-5 group-hover:animate-wiggle" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurWork;