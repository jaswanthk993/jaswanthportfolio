
import { GraduationCap, CalendarDays, School, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface EducationItemProps {
  institution: string;
  degree: string;
  duration: string;
  description: string;
  gpa?: string;
  location?: string;
}

const educationData: EducationItemProps[] = [
  {
    institution: "Godavari Institute of Engineering & Technology (GIER)",
    degree: "B.Tech, Electrical and Electronics Engineering",
    duration: "November 2021 - April 2025",
    description: "Currently pursuing a B.Tech degree focusing on electrical and electronics engineering with additional coursework in programming and technology.",
    gpa: "7.40",
    location: "India"
  },
  {
    institution: "Narayana Junior College",
    degree: "Intermediate Education (MPC)",
    duration: "June 2019 - May 2021",
    description: "Completed intermediate education with a focus on Mathematics, Physics, and Chemistry.",
    gpa: "71%",
    location: "India"
  },
  {
    institution: "Government High School",
    degree: "School Education",
    duration: "May 2019",
    description: "Completed foundational education, developing core academic skills and fundamental knowledge.",
    location: "India"
  }
];

const EducationItem = ({ item, index }: { item: EducationItemProps, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="mb-8 last:mb-0"
    >
      <Card className="overflow-hidden border-primary/10 hover:border-primary/30 transition-colors">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full text-primary flex-shrink-0">
              {index === 0 ? <GraduationCap size={24} /> : 
               index === 1 ? <BookOpen size={24} /> : 
               <School size={24} />}
            </div>
            <div>
              <h3 className="text-xl font-bold">{item.institution}</h3>
              <p className="text-lg font-medium text-foreground/90 mb-1">{item.degree}</p>
              <div className="flex items-center text-sm text-foreground/70 mb-1">
                <CalendarDays size={16} className="mr-1" />
                <span>{item.duration}</span>
              </div>
              {item.location && (
                <p className="text-sm text-foreground/70 mb-3">
                  Location: {item.location}
                </p>
              )}
              <p className="text-foreground/80">{item.description}</p>
              {item.gpa && (
                <p className="mt-2 font-medium text-primary">
                  GPA: {item.gpa}
                </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Education = () => {
  return (
    <section id="education" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              My academic journey and qualifications that have shaped my knowledge and expertise.
            </p>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto">
          {educationData.map((item, index) => (
            <EducationItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
