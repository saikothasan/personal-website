import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { LOTTIE_ANIMATIONS } from '../utils/animations/lottieAnimations';

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/80 via-white to-accent-50/80 dark:from-gray-900 dark:via-gray-900 dark:to-primary-900/50" />
      
      <div className="container mx-auto px-4 py-16 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 space-y-8"
          >
            <h1 className="text-6xl lg:text-7xl font-display font-bold text-gray-900 dark:text-white leading-tight">
              Creative
              <span className="text-primary-600 dark:text-primary-400 block">
                Developer
              </span>
              & Designer
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Crafting beautiful digital experiences through code and design
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg transition-colors shadow-lg shadow-primary-600/20"
              >
                Get in touch
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="border-2 border-primary-600 text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-lg transition-colors"
              >
                View work
              </motion.a>
            </div>
            
            <div className="flex space-x-6">
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -3 }}
                  href={social.href}
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-full blur-3xl" />
            <Player
              autoplay
              loop
              src={LOTTIE_ANIMATIONS.developer}
              style={{ height: '500px', width: '100%' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;