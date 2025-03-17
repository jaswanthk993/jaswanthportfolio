
import { CheckCircle2, Code, Database, Server, Cloud, Brain } from "lucide-react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Cloud Computing",
    icon: <Cloud className="w-6 h-6 text-primary" />,
    skills: ["AWS S3", "AWS CloudFront", "Azure App Services", "Google Cloud AI", "Cloud Storage"]
  },
  {
    title: "AI & Machine Learning",
    icon: <Brain className="w-6 h-6 text-primary" />,
    skills: ["Vertex AI", "Azure Cognitive Services", "Sentiment Analysis", "ML Model Development", "Data Processing"]
  },
  {
    title: "Frontend Development",
    icon: <Code className="w-6 h-6 text-primary" />,
    skills: ["HTML/CSS", "JavaScript", "React", "Responsive Design", "UI/UX"]
  },
  {
    title: "Backend Development",
    icon: <Server className="w-6 h-6 text-primary" />,
    skills: ["Python", "Flask", "Node.js", "API Development", "Authentication"]
  },
  {
    title: "Database Management",
    icon: <Database className="w-6 h-6 text-primary" />,
    skills: ["SQL", "NoSQL", "Data Modeling", "MongoDB", "Cloud Databases"]
  },
  {
    title: "DevOps",
    icon: <Server className="w-6 h-6 text-primary" />,
    skills: ["CI/CD", "Docker", "Infrastructure as Code", "Monitoring", "Deployment"]
  }
];

const otherSkills = [
  "Problem Solving", "Time Management", "Leadership", "Communication", 
  "Logic Building", "Git & GitHub", "Enterprise Design Thinking"
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional competencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-navy-dark p-6 rounded-lg shadow-sm border border-border hover:border-primary/20 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-medium">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center gap-2 text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="bg-secondary/70 p-8 rounded-lg">
          <h3 className="text-xl font-medium mb-6 text-center">Other Professional Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {otherSkills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-navy-dark px-4 py-2 rounded-full border border-border text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
