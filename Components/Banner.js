"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Slider from "react-slick";

// Importa los estilos de react-slick
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

const BannerSection = () => {
const [isClient, setIsClient] = useState(false);
const { ref, inView } = useInView();

useEffect(() => {
    setIsClient(true);
}, []);

if (!isClient) {
    return null;
}

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
    <section ref={ref} className="relative overflow-hidden ">
    <Slider {...config}>
        {slides.map((slide, index) => (
        <div key={index}>
            <div className=" h-[70vh] md:h-[80vh] w-full">
              {/* Imagen de fondo */}
                <img
                    src={slide.imagen}
                    alt={slide.titulo}
                    className="w-full h-full object-cover"
                />
              {/* Capa de superposición */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-transparent to-green-700 opacity-70"></div>
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
                    className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Descubre más
                </motion.button>
            </div>
        </div>
    </div>
))}
    </Slider>
    </section>
);
};

export default BannerSection;
