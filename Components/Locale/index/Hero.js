"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SocialButtons from "./SocialButtons"; // Importa el componente de botones sociales
const videos = [
    {
        src: "/videos/video1.mp4",
        Titulo: "Transforma tu futuro",
        Subtitulo: "Descubre nuestra oferta académica y conviértete en el profesional que el mundo necesita.",
        boton: "Ver carreras",
        redirectUrl: "/oferta",
    },
    {
        src: "/videos/video1.mp4",
        Titulo: "Innovación en Educación",
        Subtitulo:"Nuestro compromiso es brindarte una formación actualizada y de calidad.",
        boton: "Descubrir",
        redirectUrl: "/oferta/innovacion",
    },
    {
        src: "/videos/video1.mp4",
        Titulo: "Calidad y Excelencia",
        Subtitulo:"Apostamos por la excelencia y por tu crecimiento profesional.",
        boton: "Explorar",
        redirectUrl: "/oferta/calidad",
    },
];

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % videos.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
    };

    return (
        <section className="relative h-[100vh] w-full overflow-hidden">
        <AnimatePresence exitBeforeEnter>
            <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
            >
            <video
                src={videos[currentIndex].src}
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
            />
            {/* Capa oscura para mayor contraste */}
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            {/* Tarjeta flotante: alternativa al texto centrado */}
            <motion.div
                initial={{ opacity: 0, x: -50, y: 50 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute bottom-10 left-10 bg-black bg-opacity-70 backdrop-blur-sm px-6 py-4 rounded-md max-w-md"
            >
                <h2 className="text-white text-3xl md:text-4xl font-bold mb-2">
                {videos[currentIndex].Titulo}
                </h2>
                <p className="text-white text-sm md:text-lg mb-4">
                {videos[currentIndex].Subtitulo}
                </p>
                <a
                href={videos[currentIndex].redirectUrl}
                className="inline-block px-5 py-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition"
                >
                {videos[currentIndex].boton}
                </a>
            </motion.div>
            </motion.div>
        </AnimatePresence>

        {/* Botones de navegación */}
        <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-3 rounded-full z-10"
        >
            &#8592;
        </button>
        <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-3 rounded-full z-10"
        >
            &#8594;
        </button>
        <SocialButtons/>

        </section>
    );
}
