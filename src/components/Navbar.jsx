import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

// Codolio SVG icon (inline for best results)
const CodolioIcon = ({ size = 31 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    aria-label="Codolio"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="32" height="32" rx="8" fill="#5B2FFF"/>
    <path d="M17.7 8.5c-3.8 0-6.9 3-6.9 6.7 0 3.7 3.1 6.7 6.9 6.7 1.7 0 3.2-.6 4.4-1.6l-1.5-1.6c-.8.7-1.8 1.1-2.9 1.1-2.3 0-4.1-1.8-4.1-4.1s1.8-4.1 4.1-4.1c1.1 0 2.1.4 2.9 1.1l1.5-1.6c-1.2-1-2.7-1.6-4.4-1.6z" fill="#fff"/>
  </svg>
);

const navItems = [
    { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },

];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/khushi-verma-b5018b308/",
    icon: <FaLinkedin size={24} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/Khushi-481",
    icon: <FaGithub size={24} />,
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/khushi_verma481/",
    icon: <SiLeetcode size={24} />,
  },
  {
    name: "Codolio",
    href: "https://codolio.com/profile/Khushi_481",
    icon: <CodolioIcon size={24} />,
  },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-black/80 backdrop-blur-md shadow-md"
          : "py-6 bg-black"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-2xl font-bold text-white flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-purple-400"> Khushi</span> Verma
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center space-x-8 text-1xl">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Social icons and Let's Connect button */}
        <div className="hidden md:flex items-center space-x-4 ml-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
          {/* Let's Connect Button */}
          <a href="#contact">
            <button className="px-10 py-2 border-2 border-white rounded-md font-bold text-white bg-transparent transition-colors duration-300 hover:bg-white hover:text-black ml-6">
              Let's Connect
            </button>
          </a>
        </div>

        {/* Mobile nav toggle button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-white z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile nav menu */}
        <div
          className={`fixed inset-0 bg-black/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            {/* Social icons and Let's Connect button - mobile */}
            <div className="flex items-center justify-center space-x-6 mt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
              {/* Let's Connect Button */}
              <a href="#contact">
                <button className="px-6 py-2 border-2 border-white rounded-md font-bold text-white bg-transparent transition-colors duration-300 hover:bg-white hover:text-black ml-4">
                  Let's Connect
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
