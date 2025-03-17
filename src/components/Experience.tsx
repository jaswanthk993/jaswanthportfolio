
import { CalendarDays, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

interface ExperienceProps {
  title: string;
  company: string;
  duration: string;
  description: string;
  technologies?: string[];
  type: "work" | "education";
}

const experienceData: ExperienceProps[] = [
  {
    title: "Cloud Computing Intern",
    company: "ExcelR",
    duration: "June 2024 - July 2024",
    description: "Virtual internship focused on cloud computing technologies, gaining hands-on experience in Azure. Assisted in deploying cloud infrastructure and optimizing automation processes for real-world applications.",
    technologies: ["Azure", "Cloud Infrastructure", "Automation"],
    type: "work"
  },
  {
    title: "Cloud Engineering Intern",
    company: "Edunet Foundation",
    duration: "February 2024 - March 2024",
    description: "Focused on implementing cloud-native applications and learning cloud security best practices. Engaged in hands-on labs using Azure and AWS to develop scalable cloud-based solutions.",
    technologies: ["Azure", "AWS", "Cloud Security"],
    type: "work"
  },
  {
    title: "Azure Intern",
    company: "Future Ready Talent (Microsoft)",
    duration: "November 2023 - January 2024",
    description: "Developed projects utilizing Microsoft Azure and GitHub tools while solving real-world problems. Gained industry-oriented exposure to cloud services, AI, and DevOps methodologies.",
    technologies: ["Azure", "GitHub", "AI", "DevOps"],
    type: "work"
  },
  {
    title: "B.Tech in Electrical and Electronics Engineering",
    company: "GIET Engineering College",
    duration: "2022 - Present",
    description: "Currently pursuing a B.Tech degree with a GPA of 7.40, focusing on electrical and electronics engineering with additional coursework in programming and technology.",
    type: "education"
  },
  {
    title: "Intermediate Education",
    company: "MPC Narayana Junior College",
    duration: "June 2019 - May 2021",
    description: "Completed intermediate education with 71% in Mathematics, Physics, and Chemistry.",
    type: "education"
  }
];

const ExperienceItem = ({ item, index }: { item: ExperienceProps, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`flex gap-4 ${index !== experienceData.length - 1 ? "pb-8" : ""}`}
    >
      <div className="relative flex-none">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
          item.type === "work" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
        }`}>
          {item.type === "work" ? <Briefcase size={20} /> : <CalendarDays size={20} />}
        </div>
        {index !== experienceData.length - 1 && (
          <div className="absolute top-10 bottom-0 left-1/2 w-0.5 -translate-x-1/2 bg-border"></div>
        )}
      </div>
      
      <div className="flex-1">
        <h3 className="text-lg font-medium">{item.title}</h3>
        <div className="flex flex-wrap items-center gap-x-3 text-sm text-foreground/70 mb-2">
          <span className="font-medium">{item.company}</span>
          <span>•</span>
          <span>{item.duration}</span>
        </div>
        <p className="text-foreground/80 mb-3">{item.description}</p>
        
        {item.technologies && (
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech, techIndex) => (
              <span key={techIndex} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A timeline of my professional experience and educational background.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {experienceData.map((item, index) => (
            <ExperienceItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
