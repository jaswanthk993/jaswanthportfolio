import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    institution: "GIET Engineering College",
    degree: "B.Tech, Electrical & Electronics Engineering",
    duration: "2021 – 2025",
    gpa: "7.40",
    location: "Rajahmundry, India",
  },
  {
    institution: "Narayana Junior College",
    degree: "Intermediate (MPC)",
    duration: "2019 – 2021",
    gpa: "71%",
    location: "Rajahmundry, India",
  },
  {
    institution: "Government High School",
    degree: "School Education",
    duration: "2019",
    gpa: "9.7",
    location: "Rajahmundry, India",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 md:py-28 border-b border-black/5 bg-black/[0.02]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-3">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-black/40 sticky top-24">
              Education
            </p>
          </div>

          <div className="lg:col-span-9 space-y-0">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="py-6 border-b border-black/5 last:border-none group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-1">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-4 h-4 text-black/20 mt-1 shrink-0 group-hover:text-black/50 transition-colors" />
                    <div>
                      <h3 className="text-base font-bold text-black">{item.institution}</h3>
                      <p className="text-sm text-black/50">{item.degree}</p>
                    </div>
                  </div>
                  <div className="text-right md:ml-4 pl-7 md:pl-0">
                    <p className="text-xs font-mono text-black/30">{item.duration}</p>
                    <p className="text-xs text-black/40">{item.location}</p>
                  </div>
                </div>
                {item.gpa && (
                  <p className="text-xs font-mono text-black/40 pl-7 mt-1">GPA: {item.gpa}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
