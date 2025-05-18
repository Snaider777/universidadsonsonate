"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Datos de facultades
const facultades = [
  {
    nombre: "Ingeniería en Sistemas",
    descripcion:
      "Forma parte del futuro tecnológico con nuestra carrera de Ingeniería en Sistemas.",
    imagen: "/images/img-inicio-2.png",
    categoria: "Facultad de Ingenieria y Ciencias Naturales",
    href: "/oferta/ingenieria-sistemas",
  },
  {
    nombre: "Ingeniería Electrica",
    descripcion:
      "Forma parte del futuro tecnológico con nuestra carrera de Ingeniería en Sistemas.",
    imagen: "/images/img-inicio-2.png",
    categoria: "Facultad de Ingenieria y Ciencias Naturales",
    href: "/oferta/ingenieria-sistemas",
  },
  {
    nombre: "Ingeniería en Agronegocios",
    descripcion:
      "Forma parte del futuro tecnológico con nuestra carrera de Ingeniería en Sistemas.",
    imagen: "/images/img-inicio-2.png",
    categoria: "Facultad de Ingenieria y Ciencias Naturales",
    href: "/oferta/ingenieria-sistemas",
  },
  {
    nombre: "Ingeniería Industrial",
    descripcion:
      "Forma parte del futuro tecnológico con nuestra carrera de Ingeniería en Sistemas.",
    imagen: "/images/img-inicio-2.png",
    categoria: "Facultad de Ingenieria y Ciencias Naturales",
    href: "/oferta/ingenieria-sistemas",
  },
  {
    nombre: "Licenciatura Administración de Empresas",
    descripcion:
      "Desarrolla tus habilidades en gestión y liderazgo empresarial.",
    imagen: "/images/img-inicio-2.png",
    categoria: "Facultad de economia y ciencia sociales",
    href: "/oferta/administracion-empresas",
  },
  {
    nombre: "Licenciatura en Contabilidad",
    descripcion:
      "Desarrolla tus habilidades en gestión y liderazgo empresarial.",
    imagen: "/images/img-inicio-2.png",
    categoria: "Facultad de economia y ciencia sociales",
    href: "/oferta/administracion-empresas",
  },
  {
    nombre: "Licenciatura en Psicologia",
    descripcion:
      "Desarrolla tus habilidades en gestión y liderazgo empresarial.",
    imagen: "/images/img-inicio-2.png",
    categoria: "Facultad de economia y ciencia sociales",
    href: "/oferta/administracion-empresas",
  },
  {
    nombre: "Licenciatura en Mercadeo",
    descripcion:
      "Desarrolla tus habilidades en gestión y liderazgo empresarial.",
    imagen: "/images/img-inicio-2.png",
    categoria: "Facultad de economia y ciencia sociales",
    href: "/oferta/administracion-empresas",
  },
  {
    nombre: "Licenciatura en Ciencias politicas",
    descripcion:
      "Contribuye a la justicia y al bienestar social estudiando Derecho.",
    imagen: "/images/psicologia.webp",
    categoria: "Facultad de Ciencias Juridicas",
    href: "/oferta/derecho",
  },
  {
    nombre: "Licenciatura en Matematica",
    descripcion:
      "Comprende el comportamiento humano y ayuda a los demás con Psicología.",
    imagen: "/images/psicologia.webp",
    categoria: "Escuela de Educacion",
    href: "/oferta/psicologia",
  },
  {
    nombre: "Licenciatura en Lenguaje y Literatura",
    descripcion:
      "Comprende el comportamiento humano y ayuda a los demás con Psicología.",
    imagen: "/images/psicologia.webp",
    categoria: "Escuela de Educacion",
    href: "/oferta/psicologia",
  },
  {
    nombre: "Licenciatura en Ciencias Naturales",
    descripcion:
      "Comprende el comportamiento humano y ayuda a los demás con Psicología.",
    imagen: "/images/psicologia.webp",
    categoria: "Escuela de Educacion",
    href: "/oferta/psicologia",
  },
  {
    nombre: "Licenciatura en Educación Física, Deportes y Recreación",
    descripcion:
      "Comprende el comportamiento humano y ayuda a los demás con Psicología.",
    imagen: "/images/psicologia.webp",
    categoria: "Escuela de Educacion",
    href: "/oferta/psicologia",
  },
  {
    nombre: "Maestría en Neuropsicología del Aprendizaje",
    descripcion:
      "Diseña y construye el futuro con nuestra carrera de Arquitectura.",
    imagen: "/images/img-inicio-2.png",
    categoria: "Maestrias",
    href: "/oferta/arquitectura",
  },
  {
    nombre: "Maestría en Atención Integral de la Primera Infancia",
    descripcion:
      "Diseña y construye el futuro con nuestra carrera de Arquitectura.",
    imagen: "/images/img-inicio-2.png",
    categoria: "Maestrias",
    href: "/oferta/arquitectura",
  },
  {
    nombre: "Maestría en Innovación Educativa",
    descripcion:
      "Diseña y construye el futuro con nuestra carrera de Arquitectura.",
    imagen: "/images/img-inicio-2.png",
    categoria: "Maestrias",
    href: "/oferta/arquitectura",
  },
  {
    nombre: "Maestría en Administración Financiera",
    descripcion:
      "Diseña y construye el futuro con nuestra carrera de Arquitectura.",
    imagen: "/images/img-inicio-2.png",
    categoria: "Maestrias",
    href: "/oferta/arquitectura",
  },
  {
    nombre: "Maestría en Gerencia de Proyectos",
    descripcion:
      "Diseña y construye el futuro con nuestra carrera de Arquitectura.",
    imagen: "/images/img-inicio-2.png",
    categoria: "Maestrias",
    href: "/oferta/arquitectura",
  },
  {
    nombre: "Técnico en Logística y Aduanas",
    descripcion:
      "Domina las finanzas y la gestión contable con nuestra carrera de Contabilidad.",
    imagen: "/images/img-inicio-2.png",
    categoria: "Tecnicos",
    href: "/oferta/contabilidad",
  },
  {
    nombre: "Técnico en Mantenimiento Informático",
    descripcion:
      "Domina las finanzas y la gestión contable con nuestra carrera de Contabilidad.",
    imagen: "/images/img-inicio-2.png",
    categoria: "Tecnicos",
    href: "/oferta/contabilidad",
  },
  {
    nombre: "Técnico Superior en Ciencia de Datos",
    descripcion:
      "Domina las finanzas y la gestión contable con nuestra carrera de Contabilidad.",
    imagen: "/images/img-inicio-2.png",
    categoria: "Tecnicos",
    href: "/oferta/contabilidad",
  },
];

