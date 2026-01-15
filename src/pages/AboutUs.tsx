import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Globe, Lightbulb, Handshake, Rocket, Server, Mail, CheckCircle, Sparkles, Star, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import aboutHero from "@/assets/about-hero.jpg";
import aboutMission from "@/assets/about-mission.jpg";
import aboutVision from "@/assets/about-vision.jpg";
import aboutJoin from "@/assets/about-join.jpg";

const AboutUs = () => {
  useEffect(() => {
    document.title = "About Us - La Herpaile";
  }, []);
  const missionPoints = [
    "Access secure and affordable RDP servers",
    "Manage their data and projects from anywhere",
    "Collaborate online with volunteers and donors",
    "Grow through technology-driven learning"
  ];

  const visionPoints = [
    "Every community has access to secure remote technology",
    "NGOs use cloud systems to deliver help faster",
    "Technology becomes a force for good"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - Full Screen Like Home Page */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0 z-0">
          <img
            src={aboutHero}
            alt="About La Herpaille Team"
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
              La Herpaile Foundation
            </span>
            <Sparkles className="w-5 h-5 text-golden animate-pulse" />
          </div>

          <h1
            className="font-display text-5xl md:text-7xl lg:text-9xl font-black mb-8 animate-fade-up tracking-tight"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="block text-shadow-hero drop-shadow-2xl">ABOUT</span>
            <span className="block bg-gradient-to-r from-golden via-accent to-primary bg-clip-text text-transparent animate-gradient-x drop-shadow-lg">
              US
            </span>
          </h1>

          <p
            className="max-w-2xl mx-auto text-lg md:text-xl opacity-90 mb-12 font-light animate-fade-up leading-relaxed text-primary-foreground/90"
            style={{ animationDelay: "0.2s" }}
          >
            Where Community Meets Creativity and Compassion.
            Building bridges between hope and opportunity.
          </p>

          {/* Stats Preview */}
          <div
            className="mt-10 grid grid-cols-3 gap-6 max-w-xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            {[
              { number: "100+", label: "NGOs Helped", icon: "🌍" },
              { number: "50+", label: "Communities", icon: "❤️" },
              { number: "5K+", label: "Lives Changed", icon: "✨" },
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

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-b from-background via-card to-background relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">

            {/* About Us Section */}
            <div className="mb-24">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg glow-primary">
                      <Globe className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                      About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Us</span>
                    </h2>
                  </div>

                  <p className="text-primary font-semibold text-lg mb-4">
                    La Herpaile – Where Community Meets Creativity and Compassion
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-8">
                    At <span className="font-semibold text-foreground">La Herpaile</span>, we believe that lasting change begins at the grassroots level—with people, with passion, and with purpose. Founded on the idea that everyone deserves access to opportunity, dignity, and creative expression, we work tirelessly to support communities through a blend of <span className="text-primary font-medium">social action</span> and <span className="text-secondary font-medium">sustainable development</span>.
                  </p>

                  <Button
                    variant="hero"
                    size="lg"
                    className="group relative overflow-hidden btn-ripple glow-primary shadow-2xl"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Read More
                      <Sparkles className="w-5 h-5 group-hover:animate-wiggle" />
                    </span>
                  </Button>
                </div>

                <div className="order-1 md:order-2">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60" />
                    <img
                      src={aboutHero}
                      alt="Our Team"
                      className="relative rounded-2xl shadow-elegant w-full h-96 object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    {/* Floating badge on image */}
                    <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-3 rounded-xl shadow-lg">
                      <span className="font-bold">Since 2020</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Mission Section */}
            <div className="mb-24">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-golden/30 to-accent/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60" />
                  <img
                    src={aboutMission}
                    alt="Our Mission"
                    className="relative rounded-2xl shadow-elegant w-full h-96 object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  {/* Floating icon */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-golden to-accent rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                    <Lightbulb className="w-8 h-8 text-foreground" />
                  </div>
                </div>

                <div className="p-8 rounded-3xl bg-gradient-to-br from-card via-background to-card border border-border/50 shadow-card hover:shadow-elegant transition-all duration-500">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-golden to-accent flex items-center justify-center shadow-lg">
                      <Lightbulb className="w-6 h-6 text-foreground" />
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold">
                      Our <span className="bg-gradient-to-r from-golden to-accent bg-clip-text text-transparent">Mission</span>
                    </h3>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    To build a bridge between <span className="font-semibold text-foreground">NGO initiatives</span> and <span className="font-semibold text-foreground">modern digital infrastructure</span>, empowering small organizations to:
                  </p>

                  <ul className="space-y-4 mb-6">
                    {missionPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-3 group/item">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                          <CheckCircle className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <span className="text-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-muted-foreground">
                    We aim to create a world where <span className="font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">every NGO, big or small, can go digital</span> without limits.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Vision Section */}
            <div className="mb-24">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 p-8 rounded-3xl bg-gradient-to-br from-card via-background to-card border border-border/50 shadow-card hover:shadow-elegant transition-all duration-500">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center shadow-lg">
                      <Handshake className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold">
                      Our <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Vision</span>
                    </h3>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    A connected, inclusive digital world where:
                  </p>

                  <ul className="space-y-4 mb-6">
                    {visionPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-3 group/item">
                        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary via-secondary to-accent mt-1.5 flex-shrink-0 group-hover/item:scale-125 transition-transform animate-pulse" />
                        <span className="text-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-muted-foreground italic border-l-4 border-primary/50 pl-4">
                    At Laherpa.space, we're not just building servers – we're building <span className="text-primary font-medium">solutions that serve humanity</span>.
                  </p>
                </div>

                <div className="order-1 md:order-2 relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-secondary/30 to-primary/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60" />
                  <img
                    src={aboutVision}
                    alt="Our Vision"
                    className="relative rounded-2xl shadow-elegant w-full h-96 object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  {/* Floating icon */}
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                    <Handshake className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div>

            {/* Join the Movement Section */}
            <div className="relative mb-16 rounded-3xl overflow-hidden">
              <img
                src={aboutJoin}
                alt="Join the Movement"
                className="w-full h-[500px] object-cover"
              />
              {/* Multi-layer overlay like hero */}
              <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-accent/20" />

              {/* Animated glow */}
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card mb-6 border border-primary-foreground/20">
                    <Sparkles className="w-5 h-5 text-golden animate-pulse" />
                    <span className="text-sm font-bold tracking-wider uppercase text-primary-foreground">Be Part of Change</span>
                    <Sparkles className="w-5 h-5 text-golden animate-pulse" />
                  </div>

                  <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-4">
                    <span className="block text-shadow-hero">JOIN THE</span>
                    <span className="block bg-gradient-to-r from-golden via-accent to-primary bg-clip-text text-transparent">
                      MOVEMENT
                    </span>
                  </h3>

                  <p className="text-lg text-primary-foreground/90 mb-8 max-w-xl mx-auto">
                    Support our digital empowerment initiatives or start your own NGO server today.
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <Link to="/contact-us">
                      <Button
                        variant="heroOutline"
                        size="xl"
                        className="group backdrop-blur-md hover:backdrop-blur-lg transition-all duration-500 border-2 shadow-xl"
                      >
                        <Mail className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                        Contact Us
                      </Button>
                    </Link>
                    <Link to="/server">
                      <Button
                        variant="hero"
                        size="xl"
                        className="group relative overflow-hidden btn-ripple glow-primary shadow-2xl"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          <Server className="w-5 h-5" />
                          Get Server
                        </span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Non-profit Note */}
            <div className="text-center py-10 px-8 rounded-3xl glass-card border border-border/30 shadow-card">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="w-5 h-5 text-golden animate-pulse" />
                <Star className="w-4 h-4 text-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
                <Star className="w-5 h-5 text-golden animate-pulse" style={{ animationDelay: "1s" }} />
              </div>
              <p className="text-muted-foreground">
                Part of our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">non-profit mission</span>.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;