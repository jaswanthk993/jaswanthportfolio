
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/70 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">Jaswanth Kumar</h3>
            <p className="text-foreground/70 mb-4 max-w-xs">
              Innovative technologist with expertise in cloud computing, AI, and full-stack development.
            </p>
            <div className="flex gap-4">
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
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/#projects"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/#skills"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="/#experience"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  to="/#contact"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-2 text-foreground/70">
              <li>Rajahmundry, Andhra Pradesh, India</li>
              <li>
                <a
                  href="mailto:jaswanthk993@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  jaswanthk993@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+918309619236" className="hover:text-primary transition-colors">
                  +91 8309619236
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-foreground/60">
          <p>© {currentYear} Jaswanth Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
