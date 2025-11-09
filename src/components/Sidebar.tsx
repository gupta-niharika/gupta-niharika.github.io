import { useState } from "react";
import { Mail, Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileImage from "@/assets/profile.jpeg";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Hello", href: "#hello" },
    { label: "What I Do", href: "#what-i-do" },
    { label: "Education", href: "#education" },
    { label: "Work Experiences", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Reach Out", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-background border rounded-md"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-background border-r flex flex-col items-center justify-center p-8 z-40 transition-transform lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!isOpen && true}
      >
        <div className="space-y-8 text-center">
          {/* Profile Image with Persistent Gradient Ring & Grow Effect */}
          <div className="flex justify-center">
            <div className="relative rounded-full p-[3px] bg-gradient-to-tr from-[#feda75] via-[#fa7e1e] to-[#d62976] transform transition-transform duration-500 hover:scale-125">
              <div className="overflow-hidden rounded-full w-32 h-32 bg-white">
                <img
                  src={profileImage}
                  alt="Niharika Gupta"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Name */}
          <div>
            <h2 className="text-2xl font-bold">Niharika Gupta</h2>
            <p className="text-muted-foreground mt-1">AI & ML Engineer</p>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-2 hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-4 justify-center">
            <a
              href="https://github.com/gupta-niharika"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/niharika-p-gupta"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:mailguptaniharika@gmail.com"
              className="p-2 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};
