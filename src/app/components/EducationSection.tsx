import { motion } from 'motion/react';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

export default function EducationSection() {
  const education = [
    {
      institution: 'Indian Institute of Engineering Science and Technology (IIEST), Shibpur',
      location: 'Howrah, India',
      degree: 'Bachelor of Technology in Information Technology',
      duration: '2023 – Present',
      cgpa: '7.28',
      type: 'university'
    },
    {
      institution: 'Board of Intermediate Education, Andhra Pradesh',
      location: 'Visakhapatnam, India',
      degree: 'Senior Secondary Education',
      duration: '2021 – 2023',
      cgpa: '9.12',
      type: 'intermediate'
    },
    {
      institution: 'Chalapathi Public School',
      location: 'Gajuwaka, India',
      degree: 'Secondary Education (Class 10)',
      duration: '2021',
      cgpa: '10.0',
      type: 'school'
    }
  ];

  return (
    <section id="education" className="py-32 px-6 bg-linear-to-b from-transparent via-[#111827]/30 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-[#F9FAFB] mb-6">Education</h2>
          <div className="w-24 h-1 bg-linear-to-r from-[#1a2940] to-[#60A5FA] mx-auto rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)]" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-[#3B82F6] via-[#60A5FA] to-transparent hidden md:block" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-5 h-5 rounded-full bg-[#3B82F6] border-4 border-[#0B0F19] shadow-[0_0_15px_rgba(59,130,246,0.6)] hidden md:block" />

                {/* Education Card */}
                <div className="md:ml-20 group">
                  <div className="relative p-8 rounded-3xl bg-[#111827]/50 backdrop-blur-xl border border-[#1F2937] hover:border-[#3B82F6]/50 transition-all overflow-hidden">
                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-linear-to-br from-[#3B82F6]/5 to-[#60A5FA]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative space-y-4">
                      {/* Header with Icon */}
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-2xl bg-[#3B82F6]/10 border border-[#3B82F6]/20 group-hover:bg-[#3B82F6]/20 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all">
                          <GraduationCap className="w-6 h-6 text-[#3B82F6]" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-[#F9FAFB] mb-2 leading-tight">
                            {edu.institution}
                          </h3>
                          <p className="text-lg text-[#60A5FA] mb-3">
                            {edu.degree}
                          </p>
                        </div>
                      </div>

                      {/* Details Grid */}
                      <div className="ml-16 space-y-3">
                        {/* Location */}
                        <div className="flex items-center gap-2 text-[#9CA3AF]">
                          <MapPin className="w-4 h-4 text-[#3B82F6]" />
                          <span>{edu.location}</span>
                        </div>

                        {/* Duration & CGPA */}
                        <div className="flex flex-wrap items-center gap-3">
                          {/* Duration Badge */}
                          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1F2937]/50 border border-[#1F2937]">
                            <Calendar className="w-4 h-4 text-[#3B82F6]" />
                            <span className="text-sm text-[#9CA3AF]">{edu.duration}</span>
                          </div>

                          {/* CGPA Chip */}
                          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/30">
                            <Award className="w-4 h-4 text-[#3B82F6]" />
                            <span className="text-sm font-medium text-[#60A5FA]">
                              CGPA: {edu.cgpa}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Corner Glow Effect */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-[#3B82F6]/10 to-[#60A5FA]/10 opacity-0 group-hover:opacity-100 blur-3xl -z-10 transition-opacity" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
