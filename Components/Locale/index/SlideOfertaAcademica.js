"use client";

import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const facultades = [
  {
    nombre: "Ingeniería en Sistemas",
    descripcion: "Forma parte del futuro tecnológico con nuestra carrera de Ingeniería en Sistemas.",
    imagen: "/images/ingenieriasistemas.jpg",
  },
  {
    nombre: "Administración de Empresas",
    descripcion: "Desarrolla tus habilidades en gestión y liderazgo empresarial.",
    imagen: "/images/ingenieriasistemas.jpg",
  },
  {
    nombre: "Derecho",
    descripcion: "Contribuye a la justicia y al bienestar social estudiando Derecho.",
    imagen: "/images/juridica.webp",
  },
  {
    nombre: "Psicología",
    descripcion: "Comprende el comportamiento humano y ayuda a los demás con Psicología.",
    imagen: "/images/psicologia.webp",
  }
];

const SlideOfertaAcademica = () => {
  const { ref, inView } = useInView();
  const config = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    fade: true,
    arrows: false,
    pauseOnHover: false,
  };
  const textAnimation = {
    hidden: {opacity: 0, x: -90},
    visible: {opacity: 1, x:0}
  };
  const divAnimation = {
    hidden: {opacity: 0, y:80},
    visible:{opacity: 1, y:0}
  };
  return (
    <section ref={ref} className="relative overflow-hidden bg-[#0f8fce] py-12">
      <div className="w-full h-auto bg-[#0f8fce] justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? {opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={textAnimation}
            transition={{ duration: 1 }}
          >
            <div className="w-full h-auto relative p-8 flex flex-col lg:px-80 text-center ">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 flex flex-col">Nuestra Oferta Academica</h2>
              <p className="text-base md:text-lg lg:text-xl mb-4">Únete a nuestra comunidad y descubre cómo puedes alcanzar tus metas académicas y profesionales en un ambiente que promueve la innovación, el crecimiento personal y el éxito. ¡Te esperamos!</p>
            </div>
        </motion.div>
        </motion.div>
      </div>
      <div className="relative justify-center items-center container mx-auto bg-[#0f8fce] px-4 overflow-hidden">
      <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? {opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={divAnimation}
              transition={{ duration: 1 }}
            >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 ">
          
            <div className="p-6 rounded-lg shadow-lg overflow-hidden bg-white">
                  <img src="/images/ingenieriasistemas.jpg" alt="FICN" className="rounded-lg"></img>
                  <h3 className="text-2xl font-bold text-blue-600 my-4">
                      Facultad de Ingenieria y Ciencias Naturales
                  </h3>
                  <p className="text-gray-700 mb-6">
                  La Facultad de Ciencias Naturales e Ingenieria. En esta Facultad
                  </p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                      Ver más
                  </button>
              </div>
              <div className="p-6 rounded-lg shadow-lg overflow-hidden bg-white">
                  <img src="/images/juridica.webp" alt="FICN" className="rounded-lg"></img>
                  <h3 className="text-2xl font-bold text-blue-600 my-4">
                      Facultad de Economia y Ciencias Sociales
                  </h3>
                  <p className="text-gray-700 mb-6">
                  La Facultad de Ciencias Sociales y Economica tiene
                  </p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                      Ver más
                  </button>
              </div> 
              <div className="p-6 rounded-lg shadow-lg overflow-hidden bg-white">
              <img src="/images/juridica.webp" alt="FICN" className="rounded-lg"></img>
                  <h3 className="text-2xl font-bold text-blue-600 my-4">
                      Facultad de Ciencias Juridica
                  </h3>
                  <p className="text-gray-700 mb-6">
                  Facultad de cIencias Jurídicas su fin es formar profesionales del derecho con domin..
                  </p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                      Ver más
                  </button>
              </div>
              <div className="p-6 rounded-lg shadow-lg overflow-hidden bg-white">
              <img src="/images/ingenieriasistemas.jpg" alt="FICN" className="rounded-lg"></img>
                  <h3 className="text-2xl font-bold text-blue-600 my-4">
                      Maestrias
                  </h3>
                  <p className="text-gray-700 mb-6">
                      Mantente al día con los eventos y actividades que tenemos preparados para este ciclo académico.
                  </p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                      Ver más
                  </button>
              </div>
              <div className="p-6 rounded-lg shadow-lg overflow-hidden bg-white">
              <img src="/images/juridica.webp" alt="FICN" className="rounded-lg"></img>
                  <h3 className="text-2xl font-bold text-blue-600 my-4">
                      Escuela de Educacion
                  </h3>
                  <p className="text-gray-700 mb-6">
                      Mantente al día con los eventos y actividades que tenemos preparados para este ciclo académico.
                  </p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                      Ver más
                  </button>
              </div>
        </div>
        </motion.div>
            </motion.div>
      </div>
    </section>
  );
};

export default SlideOfertaAcademica;
