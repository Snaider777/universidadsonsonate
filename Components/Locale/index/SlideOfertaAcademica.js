"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// Datos estáticos de facultades
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
    nombre: "Licenciatura en A¿Matematica",
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

// Generamos un arreglo de facultades únicas (por categoría) y de temas únicos para el filtro
const uniqueFacultades = [
  ...new Map(facultades.map((item) => [item.categoria, item])).values(),
];
const topics = ["Todo", ...new Set(facultades.map((f) => f.categoria))];

export default function SlideOfertaAcademica() {
  const [selectedTopic, setSelectedTopic] = useState("Todo");

  // Si "Todo" está seleccionado, utilizamos uniqueFacultades para mostrar solo un representante por categoría;
  // Si se selecciona una categoría en particular, filtramos sobre el arreglo original para obtener TODOS los elementos de esa categoría.
  const filtered =
    selectedTopic === "Todo"
      ? uniqueFacultades
      : facultades.filter((f) => f.categoria === selectedTopic);

  // Clases para asignar distintos tamaños y posiciones (se reparten cíclicamente)
  const layoutClasses = [
    "col-span-2 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-2",
    "col-span-2 row-span-1",
  ];
  // Fondos de colores para que cada cuadro tenga un tono distinto
  const bgColors = [
    "bg-blue-500",
    "bg-red-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
  ];

  return (
    <section className="py-12 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 text-white">
        {/* Título principal */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Oferta Académica
        </h2>

        {/* Controles de filtro */}
        <div className="flex items-center justify-center space-x-2 mb-6">
          <select
            className="px-4 py-2 bg-white text-gray-900 rounded-full focus:outline-none"
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
          >
            {topics.map((t, index) => (
              <option key={index} value={t}>
                {t}
              </option>
            ))}
          </select>
          <span className="text-white">o</span>
          <button
            onClick={() => setSelectedTopic("Todo")}
            className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-gray-900 transition"
          >
            Limpiar Filtro
          </button>
        </div>

        {/* Grid responsivo con animaciones y distintas configuraciones */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filtered.map((item, idx) => {
            const layoutClass = layoutClasses[idx % layoutClasses.length];
            const bgColor = bgColors[idx % bgColors.length];
            return (
              <motion.a
                key={idx}
                href={item.href}
                className={`relative block overflow-hidden rounded-lg group ${layoutClass} ${bgColor}`}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -50 }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
              >
                <img
                  src={item.imagen}
                  alt={item.nombre}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-xl font-bold">{item.nombre}</h3>
                  <p className="mt-1 text-sm">{item.descripcion}</p>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
