import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certificates = [
  { title: "Build Real World AI Applications with Gemini and Imagen", issuer: "Google Cloud", year: "2025" },
  { title: "Azure AI Document Intelligence", issuer: "Microsoft", year: "2025" },
  { title: "Postman API Fundamentals Student Expert", issuer: "Postman", year: "2025" },
  { title: "Oracle Certified Professional – Generative AI", issuer: "Oracle University", year: "2025" },
  { title: "Troubleshooter (L2) – Code Vipassana S11", issuer: "GDG Cloud Kochi", year: "2025" },
  { title: "Exceptional Performance – Code Vipassana S10", issuer: "GDG Cloud Kochi", year: "2025" },
  { title: "Oracle Certified – Multicloud Architecture", issuer: "Oracle University", year: "2025" },
  { title: "Enterprise Design Thinking Practitioner", issuer: "IBM", year: "2024" },
  { title: "Enterprise Data Science", issuer: "IBM", year: "2024" },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 md:py-28 border-b border-black/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-3">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-black/40 sticky top-24">
              Certificates
            </p>
          </div>

          <div className="lg:col-span-9">
            <div className="space-y-0">
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 py-4 border-b border-black/5 last:border-none group"
                >
                  <Award className="w-4 h-4 text-black/20 mt-0.5 shrink-0 group-hover:text-black/50 transition-colors" />
                  <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                    <div>
                      <p className="text-sm font-medium text-black/80">{cert.title}</p>
                      <p className="text-xs text-black/40">{cert.issuer}</p>
                    </div>
                    <span className="text-xs font-mono text-black/25">{cert.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
