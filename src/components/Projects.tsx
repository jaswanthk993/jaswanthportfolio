
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
    title: "Static Website Deployment",
    description: "Hosted a responsive static website on AWS S3 with CloudFront for fast and secure content delivery.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    demoLink: "https://example.com",
    githubLink: "https://github.com/jaswanthk993/future-ready-talent-project",
    technologies: ["AWS S3", "CloudFront", "Route 53", "HTML", "CSS", "JavaScript"],
    category: "web"
  }, 
  {
    title: "Cloud-Based Mental Fitness Tracker",
    description: "Built an AI-powered mental wellness tracker using Azure Cognitive Services for sentiment analysis.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    demoLink: "https://example.com",
    githubLink: "https://github.com/jaswanthk993/Mental-fitness-tracker-with-IBM",
    technologies: ["Azure Cognitive Services", "Azure App Services", "Python", "Flask"],
    category: "ai"
  }, 
  {
    title: "Stock Price Prediction using Cloud AI",
    description: "Developed a machine learning model on Google Cloud AI to predict stock prices in real-time.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    demoLink: "https://example.com",
    githubLink: "https://github.com/jaswanthk993/stock-prediction",
    technologies: ["Google Cloud AI", "Vertex AI", "Python", "Flask", "Cloud Storage"],
    category: "cloud"
  }
];

const ProjectCard = ({
  project
}: {
  project: ProjectProps;
}) => {
  return (
    <Card className="h-full overflow-hidden hover:shadow-lg transition-all">
      <div className="aspect-video w-full overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map(tech => (
            <span key={tech} className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-foreground transition-all hover:bg-accent hover:text-white">
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-3">
        <Button variant="outline" size="sm" asChild>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
            <Github size={16} />
            <span className="text-left">Code</span>
          </a>
        </Button>
        {project.demoLink && (
          <Button size="sm" asChild>
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <ExternalLink size={16} />
              <span>Demo</span>
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "web" | "ai" | "cloud">("all");

  const filteredProjects = activeFilter === "all" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-32 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A collection of my recent development work, showcasing skills in cloud computing, AI, and full-stack development.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <Tabs defaultValue="all" className="w-full max-w-md">
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger 
                value="all" 
                onClick={() => setActiveFilter("all")}
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                All Projects
              </TabsTrigger>
              <TabsTrigger 
                value="web" 
                onClick={() => setActiveFilter("web")}
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Web
              </TabsTrigger>
              <TabsTrigger 
                value="ai" 
                onClick={() => setActiveFilter("ai")}
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                AI/ML
              </TabsTrigger>
              <TabsTrigger 
                value="cloud" 
                onClick={() => setActiveFilter("cloud")}
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Cloud
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.1 }} 
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/jaswanthk993" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github size={18} />
              <span>View More on GitHub</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
