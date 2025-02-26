// Components/FinalSection.js

"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const NoticiasUSO = () => {
const { ref, inView } = useInView();

return (
    <section ref={ref} className="relative overflow-hidden bg-blue-500  py-12">
    <div className="bg-blue-500 relative container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/*Investigaciones*/}
        <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
        >
            <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">
                    Investigaciones
                </h3>
                <p className="text-gray-700 mb-6">
                    Descubre los proyectos de investigación que estamos llevando a cabo para impulsar el conocimiento y el desarrollo tecnológico.
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    Ver más
                </button>
            </div>
        </motion.div>

        {/*Calendario de eventos*/}
        <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">
                    Próximos Eventos
                </h3>
                <p className="text-gray-700 mb-6">
                    Mantente al día con los eventos y actividades que tenemos preparados para este ciclo académico.
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    Ver más
                </button>
            </div>
        </motion.div>

        {/*Transmisiones en vivo*/}
        <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
        >
            <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">
                    Transmisiones en Vivo
                </h3>
                <p className="text-gray-700 mb-6">
                    Sigue nuestras transmisiones en vivo y no te pierdas conferencias, seminarios y eventos especiales.
                </p>
                <button
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 mr-2 mb-2"
                    onClick={() => window.open('https://www.youtube.com/@universidaddesonsonate4512', '_blank')}
                >
                    Ver en YouTube
                </button>
                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                    onClick={() => window.open('/transmision-en-vivo', '_self')}
                >
                    Ver en la Página
                </button>
            </div>
        </motion.div>
        </div>
    </div>
    </section>
);
};

export default NoticiasUSO;
