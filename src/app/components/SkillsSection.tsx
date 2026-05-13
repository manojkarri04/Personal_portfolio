import { motion } from 'motion/react';

export default function SkillsSection() {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['Python', 'C++', 'SQL', 'JavaScript']
    },
    {
      category: 'Frontend',
      skills: ['React', 'Tailwind CSS', 'HTML5', 'CSS3']
    },
    {
      category: 'Backend',
      skills: ['Flask', 'Node.js', 'REST APIs', 'Express']
    },
    {
      category: 'AI/ML',
      skills: ['LangChain', 'FAISS', 'RAG', 'Ollama', 'Streamlit']
    },
    {
      category: 'Databases',
      skills: ['Supabase', 'MongoDB', 'PostgreSQL', 'MySQL']
    },
    {
      category: 'Tools',
      skills: ['GitHub', 'VS Code', 'GCP', 'Figma', 'WordPress']
    }
  ];

  return (
    <section id="skills" className="py-32 px-6 bg-gradient-to-b from-transparent via-[#111827]/30 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-[#F9FAFB] mb-6">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-[#111827]/50 backdrop-blur-xl border border-[#1F2937] hover:border-[#3B82F6]/50 transition-all group"
            >
              <h3 className="text-xl font-bold text-[#F9FAFB] mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#3B82F6] group-hover:shadow-[0_0_10px_#3B82F6] transition-all" />
                {category.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + skillIndex * 0.05, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#60A5FA] text-sm hover:bg-[#3B82F6]/20 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
