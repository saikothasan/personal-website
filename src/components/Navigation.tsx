import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="text-2xl font-display font-bold text-primary-600">Portfolio</a>
            
            <div className="hidden md:flex space-x-8">
              {navItems.map(item => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-primary-600'
                      : 'text-gray-600 dark:text-gray-300 hover:text-primary-600'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsOpen(false)} />
            <div className="absolute top-16 inset-x-0 bg-white dark:bg-gray-900 py-4">
              {navItems.map(item => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`block px-4 py-2 text-sm font-medium ${
                    activeSection === item.id
                      ? 'text-primary-600 bg-primary-50 dark:bg-gray-800'
                      : 'text-gray-600 dark:text-gray-300'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;