"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const eventosHistoria = [
  {
    año: "1990",
    titulo: "Fundación de la Universidad de Sonsonate",
    descripcion:
      "La universidad abre sus puertas ofreciendo programas de grado innovadores.La universidad abre sus puertas ofreciendo programas de grado innovadores.La universidad abre sus puertas ofreciendo programas de grado innovadores.La universidad abre sus puertas ofreciendo programas de grado innovadores.La universidad abre sus puertas ofreciendo programas de grado innovadores.La universidad abre sus puertas ofreciendo programas de grado innovadores.La universidad abre sus puertas ofreciendo programas de grado innovadores.La universidad abre sus puertas ofreciendo programas de grado innovadores.La universidad abre sus puertas ofreciendo programas de grado innovadores.",
    imagen: "/images/Banner1.jpg",
  },
  {
    año: "2000",
    titulo: "Primera Graduación",
    descripcion:
      "Se celebra la primera ceremonia de graduación con 100 egresados.",
    imagen: "/images/Banner3.jpg",
  },
  {
    año: "2010",
    titulo: "Expansión del Campus",
    descripcion:
      "Se inauguran nuevas instalaciones y laboratorios modernos.",
    imagen: "/images/Banner4.jpg",
  },
  {
    año: "1990",
    titulo: "Fundación de la Universidad de Sonsonate",
    descripcion:
      "La universidad abre sus puertas ofreciendo programas de grado innovadores.La universidad abre sus puertas ofreciendo programas de grado innovadores.La universidad abre sus puertas ofreciendo programas de grado innovadores.La universidad abre sus puertas ofreciendo programas de grado innovadores.La universidad abre sus puertas ofreciendo programas de grado innovadores.La universidad abre sus puertas ofreciendo programas de grado innovadores.La universidad abre sus puertas ofreciendo programas de grado innovadores.La universidad abre sus puertas ofreciendo programas de grado innovadores.La universidad abre sus puertas ofreciendo programas de grado innovadores.",
    imagen: "/images/Banner1.jpg",
  },
];
const divanimation = {
  hidden: { opacity: 0, x: -90 },
  visible: { opacity: 1, x: 0 },
};
const textAnimation = {
  hidden: { opacity: 0, x: -90 },
  visible: { opacity: 1, x: 0 },
};
const MisionVisionHistoriaSection = () => {
  const { ref, inView } = useInView();
  const [verMas, setVerMas] = useState(false);

  return (
    <section ref={ref} className="overflow-hidden bg-[#1f3d7a] py-12 mb-11">
      <div className="container mx-auto px-4 md:flex-row">
        {/* Sección de Misión y Visión */}
         
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 mt-20">
          
          {/* Visión */}
          <motion.div
            className="flex flex-col justify-center items-start bg-green-600 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Maestrias y especializaciones
            </h2>
             <p className="text-white text-lg md:text-xl">
              Ser una universidad líder en educación superior, reconocida por su
              excelencia académica y su impacto positivo en la comunidad.
            </p>
          </motion.div>
          {/* Misión */}
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
              Facultad de economia y ciencias sociales
            </h2>
            <p className="text-white text-lg md:text-xl">
              Ser una universidad líder en educación superior, reconocida por su
              excelencia académica y su impacto positivo en la comunidad.
            </p>
          </motion.div>
          {/* Misión */}
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
              Facultad de ciencias juridicas 
            </h2>
            <p className="text-white text-lg md:text-xl">
            Facultad de Ciencias Jurídicas su fin es formar profesionales del derecho con dominio de los aspectos legales, 
            con profundo sentimiento humanitario y un elevado espíritu de servicio a la Sociedad, 
            capaces de contribuir en la elaboración y correcta aplicación de sistemas normativos coercibles que aseguren la convivencia social.
            </p>
          </motion.div>
           {/* Visión */}
          <motion.div
            className="flex flex-col justify-center items-start bg-green-600 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Facultad de economia y ciencias sociales
            </h2>
             <p className="text-white text-lg md:text-xl">
            La Facultad de Ciencias Sociales y Económicas de la Universidad del Valle tiene como Misión educar en el nivel superior, 
            con base en la generación y difusión de conocimiento en las áreas de su competencia: la Economía, la Sociología, 
            la Antropología y otras Ciencias Sociales, con perspectiva interdisciplinaria, buscando los más elevados niveles de calidad, 
            inspirada en una ética de la responsabilidad, consciente de la necesidad de contribuir a crear un entorno social pacífico, democrático, pluralista y justo. 
            </p>
          </motion.div>
           <motion.div
            className="flex flex-col md:flex-col justify-center items-center bg-green-600 p-8 rounded-lg shadow-lg col-span-1 md:col-span-2 mx-auto" // mx-auto para centrar, col-span-1 md:col-span-2 para ocupar ambas columnas en pantallas medianas y grandes
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4 text-center" // text-center para centrar el título
              variants={textAnimation}
            >
              Facultad de ingenieria y ciencias naturales
            </h2>
            <ol className="text-white text-lg md:text-xl list-decimal list-inside text-left">
              {" "}
            <p className="text-white text-lg md:text-xl">
            La Facultad de Ciencias Sociales y Económicas de la Universidad del Valle tiene como Misión educar en el nivel superior, 
            con base en la generación y difusión de conocimiento en las áreas de su competencia: la Economía, la Sociología, 
            la Antropología y otras Ciencias Sociales, con perspectiva interdisciplinaria, buscando los más elevados niveles de calidad, 
            inspirada en una ética de la responsabilidad, consciente de la necesidad de contribuir a crear un entorno social pacífico, democrático, pluralista y justo. 
            </p>
            </ol>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <div className="relative w-full h-16">
            <div
              className="absolute top-0 left-0 w-full h-11 bg-green-600 transform -skew-y-2 origin-top-left"
              variants={divanimation}
            ></div>
          </div>
        </motion.div>
        {/* Línea de Tiempo de la Historia */}
        <div className="relative">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-green-300 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Oferta Academica de la Universidad de Sonsonate
          </motion.h2>

          <div className="relative border-l border-gray-200 dark:border-green-600 lg:flex-row">
            {eventosHistoria
              .slice(0, verMas ? eventosHistoria.length : 1)
              .map((evento, index) => (
                <motion.div
                  key={index}
                  className="mb-10 ml-6"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-green-600 rounded-full ring-8 ring-white dark:ring-green-300">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM10 9a1.5 1.5 0 10-1.5-1.5A1.5 1.5 0 0010 9z"></path>
                    </svg>
                  </span>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-green-300">
                      {evento.año} - {evento.titulo}
                    </h3>
                    <div className="flex flex-col md:flex-row lg-flex-row justify-center">
                      <p className="flex mb-2 text-base font-normal text-white md:w-1/2 ">
                        {evento.descripcion}
                      </p>
                      <img
                        src={evento.imagen}
                        alt={evento.titulo}
                        className=" flex w-full md:w-1/2 h-1/2 mt-11 lg:mt-0 rounded-lg shadow-lg "
                      />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
          </div>
          {/* Botón Ver Más / Ver Menos */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setVerMas(!verMas)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              {verMas ? "Ver Menos" : "Ver Más"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MisionVisionHistoriaSection;