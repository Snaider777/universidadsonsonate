"use client";

import React, { useState } from "react";

// Datos estáticos de facultades
const facultades = [
  {
    nombre: "Ingeniería en Sistemas",
    descripcion: "Forma parte del futuro tecnológico con nuestra carrera de Ingeniería en Sistemas.",
    imagen: "/images/img-inicio-2.png",
    categoria: "Facultad de Ingenieria y Ciencias Naturales",
    href: "/oferta/ingenieria-sistemas"
  },
  {
    nombre: "Ingeniería Electrica",
    descripcion: "Forma parte del futuro tecnológico con nuestra carrera de Ingeniería en Sistemas.",
    imagen: "/images/img-inicio-2.png",
    categoria: "Facultad de Ingenieria y Ciencias Naturales",
    href: "/oferta/ingenieria-sistemas"
  },
  {
    nombre: "Ingeniería en Agronegocios",
    descripcion: "Forma parte del futuro tecnológico con nuestra carrera de Ingeniería en Sistemas.",
    imagen: "/images/img-inicio-2.png",
    categoria: "Facultad de Ingenieria y Ciencias Naturales",
    href: "/oferta/ingenieria-sistemas"
  },
  {
    nombre: "Ingeniería Industrial",
    descripcion: "Forma parte del futuro tecnológico con nuestra carrera de Ingeniería en Sistemas.",
    imagen: "/images/img-inicio-2.png",
    categoria: "Facultad de Ingenieria y Ciencias Naturales",
    href: "/oferta/ingenieria-sistemas"
  },
  {
    nombre: "Licenciatura Administración de Empresas",
    descripcion: "Desarrolla tus habilidades en gestión y liderazgo empresarial.",
    imagen: "/images/img-inicio-2.png",
    categoria: "Facultad de economia y ciencia sociales",
    href: "/oferta/administracion-empresas"
  },
  {
    nombre: "Licenciatura en Contabilidad",
    descripcion: "Desarrolla tus habilidades en gestión y liderazgo empresarial.",
    imagen: "/images/img-inicio-2.png",
    categoria: "Facultad de economia y ciencia sociales",
    href: "/oferta/administracion-empresas"
  },
  {
    nombre: "Licenciatura en Psicologia",
    descripcion: "Desarrolla tus habilidades en gestión y liderazgo empresarial.",
    imagen: "/images/img-inicio-2.png",
    categoria: "Facultad de economia y ciencia sociales",
    href: "/oferta/administracion-empresas"
  },
  {
    nombre: "Licenciatura en Mercadeo",
    descripcion: "Desarrolla tus habilidades en gestión y liderazgo empresarial.",
    imagen: "/images/img-inicio-2.png",
    categoria: "Facultad de economia y ciencia sociales",
    href: "/oferta/administracion-empresas"
  },
  {
    nombre: "Licenciatura en Ciencias politicas",
    descripcion: "Contribuye a la justicia y al bienestar social estudiando Derecho.",
    imagen: "/images/psicologia.webp",
    categoria: "Facultad de Ciencias Juridicas",
    href: "/oferta/derecho"
  },
  {
    nombre: "Licenciatura en A¿Matematica",
    descripcion: "Comprende el comportamiento humano y ayuda a los demás con Psicología.",
    imagen: "/images/psicologia.webp",
    categoria: "Escuela de Educacion",
    href: "/oferta/psicologia"
  },
  {
    nombre: "Licenciatura en Lenguaje y Literatura",
    descripcion: "Comprende el comportamiento humano y ayuda a los demás con Psicología.",
    imagen: "/images/psicologia.webp",
    categoria: "Escuela de Educacion",
    href: "/oferta/psicologia"
  },
  {
    nombre: "Licenciatura en Ciencias Naturales",
    descripcion: "Comprende el comportamiento humano y ayuda a los demás con Psicología.",
    imagen: "/images/psicologia.webp",
    categoria: "Escuela de Educacion",
    href: "/oferta/psicologia"
  },
  {
    nombre: "Licenciatura en Educación Física, Deportes y Recreación",
    descripcion: "Comprende el comportamiento humano y ayuda a los demás con Psicología.",
    imagen: "/images/psicologia.webp",
    categoria: "Escuela de Educacion",
    href: "/oferta/psicologia"
  },
  {
    nombre: "Maestría en Neuropsicología del Aprendizaje",
    descripcion: "Diseña y construye el futuro con nuestra carrera de Arquitectura.",
    imagen: "/images/img-inicio-2.png",
    categoria: "Maestrias",
    href: "/oferta/arquitectura"
  },
  {
    nombre: "Maestría en Atención Integral de la Primera Infancia",
    descripcion: "Diseña y construye el futuro con nuestra carrera de Arquitectura.",
    imagen: "/images/img-inicio-2.png",
    categoria: "Maestrias",
    href: "/oferta/arquitectura"
  },
  {
    nombre: "Maestría en Innovación Educativa",
    descripcion: "Diseña y construye el futuro con nuestra carrera de Arquitectura.",
    imagen: "/images/img-inicio-2.png",
    categoria: "Maestrias",
    href: "/oferta/arquitectura"
  },
  {
    nombre: "Maestría en Administración Financiera",
    descripcion: "Diseña y construye el futuro con nuestra carrera de Arquitectura.",
    imagen: "/images/img-inicio-2.png",
    categoria: "Maestrias",
    href: "/oferta/arquitectura"
  },
  {
    nombre: "Maestría en Gerencia de Proyectos",
    descripcion: "Diseña y construye el futuro con nuestra carrera de Arquitectura.",
    imagen: "/images/img-inicio-2.png",
    categoria: "Maestrias",
    href: "/oferta/arquitectura"
  },
  {
    nombre: "Técnico en Logística y Aduanas",
    descripcion: "Domina las finanzas y la gestión contable con nuestra carrera de Contabilidad.",
    imagen: "/images/img-inicio-2.png",
    categoria: "Tecnicos",
    href: "/oferta/contabilidad"
  },
  {
    nombre: "Técnico en Mantenimiento Informático",
    descripcion: "Domina las finanzas y la gestión contable con nuestra carrera de Contabilidad.",
    imagen: "/images/img-inicio-2.png",
    categoria: "Tecnicos",
    href: "/oferta/contabilidad"
  },
  {
    nombre: "Técnico Superior en Ciencia de Datos",
    descripcion: "Domina las finanzas y la gestión contable con nuestra carrera de Contabilidad.",
    imagen: "/images/img-inicio-2.png",
    categoria: "Tecnicos",
    href: "/oferta/contabilidad"
  }
];

