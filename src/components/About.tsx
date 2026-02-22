import { motion } from "framer-motion";
import { Book, Code, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 border-b border-black/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left label */}
          <div className="lg:col-span-3">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-black/40 sticky top-24">
              About
            </p>
          </div>

          {/* Content */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-lg md:text-xl text-black/80 leading-relaxed">
              I'm a product-minded AI builder who enjoys turning complex problems into simple,
              scalable solutions.
            </p>
            <p className="text-base text-black/60 leading-relaxed">
              I work at the intersection of AI, cloud platforms, and product thinking, focusing
              on building systems that are not just technically sound but genuinely useful for
              real users. I care deeply about why a problem exists before jumping into how to solve it.
            </p>
            <p className="text-base text-black/60 leading-relaxed">
              I've led and contributed to projects like AI Compliance Copilot, where I took
              ownership from problem definition to prototype deployment—breaking down ambiguous
              requirements, designing intelligent workflows, and delivering solutions on cloud infrastructure.
            </p>

            <div className="pt-6 border-t border-black/10">
              <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-black/40 mb-4">How I think and work</h3>
              <ul className="space-y-2 text-black/70">
                <li className="flex items-start gap-3">
                  <span className="text-black/20 mt-0.5">—</span>
                  Start with user pain, not features
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black/20 mt-0.5">—</span>
                  Break ambiguity into clear, testable assumptions
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black/20 mt-0.5">—</span>
                  Build fast, learn early, and iterate with intent
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black/20 mt-0.5">—</span>
                  Balance product value with technical feasibility
                </li>
              </ul>
            </div>

            <p className="text-base text-black/60 leading-relaxed pt-4">
              My goal is to build products that scale responsibly, solve meaningful problems,
              and create real value.
            </p>
          </div>

          {/* Right sidebar */}
          <div className="lg:col-span-3 space-y-8">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-black/30 mb-3">Education</p>
              <div className="space-y-1">
                <p className="text-sm font-medium text-black/80">B.Tech in EEE</p>
                <p className="text-xs text-black/50">GIET Engineering College, 2021–2025</p>
              </div>
            </div>

            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-black/30 mb-3">Languages</p>
              <div className="space-y-1 text-sm text-black/70">
                <p>Telugu <span className="text-black/30">— Native</span></p>
                <p>English <span className="text-black/30">— Professional</span></p>
                <p>Hindi <span className="text-black/30">— Professional</span></p>
              </div>
            </div>

            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-black/30 mb-3">Interests</p>
              <div className="flex flex-wrap gap-2">
                {["Artificial Intelligence", "Cloud Computing", "Financial Markets", "Entrepreneurship"].map((interest) => (
                  <span key={interest} className="text-xs px-3 py-1 rounded-full border border-black/10 text-black/60">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
