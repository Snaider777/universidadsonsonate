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

  return (
    <section ref={ref} className="relative overflow-hidden">
      <Slider {...config}>
        {facultades.map((facultad, index) => (
          <div key={index}>
            <div className="relative h-[70vh] md:h-[80vh] w-full">
              {/* Imagen de fondo */}
              <Image
                src={facultad.imagen}
                alt={facultad.nombre}
                fill
                objectFit="cover"
                quality={75}
                priority={index === 0}
              />
              {/* Capa de superposición */}
              <div className="absolute inset-0 bg-blue-950 opacity-50"></div>
              {/* Contenido sobrepuesto */}
              <div className="absolute inset-0 flex flex-col justify-center items-start max-w-2xl mx-auto px-6 md:px-12">
                <motion.h2
                  className="text-3xl md:text-5xl font-bold text-white mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8 }}
                >
                  {facultad.nombre}
                </motion.h2>
                <motion.p
                  className="text-lg md:text-2xl text-white mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {facultad.descripcion}
                </motion.p>
                <motion.button
                  className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}

                  //Opcion dinamica clionClick={() => window.open(`/ofertaAcademica/${facultad.nombre.toLowerCase().replace(/\s+/g, '-')}`, '_self')}
                >
                  Ver más
                </motion.button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default SlideOfertaAcademica;
