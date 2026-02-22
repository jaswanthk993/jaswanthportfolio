import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ActivationSequence from "@/components/ActivationSequence";
import { useEffect } from "react";
import { motion } from "framer-motion";

const sectionAnim = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

const Index = () => {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* === ACTIVATION SEQUENCE === */}
      <ActivationSequence />

      {/* === POST-ACTIVATION PORTFOLIO (white/clean editorial) === */}
      <div className="bg-white text-black relative z-10">
        <Navbar />

        {/* Identity Section */}
        <section className="py-24 md:py-32 border-b border-black/5">
          <div className="container mx-auto px-6">
            <motion.div {...sectionAnim} className="max-w-4xl">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-black mb-6">
                Product-Minded
                <br />
                <span className="text-black/30">AI Builder</span>
              </h1>
              <p className="text-lg md:text-xl text-black/60 max-w-2xl leading-relaxed">
                Turning complex problems into simple, scalable solutions at the intersection of AI, cloud platforms, and product thinking.
              </p>
            </motion.div>
          </div>
        </section>

        <motion.div {...sectionAnim}>
          <About />
        </motion.div>

        <motion.div {...sectionAnim}>
          <Skills />
        </motion.div>

        <motion.div {...sectionAnim}>
          <Projects />
        </motion.div>

        <motion.div {...sectionAnim}>
          <Experience />
        </motion.div>

        <motion.div {...sectionAnim}>
          <Education />
        </motion.div>

        <motion.div {...sectionAnim}>
          <Achievements />
        </motion.div>

        <motion.div {...sectionAnim}>
          <Certificates />
        </motion.div>

        <motion.div {...sectionAnim}>
          <Contact />
        </motion.div>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
