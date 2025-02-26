"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Slider from "react-slick";
import Link from 'next/link';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Datos del carrusel
const slides = [
{
    titulo: "Calidad Educativa",
    descripcion: "Programas acreditados y reconocidos internacionalmente.",
    imagen: "/images/Banner1.jpg",
},
{
    titulo: "Campus Moderno",
    descripcion: "Instalaciones de vanguardia para potenciar tu aprendizaje.",
    imagen: "/images/Banner4.jpg",
},
{
    titulo: "Vida Universitaria",
    descripcion: "Una comunidad inclusiva con actividades para todos.",
    imagen: "/images/Banner3.jpg",
}
];
const BienvenidaUSO = () => {
  const [isClient, setIsClient] = useState(false);
  const { ref, inView } = useInView();

  // Animaciones
  const textAnimation = {
    hidden: { opacity: 0, x: -90 },
    visible: { opacity: 1, x: 0 }
  };
  const divAnimation = {
    hidden: { opacity: 0, x: 90 },
    visible: { opacity: 1, x: 0 }
  };
  const figuraAnition={
    hidden: {opacity: 0, y: -100},
    visible: {opacity: 1, x: 0}
  };
  const imgAnimation = {
    hidden: { opacity: 0, x: 90 },
    visible: { opacity: 1, x: 0 }
  };
  const config = {
    
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    fade: true,
    arrows: true,
    pauseOnHover: false,
};
  return (
    <div ref={ref} className="overflow-hidden bg-[#0f8fce]">
      {/* Sección con fondo mejorado */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? {opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative flex flex-col md:flex-col lg:flex-row lg:w-screen justify-center items-center h-auto w-full p-4 bg-[#0f8fce]"
      >
        {/* Contenido de texto */}
          <motion.div
          className="relative flex flex-col justify-center items-start p-4 md:p-8 w-full md:w-full lg:w-1/2 text-white"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={textAnimation}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            ¡BIENVENIDO A LA UNIVERSIDAD DE SONSONATE!
          </h2>
          <p className="text-base md:text-lg lg:text-xl mb-4">
            En la Universidad de Sonsonate, nos enorgullecemos de ofrecer una
            educación de calidad que fomenta el crecimiento académico, personal
            y profesional de nuestros estudiantes. Nuestra institución se
            distingue por su compromiso con la excelencia, la innovación y el
            desarrollo integral de nuestra comunidad universitaria.
          </p>
          <p className="text-base md:text-lg lg:text-xl mb-4">
            Aquí, encontrarás un ambiente de aprendizaje inclusivo y dinámico,
            donde podrás desarrollar tus habilidades, explorar tus pasiones y
            alcanzar tus metas. Te invitamos a formar parte de nuestra familia y
            a ser protagonista de tu propia historia de éxito. ¡Bienvenido a
            nuestra universidad!
          </p>
          <motion.button
            className="bg-[#05ce0e] text-white font-semibold text-sm md:text-base lg:text-lg px-4 py-2 rounded-lg mt-2 hover:bg-green-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
          <Link href="/nuestraInstitucion">
            Conoce más
          </Link> 
          </motion.button>
        </motion.div>
        <Slider 
          className="relative flex items-center justify-center w-full lg:w-1/2 h-auto mt-8 lg:mr-10"
          {...config}>
          {slides.map((slide, index) => (
          <motion.div
            key={index}
            variants={divAnimation}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            transition={{duration: 1}}
          >
            <div key={index}>
                <div className=" h-auto md:h-auto w-full">
                  {/* Imagen de fondo */}
                    <img
                        src={slide.imagen}
                        alt={slide.titulo}
                        className="w-full h-full object-cover"
                    />
                  {/* Capa de superposición */}
                  <div className="absolute inset-0 bg-black opacity-30 mb-1.5"></div>
                  {/* Contenido del slide */}
                    <div className="  absolute inset-0 flex flex-col justify-center items-start max-w-2xl mx-auto px-6 md:px-12">
                    <motion.h2
                        className=" text-3xl md:text-5xl font-bold text-white mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {slide.titulo}
                    </motion.h2>
                    <motion.p
                        className="text-lg md:text-2xl text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {slide.descripcion}
                    </motion.p>
                    <motion.button
                        className="bg-[#05ce0e] text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        Descubre más
                    </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        </Slider>
        {/* Sección de imágenes 
        <motion.div
          className="relative flex items-center justify-center w-full lg:w-1/2 h-auto mt-8 lg:mt-0"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={imgAnimation}
          transition={{ duration: 1 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 relative">
            <div className="relative w-100 h-100">
              <img
                src="/images/img-inicio-1.webp"
                alt="Imagen 1"                
              />
            </div>
            <div className="relative w-100 h-100">
              <img
                src="/images/img-inicio-2.png"
                alt="Imagen 2"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </motion.div>*/}
      </motion.div>
      <motion.div
          initial={{opacity: 0, y: 40}}
          animate={inView ? 'visible' : 'hidden'}
          transition={{duration: 0.9}}
          variants={figuraAnition}
      >
        <div className="relative w-full h-16">
              <div className="absolute top-0 left-0 w-full h-20 bg-[#05ce0e] transform -skew-y-2 origin-top-left"
              ></div>
        </div>
      </motion.div>
    </div>
  );
};

export default BienvenidaUSO;
