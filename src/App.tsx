import React, { Suspense } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import LoadingAnimation from './components/LoadingAnimation';

// Lazy load less critical components
const Projects = React.lazy(() => import('./components/Projects'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Suspense fallback={<LoadingAnimation />}>
        <Projects />
        <Contact />
      </Suspense>
    </Layout>
  );
}

export default App;