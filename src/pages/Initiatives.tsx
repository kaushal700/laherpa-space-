import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Lightbulb, Globe, GraduationCap, ArrowRight, Sparkles, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import initiativesHero from "@/assets/initiatives-hero.jpg";
import educationSupport from "@/assets/education-support.jpg";
import digitalInclusion from "@/assets/digital-inclusion.jpg";

const Initiatives = () => {
  useEffect(() => {
    document.title = "Initiatives - La Herpaile";
  }, []);
  const features = [
    {
      icon: GraduationCap,
      title: "Education Support",
      description: "Students from all backgrounds can access essential ",
      highlight: "learning tools and software remotely",
      suffix: ", helping bridge the digital divide and create equal opportunities for knowledge and skill development.",
      image: educationSupport
    },
    {
      icon: Globe,
      title: "Digital Inclusion",
      description: "We aim to ",
      highlight: "empower rural and remote communities",
      suffix: " by providing secure and reliable RDP access, ensuring that no one is left behind in the digital era.",
      image: digitalInclusion
    }
  ];

  const eligibility = [
    {
      title: "NGO Access:",
      description: "Grassroots organizations that require ",
      highlight: "digital infrastructure",
      suffix: " to manage their operations."
    },
    {
      title: "Volunteers & Field Workers:",
      description: "",
      highlight: "Verified",
      suffix: " individuals supporting community projects."
    },
    {
      title: "Women-led or Youth-focused Initiatives:",
      description: "Programs promoting education, technology, or ",
      highlight: "social impact",
      suffix: ""
    }
  ];

  const terms = [
    {
      text: "RDP access is ",
      highlight1: "free",
      middle: " and intended solely for ",
      highlight2: "educational, nonprofit, or community work",
      suffix: "."
    },
    {
      text: "Access is valid for ",
      highlight1: "30 days",
      middle: " and may be extended upon review. Misuse, such as commercial use, ",
      highlight2: "will result in immediate suspension",
      suffix: "."
    },
    {
      text: "Users must ",
      highlight1: "agree to our Acceptable Use Policy",
      middle: " at the ",
      highlight2: "time of application",
      suffix: "."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - Full Screen Like About Us */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0 z-0">
          <img
            src={initiativesHero}
            alt="Digital empowerment and learning"
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
              Digital Empowerment
            </span>
            <Sparkles className="w-5 h-5 text-golden animate-pulse" />
          </div>

          <h1
            className="font-display text-5xl md:text-7xl lg:text-9xl font-black mb-8 animate-fade-up tracking-tight"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="block text-shadow-hero drop-shadow-2xl">OUR</span>
            <span className="block bg-gradient-to-r from-golden via-accent to-primary bg-clip-text text-transparent animate-gradient-x drop-shadow-lg">
              INITIATIVES
            </span>
          </h1>

          <p
            className="max-w-2xl mx-auto text-lg md:text-xl opacity-90 mb-12 font-light animate-fade-up leading-relaxed text-primary-foreground/90"
            style={{ animationDelay: "0.2s" }}
          >
            Empowering communities through digital access.
            Free RDP servers for students, NGOs, and changemakers.
          </p>

          {/* Stats Preview */}
          <div
            className="mt-10 grid grid-cols-3 gap-6 max-w-xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            {[
              { number: "Free", label: "RDP Access", icon: "🖥️" },
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

      {/* RDP Access Section */}
      <section className="py-20 bg-gradient-to-b from-background via-card to-background relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Main Title */}
            <div className="mb-12 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                RDP Access for <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Empowerment & Learning</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                At <span className="text-primary font-semibold">Laherpa</span>, we believe in <span className="font-semibold text-foreground">digital empowerment</span>. Through our RDP initiatives, we provide <span className="font-semibold text-foreground">free Remote Desktop (RDP) access</span> to students, NGOs, and underprivileged individuals, enabling them to learn, work, and grow <span className="text-accent">in the digital world</span>.
              </p>
            </div>

            {/* Features with Images */}
            <div className="space-y-16 mb-16">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
                >
                  {/* Image */}
                  <div className="w-full md:w-1/2 relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500" />
                    <div className="relative overflow-hidden rounded-2xl shadow-elegant">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-64 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full md:w-1/2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow">
                        <feature.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="font-display text-2xl font-bold text-foreground">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {feature.description}
                      <span className="font-semibold text-foreground">{feature.highlight}</span>
                      <span className="text-accent">{feature.suffix}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Apply Button */}
            <div className="text-center mb-16">
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

            {/* Who Can Apply */}
            <div className="mb-12 p-8 rounded-3xl bg-gradient-to-br from-card via-background to-card border border-border/50 shadow-card">
              <h3 className="font-display text-xl font-bold text-foreground mb-6">
                Who Can <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Apply?</span>
              </h3>
              <ul className="space-y-4">
                {eligibility.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent mt-2 flex-shrink-0 animate-pulse" />
                    <p className="text-muted-foreground">
                      <span className="font-bold text-foreground">{item.title}</span>{" "}
                      {item.description}
                      <span className="text-primary">{item.highlight}</span>
                      {item.suffix}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Terms and Conditions */}
            <div className="mb-12 p-8 rounded-3xl bg-gradient-to-br from-muted/50 to-card border border-border/50 shadow-card">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                Terms and <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Conditions</span>
              </h3>
              <ul className="space-y-4">
                {terms.map((term, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-secondary to-primary mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      {term.text}
                      <span className="text-primary font-semibold">{term.highlight1}</span>
                      {term.middle}
                      <span className="text-accent">{term.highlight2}</span>
                      {term.suffix}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Need Help */}
            <div className="py-10 px-8 rounded-3xl glass-card border border-border/30 shadow-card text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="w-5 h-5 text-golden animate-pulse" />
                <Star className="w-4 h-4 text-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
                <Star className="w-5 h-5 text-golden animate-pulse" style={{ animationDelay: "1s" }} />
              </div>
              <p className="text-lg mb-4">
                <span className="font-bold text-foreground">Need Help?</span>{" "}
                <span className="text-muted-foreground">Contact our support team for guidance on setting up and using your RDP access effectively.</span>
              </p>
              <Link to="/contact-us">
                <Button
                  variant="heroOutline"
                  size="lg"
                  className="group backdrop-blur-md hover:backdrop-blur-lg transition-all duration-500 border-2"
                >
                  Contact Us
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

export default Initiatives;