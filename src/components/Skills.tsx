
import { CheckCircle2, Code, Database, Server, Cloud, Brain, Languages, Award } from "lucide-react";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface SkillProgressProps {
  name: string;
  percentage: number;
}

const technicalSkills: SkillProgressProps[] = [
  { name: "Cloud Computing (AWS, Azure, GCP)", percentage: 90 },
  { name: "Python", percentage: 85 },
  { name: "Artificial Intelligence", percentage: 80 },
  { name: "Machine Learning", percentage: 75 },
  { name: "Git & GitHub", percentage: 85 },
  { name: "HTML/CSS/JavaScript", percentage: 80 },
  { name: "Flask", percentage: 75 },
  { name: "DevOps", percentage: 70 }
];

const softSkills: SkillProgressProps[] = [
  { name: "Problem Solving", percentage: 90 },
  { name: "Communication", percentage: 85 },
  { name: "Time Management", percentage: 80 },
  { name: "Logic Building", percentage: 85 },
  { name: "Leadership", percentage: 80 }
];

const languages = [
  "Hindi (Professional Working)",
  "Telugu (Native or Bilingual)",
  "English (Professional Working)"
];

const certifications = [
  "Investment Banking",
  "Email Writing",
  "Time Management",
  "Enterprise Design Thinking Practitioner",
  "Getting Started with Enterprise Data Science"
];

const otherSkills = [
  "Problem Solving", 
  "Leadership", 
  "Communication", 
  "Logic Building", 
  "Git & GitHub", 
  "MATLAB", 
  "Teamwork"
];

const SkillProgress = ({ skill }: { skill: SkillProgressProps }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-6 last:mb-0"
    >
      <div className="flex justify-between mb-2">
        <h3 className="font-medium">{skill.name}</h3>
        <span className="font-medium text-primary">{skill.percentage}%</span>
      </div>
      <Progress value={skill.percentage} className="h-2" />
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and professional competencies.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="all" className="mb-10">
            <TabsList className="mx-auto grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="all">All Skills</TabsTrigger>
              <TabsTrigger value="technical">Technical</TabsTrigger>
              <TabsTrigger value="soft">Soft Skills</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {technicalSkills.map((skill, index) => (
                  <SkillProgress key={index} skill={skill} />
                ))}
                {softSkills.map((skill, index) => (
                  <SkillProgress key={`soft-${index}`} skill={skill} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="technical" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {technicalSkills.map((skill, index) => (
                  <SkillProgress key={index} skill={skill} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="soft" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {softSkills.map((skill, index) => (
                  <SkillProgress key={index} skill={skill} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Languages Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-secondary/70 p-8 rounded-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <Languages className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-medium">Languages</h3>
              </div>
              <ul className="space-y-2">
                {languages.map((language, index) => (
                  <li key={index} className="flex items-center gap-2 text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>{language}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Certifications Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary/70 p-8 rounded-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-medium">Certifications</h3>
              </div>
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center gap-2 text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
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
      </div>
    </section>
  );
};

export default Skills;
