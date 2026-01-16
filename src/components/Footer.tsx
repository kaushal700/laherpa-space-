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
    <footer className="bg-gradient-to-r from-primary via-accent to-primary text-black relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-red-900/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-yellow-900/10 rounded-full blur-[120px]" />
      </div>

      {/* Newsletter Section */}
      <div className="relative z-10 border-b border-black/10">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto glass-dark rounded-3xl p-8 md:p-12 border border-black/10 hover:border-black/20 transition-colors duration-500">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 text-black">
                  Stay Connected with Us
                </h3>
                <p className="text-black/80 leading-relaxed text-lg">
                  Get updates on rescued animals, events, and ways to help.
                </p>
              </div>
              <div className="flex gap-3 relative group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-5 py-3 rounded-xl bg-white/20 border border-black/10 text-black placeholder:text-black/50 focus:outline-none focus:border-black/50 focus:bg-white/30 transition-all duration-300 pr-16 text-lg"
                />
                <Button variant="hero" className="absolute right-1 top-1 bottom-1 px-4 !rounded-lg hover:scale-105 active:scale-95 transition-all duration-300">
                  <ArrowRight className="w-5 h-5 text-white" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative z-10 container mx-auto px-4 py-16 lg:pl-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link 
            to="/" 
            className="flex items-center gap-2 group"
          >
            <img 
              src={logoIcon} 
              alt="La Herpaile Logo" 
              className="w-20 h-20 object-contain group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 drop-shadow-lg"
            />
            <span className="font-display text-3xl font-bold text-black">
              La Herpaile
            </span>
          </Link>
            <p className="text-black/80 text-base mb-8 leading-relaxed max-w-sm font-medium">
              La Herpaile is a dedicated animal welfare
              organization committed to rescuing, rehabilitating, and rehoming animals in need.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 rounded-xl bg-black/5 border border-black/5 flex items-center justify-center text-black/70 hover:text-white hover:bg-black hover:border-black hover:-translate-y-1 transition-all duration-300"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links & Useful Links - Side by side on mobile */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-2 lg:pl-12">
            {/* Quick Links */}
            <div>
              <h4 className="font-display text-xl font-bold mb-6 flex items-center gap-3 text-black">
                <span className="w-8 h-1 bg-black rounded-full" />
                Quick Links
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-black/70 hover:text-black hover:translate-x-1 transition-all duration-300 text-lg flex items-center gap-2 group w-fit font-medium"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-black" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h4 className="font-display text-xl font-bold mb-6 flex items-center gap-3 text-black">
                <span className="w-8 h-1 bg-black rounded-full" />
                Useful Links
              </h4>
              <ul className="space-y-4">
                {usefulLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-black/70 hover:text-black hover:translate-x-1 transition-all duration-300 text-lg flex items-center gap-2 group w-fit font-medium"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-black" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-black/60 text-base text-center md:text-left font-medium">
            © {new Date().getFullYear()} La Herpaile. All rights reserved.
          </p>
          <p className="text-black/60 text-base flex items-center gap-1.5 align-middle font-medium">
            Made with <Heart className="w-5 h-5 text-black animate-heartbeat fill-black" /> for animals
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;