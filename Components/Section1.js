"use client";
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 }
      }}
      transition={{ duration: 0.6 }}
      className="flex flex-row justify-center h-[100vh] bg-gray-300 w-screen"
    >
      <div className="flex flex-col justify-center items-start p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-bold mb-4">BIENVENIDO A NUESTRA UNIVERSIDAD</h2>
        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget vestibulum ipsum. Nam vehicula magna at varius congue.</p>
      </div>
      <img src="/images/University.png" alt="University" className="w-1/2 object-cover rounded-lg shadow-md" />
    </motion.div>
  );
};

export default AnimatedSection;