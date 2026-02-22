import { motion } from "framer-motion";
import { Trophy, ExternalLink, Github, FileText, Target, Shield, Zap, Users } from "lucide-react";
import certificateImage from "@/assets/google-certificate.png";

const features = [
  { icon: FileText, title: "Policy Analysis", description: "Reads and analyzes large policy documents" },
  { icon: Shield, title: "Risk Detection", description: "Flags risks, gaps, and violations" },
  { icon: Zap, title: "Fast Compliance", description: "Helps teams stay compliant while shipping" },
  { icon: Users, title: "Real-time Assistant", description: "For developers, founders, and compliance teams" },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 md:py-28 border-b border-black/5 bg-black/[0.02]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-3">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-black/40 sticky top-24">
              Achievement
            </p>
          </div>

          <div className="lg:col-span-9">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs font-mono uppercase tracking-wider">
                <Trophy className="w-3 h-3" />
                3rd Place
              </div>
              <span className="text-xs text-black/40 font-mono uppercase tracking-wider">
                Google Build & Blog Marathon 2025
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-black/5">
                <img
                  src={certificateImage}
                  alt="Google Build and Blog Marathon 2025 Certificate"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-black text-black mb-2">AI Compliance Copilot</h3>
                  <p className="text-sm text-black/50">
                    As Team Leader, I drove prototype development, aligned product vision, and
                    translated a complex problem into a usable solution within a tight deadline.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-black/[0.03] border border-black/5">
                  <div className="flex items-start gap-3">
                    <Target className="w-4 h-4 text-black/40 mt-0.5 shrink-0" />
                    <p className="text-xs text-black/50">
                      <span className="font-medium text-black/70">The Problem:</span> Understanding and complying
                      with complex policies without slowing down innovation.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {features.map((f) => (
                    <div key={f.title} className="flex items-start gap-2">
                      <f.icon className="w-3.5 h-3.5 text-black/30 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs font-medium text-black/70">{f.title}</p>
                        <p className="text-[10px] text-black/40">{f.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  <a
                    href="https://lnkd.in/g4pVH5AN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-black text-white text-xs font-medium rounded-full hover:bg-black/80 transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" /> Live Prototype
                  </a>
                  <a
                    href="https://lnkd.in/gT8w72Ya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 border border-black/15 text-black/60 text-xs font-medium rounded-full hover:border-black/40 hover:text-black transition-all"
                  >
                    <Github className="w-3 h-3" /> GitHub
                  </a>
                  <a
                    href="https://lnkd.in/gnXugArk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 border border-black/15 text-black/60 text-xs font-medium rounded-full hover:border-black/40 hover:text-black transition-all"
                  >
                    <FileText className="w-3 h-3" /> Blog
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
