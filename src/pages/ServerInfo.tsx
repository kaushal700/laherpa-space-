import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, Monitor, CheckCircle, Users, GraduationCap, Sparkles, Star, Zap, Server, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import serverInfoStudent from "@/assets/server-info-student.jpg";
import serverInfoHero from "@/assets/server-info-hero.jpg";

const ServerInfo = () => {
  useEffect(() => {
    document.title = "Server Info - La Herpaile";
  }, []);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.country.trim() || !formData.phone.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Application Submitted!",
      description: "We will review your application and get back to you soon.",
    });

    // Reset form
    setFormData({ name: "", email: "", country: "", phone: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const benefits = [
    { icon: GraduationCap, text: "Free Access for Students" },
    { icon: Users, text: "NGO & Community Support" },
    { icon: CheckCircle, text: "24/7 Technical Assistance" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section - Full Screen Like About Us Page */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0 z-0">
          <img 
            src={serverInfoHero} 
            alt="Team collaborating with technology" 
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
              La Herpaile Foundation
            </span>
            <Sparkles className="w-5 h-5 text-golden animate-pulse" />
          </div>

          <h1 
            className="font-display text-5xl md:text-7xl lg:text-9xl font-black mb-8 animate-fade-up tracking-tight"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="block text-shadow-hero drop-shadow-2xl">SERVER</span>
            <span className="block bg-gradient-to-r from-golden via-accent to-primary bg-clip-text text-transparent animate-gradient-x drop-shadow-lg">
              INFO
            </span>
          </h1>

          <p 
            className="max-w-2xl mx-auto text-lg md:text-xl opacity-90 mb-12 font-light animate-fade-up leading-relaxed text-primary-foreground/90"
            style={{ animationDelay: "0.2s" }}
          >
            Empowering communities through free digital access and technology resources. 
            Apply now to get your free RDP server access.
          </p>

          {/* Stats Preview */}
          <div 
            className="mt-10 grid grid-cols-3 gap-6 max-w-xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            {[
              { number: "100+", label: "Servers Active", icon: "💻" },
              { number: "500+", label: "Students Helped", icon: "🎓" },
              { number: "24/7", label: "Support", icon: "⚡" },
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

      {/* Form Section - Home Page Colors */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-background via-card to-background">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-golden/5 rounded-full blur-[180px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Side - Image and Benefits */}
              <div className="space-y-8 animate-fade-in">
                {/* Featured Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-elegant group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60" />
                  <img 
                    src={serverInfoStudent} 
                    alt="Student using laptop" 
                    className="relative w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700 rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent rounded-2xl" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-primary-foreground font-display text-xl font-semibold">
                      "RDP access helped me complete my education remotely"
                    </p>
                    <p className="text-primary-foreground/70 text-sm mt-2">- Student Beneficiary</p>
                  </div>
                </div>

                {/* Benefits List */}
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-xl glass-card border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300 group"
                      style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg glow-primary group-hover:scale-110 transition-transform">
                        <benefit.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <span className="text-foreground font-medium text-lg">{benefit.text}</span>
                    </div>
                  ))}
                </div>

                {/* Additional Info Card */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-card via-background to-card border border-border/50 shadow-card">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-golden to-accent flex items-center justify-center">
                      <Globe className="w-5 h-5 text-foreground" />
                    </div>
                    <h4 className="font-display text-lg font-bold text-foreground">Why Choose Us?</h4>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We provide <span className="text-primary font-medium">secure, reliable RDP servers</span> completely free for students, NGOs, and educational institutions. Our mission is to bridge the digital divide.
                  </p>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60" />
                <div className="relative bg-gradient-to-br from-card via-background to-card rounded-3xl p-8 shadow-elegant border border-border/50 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  {/* Form Title */}
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                      <Server className="w-5 h-5 text-primary" />
                      <span className="font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Apply for RDP Access</span>
                    </div>
                    <p className="text-muted-foreground mt-4 text-sm">
                      Fill in your details below to get started
                    </p>
                  </div>

                  {/* Application Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground font-semibold flex items-center gap-2">
                        Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-background border-border rounded-lg h-12 focus:border-primary focus:ring-primary transition-all"
                        placeholder="Enter your full name"
                        maxLength={100}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground font-semibold flex items-center gap-2">
                        Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-background border-border rounded-lg h-12 focus:border-primary focus:ring-primary transition-all"
                        placeholder="Enter your email address"
                        maxLength={255}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="country" className="text-foreground font-semibold flex items-center gap-2">
                        Country <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="country"
                        name="country"
                        type="text"
                        value={formData.country}
                        onChange={handleChange}
                        className="bg-background border-border rounded-lg h-12 focus:border-primary focus:ring-primary transition-all"
                        placeholder="Enter your country"
                        maxLength={100}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground font-semibold flex items-center gap-2">
                        Phone Number with Country Code <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-background border-border rounded-lg h-12 focus:border-primary focus:ring-primary transition-all"
                        placeholder="+91 XXXXXXXXXX"
                        maxLength={20}
                      />
                    </div>

                    <Button 
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full group relative overflow-hidden btn-ripple glow-primary shadow-2xl"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        Submit Application
                        <Sparkles className="w-5 h-5 group-hover:animate-wiggle" />
                      </span>
                    </Button>
                  </form>

                  {/* Trust Badge */}
                  <div className="mt-6 text-center">
                    <p className="text-muted-foreground text-xs flex items-center justify-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Your data is safe and encrypted
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServerInfo;