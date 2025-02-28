"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { XIcon } from '@heroicons/react/outline';

const MapaUSO = () => {
  const [mostrarMapa, setMostrarMapa] = useState();
  const { ref, inView } = useInView();

  // Animaciones
  const tituloAnimacion = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const descripcionAnimacion = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const botonAnimacion = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // Variantes para el modal
  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div ref={ref} className="relative flex flex-col items-center justify-center py-16 px-4 bg-white">
      {/* Título */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-blue-800 mb-4"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={tituloAnimacion}
        transition={{ duration: 1 }}
      >
        Aventúrate al tour USO
      </motion.h2>

      {/* Descripción */}
      <motion.p
        className="text-lg md:text-xl text-gray-700 text-center max-w-2xl mb-8"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={descripcionAnimacion}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Explora nuestro campus a través de este tour virtual interactivo. Descubre cada rincón de nuestras instalaciones y vive la experiencia USO desde donde estés.
      </motion.p>

      {/* Divs con íconos e información */}
      <motion.div
        className="flex flex-wrap justify-center items-center gap-6 mb-8"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={descripcionAnimacion}
        transition={{ duration: 1, delay: 0.6 }}
      >
        {/* Ejemplo de div con ícono e información */}
        <div className="flex flex-col items-center">
          <svg className="w-12 h-12 text-green-600 mb-2" fill="currentColor" viewBox="0 0 24 24">
            {/* Ícono de ubicación */}
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM12 11.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z" />
          </svg>
          <p className="text-base text-center text-gray-700 items-center max-w-2xl mb-8">Calle Ing. Jesús Adalberto Díaz Pineda y Avenida Central Final Colonia 14 de Diciembre, Sonsonate, El Salvador C.A.</p>
        </div>
        {/* Puedes agregar más divs similares con otros íconos e información */}
      </motion.div>

      {/* Imagen o botón para mostrar el mapa */}
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={botonAnimacion}
        transition={{ duration: 1, delay: 0.9 }}
      >
        {/* Botón para mostrar el mapa en pantalla completa */}
        <button
          className="bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700"
          onClick={() => setMostrarMapa(true)}
        >
          Explorar Tour Virtual
        </button>
      </motion.div>

      {/* Modal del mapa */}
      <AnimatePresence>
        {mostrarMapa && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={modalVariants}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full h-full p-11">
              {/* Botón para cerrar el modal */}
              <button
                className="absolute top-4 right-4 z-50 text-white hover:text-gray-200"
                onClick={() => setMostrarMapa(false)}
              >
                <XIcon className="h-8 w-8" aria-hidden="true" />
              </button>
              {/* Contenido del mapa */}
              <iframe
                src="https://website.usonsonate.edu.sv/tour/index.html"
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MapaUSO;
