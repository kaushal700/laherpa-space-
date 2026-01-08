import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Sprout, GraduationCap, Globe, Users, Heart, CheckCircle, AlertCircle, ArrowRight, Server as ServerIcon, Zap, Shield, ChevronDown, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingParticles from "@/components/FloatingParticles";
import serverEducation from "@/assets/server-educations.png";
import serverNgo from "@/assets/server-ngo.png";
import serverWomenYouth from "@/assets/server-women-youth.jpg";
import serverHero from "@/assets/server-hero-new.jpg";

const Server = () => {
  useEffect(() => {
    document.title = "Server - La Herpaile";
  }, []);
  const features = [
    {
      icon: GraduationCap,
      title: "Education Support",
      description: "Students can access learning tools remotely.",
      image: serverEducation
    },
    {
      icon: Globe,
      title: "Digital Inclusion",
      description: "Empowering rural and remote communities.",
      image: serverNgo
    }
  ];

  const eligibility = [
    {
      icon: Users,
      title: "NGO Access",
      description: "Helping grassroots organisations run digitally.",
      image: serverNgo
    },
    {
      icon: CheckCircle,
      title: "Verified Volunteers",
      description: "Our verified volunteers and field workers.",
      image: serverEducation
    },
    {
      icon: Heart,
      title: "Women & Youth",
      description: "Women-led or youth-focused initiatives.",
      image: serverWomenYouth,
    }
  ];

  const stats = [
    { icon: ServerIcon, value: "99.9%", label: "Uptime" },
    { icon: Users, value: "500+", label: "Active Users" },
    { icon: Zap, value: "24/7", label: "Support" },
    { icon: Shield, value: "100%", label: "Secure" }
  ];

  const terms = [
    "RDP access is free and must be used for educational, nonprofit, or community work only.",
    "Access is valid for 30 days and may be extended upon review. Any misuse (e.g., commercial use activity) will result in immediate stop.",
    "Users must agree to our Acceptable Use Policy at the time of applying."
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section - Full Screen Like Volunteer Page */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0 z-0">
          <img
            src={serverHero}
            alt="Cloud Computing and Technology"
            className="w-full h-full object-cover scale-110 animate-[scale-in_1.5s_ease-out_forwards]"
          />
          {/* Multi-layer Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/40 to-foreground/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/10" />
          
          {/* Animated Glow Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 border border-primary-foreground/10 rounded-full floating-slow" />
        <div className="absolute top-40 right-20 w-12 h-12 border border-primary-foreground/20 rounded-full floating" />
        <div className="absolute bottom-40 left-20 w-8 h-8 bg-primary/30 rounded-full floating-fast blur-sm" />
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-golden/40 rounded-full floating" />

        <FloatingParticles />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground pt-32">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-3 rounded-full glass-card mb-6 animate-fade-up">
            <Sparkles className="w-4 h-4 text-golden animate-pulse" />
            <span className="text-sm font-medium tracking-widest uppercase opacity-90">
              La Herpaille Server Initiative
            </span>
            <Sparkles className="w-4 h-4 text-golden animate-pulse" />
          </div>

          <h1 
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up text-shadow-hero"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="block">EMPOWERING</span>
            <span className="block animate-gradient-text">THROUGH TECHNOLOGY</span>
          </h1>

          <p 
            className="max-w-2xl mx-auto text-lg md:text-xl opacity-90 mb-10 font-light animate-fade-up leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            Free RDP server access for students, NGOs, and communities.
            Bridging the digital divide, one connection at a time.
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Link to="/server-info">
              <Button 
                variant="hero" 
                size="xl" 
                className="group relative overflow-hidden btn-ripple glow-primary"
              >
                <span className="relative z-10 flex items-center gap-2">
                  APPLY NOW
                  <ServerIcon className="w-5 h-5 group-hover:animate-wiggle" />
                </span>
              </Button>
            </Link>
            <Button 
              variant="heroOutline" 
              size="xl"
              className="group backdrop-blur-sm hover:backdrop-blur-lg transition-all duration-300"
            >
              LEARN MORE
            </Button>
          </div>

          {/* Stats Preview */}
          <div 
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-2xl md:text-3xl font-bold text-golden">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-wider opacity-70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-primary-foreground/60 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-8 h-14 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2 glass-card">
            <ChevronDown className="w-5 h-5 text-primary-foreground/70 scroll-indicator" />
          </div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
      </section>

      {/* Green Accent Bar */}
      <div className="h-2 bg-gradient-to-r from-primary via-accent to-primary" />

      {/* RDP Access Section */}
      <section className="py-20 bg-gradient-to-br from-warm-50 via-background to-golden-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Main Title */}
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-forest-100 text-forest-700 text-sm font-medium mb-4">
                🌐 Digital Empowerment Program
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                RDP Access for Empowerment & Learning
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                As part of our digital inclusion mission, we offer free Remote Desktop (RDP) access to students, NGOs, and underprivileged individuals.
              </p>
            </div>

            {/* Features with Images */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="rounded-2xl bg-gradient-to-br from-forest-50 to-golden-50 border border-forest-200 overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="h-56 overflow-hidden relative">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-6 flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-forest-500 to-forest-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-forest-500/30 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Apply Button */}
            <div className="text-center mb-20">
              <Link to="/server-info">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-forest-600 to-forest-700 hover:from-forest-700 hover:to-forest-800 text-white px-10 py-7 text-lg rounded-xl shadow-xl shadow-forest-500/20 hover:shadow-2xl hover:shadow-forest-500/30 hover:scale-105 transition-all duration-300"
                >
                  Apply for RDP Server
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Who Can Apply */}
            <div className="mb-20">
              <div className="text-center mb-10">
                <span className="inline-block px-4 py-2 rounded-full bg-golden-100 text-golden-700 text-sm font-medium mb-4">
                  ✨ Eligibility
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  Who Can Apply?
                </h3>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {eligibility.map((item, index) => (
                  <div 
                    key={index}
                    className="group rounded-2xl bg-white border border-forest-200 hover:border-forest-500 hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-3"
                  >
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h4 className="font-display text-xl font-bold text-white">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                    <div className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 -mt-12 rounded-full bg-gradient-to-br from-forest-500 to-forest-600 flex items-center justify-center border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Banner */}
            <div className="relative mb-20 rounded-3xl overflow-hidden">
              <img 
                src={serverHero} 
                alt="Apply Now" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-forest-900/95 via-forest-800/90 to-forest-900/80" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                    Ready to Get Started?
                  </h3>
                  <p className="text-white/80 mb-6 max-w-md mx-auto">
                    Join hundreds of students and organizations already benefiting from our RDP services.
                  </p>
                  <Link to="/server-info">
                    <Button 
                      size="lg" 
                      className="bg-white text-forest-700 hover:bg-white/90 px-10 py-7 text-xl rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    >
                      Apply for RDP Server
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-warm-100 to-golden-100 border border-warm-200 hover:shadow-lg transition-shadow duration-300">
              <h4 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-golden-600" />
                Terms and Conditions
              </h4>
              <ul className="space-y-4">
                {terms.map((term, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <div className="w-3 h-3 rounded-full bg-forest-500 mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                    <p className="text-muted-foreground">{term}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Need Help */}
            <div className="text-center py-10 px-8 rounded-2xl bg-gradient-to-br from-forest-50 to-golden-50 border border-forest-200">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Need Help?{" "}
                <Link to="/contact-us" className="text-forest-600 hover:text-forest-700 underline underline-offset-4 transition-colors">
                  Contact Us
                </Link>
              </h3>
              <p className="text-muted-foreground">
                Part of our <span className="text-forest-600 font-semibold">non-profit mission</span> to bridge the digital divide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Server;
