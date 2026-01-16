import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, Sparkles, Monitor, Shield, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingParticles from "@/components/FloatingParticles";
import { Button } from "@/components/ui/button";
import { blogArticles } from "@/data/blogArticles";
import blogHeroImage from "@/assets/blog-hero.jpg";

const Blog = () => {
  useEffect(() => {
    document.title = "Blog - RDP Server Insights | La Herpaile";
  }, []);

  const categoryIcons: { [key: string]: JSX.Element } = {
    "Education": <Monitor className="w-4 h-4" />,
    "NGO Support": <Users className="w-4 h-4" />,
    "Empowerment": <Sparkles className="w-4 h-4" />,
    "Security": <Shield className="w-4 h-4" />,
    "Remote Work": <Monitor className="w-4 h-4" />,
    "Digital Inclusion": <Users className="w-4 h-4" />,
  };

  return (
    <main className="min-h-screen relative">
      <FloatingParticles />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={blogHeroImage} 
            alt="RDP Server Blog" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-accent/80 to-secondary/90" />
        </div>

        {/* Animated Decorative Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full mb-8 border border-white/30">
            <Sparkles className="w-5 h-5 text-white animate-pulse" />
            <span className="text-white font-semibold text-sm tracking-wider uppercase">RDP Server Insights</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-6 leading-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-200">Blog</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-10">
            Discover insights, stories, and updates about our RDP server program and how technology is transforming lives worldwide.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-black/80">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg">
              <Monitor className="w-5 h-5 text-amber-300" />
              <span className="font-semibold">{blogArticles.length} Articles</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg">
              <Users className="w-5 h-5 text-amber-300" />
              <span className="font-semibold">Expert Insights</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg">
              <Shield className="w-5 h-5 text-amber-300" />
              <span className="font-semibold">Trusted Resources</span>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Articles Grid Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Latest Articles</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black text-foreground mb-4">
              RDP Server <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">Insights & Stories</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our latest articles about RDP technology, digital empowerment, and how we're making a difference.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogArticles.map((article, index) => (
              <Link 
                key={article.id} 
                to={`/blog/${article.slug}`}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-primary/10"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full">
                    <span className="text-primary">{categoryIcons[article.category]}</span>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">{article.category}</span>
                  </div>

                  {/* Floating Number */}
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-black text-lg shadow-lg">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-accent" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-4 transition-all duration-300">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>

                {/* Hover Gradient Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary/30 transition-all duration-500 pointer-events-none" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Now CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary" />
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-300/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full mb-8 border border-white/30">
              <Monitor className="w-5 h-5 text-white animate-pulse" />
              <span className="text-white font-semibold text-sm tracking-wider uppercase">Get Started Today</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6 leading-tight">
              Ready to Access <span className="text-amber-300">Free RDP?</span>
            </h2>

            <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
              Join thousands of students, NGOs, and individuals who are already benefiting from our RDP access program. Apply now and transform your digital experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/server-info">
                <Button 
                  size="xl" 
                  className="bg-white text-primary hover:bg-amber-100 font-black text-lg px-10 py-6 rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105 group"
                >
                  <Sparkles className="w-6 h-6 mr-2 group-hover:animate-pulse" />
                  Apply Now
                  <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
              <Link to="/server">
                <Button
  variant="outline"
  size="xl"
  className="
    rounded-full
    px-10 py-6
    text-lg font-semibold
    text-black
    border-2 border-pink-500
    bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-400
    hover:from-yellow-300 hover:to-orange-300
    transition-all duration-300
    shadow-md hover:shadow-lg
  "
>
  Learn More
</Button>

              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {[
                { value: "500+", label: "Active Users" },
                { value: "99.9%", label: "Uptime" },
                { value: "24/7", label: "Support" },
                { value: "100%", label: "Free Access" },
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl md:text-4xl font-black text-amber-300 mb-2">{stat.value}</div>
                  <div className="text-white/80 font-semibold text-sm uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blog;
