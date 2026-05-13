import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: '#', color: 'hover:text-[#F9FAFB]' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:text-[#0A66C2]' },
    { icon: Mail, label: 'Email', href: '#', color: 'hover:text-[#EA4335]' }
  ];

  return (
    <section id="contact" className="py-32 px-6 bg-gradient-to-b from-transparent via-[#111827]/30 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-[#F9FAFB] mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] mx-auto rounded-full" />
          <p className="text-lg text-[#9CA3AF] mt-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or collaborations.
            Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#9CA3AF] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-4 rounded-2xl bg-[#111827] border border-[#1F2937] text-[#F9FAFB] placeholder-[#9CA3AF] focus:border-[#3B82F6] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/20 transition-all"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#9CA3AF] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-6 py-4 rounded-2xl bg-[#111827] border border-[#1F2937] text-[#F9FAFB] placeholder-[#9CA3AF] focus:border-[#3B82F6] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/20 transition-all"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#9CA3AF] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-6 py-4 rounded-2xl bg-[#111827] border border-[#1F2937] text-[#F9FAFB] placeholder-[#9CA3AF] focus:border-[#3B82F6] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/20 transition-all resize-none"
                  placeholder="Your message..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 rounded-2xl bg-[#3B82F6] hover:bg-[#60A5FA] text-white font-medium flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#3B82F6]/20"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Social Links */}
            <div className="p-8 rounded-3xl bg-[#111827]/50 backdrop-blur-xl border border-[#1F2937]">
              <h3 className="text-2xl font-bold text-[#F9FAFB] mb-6">Connect With Me</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className={`flex items-center gap-4 p-4 rounded-2xl bg-[#1F2937]/50 border border-[#1F2937] hover:border-[#3B82F6]/50 text-[#9CA3AF] ${social.color} transition-all group`}
                  >
                    <div className="p-3 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/20 group-hover:bg-[#3B82F6]/20 transition-all">
                      <social.icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Additional Info Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#3B82F6]/10 to-[#60A5FA]/5 backdrop-blur-xl border border-[#3B82F6]/20">
              <h3 className="text-xl font-bold text-[#F9FAFB] mb-4">Looking for collaboration?</h3>
              <p className="text-[#9CA3AF] leading-relaxed">
                I'm interested in AI engineering roles, full-stack development opportunities,
                and collaborative projects in machine learning and web development.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
