import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-gray-900 text-white border-t border-gray-700 mt-12 pt-8 flex flex-wrap justify-between items-center">
      <p className="text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Khushi Verma.co. All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-purple-900/30 hover:bg-purple-900/50 text-purple-400 transition-colors"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
