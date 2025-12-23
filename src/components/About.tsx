import { motion } from "framer-motion";
import { Book, Briefcase, Code, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const About = () => {
  return <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} viewport={{
          once: true
        }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-32 h-1 bg-primary mx-auto mb-6"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }} viewport={{
            once: true
          }} className="space-y-6 text-lg">
              <p className="text-foreground/80">
                I'm a product-minded AI builder who enjoys turning complex problems into simple, 
                scalable solutions.
              </p>
              
              <p className="text-foreground/80">
                I work at the intersection of AI, cloud platforms, and product thinking, focusing 
                on building systems that are not just technically sound but genuinely useful for 
                real users. I care deeply about why a problem exists before jumping into how to solve it.
              </p>
              
              <p className="text-foreground/80">
                I've led and contributed to projects like AI Compliance Copilot, where I took 
                ownership from problem definition to prototype deployment—breaking down ambiguous 
                requirements, designing intelligent workflows, and delivering solutions on cloud infrastructure.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-4">How I think and work</h3>
              <ul className="text-foreground/80 list-disc list-inside space-y-1">
                <li>Start with user pain, not features</li>
                <li>Break ambiguity into clear, testable assumptions</li>
                <li>Build fast, learn early, and iterate with intent</li>
                <li>Balance product value with technical feasibility</li>
              </ul>
              
              <p className="text-foreground/80 mt-4">
                I enjoy collaborating with diverse teams, learning continuously, and working in 
                environments that value clarity, ownership, and long-term impact.
              </p>
              
              <p className="text-foreground/80">
                My goal is to build products that scale responsibly, solve meaningful problems, 
                and create real value.
              </p>
            </motion.div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              <motion.div initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }} viewport={{
              once: true
            }}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Education</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Book className="text-primary" size={18} />
                        <div>
                          <p className="font-medium">B.Tech in EEE</p>
                          <p className="text-sm text-foreground/70">GIET Engineering College, 2021-2025</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5,
              delay: 0.3
            }} viewport={{
              once: true
            }}>
                <Card className="h-full">
                  
                </Card>
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5,
              delay: 0.4
            }} viewport={{
              once: true
            }}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Languages</h3>
                    <div className="space-y-2">
                      <p className="flex justify-between">
                        <span>English</span>
                        <span className="text-foreground/70">Professional Working</span>
                      </p>
                      <p className="flex justify-between">
                        <span>Hindi</span>
                        <span className="text-foreground/70">Professional Working</span>
                      </p>
                      <p className="flex justify-between">
                        <span>Telugu</span>
                        <span className="text-foreground/70">Native</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5,
              delay: 0.5
            }} viewport={{
              once: true
            }}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Interests</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Heart className="text-primary" size={18} />
                        <p>Artificial Intelligence</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Code className="text-primary" size={18} />
                        <p>Cloud Computing</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Heart className="text-primary" size={18} />
                        <p>Financial Markets</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Code className="text-primary" size={18} />
                        <p>Entrepreneurship</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;