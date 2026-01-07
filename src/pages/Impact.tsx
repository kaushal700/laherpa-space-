import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Zap, Users, BookOpen, Shield, Monitor, HelpCircle, ArrowRight, Sparkles, Star, CheckCircle } from "lucide-react";
import impactHeroImage from "@/assets/impact-hero.jpg";
import impactEducationImage from "@/assets/impact-education.jpg";
import impactCommunityImage from "@/assets/impact-community.jpg";

const Impact = () => {
  useEffect(() => {
    document.title = "Impact - La Herpaile";
  }, []);
  const impactHighlights = [
    { text: "Providing students in remote areas access to essential software.", icon: Monitor },
    { text: "Low-cost high-performance computing for NGOs and volunteers.", icon: Users },
    { text: "Running digital training classes and online workshops.", icon: BookOpen }
  ];

  const educationUseCases = [
    { text: "Virtual computer labs — multiple students, one machine.", icon: Monitor },
    { text: "Online training for coding, design, and basic data skills.", icon: BookOpen },
    { text: "Resource-sharing of expensive software licenses.", icon: Users }
  ];

  const faqItems = [
    {
      question: "What is RDP and why is it useful?",
      answer: "RDP allows remote access to a server's desktop, enabling users to run high-end software without expensive machines.",
      icon: HelpCircle
    },
    {
      question: "Is it secure?",
      answer: "Yes, with proper configuration (encryption, strong passwords, MFA) RDP is secure. We also perform regular audits and updates.",
      icon: Shield
    },
    {
      question: "How much does it cost?",
      answer: "Costs depend on usage, user count, and server specs. We provide affordable NGO/community packages.",
      icon: Zap
    },
    {
      question: "Which devices can be used?",
      answer: "Laptops, desktops, tablets, and even low-cost thin clients.",
      icon: Monitor
    },
    {
      question: "How do I get started?",
      answer: "A basic internet connection and a small pilot group — we handle the rest.",
      icon: ArrowRight
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section - Full Screen like About Us */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={impactHeroImage} 
            alt="Digital Impact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/80 to-foreground/70"></div>
        </div>

        {/* Animated Background Elements - Like Home ImpactStats */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[150px] animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[200px]"></div>
        </div>

        {/* Floating Stars - Like Home */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Star className="absolute top-20 left-[10%] w-8 h-8 text-golden/30 floating-slow" />
          <Star className="absolute top-1/3 right-[15%] w-6 h-6 text-primary/25 floating" />
          <Sparkles className="absolute bottom-1/4 left-[20%] w-7 h-7 text-accent/30 floating-fast" />
          <Star className="absolute top-1/2 right-[8%] w-5 h-5 text-golden/25 floating" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 text-primary-foreground text-sm font-bold mb-6 animate-fade-up border border-primary-foreground/20">
              <Sparkles className="w-4 h-4 text-golden" />
              <span className="tracking-widest uppercase">Transforming Lives Through Technology</span>
              <Sparkles className="w-4 h-4 text-golden" />
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-black text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Our <span className="bg-gradient-to-r from-primary via-accent to-golden bg-clip-text text-transparent">Impact</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Empowering communities with secure, cost-effective digital solutions that create lasting change.
            </p>

            {/* Stats - Like Home ImpactStats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              {[
                { number: "500+", label: "Students Empowered", gradient: "from-primary via-accent to-primary" },
                { number: "50+", label: "NGOs Supported", gradient: "from-secondary via-forest to-secondary" },
                { number: "100+", label: "Training Sessions", gradient: "from-golden via-accent to-golden" }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className={`text-3xl md:text-4xl font-display font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>{stat.number}</div>
                  <div className="text-primary-foreground/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-golden rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Transforming Lives Through Digital Access - Like Home ImpactStats section */}
      <section className="py-28 lg:py-40 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
        {/* Animated Background - Like Home */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-aurora opacity-20" />
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        {/* Floating Elements */}
        <Star className="absolute top-20 left-[10%] w-8 h-8 text-golden/20 floating-slow" />
        <Zap className="absolute top-1/3 right-[8%] w-10 h-10 text-primary/15 floating" />
        <Sparkles className="absolute bottom-1/4 left-[5%] w-6 h-6 text-accent/20 floating-fast" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 text-primary text-sm font-bold mb-6 animate-fade-up border border-primary/20">
              <Zap className="w-4 h-4" />
              <span className="tracking-widest uppercase">Digital Transformation</span>
              <Zap className="w-4 h-4" />
            </div>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Transforming Lives Through
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-golden bg-clip-text text-transparent">
                Digital Access
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl animate-fade-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
              At <span className="font-semibold text-primary">Laherpa.space</span>, we leverage Remote Desktop Protocol (RDP) servers to provide access to computers and applications that are often expensive or hard to acquire.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center max-w-6xl mx-auto">
            {/* Image - Like Home HowWeHelp */}
            <div className="group relative animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-golden rounded-[2rem] blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
              <div className="relative overflow-hidden rounded-3xl shadow-2xl hover-lift bg-card">
                <div className="image-zoom-container">
                  <img 
                    src={impactCommunityImage} 
                    alt="Community Impact"
                    className="w-full h-[480px] object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating Icon */}
                <div className="absolute top-6 right-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Zap className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-10 text-primary-foreground">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs uppercase tracking-widest mb-5 border border-primary-foreground/20">
                    <Sparkles className="w-3 h-3 text-golden" />
                    Impact Highlights
                  </div>
                  <h3 className="font-display text-3xl font-black mb-4 group-hover:text-golden transition-colors duration-300">
                    Community Empowerment
                  </h3>
                </div>
              </div>
            </div>

            {/* Impact Highlights - Like Home WaysToHelp cards */}
            <div className="space-y-5">
              {impactHighlights.map((item, index) => (
                <div
                  key={index}
                  className="group relative animate-fade-up"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-primary/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 scale-105" />
                  
                  <div className="relative flex gap-6 p-6 rounded-2xl bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all duration-500 cursor-pointer hover-lift overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    
                    <div className="relative flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <item.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    
                    <div className="flex-grow flex items-center">
                      <p className="text-muted-foreground text-base leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              <Link to="/contact-us">
                <Button 
                  variant="heroOutline" 
                  size="lg"
                  className="group/btn border-2 mt-6 bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-primary/90 hover:to-accent/90"
                >
                  Discover More
                  <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Skills Development - Like Home HowWeHelp section */}
      <section className="py-28 lg:py-40 bg-gradient-to-b from-muted/30 via-muted/50 to-muted/30 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-secondary/15 to-forest/10 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-forest/15 to-secondary/10 rounded-full blur-[180px] animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        {/* Floating Elements */}
        <Star className="absolute top-20 left-[15%] w-8 h-8 text-golden/20 floating-slow" />
        <BookOpen className="absolute top-1/3 right-[10%] w-6 h-6 text-secondary/20 floating" />
        <Sparkles className="absolute bottom-1/4 left-[8%] w-7 h-7 text-forest/15 floating-fast" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gradient-to-r from-secondary/20 via-forest/10 to-secondary/20 text-secondary text-sm font-bold mb-6 animate-fade-up border border-secondary/20">
              <BookOpen className="w-4 h-4" />
              <span className="tracking-widest uppercase">Education & Skills</span>
              <BookOpen className="w-4 h-4" />
            </div>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Education &{" "}
              <span className="bg-gradient-to-r from-secondary via-forest to-secondary bg-clip-text text-transparent">
                Skills Development
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl animate-fade-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
              Our RDP solution allows schools and training centers to access modern tools without expensive hardware or software.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center max-w-6xl mx-auto">
            {/* Use Cases Cards */}
            <div className="space-y-5 order-2 lg:order-1">
              {educationUseCases.map((item, index) => (
                <div
                  key={index}
                  className="group relative animate-fade-up"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-secondary/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 scale-105" />
                  
                  <div className="relative flex gap-6 p-6 rounded-2xl bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-xl border border-border/50 hover:border-secondary/50 transition-all duration-500 cursor-pointer hover-lift overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    
                    <div className="relative flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary via-forest to-secondary flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <item.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    
                    <div className="flex-grow flex items-center">
                      <p className="text-muted-foreground text-base leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              <Link to="/contact-us">
                <Button 
                  variant="heroOutline" 
                  size="lg"
                  className="group/btn border-2 mt-6 bg-gradient-to-r from-secondary to-forest text-primary-foreground hover:from-secondary/90 hover:to-forest/90"
                >
                  Book a Demo
                  <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
            </div>

            {/* Image - Like Home HowWeHelp */}
            <div className="group relative animate-fade-up order-1 lg:order-2" style={{ animationDelay: "0.3s" }}>
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary via-forest to-secondary rounded-[2rem] blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
              <div className="relative overflow-hidden rounded-3xl shadow-2xl hover-lift bg-card">
                <div className="image-zoom-container">
                  <img 
                    src={impactEducationImage} 
                    alt="Education Impact"
                    className="w-full h-[480px] object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating Icon */}
                <div className="absolute top-6 right-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary via-forest to-secondary flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <BookOpen className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-10 text-primary-foreground">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs uppercase tracking-widest mb-5 border border-primary-foreground/20">
                    <Star className="w-3 h-3 text-golden" />
                    Skills Development
                  </div>
                  <h3 className="font-display text-3xl font-black mb-4 group-hover:text-golden transition-colors duration-300">
                    Virtual Learning Labs
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Like Home WaysToHelp */}
      <section className="py-28 lg:py-40 bg-gradient-to-b from-background via-background to-muted/20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-golden/10 to-accent/5 rounded-full blur-[180px] -translate-x-1/2 animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-primary/10 to-golden/5 rounded-full blur-[150px] translate-x-1/3 animate-pulse" style={{ animationDelay: "1.5s" }} />
        </div>

        {/* Floating Elements */}
        <Sparkles className="absolute top-24 right-[12%] w-7 h-7 text-golden/25 floating-slow" />
        <Star className="absolute bottom-1/3 left-[8%] w-6 h-6 text-primary/20 floating" />
        <HelpCircle className="absolute top-1/2 right-[5%] w-5 h-5 text-accent/25 floating-fast" />

        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gradient-to-r from-golden/20 via-accent/10 to-golden/20 text-golden text-sm font-bold mb-6 animate-fade-up border border-golden/20">
              <HelpCircle className="w-4 h-4" />
              <span className="tracking-widest uppercase">Have Questions?</span>
              <HelpCircle className="w-4 h-4" />
            </div>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-golden via-primary to-accent bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </div>

          <div className="space-y-5">
            {faqItems.map((faq, index) => (
              <div
                key={index}
                className="group relative animate-fade-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-golden/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 scale-105" />
                
                <div className="relative flex gap-6 p-6 rounded-2xl bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-xl border border-border/50 hover:border-golden/50 transition-all duration-500 cursor-pointer hover-lift overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  <div className="relative flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-golden via-accent to-golden flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <faq.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="font-display text-xl font-bold text-foreground group-hover:text-golden transition-colors duration-300 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/70 transition-colors duration-300">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Make an Impact CTA - Like Home DonationBanner */}
      <section className="py-28 lg:py-40 bg-gradient-to-b from-muted/30 via-foreground to-foreground relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 to-accent/15 rounded-full blur-[180px] animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-gradient-to-br from-golden/15 to-primary/10 rounded-full blur-[200px] animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>

        {/* Floating Stars */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Star className="absolute top-20 left-[15%] w-8 h-8 text-golden/30 floating-slow" />
          <Sparkles className="absolute top-1/3 right-[12%] w-7 h-7 text-primary/25 floating" />
          <Star className="absolute bottom-1/4 left-[10%] w-6 h-6 text-accent/30 floating-fast" />
          <Star className="absolute bottom-1/3 right-[20%] w-5 h-5 text-golden/25 floating" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 text-primary-foreground text-sm font-bold mb-6 animate-fade-up border border-primary-foreground/20">
              <Sparkles className="w-4 h-4 text-golden" />
              <span className="tracking-widest uppercase">Get Started Today</span>
              <Sparkles className="w-4 h-4 text-golden" />
            </div>
            
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Ready to Make an{" "}
              <span className="bg-gradient-to-r from-golden via-primary to-accent bg-clip-text text-transparent">Impact?</span>
            </h2>
            
            <p className="text-xl text-primary-foreground/80 mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Start an RDP pilot for your community today — free consultation and cost analysis included.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Link to="/contact-us">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary via-accent to-golden text-primary-foreground shadow-glow-md hover:shadow-glow-lg transition-all duration-500 group px-8 text-lg"
                >
                  <Zap className="mr-2 w-5 h-5" />
                  Book a Pilot
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/contact-us">
                <Button size="lg" variant="heroOutline" className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm transition-all duration-300 px-8">
                  Contact Us
                </Button>
              </Link>
              
              <Link to="/server">
                <Button size="lg" variant="heroOutline" className="border-2 border-golden/50 text-golden hover:bg-golden/10 backdrop-blur-sm transition-all duration-300 px-8">
                  Request a Demo
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

export default Impact;
