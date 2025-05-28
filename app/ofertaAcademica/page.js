"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const textAnimation = {
  hidden: { opacity: 0, x: -90 },
  visible: { opacity: 1, x: 0 },
};

const MisionVisionHistoriaSection = () => {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="overflow-hidden bg-[#1f3d7a] py-12 mb-11">
      <div className="container mx-auto px-4 md:flex-row">
        {/* Sección de Maestrías, Facultades y Escuela de Educación */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 mt-20">
          {/* Maestrias y Especializaciones */}
          <motion.div
            className="flex flex-col justify-center items-start bg-green-600 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Maestrías y Especializaciones
            </h2>
            <p className="text-white text-lg md:text-xl">
              Ofrecemos programas de posgrado innovadores para el desarrollo
              profesional y académico en diversas áreas del conocimiento.
            </p>
          </motion.div>

          {/* Escuela de Educación */}
          <motion.div
            className="flex flex-col md:flex-col justify-center items-start bg-blue-600 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              variants={textAnimation}
            >
              Escuela de Educación
            </h2>
            <p className="text-white text-lg md:text-xl">
              Formamos profesionales de la educación con las herramientas
              pedagógicas y didácticas más innovadoras, comprometidos con la
              transformación social a través de una enseñanza de calidad.
            </p>
          </motion.div>

          {/* Facultad de Ciencias Jurídicas */}
          <motion.div
            className="flex flex-col md:flex-col justify-center items-start bg-blue-600 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              variants={textAnimation}
            >
              Facultad de Ciencias Jurídicas
            </h2>
            <p className="text-white text-lg md:text-xl">
              La Facultad de Ciencias Jurídicas tiene como fin formar
              profesionales del derecho con dominio de los aspectos legales, con
              profundo sentimiento humanitario y un elevado espíritu de servicio
              a la sociedad, capaces de contribuir en la elaboración y correcta
              aplicación de sistemas normativos coercibles que aseguren la
              convivencia social.
            </p>
          </motion.div>

          {/* Facultad de Economía y Ciencias Sociales */}
          <motion.div
            className="flex flex-col justify-center items-start bg-green-600 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Facultad de Economía y Ciencias Sociales
            </h2>
            <p className="text-white text-lg md:text-xl">
              La Facultad de Ciencias Sociales y Económicas de la Universidad
              del Valle tiene como Misión educar en el nivel superior, con base
              en la generación y difusión de conocimiento en las áreas de su
              competencia: la Economía, la Sociología, la Antropología y otras
              Ciencias Sociales, con perspectiva interdisciplinaria, buscando
              los más elevados niveles de calidad.
            </p>
          </motion.div>

          {/* Facultad de Ingeniería y Ciencias Naturales - Centrada y ocupando ambas columnas */}
          <motion.div
            className="flex flex-col md:flex-col justify-center items-center bg-blue-600 p-8 rounded-lg shadow-lg col-span-1 md:col-span-2 mx-auto" // Clases añadidas para centrar y ocupar 2 columnas
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4 text-center" // Añadido text-center para el título
              variants={textAnimation}
            >
              Facultad de Ingeniería y Ciencias Naturales
            </h2>
            <p className="text-white text-lg md:text-xl text-center"> {/* Añadido text-center para el párrafo */}
              La Facultad de Ingeniería y Ciencias Naturales se dedica a formar
              profesionales capaces de innovar y aplicar conocimientos en campos
              tecnológicos y científicos. Su misión es contribuir al desarrollo
              sostenible mediante la investigación y la formación de talento
              altamente calificado.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MisionVisionHistoriaSection;