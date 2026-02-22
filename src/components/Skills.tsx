import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

const technicalSkills = [
  { name: "Gemini CLI", percentage: 90 },
  { name: "Google Cloud Run", percentage: 88 },
  { name: "Alloy DB", percentage: 85 },
  { name: "Cloud Computing (AWS, Azure, GCP)", percentage: 90 },
  { name: "Python", percentage: 85 },
  { name: "Artificial Intelligence", percentage: 80 },
  { name: "Machine Learning", percentage: 75 },
  { name: "Git & GitHub", percentage: 85 },
  { name: "HTML/CSS/JavaScript", percentage: 80 },
  { name: "Flask", percentage: 75 },
  { name: "DevOps", percentage: 70 },
];

const softSkills = [
  { name: "Problem Solving", percentage: 90 },
  { name: "Communication", percentage: 85 },
  { name: "Time Management", percentage: 80 },
  { name: "Logic Building", percentage: 85 },
  { name: "Leadership", percentage: 80 },
];

const capabilities = [
  {
    title: "AI & Machine Learning",
    items: ["Gemini AI", "LangChain", "TensorFlow", "Google PaLM", "ARIMA", "NLP"],
  },
  {
    title: "Cloud & Infrastructure",
    items: ["Google Cloud", "AWS", "Azure", "Cloud Run", "Vertex AI", "AlloyDB"],
  },
  {
    title: "Development & Tools",
    items: ["Python", "React", "TypeScript", "Flask", "Git", "DevOps"],
  },
];

const tabs = [
  { key: "all", label: "All" },
  { key: "technical", label: "Technical" },
  { key: "soft", label: "Soft Skills" },
] as const;

const Skills = () => {
  const [activeTab, setActiveTab] = useState<"all" | "technical" | "soft">("all");

  const visibleSkills =
    activeTab === "all"
      ? [...technicalSkills, ...softSkills]
      : activeTab === "technical"
      ? technicalSkills
      : softSkills;

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-black/5 bg-black/[0.02]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Label */}
          <div className="lg:col-span-3">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-black/40 sticky top-24">
              Capabilities
            </p>
          </div>

          <div className="lg:col-span-9">
            {/* Capabilities grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {capabilities.map((cap) => (
                <div key={cap.title}>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-black mb-4">
                    {cap.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cap.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-3 py-1.5 rounded-full border border-black/10 text-black/60 hover:border-black/30 hover:text-black transition-all"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Proficiency bars */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-black">Proficiency</h3>
                <div className="flex gap-1">
                  {tabs.map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className={`px-3 py-1 text-xs font-mono uppercase tracking-wider rounded-full transition-all ${
                        activeTab === tab.key
                          ? "bg-black text-white"
                          : "text-black/40 hover:text-black/70"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
                {visibleSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm text-black/70">{skill.name}</span>
                      <span className="text-xs font-mono text-black/30">{skill.percentage}%</span>
                    </div>
                    <div className="h-1 bg-black/5 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-black rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        transition={{ duration: 0.8, delay: index * 0.03 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
