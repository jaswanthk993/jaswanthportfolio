import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pastActivation, setPastActivation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      // Show navbar after activation sequence (~600vh worth of scroll)
      setPastActivation(window.scrollY > window.innerHeight * 5);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        pastActivation
          ? scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm translate-y-0"
            : "bg-white translate-y-0"
          : "-translate-y-full"
      )}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-lg font-black uppercase tracking-tight text-black"
        >
          JK
        </button>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-black/60 hover:text-black transition-colors uppercase tracking-wider"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="https://github.com/jaswanthk993" target="_blank" rel="noopener noreferrer" className="text-black/40 hover:text-black transition-colors" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/jaswanth-kumar-/" target="_blank" rel="noopener noreferrer" className="text-black/40 hover:text-black transition-colors" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="mailto:jaswanthk993@gmail.com" className="text-black/40 hover:text-black transition-colors" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-black" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-black/5 animate-fade-in">
          <div className="container mx-auto px-6 py-8 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-left text-lg font-medium text-black/70 hover:text-black py-2 uppercase tracking-wider"
              >
                {link.label}
              </button>
            ))}
            <div className="flex items-center gap-6 pt-4 border-t border-black/5">
              <a href="https://github.com/jaswanthk993" target="_blank" rel="noopener noreferrer" className="text-black/40 hover:text-black transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/jaswanth-kumar-/" target="_blank" rel="noopener noreferrer" className="text-black/40 hover:text-black transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:jaswanthk993@gmail.com" className="text-black/40 hover:text-black transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
