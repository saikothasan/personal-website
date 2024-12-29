import React from 'react';
import Navigation from './Navigation';
import ThemeToggle from './ThemeToggle';
import SEO from './SEO';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <SEO />
      <Navigation />
      <ThemeToggle />
      <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        {children}
      </main>
    </>
  );
};

export default Layout;