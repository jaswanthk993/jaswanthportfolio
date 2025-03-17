
import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-navy-dark/90 shadow-md backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold gradient-text">
          Jaswanth Kumar
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/#education"
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Education
          </Link>
          <Link
            to="/#projects"
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Projects
          </Link>
          <Link
            to="/#skills"
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Skills
          </Link>
          <Link
            to="/#experience"
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Experience
          </Link>
          <Link
            to="/#contact"
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Social Links - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/jaswanthk993"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/jaswanth-kumar-/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:jaswanthk993@gmail.com"
            className="text-foreground/70 hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <Button asChild>
            <a href="/#contact">Get in Touch</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background dark:bg-navy-dark shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-6">
            <Link
              to="/#education"
              className="text-lg font-medium py-2 border-b border-border"
              onClick={toggleMenu}
            >
              Education
            </Link>
            <Link
              to="/#projects"
              className="text-lg font-medium py-2 border-b border-border"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              to="/#skills"
              className="text-lg font-medium py-2 border-b border-border"
              onClick={toggleMenu}
            >
              Skills
            </Link>
            <Link
              to="/#experience"
              className="text-lg font-medium py-2 border-b border-border"
              onClick={toggleMenu}
            >
              Experience
            </Link>
            <Link
              to="/#contact"
              className="text-lg font-medium py-2"
              onClick={toggleMenu}
            >
              Contact
            </Link>

            <div className="flex items-center gap-6 py-4">
              <a
                href="https://github.com/jaswanthk993"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/jaswanth-kumar-/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="mailto:jaswanthk993@gmail.com"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
