import { motion } from 'motion/react';
import { Github, ExternalLink, Brain, Database, Sparkles, Server, Code2, Layout } from 'lucide-react';

export default function FeaturedProjectSection() {
  const features = [
    { icon: Brain, label: 'Medical AI' },
    { icon: Sparkles, label: 'Hybrid RAG' },
    { icon: Database, label: 'Hospital Matching' },
    { icon: Server, label: 'Flask API' },
    { icon: Database, label: 'Supabase' },
    { icon: Layout, label: 'Tailwind UI' }
  ];

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-[#F9FAFB] mb-6">Featured Project</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main Project Card */}
          <div className="relative rounded-3xl bg-gradient-to-br from-[#111827] to-[#0B0F19] border border-[#1F2937] overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/5 to-[#60A5FA]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
              {/* Project Info */}
              <div className="space-y-6">
                <div>
                  <div className="inline-block px-4 py-2 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#60A5FA] text-sm mb-4">
                    Healthcare AI Platform
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-[#F9FAFB] mb-4">
                    CareCompanion
                  </h3>
                  <p className="text-lg text-[#9CA3AF] leading-relaxed">
                    AI-powered patient-first healthcare platform using hybrid RAG architecture,
                    LangChain, Flask, FAISS, and React.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#1F2937]/50 backdrop-blur-sm border border-[#1F2937] hover:border-[#3B82F6]/50 transition-all"
                    >
                      <feature.icon className="w-4 h-4 text-[#3B82F6]" />
                      <span className="text-sm text-[#9CA3AF]">{feature.label}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-[#9CA3AF] uppercase tracking-wider">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Flask', 'LangChain', 'FAISS', 'Supabase', 'Tailwind CSS', 'Python', 'JavaScript'].map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#60A5FA] text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
{/* 
              CTA Buttons */}

<div className="flex flex-wrap gap-4 pt-4">
  <motion.a
    href="https://github.com/manojkarri04/CareCompanion"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-6 py-3 rounded-2xl bg-[#3B82F6] hover:bg-[#60A5FA] text-white font-medium flex items-center gap-2 transition-all cursor-pointer"
  >
    <Github className="w-5 h-5" />
    View on GitHub
  </motion.a>

  <motion.a
    href="YOUR_LIVE_DEMO_LINK_HERE" 
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-6 py-3 rounded-2xl bg-[#1F2937] hover:bg-[#374151] border border-[#1F2937] text-[#F9FAFB] font-medium flex items-center gap-2 transition-all cursor-pointer"
  >
    <ExternalLink className="w-5 h-5" />
    Live Demo
  </motion.a>
</div>


              </div>

              {/* Project Mockup */}
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#1F2937] to-[#111827] border border-[#1F2937] overflow-hidden">
                  {/* Dashboard Preview */}
                  <div className="p-6 space-y-4">
                    <div className="flex gap-2 mb-6">
                      <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                      <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                      <div className="w-3 h-3 rounded-full bg-[#10B981]" />
                    </div>

                    {/* Simulated Dashboard Content */}
                    <div className="space-y-3">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ width: 0, opacity: 0 }}
                          whileInView={{ width: `${70 + Math.random() * 30}%`, opacity: 0.6 }}
                          transition={{ delay: i * 0.1, duration: 0.6 }}
                          viewport={{ once: true }}
                          className="h-3 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]"
                        />
                      ))}
                    </div>

                    {/* Chart Placeholder */}
                    <div className="mt-8 grid grid-cols-3 gap-2 h-32 items-end">
                      {[60, 80, 45, 90, 70, 85].map((height, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${height}%` }}
                          transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-t from-[#3B82F6] to-[#60A5FA] rounded-t-lg"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#3B82F6]/20 to-[#60A5FA]/20 rounded-3xl blur-3xl -z-10 opacity-50" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
