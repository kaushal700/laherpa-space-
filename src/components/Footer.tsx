import { Facebook, Instagram, Twitter, Youtube, Mail, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logoIcon from "@/assets/logo-icon.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Server", href: "/server" },
    { name: "About Us", href: "/about" },
    { name: "Initiatives", href: "/initiatives" },
    { name: "Volunteer", href: "/volunteer" },
  ];

  const usefulLinks = [
    { name: "Our Work", href: "/our-work" },
    { name: "Contact Us", href: "/contact" },
    { name: "Resources", href: "/resources" },
    { name: "Impact", href: "/impact" },
    { name: "Donate", href: "/donate" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[120px]" />
      </div>

      {/* Newsletter Section */}
      <div className="relative z-10 border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto glass-dark rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
                  Stay Connected with Us
                </h3>
                <p className="text-primary-foreground/70">
                  Get updates on rescued animals, events, and ways to help.
                </p>
              </div>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-5 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary transition-colors"
                />
                <Button variant="hero" className="px-6 group">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative z-10 container mx-auto px-4 py-16 lg:pl-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <img 
                src={logoIcon} 
                alt="La Herpaile Logo" 
                className="w-20 h-20 object-contain drop-shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
              />
              <span className="font-display text-3xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                La Herpaile
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm mb-6 leading-relaxed max-w-sm">
              La Herpaile is a dedicated animal welfare 
              organization committed to rescuing, rehabilitating, and rehoming animals in need.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 hover:shadow-glow-sm"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links & Useful Links - Side by side on mobile */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-2">
            {/* Quick Links */}
            <div>
              <h4 className="font-display text-lg font-semibold mb-6 flex items-center gap-2">
                <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" />
                Quick Links
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/70 hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h4 className="font-display text-lg font-semibold mb-6 flex items-center gap-2">
                <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" />
                Useful Links
              </h4>
              <ul className="space-y-4">
                {usefulLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/70 hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/10 pt-8 flex items-center justify-center">

          <p className="text-primary-foreground/50 text-sm flex items-center gap-2">
            © {new Date().getFullYear()} La Herpaile. All rights reserved.
          </p>
          <p className="text-primary-foreground/50 text-sm flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-primary animate-heartbeat" /> for animals
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;