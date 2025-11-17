import { Award, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const certificates = [
  {
    title: "Oracle Certified Professional – Generative AI",
    issuer: "Oracle University",
    credential: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issued: "October 30, 2025",
    validUntil: "October 30, 2027",
    summary: "Recognized by Oracle Corporation for professional-level competency in Oracle Cloud Infrastructure and applied generative-AI capabilities.",
    link: "#"
  },
  {
    title: "Troubleshooter (L2) – Code Vipassana, Season 11",
    issuer: "Google Developer Groups (GDG) Cloud Kochi",
    issued: "2025",
    summary: "Earned the L2 Troubleshooter badge for successfully resolving complex technical challenges in Season 11: AI Agents – Accelerate data-driven agents and applications with Gemini CLI & Serverless Runtimes.",
    link: "#"
  },
  {
    title: "Exceptional Performance – Code Vipassana, Season 10",
    issuer: "Google Developer Groups (GDG) Cloud Kochi",
    issued: "2025",
    summary: "Awarded for exceptional mastery and applied capability in Season 10: AI Agents – Deep-dive into data-driven agents with Cloud Databases, Serverless Runtimes, and Open Source Frameworks.",
    link: "#"
  },
  {
    title: "Oracle Certified Professional – Multicloud Architecture",
    issuer: "Oracle University",
    credential: "Oracle Cloud Infrastructure 2025 Certified Multicloud Architect Professional",
    issued: "September 1, 2025",
    summary: "Recognized for expert-level understanding of OCI-based multicloud architectures and cross-platform cloud integration strategies.",
    link: "#"
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-foreground">Certificates</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and recognition for technical excellence
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 flex items-start gap-2">
                        <Award className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                        <span>{cert.title}</span>
                      </CardTitle>
                      <CardDescription className="text-base font-medium text-foreground/80">
                        {cert.issuer}
                      </CardDescription>
                    </div>
                    {cert.link && (
                      <a 
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {cert.credential && (
                    <p className="text-sm font-medium text-muted-foreground">
                      <span className="text-foreground">Credential:</span> {cert.credential}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2 text-sm">
                    <Badge variant="secondary">
                      Issued: {cert.issued}
                    </Badge>
                    {cert.validUntil && (
                      <Badge variant="outline">
                        Valid Until: {cert.validUntil}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.summary}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