// Temas para filtro (incluye 'Todo')
const topics = ["Todo", ...facultades.map(f => f.categoria)];

export default function SlideOfertaAcademica() {
  const [selectedTopic, setSelectedTopic] = useState("Todo");
  const filtered = facultades.filter(
    f => selectedTopic === "Todo" || f.categoria === selectedTopic
  );

  return (
    <section className="py-12 bg-gray-900">
      {/* Contenedor general: fondo y padding */}
      <div className="max-w-7xl mx-auto px-4 text-white">
        {/* Título */}
        <h2 className="text-3xl font-bold text-center mb-8">Oferta Académica</h2>

        {/* Controles de filtro y shuffle */}
        <div className="flex items-center justify-center space-x-2 mb-6">
          <select
            className="px-4 py-2 bg-white text-gray-900 rounded-full focus:outline-none"
            value={selectedTopic}
            onChange={e => setSelectedTopic(e.target.value)}
          >
            {topics.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          <span className="text-white">o</span>
          {/* 'Shuffle' opcional, si deseas mezclar */}
          <button
            onClick={() => setSelectedTopic("Todo")}
            className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-gray-900 transition"
          >
            Reset
          </button>
        </div>

        {/* Grid de facultades */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filtered.map((item, idx) => {
            // Asigna tamaños distintos: el primero ocupa más espacio
            const spanClass = idx === 0
              ? "col-span-2 row-span-2"
              : "col-span-1 row-span-1";

            return (
              <a
                key={idx}
                href={item.href}
                className={
                  `relative block overflow-hidden bg-black rounded-lg group ${spanClass}`
                }
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
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
