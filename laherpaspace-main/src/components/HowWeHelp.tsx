import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Home, Sparkles, Star } from "lucide-react";
import dogRunning from "@/assets/rescue-dog-new.jpg";
import catHelp from "@/assets/adoption-cat-new.jpg";

const HowWeHelp = () => {
  return (
    <section id="programs" className="py-28 lg:py-40 bg-gradient-to-b from-muted/30 via-muted/50 to-muted/30 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/15 to-accent/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-secondary/15 to-forest/10 rounded-full blur-[180px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-golden/5 rounded-full blur-[100px]" />
      </div>

      {/* Floating Decorative Elements */}
      <Star className="absolute top-20 left-[15%] w-8 h-8 text-golden/20 floating-slow" />
      <Heart className="absolute top-1/3 right-[10%] w-6 h-6 text-primary/20 floating" />
      <Sparkles className="absolute bottom-1/4 left-[8%] w-7 h-7 text-accent/15 floating-fast" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gradient-to-r from-secondary/20 via-forest/10 to-secondary/20 text-secondary text-sm font-bold mb-6 animate-fade-up border border-secondary/20">
            <Heart className="w-4 h-4" />
            <span className="tracking-widest uppercase">Our Programs</span>
            <Heart className="w-4 h-4" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            How We Create{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-golden bg-clip-text text-transparent">
              Impact
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl animate-fade-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Through dedicated programs, skilled volunteers, and compassionate 
            care, we transform lives one animal at a time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
          {/* Rescue Program Card */}
          <div className="group relative animate-fade-up" style={{ animationDelay: "0.3s" }}>
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-golden rounded-[2rem] blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
            
            <div className="relative overflow-hidden rounded-3xl shadow-2xl hover-lift bg-card">
              <div className="image-zoom-container">
                <img
                  src={dogRunning}
                  alt="Happy rescued dog running in meadow"
                  className="w-full h-[480px] object-cover"
                />
              </div>
              
              {/* Multi-layer Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Floating Icon */}
              <div className="absolute top-6 right-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Heart className="w-8 h-8 text-primary-foreground animate-heartbeat" />
              </div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-10 text-primary-foreground">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs uppercase tracking-widest mb-5 border border-primary-foreground/20">
                  <Sparkles className="w-3 h-3 text-golden" />
                  Rescue Program
                </div>
                <h3 className="font-display text-4xl font-black mb-4 group-hover:text-golden transition-colors duration-300">
                  Rescue & Rehabilitate
                </h3>
                <p className="opacity-90 mb-8 text-base leading-relaxed max-w-md">
                  We rescue animals from dire situations and provide them with medical care,
                  rehabilitation, and a second chance at life.
                </p>
                <Button 
                  variant="heroOutline" 
                  size="lg"
                  className="group/btn border-2"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-2 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>

          {/* Foster Program Card */}
          <div className="group relative animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary via-forest to-secondary rounded-[2rem] blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
            
            <div className="relative overflow-hidden rounded-3xl shadow-2xl hover-lift bg-card">
              <div className="image-zoom-container">
                <img
                  src={catHelp}
                  alt="Cute cat available for adoption"
                  className="w-full h-[480px] object-cover"
                />
              </div>
              
              {/* Multi-layer Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Floating Icon */}
              <div className="absolute top-6 right-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary via-forest to-secondary flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Home className="w-8 h-8 text-primary-foreground" />
              </div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-10 text-primary-foreground">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs uppercase tracking-widest mb-5 border border-primary-foreground/20">
                  <Star className="w-3 h-3 text-golden" />
                  Foster Program
                </div>
                <h3 className="font-display text-4xl font-black mb-4 group-hover:text-golden transition-colors duration-300">
                  Foster & Adoption
                </h3>
                <p className="opacity-90 mb-8 text-base leading-relaxed max-w-md">
                  Our foster network provides temporary homes while we find the perfect 
                  forever families for our rescued animals.
                </p>
                <Button 
                  variant="heroOutline" 
                  size="lg"
                  className="group/btn border-2"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-2 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;
