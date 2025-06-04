"use client";

import React from "react";
import { motion } from "framer-motion";

// Datos de facultades con un nuevo campo 'type' y 'bgColor' para el estilo

const ofertasAcademicas = [
  {
    nombre: "La Carrera de Ingeniería en Sistemas de Computación",
    descripcion:
      "es una disciplina que combina los principios de la ingeniería con los fundamentos de la informática para diseñar, desarrollar y gestionar sistemas informáticos complejos.",
    imagen: "https://zimbronapps.com/wp-content/uploads/2019/09/Ing_sistemas.jpg", // Asegúrate de tener imágenes relevantes
    categoria: "Facultad de Ingenieria y Ciencias Naturales",
    href: "/oferta/ingenieria-sistemas",
    type: "large-image", // Nuevo tipo para la tarjeta grande con imagen
    textColor: "text-white",
  },
  {
    nombre: "Impulsamos la modernización de espacios para el aprendizaje.",
    descripcion: "Descubre nuestro campus",
    imagen: "", // No imagen para este tipo
    categoria: "",
    href: "/oferta/campus",
    type: "colored-text", // Nuevo tipo para la tarjeta de color sólido
    bgColor: "bg-yellow-400", // Color de fondo específico
    textColor: "text-black",
  },
  {
    nombre: "Ingenieria en Agronegocios",
    descripcion:
      "La ingeniería en Agronegocios combina la ciencia agrícola con la gestión empresarial para optimizar la producción y comercialización de productos agrícolas.",
    imagen: "https://buzznigeria.com/wp-content/uploads/2017/12/Farmcrowdy.jpg", 
    categoria: "",
    href: "/oferta/historia",
    type: "small-image", // Tipo para la imagen pequeña
    textColor: "text-white",
  },
  {
    nombre: "Ingenieria Electrica",
    descripcion: "La ingeniería eléctrica se centra en el estudio y aplicación de la electricidad, la electrónica y el electromagnetismo para diseñar y desarrollar sistemas eléctricos.",
    imagen: "https://th.bing.com/th/id/OIP.KRbpUYbg2MRwPX4_KHaGJgHaDt?w=332&h=174&c=7&r=0&o=5&pid=1.7", // Imagen relevante
    categoria: "",
    href: "/oferta/manifiesto",
    type: "small-image",
    textColor: "text-white",
  },
  {
    nombre: "Vinculación con la empresa para acelerar el conocimiento.",
    descripcion: "Descubre porqué la industria es nuestro aliado.",
    imagen: "/images/vinculacion-empresa.jpg", // Imagen relevante
    categoria: "",
    href: "/oferta/vinculacion",
    type: "small-image",
    textColor: "text-white",
  },
  {
    nombre: "La ingeniería es aprender jugando, explorando y cuestionando.",
    descripcion: "Descubre nuestras carreras.",
    imagen: "", // No imagen
    categoria: "Facultad de Ingenieria y Ciencias Naturales",
    href: "/oferta/carreras",
    type: "colored-text",
    bgColor: "bg-blue-600", // Color de fondo específico
    textColor: "text-white",
  },
  {
    nombre: "Creemos que aprender no debería de tener límites.",
    descripcion: "Descubre nuestras becas.",
    imagen: "", // No imagen
    categoria: "",
    href: "/oferta/becas",
    type: "colored-text",
    bgColor: "bg-purple-600", // Color de fondo específico
    textColor: "text-white",
  },
  // Puedes añadir más elementos aquí siguiendo el mismo patrón
  {
    nombre: "Técnico en Logística y Aduanas",
    descripcion:
      "Domina las finanzas y la gestión contable con nuestra carrera de Contabilidad.",
    imagen: "https://thelogisticsworld.com/wp-content/uploads/2023/04/Tipos-de-Aduanas-2.jpg",
    categoria: "Tecnicos",
    href: "/oferta/contabilidad",
    type: "small-image",
    textColor: "text-white",
  },
  {
    nombre: "Ingeniería Industrial",
    descripcion:
      "Forma parte del futuro tecnológico con nuestra carrera de Ingeniería en Sistemas.",
    imagen: "https://th.bing.com/th/id/OIP.s4q4SDiAfvyrt-ufGTpJvwHaEK?w=311&h=180&c=7&r=0&o=5&pid=1.7",
    categoria: "Facultad de Ingenieria y Ciencias Naturales",
    href: "/oferta/ingenieria-industrial",
    type: "small-image",
    textColor: "text-white",
  },
  {
    nombre: "Técnico Superior en Ciencia de Datos",
    descripcion:
      "Domina las finanzas y la gestión contable con nuestra carrera de Contabilidad.",
    imagen: "https://th.bing.com/th/id/OIP.FMvBDoSKPl55TBG1e_G6PAHaEo?rs=1&pid=ImgDetMain",
    categoria: "Tecnicos",
    href: "/oferta/tecnico-ciencia-datos",
    type: "small-image",
    textColor: "text-white",
  },
];

// Nuevo componente para las tarjetas individuales
function OfferCard({ item }) {
  const commonProps = {
    whileHover: { scale: 1.02 },
    transition: { duration: 0.3 },
    className: `relative rounded-lg overflow-hidden flex flex-col justify-end p-4 ${item.textColor}`,
  };

  if (item.type === "large-image") {
    return (
      <motion.a
        href={item.href}
        {...commonProps}
        className={`${commonProps.className} md:col-span-2 md:row-span-2 h-[400px]`} // Ocupa 2 columnas y 2 filas
      >
        <img
          src={item.imagen}
          alt={item.nombre}
          className="absolute inset-0 w-full h-full object-cover grayscale" // Imagen en blanco y negro
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div> {/* Overlay oscuro */}
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-2">{item.nombre}</h3>
          <p className="text-base">{item.descripcion}</p>
        </div>
      </motion.a>
    );
  } else if (item.type === "colored-text") {
    return (
      <motion.a
        href={item.href}
        {...commonProps}
        className={`${commonProps.className} ${item.bgColor} h-[180px] md:h-[200px]`}
      >
        <div className="flex flex-col justify-between h-full">
          <p className="text-lg font-semibold">{item.nombre}</p>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm font-medium">{item.descripcion}</span>
            <span className="text-2xl">→</span> {/* Flecha */}
          </div>
        </div>
      </motion.a>
    );
  } else if (item.type === "small-image") {
    return (
      <motion.a
        href={item.href}
        {...commonProps}
        className={`${commonProps.className} h-[180px] md:h-[200px]`}
      >
        <img
          src={item.imagen}
          alt={item.nombre}
          className="absolute inset-0 w-full h-full object-cover grayscale" // Imagen en blanco y negro
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div> {/* Overlay oscuro */}
        <div className="relative z-10 flex flex-col justify-between h-full">
          <h3 className="text-lg font-semibold">{item.nombre}</h3>
          <div className="flex justify-between items-center mt-2">
            <p className="text-sm">{item.descripcion}</p>
            <span className="text-xl">→</span> {/* Flecha */}
          </div>
        </div>
      </motion.a>
    );
  }

  return null; // En caso de tipo desconocido
}

export default function SlideOfertaAcademica() {
  return (
    <section className="py-12 bg-white text-gray-800"> {/* Fondo blanco y texto oscuro como en la imagen */}
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Oferta Académica</h2> {/* Ajuste de tamaño y margen */}

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4"> {/* Ajuste de grid para más columnas */}
          {ofertasAcademicas.map((item, index) => (
            <OfferCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}