// Categorías únicas para el filtro
const topics = ["Todo", ...new Set(facultades.map((f) => f.categoria))];

/* 
  Función para dividir un arreglo en grupos de tamaño chunkSize.
*/
function chunkArray(array, chunkSize) {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}

/* 
  Componente que muestra un contenedor de 5 imágenes:
  - La primera se muestra en grande (con tamaño ajustado).
  - Las otras 4 se organizan en una cuadricula de 2 columnas.
*/
function OfferContainer({ items, containerIndex }) {
  if (!items || items.length === 0) return null;
  const isEven = containerIndex % 2 === 0;
  const bigImage = (
    <motion.a
      href={items[0].href}
      className="relative block rounded-lg overflow-hidden h-[300px] md:w-1/2"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={items[0].imagen}
        alt={items[0].nombre}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4">
        <h3 className="text-xl font-bold text-white">{items[0].nombre}</h3>
        <p className="text-sm text-gray-200">{items[0].descripcion}</p>
      </div>
    </motion.a>
  );
  const smallImages = (
    <div className="grid grid-cols-2 gap-4 md:w-1/2">
      {items.slice(1).map((item, idx) => (
        <motion.a
          key={item.nombre + idx}
          href={item.href}
          className="relative block rounded-lg overflow-hidden h-[140px]"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={item.imagen}
            alt={item.nombre}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-2">
            <h3 className="text-sm font-bold text-white">{item.nombre}</h3>
            <p className="text-xs text-gray-200">{item.descripcion}</p>
          </div>
        </motion.a>
      ))}
    </div>
  );

  return (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row gap-4">
        {isEven ? (
          <>
            {bigImage}
            {smallImages}
          </>
        ) : (
          <>
            {smallImages}
            {bigImage}
          </>
        )}
      </div>
    </motion.div>
  );
}

export default function SlideOfertaAcademica() {
  const [selectedTopic, setSelectedTopic] = useState("Todo");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    let items =
      selectedTopic === "Todo"
        ? [...facultades].sort(() => Math.random() - 0.5)
        : facultades.filter((f) => f.categoria === selectedTopic);
    setFilteredItems(items);
  }, [selectedTopic]);

  //aca se divide el arreglo en 5 ooo
  const chunkedItems = chunkArray(filteredItems, 5);

  return (
    <section className="py-12 bg-[#1f3d7a]">
      <div className="max-w-7xl mx-auto px-4 text-white">
        <h2 className="text-3xl font-bold text-center mb-8">Oferta Académica</h2>
        {/* Filtro */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <select
            className="px-4 py-2 bg-white text-gray-900 rounded-full"
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
          >
            {topics.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <button
            onClick={() => setSelectedTopic("Todo")}
            className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-gray-900 transition"
          >
            Limpiar Filtro
          </button>
        </div>

        <AnimatePresence exitBeforeEnter>
          {chunkedItems.map((group, index) => (
            <OfferContainer key={index} items={group} containerIndex={index} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
