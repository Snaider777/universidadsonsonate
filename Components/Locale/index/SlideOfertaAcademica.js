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
const gridOptions = [
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
  "col-span-1 row-span-2",
  "col-span-2 row-span-2",
];

// Categorías únicas para el filtro
const topics = ["Todo", ...new Set(facultades.map((f) => f.categoria))];

export default function SlideOfertaAcademica() {
  const [selectedTopic, setSelectedTopic] = useState("Todo");
  const [displayItems, setDisplayItems] = useState([]);

  useEffect(() => {
    let items =
      selectedTopic === "Todo"
        ? [...facultades].sort(() => Math.random() - 0.5)
        : facultades.filter((f) => f.categoria === selectedTopic);

    // Asigna a cada ítem un gridClass aleatorio de gridOptions
    items = items.map((item) => ({
      ...item,
      gridClass: gridOptions[Math.floor(Math.random() * gridOptions.length)],
    }));

    setDisplayItems(items);
  }, [selectedTopic]);

  return (
    <section className="py-12 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 text-white">
        <h2 className="text-3xl font-bold text-center mb-8">Oferta Académica</h2>

        {/* Filtro */}
        <div className="flex items-center justify-center space-x-2 mb-6">
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

        {/* Grid tipo Tetris */}
        {/* Se define grid-cols-[repeat(auto-fill,minmax(200px,1fr))] y auto-rows fijo (por ejemplo, 150px) */}
        <motion.div
          className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 grid-flow-dense auto-rows-[150px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence>
            {displayItems.map((item, idx) => (
              <motion.a
                key={item.nombre + idx}
                href={item.href}
                className={`relative overflow-hidden group rounded-lg ${item.gridClass} bg-black`}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
              >
                {/* Contenedor interno para que la imagen y el overlay llenen el espacio */}
                <div className="relative w-full h-full">
                  <img
                    src={item.imagen}
                    alt={item.nombre}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-3">
                    <h3 className="text-sm font-semibold text-white">
                      {item.nombre}
                    </h3>
                    <p className="text-xs text-gray-200">
                      {item.descripcion}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}