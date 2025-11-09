import { useState } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
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
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-background border-r flex flex-col items-center justify-center p-8 z-40 transition-transform lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="space-y-8 text-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              src={profileImage}
              alt="Niharika Gupta"
              className="w-32 h-32 rounded-full object-cover"
            />
          </div>

          {/* Name */}
          <div>
            <h2 className="text-2xl font-bold">Niharika Gupta</h2>
            <p className="text-muted-foreground mt-1">Software Engineer</p>
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
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:niharika@example.com"
              className="p-2 hover:text-primary transition-colors"
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
        />
      )}
    </>
  );
};
