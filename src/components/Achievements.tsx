import { motion } from "framer-motion";
import { Trophy, ExternalLink, Github, FileText, Target, Shield, Zap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import certificateImage from "@/assets/google-certificate.png";

const features = [
  {
    icon: FileText,
    title: "Policy Analysis",
    description: "Reads and analyzes large policy and compliance documents"
  },
  {
    icon: Shield,
    title: "Risk Detection",
    description: "Flags risks, gaps, and violations in simple language"
  },
  {
    icon: Zap,
    title: "Fast Compliance",
    description: "Helps teams stay compliant while building faster"
  },
  {
    icon: Users,
    title: "Real-time Assistant",
    description: "Acts as a real-time assistant for developers, founders, and compliance teams"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Trophy className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Achievement Unlocked</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Featured Achievement</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recognition for innovation and technical excellence
          </p>
        </motion.div>

        {/* Main Achievement Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="overflow-hidden bg-card/50 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Certificate Image */}
                <div className="relative group">
                  <div className="aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden">
                    <img
                      src={certificateImage}
                      alt="Google Build and Blog Marathon 2025 Certificate"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />
                  </div>
                  {/* Badge Overlay */}
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-sm font-semibold shadow-glow-sm">
                      <Trophy className="w-4 h-4" />
                      3rd Place Winner
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8 flex flex-col justify-center">
                  <div className="space-y-6">
                    {/* Title */}
                    <div>
                      <p className="text-primary font-medium mb-2">Google Build and Blog Marathon 2025</p>
                      <h3 className="text-2xl md:text-3xl font-bold mb-3">AI Compliance Copilot</h3>
                      <p className="text-muted-foreground">
                        As the <span className="text-foreground font-medium">Team Leader</span>, I was responsible for driving the prototype development, 
                        aligning the product vision, and ensuring we translated a complex problem into a clear, 
                        usable solution within a tight deadline.
                      </p>
                    </div>

                    {/* Problem Statement */}
                    <div className="p-4 rounded-lg bg-secondary/50 border border-border/50">
                      <div className="flex items-start gap-3">
                        <Target className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <p className="text-sm text-muted-foreground">
                          <span className="text-foreground font-medium">The Problem:</span> Understanding, tracking, and complying with complex policies 
                          and regulations without slowing down innovation.
                        </p>
                      </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid sm:grid-cols-2 gap-3">
                      {features.map((feature, index) => (
                        <motion.div
                          key={feature.title}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                          className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                        >
                          <feature.icon className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <div>
                            <p className="text-sm font-medium">{feature.title}</p>
                            <p className="text-xs text-muted-foreground">{feature.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Goal */}
                    <p className="text-sm text-muted-foreground italic border-l-2 border-primary pl-4">
                      "The goal was to make compliance proactive, understandable, and developer-friendly — 
                      not reactive or confusing."
                    </p>

                    {/* Links */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      <Button
                        asChild
                        className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-sm hover:shadow-glow transition-all duration-300"
                      >
                        <a href="https://lnkd.in/g4pVH5AN" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          Live Prototype
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="gap-2 border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                      >
                        <a href="https://lnkd.in/gT8w72Ya" target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                          GitHub
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="gap-2 border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                      >
                        <a href="https://lnkd.in/gnXugArk" target="_blank" rel="noopener noreferrer">
                          <FileText className="w-4 h-4" />
                          Technical Blog
                        </a>
                      </Button>
                    </div>

                    {/* Thanks */}
                    <p className="text-xs text-muted-foreground pt-2">
                      Special thanks to <span className="text-foreground">Google</span>, <span className="text-foreground">Google Cloud</span>, 
                      and <span className="text-foreground">Code Vipassana</span> for creating a platform that emphasizes 
                      real-world problem solving over theoretical ideas.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
