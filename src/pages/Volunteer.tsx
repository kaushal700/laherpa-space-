import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Lightbulb, TrendingUp, Users, Smile, ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingParticles from "@/components/FloatingParticles";
import volunteerHero from "@/assets/volunteer-hero.jpg";
import volunteerTeaching from "@/assets/volunteer-teaching.jpg";
import volunteerTeamwork from "@/assets/volunteer-teamwork.jpg";
import volunteerCare from "@/assets/volunteer-care.jpg";

const Volunteer = () => {
  useEffect(() => {
    document.title = "Volunteer - La Herpaile";
  }, []);
  const whyVolunteer = [
    {
      icon: "🌟",
      title: "Meaningful Contribution:",
      description: "Help us create awareness, promote ",
      highlight: "digital literacy",
      suffix: ", and support our community programs."
    },
    {
      icon: "📈",
      title: "Skill Growth:",
      description: "Learn teamwork, leadership, and ",
      highlight: "community outreach",
      suffix: " skills."
    },
    {
      icon: "🤝",
      title: "Networking:",
      description: "Connect with ",
      highlight: "like-minded individuals",
      suffix: ", NGOs, and digital innovators."
    },
    {
      icon: "❤️",
      title: "Satisfaction:",
      description: "Experience the joy of giving and ",
      highlight: "making lives better",
      suffix: "."
    }
  ];

  const roles = [
    { text: "Community Outreach & Awareness Campaigns" },
    { text: "Content Creation ", highlight: "(Blog, Video, Design)" },
    { text: "Technical Support ", highlight: "(RDP Hosting, Web Maintenance)" },
    { text: "Social Media & Digital Promotion" },
    { text: "Fundraising & ", highlight: "Partnership Coordination" }
  ];

  const howToStart = [
    { text: "Fill out the ", highlight: "Volunteer Registration Form", suffix: " on our website." },
    { text: "Our team will contact you within a few days for a short onboarding discussion." },
    { text: "Start ", highlight: "contributing", suffix: " and become part of the Laherpa.space movement!" }
  ];

  const expectations = [
    { text: "A positive attitude and ", highlight: "willingness to learn", suffix: "." },
    { text: "Respect for others and commitment to ", highlight: "ethical, transparent practices", suffix: "." },
    { text: "Consistency and ", highlight: "reliability", suffix: " in assigned tasks." }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section - Home Page Style */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0 z-0">
          <img
            src={volunteerHero}
            alt="Volunteers celebrating together"
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
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass-card mb-6 animate-fade-up">
            <Sparkles className="w-4 h-4 text-golden animate-pulse" />
            <span className="text-sm font-medium tracking-widest uppercase opacity-90">
              Join Our Mission
            </span>
            <Sparkles className="w-4 h-4 text-golden animate-pulse" />
          </div>

          <h1 
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up text-shadow-hero"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="block">BECOME A</span>
            <span className="block animate-gradient-text">VOLUNTEER</span>
          </h1>

          <p 
            className="max-w-2xl mx-auto text-lg md:text-xl opacity-90 mb-10 font-light animate-fade-up leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            Join hands with us to create meaningful change in communities.
            Your time, skills, and passion can help us make a real difference
            in the lives of those who need it most.
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
                <Heart className="w-5 h-5 group-hover:animate-wiggle" />
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
            className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            {[
              { number: "1.5K+", label: "Volunteers" },
              { number: "50+", label: "Projects" },
              { number: "10K+", label: "Lives Touched" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-2xl md:text-3xl font-bold text-golden">
                  {stat.number}
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

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            
            {/* Volunteer with La Herpaille - With Image */}
            <div className="mb-16 flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2 relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative overflow-hidden rounded-2xl shadow-elegant">
                  <img 
                    src={volunteerTeaching} 
                    alt="Volunteer teaching children"
                    className="w-full h-64 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Volunteer with La Herpaille
                </h2>
                <p className="text-muted-foreground text-lg mb-4">
                  At <span className="font-semibold text-foreground">La Herpaille</span>, we believe that meaningful change begins with people who care. Our volunteers are the heart of our mission—bringing passion, time, and skills to <span className="text-accent">uplift communities</span> and drive sustainable impact.
                </p>
                <p className="text-muted-foreground text-lg">
                  When you volunteer with La Herpaille, you're not just giving your time—you're becoming <span className="text-primary">part of a movement</span> for social equity, health, and <span className="text-accent">environmental justice</span>.
                </p>
              </div>
            </div>

            {/* Join Our Mission - With Image */}
            <div className="mb-16 flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="w-full md:w-1/2 relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-accent/30 to-primary/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative overflow-hidden rounded-2xl shadow-elegant">
                  <img 
                    src={volunteerTeamwork} 
                    alt="Volunteers working together"
                    className="w-full h-64 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Join Our Mission
                </h3>
                <p className="text-muted-foreground text-lg">
                  At <span className="text-primary font-semibold">Laherpa.space</span>, we believe that small steps can create big change. We are building a community that supports education, technology access, digital awareness, and <span className="text-accent">empowerment across underrepresented areas</span>. Your time, <span className="text-primary">skills</span>, and passion can help us make a <span className="text-accent">real difference</span>.
                </p>
              </div>
            </div>

            {/* Why Volunteer With Us */}
            <div className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Why Volunteer With Us
              </h3>
              <p className="text-muted-foreground mb-6">
                By volunteering with Laherpa.space, you become <span className="text-primary">part of a movement</span> focused on impact and opportunity. Here's what you'll gain:
              </p>
              <ul className="space-y-4">
                {whyVolunteer.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 transform hover:translate-x-2 transition-transform duration-300">
                    <span className="text-xl">{item.icon}</span>
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

            {/* Volunteer Roles Available */}
            <div className="mb-16">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                Volunteer Roles Available
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {roles.map((role, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent mt-1.5 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      {role.text}
                      {role.highlight && <span className="text-primary font-semibold">{role.highlight}</span>}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* How to Get Started */}
            <div className="mb-16">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                How to Get Started
              </h3>
              <p className="text-muted-foreground mb-6">
                Ready to make an impact? It's easy to join us:
              </p>
              <div className="space-y-4">
                {howToStart.map((step, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-transparent border-l-4 border-primary">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-muted-foreground pt-1">
                      {step.text}
                      {step.highlight && <span className="font-semibold text-primary">{step.highlight}</span>}
                      {step.suffix}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* What We Expect - With Image */}
            <div className="mb-16 flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2 relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative overflow-hidden rounded-2xl shadow-elegant">
                  <img 
                    src={volunteerCare} 
                    alt="Volunteer caring for community member"
                    className="w-full h-64 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                  What We Expect From Volunteers
                </h3>
                <ul className="space-y-4">
                  {expectations.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 transform hover:translate-x-2 transition-transform duration-300">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        {item.text}
                        <span className="text-primary">{item.highlight}</span>
                        {item.suffix}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Become a Changemaker */}
            <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 border border-primary/20 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_70%)]" />
              <div className="relative z-10">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Become a Changemaker
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  <span className="text-primary">Join us</span> in creating a stronger, more connected, and empowered <span className="text-accent">world</span>. Together, we can make <span className="text-primary">digital</span> empowerment a reality.
                </p>
                <Link to="/server-info">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-10 py-6 text-lg rounded-xl shadow-glow hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div className="text-center py-6 border-t border-border">
              <p className="text-muted-foreground">
                Have A Questions? Email us at:{" "}
                <a 
                  href="mailto:sadmin@laherpa.space" 
                  className="text-primary hover:text-accent underline underline-offset-4 transition-colors"
                >
                 admin@laherpa.space
                </a>
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Volunteer;