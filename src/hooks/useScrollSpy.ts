import { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../utils/constants';

export const useScrollSpy = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map(item => 
        document.getElementById(item.id)
      ).filter((section): section is HTMLElement => section !== null);

      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && 
            scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return activeSection;
};