import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Clock, Sparkles, Monitor, Share2, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingParticles from "@/components/FloatingParticles";
import { Button } from "@/components/ui/button";
import { blogArticles } from "@/data/blogArticles";

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const article = blogArticles.find(a => a.slug === slug);
  const currentIndex = blogArticles.findIndex(a => a.slug === slug);
  const prevArticle = currentIndex > 0 ? blogArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < blogArticles.length - 1 ? blogArticles[currentIndex + 1] : null;

  useEffect(() => {
    if (article) {
      document.title = `${article.title} | La Herpaile Blog`;
    } else {
      navigate("/blog");
    }
  }, [article, navigate]);

  if (!article) {
    return null;
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    }
  };

  return (
    <main className="min-h-screen relative">
      <FloatingParticles />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden pt-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute top-40 right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 container mx-auto px-4 pb-16">
          {/* Back Link */}
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
            <span className="font-semibold">Back to Blog</span>
          </Link>

          {/* Category & Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white font-bold text-sm uppercase tracking-wider">{article.category}</span>
            </div>
            <div className="flex items-center gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{article.readTime}</span>
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-6 leading-tight max-w-4xl">
            {article.title}
          </h1>

          <p className="text-xl text-white/80 max-w-3xl leading-relaxed">
            {article.excerpt}
          </p>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Share Button */}
            <div className="flex justify-end mb-8">
              <Button
                variant="outline"
                onClick={handleShare}
                className="flex items-center gap-2 border-primary/20 hover:border-primary hover:bg-primary/5"
              >
                <Share2 className="w-4 h-4" />
                Share Article
              </Button>
            </div>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              {article.content.map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-lg text-foreground/80 leading-relaxed mb-6 first-letter:text-5xl first-letter:font-display first-letter:font-bold first-letter:text-primary first-letter:mr-2 first-letter:float-left first-line:first-letter:text-5xl"
                  style={{ 
                    fontSize: index === 0 ? undefined : '1.125rem',
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </article>

            {/* Tags & Category */}
            <div className="mt-12 pt-8 border-t border-primary/10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Topics:</span>
                <span className="bg-gradient-to-r from-primary/10 to-accent/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                  {article.category}
                </span>
                <span className="bg-gradient-to-r from-accent/10 to-secondary/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
                  RDP Server
                </span>
                <span className="bg-gradient-to-r from-secondary/10 to-primary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold">
                  Technology
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Now CTA */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary" />
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full mb-6 border border-white/30">
              <Monitor className="w-5 h-5 text-white" />
              <span className="text-white font-semibold text-sm tracking-wider uppercase">Ready to Get Started?</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-4">
              Apply for Free <span className="text-amber-300">RDP Access</span>
            </h2>

            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Join our program and get access to powerful remote desktop services completely free.
            </p>

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
          </div>
        </div>
      </section>

      {/* Navigation to Other Articles */}
      <section className="py-16 bg-gradient-to-b from-white to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-2 rounded-full mb-4">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-sm font-bold text-primary uppercase tracking-wider">Continue Reading</span>
              </div>
              <h2 className="text-3xl font-display font-black text-foreground">
                More <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Articles</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {prevArticle && (
                <Link 
                  to={`/blog/${prevArticle.slug}`}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10 flex items-start gap-4"
                >
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <ArrowLeft className="w-6 h-6 text-primary group-hover:-translate-x-1 transition-transform" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Previous Article</span>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mt-1 line-clamp-2">
                      {prevArticle.title}
                    </h3>
                  </div>
                </Link>
              )}

              {nextArticle && (
                <Link 
                  to={`/blog/${nextArticle.slug}`}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10 flex items-start gap-4 text-right md:ml-auto"
                >
                  <div className="flex-1">
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Next Article</span>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mt-1 line-clamp-2">
                      {nextArticle.title}
                    </h3>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <ArrowRight className="w-6 h-6 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              )}
            </div>

            {/* View All Button */}
            <div className="text-center mt-10">
              <Link to="/blog">
                <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-3 rounded-full">
                  View All Articles
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BlogArticle;
