import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, CheckCircle, Leaf, Globe, Sparkles, Star, Zap, Gift, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import donateHero from "@/assets/donate-hero.jpg";
import donateImpact from "@/assets/donate-impact.jpg";
import donateChange from "@/assets/donate-change.jpg";

const Donate = () => {
  useEffect(() => {
    document.title = "Donate - La Herpaile";
  }, []);
  const supportMatters = [
    "Provide essential education resources to children and adults",
    "Ensure access to healthcare and wellness programs",
    "Develop sustainable community projects",
    "Empower individuals to create long-term change"
  ];

  const howToGive = [
    { title: "One-Time Donation", desc: "Support a specific project or campaign with a single contribution.", icon: Gift },
    { title: "Monthly Giving", desc: "Become a recurring donor and help us plan long-term initiatives.", icon: Heart },
    { title: "Corporate/Partnership Support", desc: "Join as a partner and amplify your impact.", icon: Users }
  ];

  const lastingChange = [
    "Why Donate to La Herpaille?",
    "Transparent Use of Funds",
    "Regular Impact Updates",
    "Focused on Long-Term Environmental Change",
    "Registered NGO with NGO-Darpan, PAN, and BOG"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section - Full Screen Like About Us */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0 z-0">
          <img 
            src={donateHero} 
            alt="Make a difference through donation" 
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
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground pt-20">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-3 rounded-full glass-card mb-8 animate-fade-up border border-primary-foreground/20 shadow-2xl">
            <Heart className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm font-bold tracking-[0.2em] uppercase bg-gradient-to-r from-golden via-primary-foreground to-golden bg-clip-text text-transparent">
              Make A Difference
            </span>
            <Heart className="w-5 h-5 text-primary animate-pulse" />
          </div>

          <h1 
            className="font-display text-5xl md:text-7xl lg:text-9xl font-black mb-8 animate-fade-up tracking-tight"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="block text-shadow-hero drop-shadow-2xl">DONATE</span>
            <span className="block bg-gradient-to-r from-golden via-accent to-primary bg-clip-text text-transparent animate-gradient-x drop-shadow-lg">
              TODAY
            </span>
          </h1>

          <p 
            className="max-w-2xl mx-auto text-lg md:text-xl opacity-90 mb-12 font-light animate-fade-up leading-relaxed text-primary-foreground/90"
            style={{ animationDelay: "0.2s" }}
          >
            Your contribution helps us empower communities, 
            provide education, healthcare, and create sustainable change.
          </p>

          {/* CTA Button in Hero */}
          <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button 
              variant="hero"
              size="xl"
              className="group relative overflow-hidden btn-ripple glow-primary shadow-2xl"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Heart className="w-5 h-5 group-hover:animate-pulse" />
                Donate Now
                <Sparkles className="w-5 h-5 group-hover:animate-wiggle" />
              </span>
            </Button>
          </div>

          {/* Stats Preview */}
          <div 
            className="mt-16 grid grid-cols-3 gap-6 max-w-xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            {[
              { number: "100%", label: "Transparent", icon: "✨" },
              { number: "1K+", label: "Lives Helped", icon: "❤️" },
              { number: "50+", label: "Projects", icon: "🌍" },
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

      {/* Why Your Support Matters */}
      <section className="py-20 bg-gradient-to-b from-background via-card to-background relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60" />
              <img 
                src={donateImpact} 
                alt="Your impact" 
                className="relative rounded-2xl shadow-elegant w-full h-96 object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-3 rounded-xl shadow-lg flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                <span className="font-bold">Real Impact</span>
              </div>
            </div>
            
            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg glow-primary">
                  <Heart className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  Why Your Support <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Matters</span>
                </h2>
              </div>
              
              <p className="text-muted-foreground mb-8 text-lg">
                Every donation, big or small, directly impacts lives. With your support, we can:
              </p>
              
              <ul className="space-y-4">
                {supportMatters.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Choose How to Give */}
      <section className="py-20 bg-gradient-to-b from-card via-background to-card relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-golden/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/4 right-0 w-48 h-48 bg-primary/5 rounded-full blur-[80px]" />
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose How to <span className="bg-gradient-to-r from-golden to-accent bg-clip-text text-transparent">Give</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Multiple ways to support our mission and make a lasting impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {howToGive.map((item, index) => (
              <div 
                key={index} 
                className="p-8 rounded-3xl bg-gradient-to-br from-card via-background to-card border border-border/50 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              variant="hero"
              size="xl"
              className="group relative overflow-hidden btn-ripple glow-primary shadow-2xl"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Heart className="w-5 h-5" />
                Donate to La Herpaille
                <Sparkles className="w-5 h-5 group-hover:animate-wiggle" />
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* Your Support Creates Lasting Change */}
      <section className="py-20 bg-gradient-to-b from-background via-card to-background relative overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center shadow-lg">
                  <Globe className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  Creating <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Lasting Change</span>
                </h2>
              </div>
              
              <ul className="space-y-4 mb-8">
                {lastingChange.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-secondary/10 to-primary/10 border border-border/30 mb-8">
                <Leaf className="w-6 h-6 text-secondary" />
                <span className="font-medium text-foreground">Donate to Protect Wildlife & Our Planet</span>
                <Globe className="w-6 h-6 text-primary" />
              </div>
            </div>
            
            {/* Image */}
            <div className="order-1 md:order-2 relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary/30 to-primary/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60" />
              <img 
                src={donateChange} 
                alt="Creating change" 
                className="relative rounded-2xl shadow-elegant w-full h-96 object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              {/* Floating icon */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                <Leaf className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" />
        <div className="absolute top-0 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/3 w-48 h-48 bg-accent/10 rounded-full blur-[80px]" />
        
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="p-10 rounded-3xl glass-card border border-border/30 shadow-elegant text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Star className="w-6 h-6 text-golden animate-pulse" />
              <Star className="w-5 h-5 text-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
              <Star className="w-6 h-6 text-golden animate-pulse" style={{ animationDelay: "1s" }} />
            </div>
            
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Help?</span>
            </h3>
            
            <p className="text-muted-foreground mb-4 text-lg">
              <span className="font-bold text-foreground">La Herpaille</span> is committed to rescuing animals, restoring habitats, and addressing the climate crisis at the grassroots level.
            </p>
            
            <p className="text-muted-foreground mb-8">
              Your support helps us create a safer, greener world — one life at a time.
            </p>
            
            <Button 
              variant="hero"
              size="xl"
              className="group relative overflow-hidden btn-ripple glow-primary shadow-2xl"
            >
              <span className="relative z-10 flex items-center gap-3">
                🌍 MAKE A DIFFERENCE - DONATE NOW
                <Heart className="w-5 h-5 group-hover:animate-pulse" />
              </span>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;