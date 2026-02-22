import { useState } from "react";
import { Mail, Send, MapPin, Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({ title: "Message sent!", description: "Thank you. I'll get back to you soon." });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-black/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-3">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-black/40 sticky top-24">
              Contact
            </p>
          </div>

          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-black text-black mb-4">Get in touch</h2>
                  <p className="text-sm text-black/50 leading-relaxed">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-black/30" />
                    <a href="mailto:jaswanthk993@gmail.com" className="text-sm text-black/70 hover:text-black transition-colors">
                      jaswanthk993@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-black/30" />
                    <a href="tel:+918309619236" className="text-sm text-black/70 hover:text-black transition-colors">
                      +91 8309619236
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-black/30" />
                    <span className="text-sm text-black/70">Rajahmundry, AP, India</span>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-black/40 mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-2 bg-transparent border-b border-black/10 text-black text-sm focus:outline-none focus:border-black transition-colors placeholder:text-black/20"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-black/40 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-2 bg-transparent border-b border-black/10 text-black text-sm focus:outline-none focus:border-black transition-colors placeholder:text-black/20"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-black/40 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-0 py-2 bg-transparent border-b border-black/10 text-black text-sm focus:outline-none focus:border-black transition-colors resize-none placeholder:text-black/20"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-black text-white text-xs font-mono uppercase tracking-wider rounded-full hover:bg-black/80 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-3 h-3 border border-white/30 border-t-white rounded-full animate-spin" />
                      Sending
                    </>
                  ) : (
                    <>
                      <Send size={12} /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
