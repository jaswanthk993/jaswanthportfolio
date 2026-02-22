import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  demoLink?: string;
  githubLink: string;
  technologies: string[];
  category: "all" | "web" | "ai" | "cloud";
}

const projectsData: ProjectProps[] = [
  {
    title: "AI Compliance Copilot",
    description: "An intelligent compliance assistant that reads and analyzes policy documents, flags risks and violations, and helps teams stay compliant.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    demoLink: "https://ai-compliance-copilot.lovable.app/",
    githubLink: "https://github.com/jaswanthk993/ai-compliance-copilot",
    technologies: ["Google Cloud", "Gemini AI", "React", "TypeScript", "LangChain"],
    category: "ai",
  },
  {
    title: "Static Website Deployment",
    description: "Hosted a responsive static website on AWS S3 with CloudFront for fast and secure content delivery.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    demoLink: "https://example.com",
    githubLink: "https://github.com/jaswanthk993/future-ready-talent-project",
    technologies: ["AWS S3", "CloudFront", "Route 53", "HTML", "CSS"],
    category: "web",
  },
  {
    title: "Cloud-Based Mental Fitness Tracker",
    description: "Built an AI-powered mental wellness tracker using Azure Cognitive Services for sentiment analysis.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    demoLink: "https://example.com",
    githubLink: "https://github.com/jaswanthk993/Mental-fitness-tracker-with-IBM",
    technologies: ["Azure Cognitive Services", "Python", "Flask"],
    category: "ai",
  },
  {
    title: "Stock Price Prediction",
    description: "Developed a machine learning model on Google Cloud AI to predict stock prices in real-time.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    demoLink: "https://example.com",
    githubLink: "https://github.com/jaswanthk993/stock-prediction",
    technologies: ["Google Cloud AI", "Vertex AI", "Python"],
    category: "cloud",
  },
  {
    title: "AI Home Design Assistant",
    description: "An intelligent home design assistant providing personalized recommendations using AI algorithms.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80",
    demoLink: "https://example.com",
    githubLink: "https://github.com/jaswanthk993/ai-driven-custom-home-design-assistant",
    technologies: ["Python", "TensorFlow", "React", "Node.js"],
    category: "ai",
  },
  {
    title: "AI PDF Knowledge Assistant",
    description: "Intelligent PDF processing system using Google PaLM for document analysis and knowledge extraction.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80",
    demoLink: "https://example.com",
    githubLink: "https://github.com/jaswanthk993/ai-powered-pdf-knowledge-assistant-using-google-palm",
    technologies: ["Google PaLM", "Python", "FastAPI", "LangChain"],
    category: "ai",
  },
  {
    title: "Energy Demand Forecasting",
    description: "Time-series model using ARIMA to predict energy load with preprocessed data and visualized predictions.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
    demoLink: "https://example.com",
    githubLink: "https://github.com/jaswanthk993/energy-demand-forecasting-arima",
    technologies: ["Python", "ARIMA", "Pandas", "Matplotlib"],
    category: "ai",
  },
];

const filters = [
  { key: "all", label: "All" },
  { key: "ai", label: "AI/ML" },
  { key: "web", label: "Web" },
  { key: "cloud", label: "Cloud" },
] as const;

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "web" | "ai" | "cloud">("all");
  const filtered = activeFilter === "all" ? projectsData : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-black/5">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-3">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-black/40 sticky top-24">
              Selected Work
            </p>
          </div>
          <div className="lg:col-span-9">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-black mb-4">
              Projects
            </h2>
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  className={`px-4 py-1.5 text-xs font-mono uppercase tracking-wider rounded-full border transition-all ${
                    activeFilter === f.key
                      ? "bg-black text-white border-black"
                      : "bg-transparent text-black/50 border-black/15 hover:border-black/40"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filtered.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg mb-4 bg-black/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white/90 text-black text-xs font-medium rounded-full hover:bg-white transition-colors"
                  >
                    <Github size={12} /> Code
                  </a>
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-white/90 text-black text-xs font-medium rounded-full hover:bg-white transition-colors"
                    >
                      <ExternalLink size={12} /> Live
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-lg font-bold text-black mb-1">{project.title}</h3>
              <p className="text-sm text-black/50 mb-3 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border border-black/10 text-black/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub link */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/jaswanthk993"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-black/40 hover:text-black transition-colors border-b border-black/10 hover:border-black/40 pb-1"
          >
            <Github size={14} />
            View more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
