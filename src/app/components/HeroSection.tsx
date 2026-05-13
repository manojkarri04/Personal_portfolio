import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'motion/react';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block"
            >
              <span className="px-4 py-2 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#60A5FA] text-sm">
                Available for opportunities
              </span>
            </motion.div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#F9FAFB] tracking-tight">
              Karri Manoj
            </h1>

            <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#9CA3AF]">
              AI Engineer & Full Stack Developer
            </h2>
          </div>

          <p className="text-lg text-[#9CA3AF] leading-relaxed max-w-xl">
            Building intelligent systems with React, Flask, LangChain, and modern AI workflows.
          </p>

          <div className="flex flex-wrap gap-4">
  {/* Scroll to Projects Section */}
  <motion.a
    href="#projects"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-8 py-4 rounded-2xl bg-[#3B82F6] hover:bg-[#60A5FA] text-white font-medium flex items-center gap-2 transition-all shadow-lg shadow-[#3B82F6]/20 cursor-pointer"
  >
    View Projects
    <ArrowRight className="w-5 h-5" />
  </motion.a>

  {/* Download Resume Link */}
  <motion.a
    // Ensure you put your resume PDF inside your 'public' folder and name it 'resume.pdf'
    href="/resume.pdf" 
    download="Manoj_Karri_Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-8 py-4 rounded-2xl bg-[#111827] hover:bg-[#1F2937] border border-[#1F2937] text-[#F9FAFB] font-medium flex items-center gap-2 transition-all backdrop-blur-sm cursor-pointer"
  >
    <Download className="w-5 h-5" />
    Download Resume
  </motion.a>
</div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full h-[600px]">
            {/* Glowing Card */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#3B82F6]/20 to-[#60A5FA]/10 backdrop-blur-xl border border-[#3B82F6]/20 shadow-2xl shadow-[#3B82F6]/10">
              {/* Code Lines Animation */}
              <div className="p-8 space-y-4">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: `${60 + Math.random() * 40}%`, opacity: 0.4 }}
                    transition={{ delay: 0.6 + i * 0.1, duration: 0.8 }}
                    className="h-3 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]"
                  />
                ))}
              </div>

              {/* Floating Particles */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 0, opacity: 0 }}
                  animate={{
                    y: [-20, -60, -20],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    delay: i * 0.4,
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                  className="absolute w-2 h-2 rounded-full bg-[#60A5FA]"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${40 + i * 10}%`
                  }}
                />
              ))}
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#3B82F6]/20 to-[#60A5FA]/20 rounded-3xl blur-3xl -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
