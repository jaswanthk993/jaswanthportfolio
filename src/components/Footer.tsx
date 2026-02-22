import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-black/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="text-sm font-black uppercase tracking-tight text-black">JK</span>
            <span className="text-xs text-black/30">© {currentYear}</span>
          </div>

          <nav className="flex items-center gap-6">
            {["#about", "#projects", "#skills", "#experience", "#contact"].map((href) => (
              <a
                key={href}
                href={href}
                className="text-xs font-mono uppercase tracking-wider text-black/30 hover:text-black transition-colors"
              >
                {href.replace("#", "")}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href="https://github.com/jaswanthk993" target="_blank" rel="noopener noreferrer" className="text-black/30 hover:text-black transition-colors" aria-label="GitHub">
              <Github size={16} />
            </a>
            <a href="https://www.linkedin.com/in/jaswanth-kumar-/" target="_blank" rel="noopener noreferrer" className="text-black/30 hover:text-black transition-colors" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
            <a href="mailto:jaswanthk993@gmail.com" className="text-black/30 hover:text-black transition-colors" aria-label="Email">
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
