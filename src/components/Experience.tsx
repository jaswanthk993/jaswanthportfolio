import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

interface ExperienceProps {
  title: string;
  company: string;
  duration: string;
  description: string;
  technologies?: string[];
}

const experienceData: ExperienceProps[] = [
  {
    title: "Contributor",
    company: "GirlScript Summer of Code",
    duration: "Jul 2025 – Aug 2025",
    description: "Contributing to open-source projects, collaborating with developers worldwide on impactful tech solutions.",
    technologies: ["Open Source", "Git", "GitHub"],
  },
  {
    title: "Google Cloud GenAI Intern",
    company: "SmartInternz",
    duration: "Jan 2025 – Mar 2025",
    description: "Built real-world AI applications using Gemini and cloud-native technologies during intensive GenAI internship.",
    technologies: ["Google Cloud", "Gemini AI", "Cloud Run"],
  },
  {
    title: "Cloud Intern",
    company: "ExcelR",
    duration: "Jun 2024 – Jul 2024",
    description: "Hands-on Azure cloud computing, deploying infrastructure and optimizing automation.",
    technologies: ["Azure", "Cloud Infrastructure"],
  },
  {
    title: "Microsoft BI / Power BI",
    company: "Pantechelearning",
    duration: "Jun 2024 – Jul 2024",
    description: "Data visualization, reporting, and business analytics using Power BI.",
    technologies: ["Power BI", "Data Analytics"],
  },
  {
    title: "Future Ready Talent Intern",
    company: "Microsoft",
    duration: "Nov 2023 – Jan 2024",
    description: "Learning in-demand technology skills using Microsoft Azure & GitHub tools for real-world problem solving.",
    technologies: ["Azure", "GitHub"],
  },
  {
    title: "Full-stack Developer",
    company: "Pantechelearning",
    duration: "Jul 2023 – Sep 2023",
    description: "Developed full-stack web applications using modern JavaScript frameworks.",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "AI Intern",
    company: "Edunet Foundation",
    duration: "Jun 2023 – Jul 2023",
    description: "Practical AI and IBM skills, creating positive impact in the field.",
    technologies: ["AI", "Machine Learning", "IBM Watson"],
  },
  {
    title: "Python Developer",
    company: "Linta Technologies",
    duration: "May 2023 – Jun 2023",
    description: "Python development, API integration, and full software development lifecycle.",
    technologies: ["Python", "APIs"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-28 border-b border-black/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-3">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-black/40 sticky top-24">
              Experience
            </p>
          </div>

          <div className="lg:col-span-9">
            <div className="space-y-0">
              {experienceData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group py-6 border-b border-black/5 last:border-none"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-base font-bold text-black group-hover:text-black/80 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-black/50">{item.company}</p>
                    </div>
                    <p className="text-xs font-mono text-black/30 whitespace-nowrap">{item.duration}</p>
                  </div>
                  <p className="text-sm text-black/50 mb-3">{item.description}</p>
                  {item.technologies && (
                    <div className="flex flex-wrap gap-1.5">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border border-black/8 text-black/35"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
