import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  const socialLinks = [
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Mail, label: 'Email', href: 'mailto:' }
  ];

  return (
    <footer className="py-16 px-6 border-t border-[#1F2937]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          {/* Connect With Me Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#F9FAFB]">Connect With Me</h3>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 rounded-2xl bg-[#111827] border border-[#1F2937] hover:border-[#3B82F6]/50 hover:bg-[#1F2937] text-[#9CA3AF] hover:text-[#3B82F6] transition-all group"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Attribution */}
          <div className="pt-8 border-t border-[#1F2937] w-full max-w-md">
            <p className="text-[#9CA3AF]">
              Designed & Developed by{' '}
              <span className="text-[#F9FAFB] font-medium">Karri Manoj</span>
            </p>
            <p className="text-xs text-[#9CA3AF] mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}