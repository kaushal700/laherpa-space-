import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logoIcon from "@/assets/logo-icon.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Server", href: "/server" },
    { name: "About Us", href: "/about" },
    { name: "Initiatives", href: "/initiatives" },
    { name: "Volunteer", href: "/volunteer" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white shadow-elegant border-b border-primary/10"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 group"
          >
            <img 
              src={logoIcon} 
              alt="La Herpaile Logo" 
              className="w-12 h-12 object-contain group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 drop-shadow-lg"
            />
            <span className="font-display text-xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              La Herpaile
            </span>
          </Link>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center gap-1 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 rounded-full px-2 py-1 border border-primary/10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="relative px-5 py-2 text-base font-extrabold transition-all duration-300 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Donate Button */}
          <Link to="/donate" className="hidden md:block">
            <Button 
              variant="hero" 
              size="default" 
              className="group shadow-lg hover:shadow-primary/25 text-base font-extrabold"
            >
              <Heart className="w-5 h-5 mr-1 group-hover:animate-heartbeat" />
              Donate
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg transition-all duration-300 text-foreground hover:bg-primary/10"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg overflow-hidden transition-all duration-500 border-b border-primary/10 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-primary font-bold py-3 px-4 rounded-lg hover:bg-primary/10 transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
          <Link to="/donate" onClick={() => setIsOpen(false)}>
            <Button variant="hero" className="mt-4 w-full">
              <Heart className="w-4 h-4 mr-2" />
              Donate Now
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
