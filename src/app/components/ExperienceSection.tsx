import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      company: 'Infosys Springboard',
      role: 'Artificial Intelligence Intern',
      period: 'Oct 2025 – Dec 2025',
      description: [
        'Built AI-powered coding assistant using Streamlit and Ollama',
        'Implemented OCR, voice input, and chat streaming',
        'Optimized modular architecture and caching'
      ]
    },
    {
      company: 'SUG Creative',
      role: 'Web Designing Intern',
      period: 'May 2023 – June 2023',
      description: [
        'Worked with Figma, WordPress, Wix, and SEO tools',
        'Designed responsive websites'
      ]
    }
  ];

  return (
    <section id="experience" className="py-32 px-6 bg-gradient-to-b from-transparent via-[#111827]/30 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-[#F9FAFB] mb-6">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] mx-auto rounded-full" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3B82F6] via-[#60A5FA] to-transparent hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-5 h-5 rounded-full bg-[#3B82F6] border-4 border-[#0B0F19] hidden md:block" />

                {/* Card */}
                <div className="md:ml-20 p-8 rounded-3xl bg-[#111827]/50 backdrop-blur-xl border border-[#1F2937] hover:border-[#3B82F6]/50 transition-all group">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-2xl bg-[#3B82F6]/10 border border-[#3B82F6]/20 group-hover:bg-[#3B82F6]/20 transition-all">
                      <Briefcase className="w-6 h-6 text-[#3B82F6]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#F9FAFB] mb-1">{exp.role}</h3>
                      <div className="flex flex-wrap gap-2 items-center text-[#9CA3AF]">
                        <span className="font-medium text-[#60A5FA]">{exp.company}</span>
                        <span>•</span>
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 ml-16">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-[#9CA3AF] flex items-start gap-2">
                        <span className="text-[#3B82F6] mt-1.5">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
