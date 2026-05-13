import { motion } from 'motion/react';
import { Code2, Brain, TrendingUp } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { icon: Brain, label: 'AI Projects', value: '10+' },
    { icon: Code2, label: 'Internships', value: '2' },
    { icon: TrendingUp, label: 'DSA Solved', value: '200+' }
  ];

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-[#F9FAFB] mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#3B82F6]/20 to-[#60A5FA]/10 backdrop-blur-xl border border-[#3B82F6]/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] flex items-center justify-center text-white text-7xl">
                  KM
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-[#3B82F6]/20 to-[#60A5FA]/20 rounded-3xl blur-3xl -z-10" />
          </motion.div>

          {/* Bio & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-lg text-[#9CA3AF] leading-relaxed">
                I'm a passionate AI Engineer and Full Stack Developer specializing in building intelligent,
                scalable applications. With expertise in modern AI workflows, I create solutions that bridge
                cutting-edge machine learning with robust full-stack architectures.
              </p>
              <p className="text-lg text-[#9CA3AF] leading-relaxed">
                My work focuses on leveraging technologies like React, Flask, LangChain, and FAISS to develop
                AI-powered systems that solve real-world problems. I'm driven by curiosity and a commitment
                to continuous learning in the rapidly evolving field of artificial intelligence.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-[#111827]/50 backdrop-blur-xl border border-[#1F2937] hover:border-[#3B82F6]/50 transition-all"
                >
                  <stat.icon className="w-8 h-8 text-[#3B82F6] mb-3" />
                  <div className="text-3xl font-bold text-[#F9FAFB] mb-1">{stat.value}</div>
                  <div className="text-sm text-[#9CA3AF]">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
