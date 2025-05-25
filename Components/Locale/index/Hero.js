"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SocialButtons from "./SocialButtons"; // Importa el componente de botones sociales
import { useRef } from "react";
const videos = [
    {
        src: "/videos/video1.mp4",
        Titulo: "Transforma tu futuro",
        Subtitulo: "Descubre nuestra oferta académica y conviértete en el profesional que el mundo necesita.",
        boton: "Ver carreras",
        redirectUrl: "/oferta",
    },
    {
        src: "/videos/fut.mp4",
        Titulo: "Innovación en Educación",
        Subtitulo:"Nuestro compromiso es brindarte una formación actualizada y de calidad.",
        boton: "Descubrir",
        redirectUrl: "/oferta/innovacion",
    },
    {
        src: "/videos/bb.mp4",
        Titulo: "Calidad y Excelencia",
        Subtitulo:"Apostamos por la excelencia y por tu crecimiento profesional.",
        boton: "Explorar",
        redirectUrl: "/oferta/calidad",
    },
];

// Hook para manejar el avance automático al terminar el video

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

        {/* Comentado para evitar conflictos visuales con los botones de navegación */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
            {videos.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Ir al slide ${idx + 1}`}
                    className={`w-3 h-3 rounded-full transition-all duration-300 border-2 ${
                        idx === currentIndex
                            ? "bg-blue-500 border-blue-500 scale-125"
                            : "bg-white bg-opacity-60 border-white hover:bg-blue-400"
                    }`}
                    style={{ outline: "none" }}
                />
            ))}
        </div>
        <SocialButtons/>

        </section>
    );
}
