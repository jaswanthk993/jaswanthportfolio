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
                I am a results-driven Senior Delivery Specialist at BoostMySites, where I help 
                businesses transform their digital presence through modern, scalable, and 
                high-performing websites. With hands-on expertise in end-to-end website development, 
                project delivery, and client success management, I specialize in building tailored 
                digital solutions that enhance brand visibility and accelerate growth.
              </p>
              
              <p className="text-foreground/80">
                My role bridges technology, business, and customer success — ensuring every project 
                is delivered on time, within scope, and aligned with client goals. I thrive in 
                collaborating with startups, SMEs, and enterprises to bring their ideas to life 
                through intuitive, user-friendly, and conversion-focused web platforms.
              </p>
              
              <p className="text-foreground/80">
                I am currently pursuing a B.Tech in Electrical and Electronics Engineering at GIET 
                Engineering College. My journey is centered around the pursuit of knowledge and 
                a drive to make a meaningful impact in the world through technology and innovation.
              </p>
              
              <p className="text-foreground/80">
                Entrepreneurship is ingrained in my very core. The excitement of nurturing ideas 
                with the potential to revolutionize industries propels me forward. Complementing 
                this entrepreneurial spirit is my profound fascination with AI technologies, driving 
                me to continually learn, adapt, and innovate.
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