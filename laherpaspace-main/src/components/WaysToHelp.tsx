import { Heart, HandHeart, Users, Calendar, ArrowRight, Sparkles, Star } from "lucide-react";
import volunteerDog from "@/assets/volunteer-love-new.jpg";

const ways = [
  {
    icon: Heart,
    title: "Make a Contribution",
    description: "Your donation helps us provide food, shelter, and medical care to animals in need.",
    gradient: "from-primary via-accent to-primary",
    bgGlow: "bg-primary/30",
  },
  {
    icon: HandHeart,
    title: "Volunteer Your Time",
    description: "Join our team of dedicated volunteers who help with daily operations and events.",
    gradient: "from-secondary via-forest to-secondary",
    bgGlow: "bg-secondary/30",
  },
  {
    icon: Users,
    title: "Foster a Pet",
    description: "Spend quality time with animals while awaiting for their forever families.",
    gradient: "from-golden via-accent to-golden",
    bgGlow: "bg-golden/30",
  },
  {
    icon: Calendar,
    title: "Host an Event",
    description: "Organize fundraisers or awareness events in your community to support our cause.",
    gradient: "from-accent via-primary to-accent",
    bgGlow: "bg-accent/30",
  },
];

const WaysToHelp = () => {
  return (
    <section id="volunteer" className="py-28 lg:py-40 bg-gradient-to-b from-background via-background to-muted/20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 to-accent/5 rounded-full blur-[180px] -translate-x-1/2 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-secondary/10 to-golden/5 rounded-full blur-[150px] translate-x-1/3 animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Floating Elements */}
      <Sparkles className="absolute top-24 right-[12%] w-7 h-7 text-golden/25 floating-slow" />
      <Star className="absolute bottom-1/3 left-[8%] w-6 h-6 text-primary/20 floating" />
      <Heart className="absolute top-1/2 right-[5%] w-5 h-5 text-accent/25 floating-fast" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gradient-to-r from-golden/20 via-accent/10 to-golden/20 text-golden text-sm font-bold mb-6 animate-fade-up border border-golden/20">
            <HandHeart className="w-4 h-4" />
            <span className="tracking-widest uppercase">Get Involved</span>
            <HandHeart className="w-4 h-4" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Ways to{" "}
            <span className="bg-gradient-to-r from-golden via-primary to-accent bg-clip-text text-transparent">
              Help
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/10 to-secondary/20 rounded-[2.5rem] blur-2xl opacity-60" />
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <div className="image-zoom-container">
                <img
                  src={volunteerDog}
                  alt="Volunteer caring for rescued dog"
                  className="w-full h-[550px] object-cover"
                />
              </div>
              
              {/* Multi-layer Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-700" />
              
              {/* Floating Stats Card */}
              <div className="absolute bottom-8 left-6 right-6 glass-dark rounded-2xl p-8 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 border border-primary-foreground/10">
                <div className="grid grid-cols-3 gap-6 text-center text-primary-foreground">
                  <div>
                    <div className="font-display text-3xl font-black bg-gradient-to-r from-golden to-accent bg-clip-text text-transparent">1.5K+</div>
                    <div className="text-xs opacity-80 uppercase tracking-wider mt-1">Volunteers</div>
                  </div>
                  <div>
                    <div className="font-display text-3xl font-black bg-gradient-to-r from-golden to-accent bg-clip-text text-transparent">500+</div>
                    <div className="text-xs opacity-80 uppercase tracking-wider mt-1">Rescued</div>
                  </div>
                  <div>
                    <div className="font-display text-3xl font-black bg-gradient-to-r from-golden to-accent bg-clip-text text-transparent">50+</div>
                    <div className="text-xs opacity-80 uppercase tracking-wider mt-1">Partners</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-28 h-28 rounded-2xl bg-gradient-to-br from-primary via-accent to-primary shadow-2xl floating-slow flex items-center justify-center">
              <Heart className="w-12 h-12 text-primary-foreground animate-heartbeat" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-xl bg-gradient-to-br from-secondary via-forest to-secondary shadow-xl floating flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>

          {/* Ways List */}
          <div className="space-y-5">
            {ways.map((way, index) => (
              <div
                key={way.title}
                className="group relative animate-fade-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                {/* Glow Background */}
                <div className={`absolute inset-0 ${way.bgGlow} rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 scale-105`} />
                
                <div className="relative flex gap-6 p-6 rounded-2xl bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all duration-500 cursor-pointer hover-lift overflow-hidden">
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  {/* Icon */}
                  <div className={`relative flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${way.gradient} flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <way.icon className="w-8 h-8 text-primary-foreground" />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {way.title}
                      </h3>
                      <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all duration-300" />
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/70 transition-colors duration-300">
                      {way.description}
                    </p>
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

export default WaysToHelp;
