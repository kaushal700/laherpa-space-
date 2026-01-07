import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Star, Zap, Mail, Phone, MessageSquare } from "lucide-react";
import contactHero from "@/assets/contact-hero.jpg";

const ContactUs = () => {
  useEffect(() => {
    document.title = "Contact Us - La Herpaile";
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section - Full Screen Like About Us */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0 z-0">
          <img 
            src={contactHero} 
            alt="Contact our team" 
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
            <Sparkles className="w-5 h-5 text-golden animate-pulse" />
            <span className="text-sm font-bold tracking-[0.2em] uppercase bg-gradient-to-r from-golden via-primary-foreground to-golden bg-clip-text text-transparent">
              Get In Touch
            </span>
            <Sparkles className="w-5 h-5 text-golden animate-pulse" />
          </div>

          <h1 
            className="font-display text-5xl md:text-7xl lg:text-9xl font-black mb-8 animate-fade-up tracking-tight"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="block text-shadow-hero drop-shadow-2xl">CONTACT</span>
            <span className="block bg-gradient-to-r from-golden via-accent to-primary bg-clip-text text-transparent animate-gradient-x drop-shadow-lg">
              US
            </span>
          </h1>

          <p 
            className="max-w-2xl mx-auto text-lg md:text-xl opacity-90 mb-12 font-light animate-fade-up leading-relaxed text-primary-foreground/90"
            style={{ animationDelay: "0.2s" }}
          >
            We'd love to hear from you! Reach out and 
            we'll respond promptly.
          </p>

          {/* Stats Preview */}
          <div 
            className="mt-10 grid grid-cols-3 gap-6 max-w-xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            {[
              { number: "24hr", label: "Response Time", icon: "⚡" },
              { number: "24/7", label: "Support", icon: "💬" },
              { number: "100%", label: "Satisfaction", icon: "❤️" },
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

      {/* Content Section */}
      <section className="py-20 bg-gradient-to-b from-background via-card to-background relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            
            {/* Get In Touch */}
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Get In <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                We'd love to hear from you! Whether you have questions, ideas, or want to <span className="text-accent">volunteer</span>, reach out and <span className="text-primary">we'll respond promptly</span>.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12 p-8 rounded-3xl bg-gradient-to-br from-card via-background to-card border border-border/50 shadow-card">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Contact <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Information</span>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-border/30 hover:shadow-card transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <span className="font-semibold text-foreground block">Email</span>
                    <a 
                      href="mailto:support@laherpa.space" 
                      className="text-primary hover:text-accent underline underline-offset-4 transition-colors"
                    >
                      support@laherpa.space
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-border/30 hover:shadow-card transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center shadow-lg">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <span className="font-semibold text-foreground block">Phone</span>
                    <a 
                      href="tel:+919315260977" 
                      className="text-primary hover:text-accent underline underline-offset-4 transition-colors"
                    >
                      +91 9315260977
                    </a>
                  </div>
                </li>
              </ul>
              <p className="mt-6 text-sm text-muted-foreground border-l-4 border-primary/50 pl-4">
                For urgent matters, please call us directly. We aim to <span className="text-accent">respond</span> to emails within <span className="font-semibold text-foreground">24 hours</span>.
              </p>
            </div>

            {/* Send Us Message Form */}
            <div className="mb-12 p-8 rounded-3xl bg-gradient-to-br from-card via-background to-card border border-border/50 shadow-card">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-golden to-accent flex items-center justify-center shadow-lg">
                  <MessageSquare className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  Send Us <span className="bg-gradient-to-r from-golden to-accent bg-clip-text text-transparent">Message</span>
                </h3>
              </div>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name <span className="text-muted-foreground">(required)</span>
                  </label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email <span className="text-muted-foreground">(required)</span>
                  </label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Website
                  </label>
                  <input 
                    type="url" 
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 resize-y"
                  />
                </div>
                
                <Button 
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full group relative overflow-hidden btn-ripple glow-primary shadow-2xl"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Submit
                    <Sparkles className="w-5 h-5 group-hover:animate-wiggle" />
                  </span>
                </Button>
              </form>
              
              <p className="text-center text-muted-foreground text-sm mt-4">
                Your message will be reviewed by our team and we'll get back to you as soon as possible.
              </p>
            </div>

            {/* Join Our Mission */}
            <div className="text-center py-10 px-8 rounded-3xl glass-card border border-border/30 shadow-card">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="w-5 h-5 text-golden animate-pulse" />
                <Star className="w-4 h-4 text-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
                <Star className="w-5 h-5 text-golden animate-pulse" style={{ animationDelay: "1s" }} />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Join Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Mission</span>
              </h3>
              <p className="text-muted-foreground mb-8">
                Want to make a bigger impact? You can volunteer, donate, or share our work with your network. Every action <span className="text-primary">helps us</span> empower <span className="text-accent">communities</span> and change lives.
              </p>
              
              <div className="flex flex-wrap justify-center gap-8">
                <Link 
                  to="/donate" 
                  className="text-foreground hover:text-primary underline underline-offset-4 transition-colors font-medium"
                >
                  Donate Now →
                </Link>
                <Link 
                  to="/volunteer" 
                  className="text-foreground hover:text-primary underline underline-offset-4 transition-colors font-medium"
                >
                  Volunteer With Us
                </Link>
                <Link 
                  to="/our-work" 
                  className="text-foreground hover:text-primary underline underline-offset-4 transition-colors font-medium"
                >
                  Learn More About Our Work
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;