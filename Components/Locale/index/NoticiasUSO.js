"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const NoticiasUSO = () => {
    const { ref, inView } = useInView({ threshold: 0.3 });

    return (
        <section ref={ref} className="relative overflow-hidden bg-[#1f3d7a] py-12">
        <div className="container mx-auto px-4">
            {/* Grid responsiva: 1 columna en móvil, 3 en escritorio */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tarjeta: Investigaciones */}
            <motion.div
                className="bg-white rounded-xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8 }}
            >
                <div className="relative h-56">
                <img
                    src="/images/img-inicio-2.png"
                    alt="Investigaciones"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                </div>
                <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">
                    Investigaciones
                </h3>
                <p className="text-gray-700 mb-4 text-sm">
                    Descubre los proyectos que impulsan el conocimiento y el desarrollo tecnológico.
                </p>
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700"
                >
                    Ver más
                </motion.button>
                </div>
            </motion.div>

            {/* Tarjeta: Próximos Eventos */}
            <motion.div
                className="bg-white rounded-xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="relative h-56">
                <img
                    src="/images/img-inicio-2.png"
                    alt="Próximos Eventos"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                </div>
                <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">
                    Próximos Eventos
                </h3>
                <p className="text-gray-700 mb-4 text-sm">
                    Mantente informado sobre las actividades y eventos que tenemos preparados para este ciclo.
                </p>
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700"
                >
                    Ver más
                </motion.button>
                </div>
            </motion.div>

            {/* Tarjeta: Transmisiones en Vivo */}
            <motion.div
                className="bg-white rounded-xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <div className="relative h-56">
                <video
                    src="/videos/video1.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                </div>
                <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">
                    Transmisiones en Vivo
                </h3>
                <p className="text-gray-700 mb-4 text-sm">
                    Sigue nuestras conferencias, seminarios y eventos especiales en vivo.
                </p>
                <div className="flex gap-2">
                    <motion.button 
                    whileHover={{ scale: 1.05 }}
                    onClick={() => window.open('https://www.youtube.com/@universidaddesonsonate4512', '_blank')}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700"
                    >
                    Ver en YouTube
                    </motion.button>
                    <motion.button 
                    whileHover={{ scale: 1.05 }}
                    onClick={() => window.open('/transmision-en-vivo', '_self')}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700"
                    >
                    Ver en la Página
                    </motion.button>
                </div>
                </div>
            </motion.div>
            </div>
        </div>
        </section>
    );
};

export default NoticiasUSO;
