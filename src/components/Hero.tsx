import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles, Star, Zap } from "lucide-react";
import heroDog from "@/assets/hero-enhanced.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroDog}
          alt="Rescued dog looking hopeful and loved in a sunny garden"
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
            La Herpaile Impact
          </span>
          <Sparkles className="w-5 h-5 text-golden animate-pulse" />
        </div>

        <h1
          className="font-display text-5xl md:text-7xl lg:text-9xl font-black mb-8 animate-fade-up tracking-tight"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="block text-shadow-hero drop-shadow-2xl text-foreground">SHARING AND</span>
          <span className="block bg-gradient-to-r from-golden via-accent to-primary bg-clip-text text-transparent animate-gradient-x drop-shadow-lg scale-105 transform transition-transform duration-700 hover:scale-110">
            EMPOWERING
          </span>
        </h1>

        <p
          className="max-w-2xl mx-auto text-lg md:text-xl opacity-90 mb-12 font-light animate-fade-up leading-relaxed text-primary-foreground/90"
          style={{ animationDelay: "0.2s" }}
        >
          La Herpaile provides haven for the unloved of
          every type of family by making a positive
          impact on animals in need and
          the communities for the lives forever.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Button
            variant="hero"
            size="xl"
            className="group relative overflow-hidden btn-ripple glow-primary shadow-2xl text-lg px-10 transition-transform duration-300 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-3">
              MAKE A CONTRIBUTION
              <Sparkles className="w-5 h-5 group-hover:animate-wiggle" />
            </span>
          </Button>
          <Button
            variant="heroOutline"
            size="xl"
            className="group backdrop-blur-md hover:backdrop-blur-lg transition-all duration-300 border-2 shadow-xl text-lg px-10 hover:bg-primary-foreground/10"
          >
            MAKE A DONATION HERE
          </Button>
        </div>

        {/* Stats Preview */}
        <div
          className="mt-20 grid grid-cols-3 gap-6 max-w-xl mx-auto animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          {[
            { number: "500+", label: "Rescued", icon: "🐕" },
            { number: "1.5K+", label: "Volunteers", icon: "❤️" },
            { number: "10K+", label: "Lives Touched", icon: "✨" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="group text-center p-4 rounded-2xl glass-card hover:bg-primary-foreground/10 transition-all duration-500 cursor-pointer hover:scale-105 border border-primary-foreground/10 animate-fade-up"
              style={{ animationDelay: `${0.6 + (i * 0.1)}s` }}
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
  );
};

export default Hero;
