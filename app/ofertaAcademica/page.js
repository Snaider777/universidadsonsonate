"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from 'next/link'; // Importa Link si estás usando Next.js

// Importa los íconos que necesites de react-icons
import { FaGraduationCap, FaSchool, FaBalanceScale, FaChartLine, FaCogs, FaDownload } from 'react-icons/fa'; // Ejemplos de Font Awesome

// ... (tus variantes de framer-motion) ...
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const OfertaAcademicaSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      className="overflow-hidden bg-gray-50 py-12 md:py-20"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={sectionVariants}
    >

      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#1f3d7a] mb-12" style={{ fontFamily: 'Georgia, serif' }}>
          Oferta Académica de la USO
        </h1>

        {/* Contenedor para el párrafo y los íconos de facultades */}
        <div className="flex flex-col md:flex-row md:items-start md:gap-16 mb-16">
          {/* Párrafo de descripción */}
          <motion.p
            className="text-gray-700 text-lg md:text-xl leading-relaxed md:max-w-2xl mx-auto md:mx-0 text-center md:text-left mb-8 md:mb-0 p-6 bg-white rounded-lg shadow-md flex-shrink-0"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            La Universidad de Sonsonate (USO) se destaca por su compromiso con la educación y el desarrollo integral de sus
            estudiantes. La USO cuenta con diversas facultades, incluyendo la Facultad de Ciencias Jurídicas, la Facultad de
            Ingeniería y Ciencias Naturales, la Facultad de Economía y Ciencias Sociales, y la Escuela de Educación. Además,
            ofrece programas de maestría en varias disciplinas. Estas facultades y programas están diseñados para proporcionar
            una educación de calidad y fomentar la investigación y la innovación, preparando a los estudiantes para enfrentar
            los desafíos del mundo moderno.
          </motion.p>

          {/* Grid de Íconos de Facultades */}
          <div className="grid grid-cols-2 gap-4 w-full md:w-auto">

            {/* Facultad de Ciencias Jurídicas */}
            <Link href="/ofertaAcademica/fcj" passHref> {/* Define la ruta para esta facultad */}
              <motion.div
                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm text-center w-full max-w-xs cursor-pointer hover:shadow-md transition-shadow" // Agregado cursor-pointer y hover
                variants={cardVariants}
              >
                <FaBalanceScale className="w-12 h-12 text-gray-700 mb-2" />
                <h3 className="text-base font-semibold text-[#1f3d7a]">Facultad de Ciencias Jurídicas</h3>
              </motion.div>
            </Link>

            {/* Facultad de Economía y Ciencias Sociales */}
            <Link href="/ofertaAcademica/fecs" passHref> {/* Define la ruta para esta facultad */}
              <motion.div
                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm text-center w-full max-w-xs cursor-pointer hover:shadow-md transition-shadow"
                variants={cardVariants}
              >
                <FaChartLine className="w-12 h-12 text-gray-700 mb-2" />
                <h3 className="text-base font-semibold text-[#1f3d7a]">Facultad de Economía y Ciencias Sociales</h3>
              </motion.div>
            </Link>

            {/* Facultad de Ingeniería y Ciencias Naturales */}
            <Link href="/ofertaAcademica/fics" passHref> {/* Define la ruta para esta facultad */}
              <motion.div
                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm text-center w-full max-w-xs cursor-pointer hover:shadow-md transition-shadow"
                variants={cardVariants}
              >
                <FaCogs className="w-12 h-12 text-gray-700 mb-2" />
                <h3 className="text-base font-semibold text-[#1f3d7a]">Facultad de Ingeniería y Ciencias Naturales</h3>
              </motion.div>
            </Link>

            {/* Escuela de Educación */}
            <Link href="/ofertaAcademica/escuelaEducacion" passHref> {/* Define la ruta para esta facultad */}
              <motion.div
                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm text-center w-full max-w-xs cursor-pointer hover:shadow-md transition-shadow"
                variants={cardVariants}
              >
                <FaSchool className="w-12 h-12 text-gray-700 mb-2" />
                <h3 className="text-base font-semibold text-[#1f3d7a]">Escuela de Educación</h3>
              </motion.div>
            </Link>

            {/* Maestrías */}
            <Link href="/ofertaAcademica/maestrias" passHref> {/* Define la ruta para Maestrías */}
              <motion.div
                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm text-center w-full max-w-xs cursor-pointer hover:shadow-md transition-shadow"
                variants={cardVariants}
              >
                <FaGraduationCap className="w-12 h-12 text-gray-700 mb-2" />
                <h3 className="text-base font-semibold text-[#1f3d7a]">Maestrías</h3>
              </motion.div>
            </Link>

          </div>
        </div>

        {/* Sección de Enlaces de Descarga y Imagen de Estudiantes */}
        <div className="flex flex-col md:flex-row md:items-start md:gap-16 mb-16">
          {/* Imagen de Estudiantes */}
          <motion.div
            className="mt-0 md:mt-0 text-center flex-shrink-0 md:max-w-xl mx-auto md:mx-0"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <img
              src="https://scontent-mia5-2.cdninstagram.com/v/t39.30808-6/490469513_982824133957404_6425692862505405286_n.jpg?stp=c0.53.768.853a_dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uZW1hZ2VfdXJsZ2VuLjc2OHg5NjAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-mia5-2.cdninstagram.com&_nc_cat=100&_nc_oc=Q6cZ2QG4iyoDwmHnLPKnNrXek7cNQlu1MoXJHtq5nVBPxFqLy2vRqToMVUgqfTM46oYOMyM&_nc_ohc=dS2czihL_O8Q7kNvwFShglO&_nc_gid=4k6o5qL4yi2-FAoUf7QWfA&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzYwOTM2ODIwMTE1OTk3MDU3OA%3D%3D.3-ccb7-5&oh=00_AfJeKRX20w2mtlhSsAqY7C38xvCtz8XcnLCBzovTtug5EQ&oe=684556F0&_nc_sid=22de04"
              alt="Estudiantes de la USO"
              className="w-full max-w-lg md:max-w-xl rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-102 transition-all duration-300"
            />
          </motion.div>

          {/* Sección de Enlaces de Descarga */}
          <div className="flex flex-col justify-center items-center gap-8 w-full md:w-auto md:flex-grow">
            {/* Catálogo Universitario */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4 hover:bg-gray-100 transition-colors w-full max-w-sm"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#1f3d7a] mb-2">Catálogo Universitario</h3>
                <a
                  href="/Descargas/catalogo2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 text-lg font-semibold hover:underline flex items-center"
                >
                  Ver / Descargar aquí <span className="ml-2">→</span>
                </a>
              </div>
              <FaDownload className="w-10 h-10 text-[#1f3d7a]" />
            </motion.div>

            {/* Pensum de carreras */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4 hover:bg-gray-100 transition-colors w-full max-w-sm"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#1f3d7a] mb-2">Pensum de carreras</h3>
                <a
                  href="/downloads/pensum-carreras.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 text-lg font-semibold hover:underline flex items-center"
                >
                  Ver / Descargar aquí <span className="ml-2">→</span>
                </a>
              </div>
              <FaDownload className="w-10 h-10 text-[#1f3d7a]" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default OfertaAcademicaSection;