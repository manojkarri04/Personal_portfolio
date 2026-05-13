import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-[#1F2937]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-[#9CA3AF] flex items-center gap-2">
            Designed & Developed by
            <span className="text-[#F9FAFB] font-medium">Karri Manoj</span>
          </p>
          <p className="text-sm text-[#9CA3AF] flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-[#3B82F6] fill-[#3B82F6]" /> using React & Tailwind CSS
          </p>
          <p className="text-xs text-[#9CA3AF]">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
