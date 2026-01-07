import { Button } from "@/components/ui/button";
import { Heart, Sparkles, PawPrint, Star, Zap } from "lucide-react";

const SecondChance = () => {
  return (
    <section className="py-28 lg:py-44 bg-gradient-to-b from-muted/30 via-background to-muted/30 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-primary/15 to-accent/10 rounded-full blur-[180px] morph-shape" />
        <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-gradient-to-br from-accent/15 to-golden/10 rounded-full blur-[120px] floating-slow" />
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-gradient-to-tl from-secondary/15 to-forest/10 rounded-full blur-[100px] floating" />
      </div>

      {/* Floating Paw Prints */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <PawPrint className="absolute top-1/4 left-[8%] w-16 h-16 text-primary/15 floating-slow" />
        <PawPrint className="absolute top-1/3 right-[12%] w-10 h-10 text-accent/15 floating" />
        <PawPrint className="absolute bottom-1/4 left-[18%] w-12 h-12 text-secondary/15 floating-fast" />
        <PawPrint className="absolute bottom-1/3 right-[8%] w-18 h-18 text-golden/10 floating-slow" />
        <Star className="absolute top-[20%] right-[25%] w-6 h-6 text-golden/25 floating" />
        <Zap className="absolute bottom-[20%] left-[25%] w-5 h-5 text-primary/20 floating-fast" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 mb-10 animate-fade-up border border-primary/30 shadow-xl">
            <Heart className="w-5 h-5 text-primary animate-heartbeat" />
            <span className="text-primary text-sm font-bold tracking-widest uppercase">Find Your Forever Friend</span>
            <Heart className="w-5 h-5 text-primary animate-heartbeat" />
          </div>

          <h2 
            className="font-display text-5xl md:text-6xl lg:text-8xl font-black text-foreground mb-10 animate-fade-up leading-tight"
            style={{ animationDelay: "0.1s" }}
          >
            Everyone Deserves a
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-golden bg-clip-text text-transparent animate-gradient-x">
              Second Chance
            </span>
          </h2>

          <p 
            className="text-muted-foreground text-lg md:text-xl mb-14 max-w-3xl mx-auto leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Driven by a shared passion for animal welfare, our team goes above 
            and beyond to create a welcoming environment for all species, 
            supported by veterinary care and compassionate foster families.
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button 
              variant="hero" 
              size="xl"
              className="group glow-primary btn-ripple shadow-2xl text-lg px-10"
            >
              <PawPrint className="w-6 h-6 mr-3 group-hover:animate-bounce-soft" />
              Adopt an Animal Today
              <Sparkles className="w-6 h-6 ml-3 group-hover:animate-wiggle" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-2 border-primary/40 hover:border-primary hover:bg-primary/10 text-lg px-10 shadow-lg"
            >
              View All Animals
            </Button>
          </div>

          {/* Animal Categories */}
          <div 
            className="mt-20 grid grid-cols-3 gap-6 max-w-xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              { emoji: "🐕", label: "Dogs", count: "250+" },
              { emoji: "🐈", label: "Cats", count: "180+" },
              { emoji: "🐾", label: "Others", count: "70+" },
            ].map((item) => (
              <div 
                key={item.label} 
                className="group relative"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 scale-110" />
                
                <div className="relative p-6 rounded-3xl bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover-lift cursor-pointer overflow-hidden">
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  <div className="text-5xl mb-3 group-hover:animate-bounce-soft group-hover:scale-110 transition-transform duration-300">{item.emoji}</div>
                  <div className="font-display text-2xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">
                    {item.count}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondChance;
