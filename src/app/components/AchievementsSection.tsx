import { motion } from 'motion/react';
import { Award, Code, Briefcase } from 'lucide-react';

export default function AchievementsSection() {
  const achievements = [
    {
      icon: Award,
      title: 'Qualified GATE 2026',
      description: 'Successfully qualified in Computer Science & Information Technology',
      gradient: 'from-[#3B82F6] to-[#60A5FA]'
    },
    {
      icon: Code,
      title: '200+ DSA Problems',
      description: 'Solved diverse algorithmic challenges across multiple platforms',
      gradient: 'from-[#60A5FA] to-[#93C5FD]'
    },
    {
      icon: Briefcase,
      title: 'AI Internship',
      description: 'Completed artificial intelligence internship at Infosys Springboard',
      gradient: 'from-[#93C5FD] to-[#DBEAFE]'
    }
  ];

  return (
    <section id="achievements" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-[#F9FAFB] mb-6">Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative p-8 rounded-3xl bg-[#111827]/50 backdrop-blur-xl border border-[#1F2937] hover:border-[#3B82F6]/50 transition-all overflow-hidden">
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                <div className="relative space-y-4">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.gradient} p-0.5`}>
                    <div className="w-full h-full rounded-2xl bg-[#111827] flex items-center justify-center">
                      <achievement.icon className="w-8 h-8 text-[#3B82F6]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#F9FAFB] mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-[#9CA3AF] leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${achievement.gradient} opacity-10 blur-3xl -z-10 group-hover:opacity-20 transition-opacity`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
