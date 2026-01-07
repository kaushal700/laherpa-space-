import { Button } from "@/components/ui/button";
import { Heart, Sparkles, ArrowRight, Star, Shield, Clock, CreditCard } from "lucide-react";
import donationBanner from "@/assets/donation-puppies-new.jpg";

const DonationBanner = () => {
  return (
    <section id="donate" className="relative py-36 lg:py-48 overflow-hidden">
      {/* Background Image with Enhanced Effects */}
      <div className="absolute inset-0 z-0">
        <img
          src={donationBanner}
          alt="Two happy rescued dogs"
          className="w-full h-full object-cover scale-110"
        />
        {/* Multi-layer Gradient Overlay - Soft Pastel Pink/Coral & Mint/Teal Theme */}
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(350,80%,85%)]/90 via-[hsl(30,70%,90%)]/80 to-[hsl(170,60%,85%)]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(350,70%,80%)]/50 via-transparent to-[hsl(180,50%,90%)]/40" />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(20,90%,80%)]/30 via-transparent to-[hsl(190,70%,80%)]/25" />
        
        {/* Animated Mesh Gradient */}
        <div className="absolute inset-0 opacity-70">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[hsl(350,85%,75%)]/40 via-transparent to-transparent animate-pulse" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[hsl(170,70%,75%)]/35 via-transparent to-transparent animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        
        {/* Animated Glow Orbs */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[hsl(350,80%,80%)]/40 to-[hsl(30,70%,85%)]/30 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-l from-[hsl(170,70%,80%)]/35 to-[hsl(190,60%,85%)]/25 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-16 w-24 h-24 border-2 border-[hsl(350,70%,60%)]/30 rounded-full floating-slow backdrop-blur-sm" />
        <div className="absolute bottom-24 right-24 w-20 h-20 border border-[hsl(170,60%,50%)]/25 rounded-full floating" />
        <Heart className="absolute top-1/4 right-1/4 w-10 h-10 text-[hsl(350,70%,60%)]/30 floating-fast" />
        <Sparkles className="absolute bottom-1/3 left-1/4 w-8 h-8 text-[hsl(30,80%,55%)]/40 floating" />
        <Star className="absolute top-1/3 left-[15%] w-6 h-6 text-[hsl(170,60%,50%)]/30 floating-slow" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-foreground">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-[hsl(350,80%,65%)] to-[hsl(20,90%,60%)] mb-10 animate-fade-up shadow-2xl">
          <Heart className="w-6 h-6 text-white animate-heartbeat" />
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-white">
            Make a Difference Today
          </span>
          <Heart className="w-6 h-6 text-white animate-heartbeat" />
        </div>

        <h2 
          className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-6 animate-fade-up tracking-tight text-[hsl(220,30%,20%)]"
          style={{ animationDelay: "0.1s" }}
        >
          BE THEIR{" "}
          <span className="bg-gradient-to-r from-[hsl(350,80%,60%)] via-[hsl(20,90%,55%)] to-[hsl(350,80%,60%)] bg-clip-text text-transparent drop-shadow-lg">
            HERO
          </span>
          .
        </h2>
        <h3 
          className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-14 animate-fade-up text-[hsl(220,30%,25%)]"
          style={{ animationDelay: "0.2s" }}
        >
          MAKE A DONATION
        </h3>
        
        <div 
          className="flex flex-col sm:flex-row gap-6 justify-center mb-14 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Button 
            variant="hero" 
            size="xl"
            className="min-w-[220px] group bg-gradient-to-r from-[hsl(350,80%,60%)] to-[hsl(30,90%,55%)] hover:from-[hsl(350,85%,55%)] hover:to-[hsl(30,95%,50%)] shadow-2xl text-lg text-white"
          >
            <span className="relative z-10 flex items-center gap-3">
              One-time Donation
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </Button>
          <Button 
            variant="heroOutline" 
            size="xl"
            className="min-w-[220px] border-2 border-[hsl(220,30%,25%)] text-[hsl(220,30%,20%)] hover:bg-[hsl(220,30%,25%)]/10 group text-lg bg-white/50"
          >
            <Heart className="w-6 h-6 mr-2 group-hover:animate-heartbeat" />
            Monthly Support
          </Button>
        </div>

        {/* Donation Tiers Preview */}
        <div 
          className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          {["$10", "$25", "$50", "$100", "Custom"].map((amount, index) => (
            <button
              key={amount}
              className="group relative px-8 py-4 rounded-full overflow-hidden font-bold transition-all duration-300 hover:scale-110 text-[hsl(220,30%,25%)]"
            >
              {/* Glow Background */}
              <div className="absolute inset-0 bg-white/60 backdrop-blur-sm border border-[hsl(220,30%,25%)]/20 rounded-full group-hover:bg-white/80 transition-colors duration-300" />
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[hsl(350,80%,70%)]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative z-10 text-lg">{amount}</span>
            </button>
          ))}
        </div>

        {/* Trust Badges */}
        <div 
          className="flex flex-wrap justify-center gap-10 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          {[
            { icon: Shield, text: "100% Tax Deductible" },
            { icon: CreditCard, text: "Secure Payment" },
            { icon: Clock, text: "Cancel Anytime" },
          ].map((badge) => (
            <div key={badge.text} className="group flex items-center gap-3 text-sm text-[hsl(220,30%,30%)]">
              <div className="w-12 h-12 rounded-xl bg-white/70 backdrop-blur-sm border border-[hsl(350,70%,70%)]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <badge.icon className="w-5 h-5 text-[hsl(350,70%,55%)]" />
              </div>
              <span className="font-medium">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonationBanner;
