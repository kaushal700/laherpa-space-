import { Heart, Users, Award, PawPrint, TrendingUp, Star } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const stats = [
  {
    icon: Heart,
    number: 500,
    suffix: "+",
    label: "Animals rescued and rehomed through our programs",
    color: "from-primary via-accent to-primary",
    bgGlow: "bg-primary/20",
  },
  {
    icon: Users,
    number: 1500,
    suffix: "+",
    label: "Volunteers actively supporting shelter operations",
    color: "from-secondary via-forest to-secondary",
    bgGlow: "bg-secondary/20",
  },
  {
    icon: Award,
    number: 50,
    suffix: "+",
    label: "Partner organizations working for animal welfare",
    color: "from-golden via-accent to-golden",
    bgGlow: "bg-golden/20",
  },
  {
    icon: PawPrint,
    number: 10000,
    suffix: "+",
    label: "Lives touched through community outreach programs",
    color: "from-accent via-primary to-accent",
    bgGlow: "bg-accent/20",
  },
];

const Counter = ({ end, suffix, duration = 2000 }: { end: number; suffix: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(num >= 10000 ? 0 : 1) + "K";
    }
    return num.toString();
  };

  return (
    <div ref={ref} className="font-display text-5xl md:text-6xl font-black">
      {formatNumber(count)}{suffix}
    </div>
  );
};

const ImpactStats = () => {
  return (
    <section id="about" className="py-28 lg:py-40 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-aurora opacity-20" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[200px]" />
      </div>

      {/* Floating Elements */}
      <Star className="absolute top-20 left-[10%] w-8 h-8 text-golden/20 floating-slow" />
      <TrendingUp className="absolute top-1/3 right-[8%] w-10 h-10 text-primary/15 floating" />
      <Heart className="absolute bottom-1/4 left-[5%] w-6 h-6 text-accent/20 floating-fast" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 text-primary text-sm font-bold mb-6 animate-fade-up border border-primary/20">
            <TrendingUp className="w-4 h-4" />
            <span className="tracking-widest uppercase">Our Impact</span>
            <TrendingUp className="w-4 h-4" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            A Journey to Make a
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-golden bg-clip-text text-transparent">
              Difference
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl animate-fade-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Our mission is to save and improve the lives of animals in need,
            while nurturing compassionate communities committed to their care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative animate-fade-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              {/* Glow Background */}
              <div className={`absolute inset-0 ${stat.bgGlow} rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-110`} />
              
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover-lift overflow-hidden">
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                {/* Icon Container */}
                <div className={`w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 relative`}>
                  <stat.icon className="w-10 h-10 text-primary-foreground" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Counter */}
                <div className="text-center mb-6">
                  <div className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    <Counter end={stat.number} suffix={stat.suffix} />
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-muted-foreground text-sm text-center leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {stat.label}
                </p>

                {/* Decorative Corners */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-primary/20 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-accent/20 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
