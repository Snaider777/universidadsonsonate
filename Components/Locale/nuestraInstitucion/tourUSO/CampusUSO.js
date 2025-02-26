"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ConveniosUSO = () => {
  const categorias = [
    "Biblioteca",
    "Edificio A",
    "Edificio B",
    "Edificio C",
    "Centro de Atención al Estudiante",
    "Centro de Proyección Social",
    "Auditorio"
  ];
const divanimation = {
    hidden: { opacity: 0, x: -90 },
    visible: { opacity: 1, x: 0 },
};
const imagenesCampus = [
  {
    titulo: "Entrada del Edificio A",
    categoria: "Edificio A",
    imagen: "/images/banner3.jpg",
    Array: [
      {
        ti:"Primer Nivel",
        Array: [
              { p: "4 aulas" },
              { p: "4 aulas" },
              { p: "4 aulas" }
        ]
      },
      {
        ti:"Segundo Nivel",
        Array: [
          { p: "4 aulas" },
          { p: "4 aulas" },
          { p: "4 aulas" },
          { p: "4 aulas" }
        ]
      }
    ]
  },
  {
    titulo: "Biblioteca",
    categoria: "Biblioteca",
    imagen: "/images/Banner4.jpg",
    Array: [
      {
        ti:"Primer Nivel",
        Array: [
              { p: "4 aulas" },
              { p: "4 aulas" },
              { p: "4 aulas" }
        ]
      },
      {
        ti:"Segundo Nivel",
        Array: [
          { p: "4 aulas" },
          { p: "4 aulas" },
          { p: "4 aulas" },
          { p: "4 aulas" }
        ]
      }
    ]
  },
  {
    titulo: "Laboratorios - Edificio D",
    categoria: "Edificio B",
    imagen: "/images/banner3.jpg",
    Array: [
      {
        ti:"Primer Nivel",
        Array: [
              { p: "4 aulas" },
              { p: "4 aulas" },
              { p: "4 aulas" }
        ]
      },
      {
        ti:"Segundo Nivel",
        Array: [
          { p: "4 aulas" },
          { p: "4 aulas" },
          { p: "4 aulas" },
          { p: "4 aulas" }
        ]
      }
    ]
  },
  {
    titulo: "Edificio C",
    categoria: "Edificio C",
    imagen: "/images/banner3.jpg",
    Array: [
      {
        ti:"Primer Nivel",
        Array: [
              { p: "4 aulas" },
              { p: "4 aulas" },
              { p: "4 aulas" }
        ]
      },
      {
        ti:"Segundo Nivel",
        Array: [
          { p: "4 aulas" },
          { p: "4 aulas" },
          { p: "4 aulas" },
          { p: "4 aulas" }
        ]
      }
    ]
  },
  {
    titulo: "Centro de Atención al Estudiante",
    categoria: "Centro de Atención al Estudiante",
    imagen: "/images/banner3.jpg",
    Array: [
      {
        ti:"Primer Nivel",
        Array: [
              { p: "4 aulas" },
              { p: "4 aulas" },
              { p: "4 aulas" }
        ]
      },
      {
        ti:"Segundo Nivel",
        Array: [
          { p: "4 aulas" },
          { p: "4 aulas" },
          { p: "4 aulas" },
          { p: "4 aulas" }
        ]
      }
    ]
  },
  {
    titulo: "Centro de Proyección Social",
    categoria: "Centro de Proyección Social",
    imagen: "/images/banner3.jpg",
    Array: [
      {
        ti:"Primer Nivel",
        Array: [
              { p: "4 aulas" },
              { p: "4 aulas" },
              { p: "4 aulas" }
        ]
      },
      {
        ti:"Segundo Nivel",
        Array: [
          { p: "4 aulas" },
          { p: "4 aulas" },
          { p: "4 aulas" },
          { p: "4 aulas" }
        ]
      }
    ]
  },
  {
    titulo: "Auditorio Principal",
    categoria: "Auditorio",
    imagen: "/images/banner3.jpg",
    Array: [
      {
        ti:"Primer Nivel",
        Array: [
              { p: "4 aulas" },
              { p: "4 aulas" },
              { p: "4 aulas" }
        ]
      },
      {
        ti:"Segundo Nivel",
        Array: [
          { p: "4 aulas" },
          { p: "4 aulas" },
          { p: "4 aulas" },
          { p: "4 aulas" }
        ]
      }
    ]
  }
];

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(categorias[0]);

  // Filtrar las img
  const imagenSeleccionada = imagenesCampus.find(
    (imagen) => imagen.categoria === categoriaSeleccionada
  );

  return (
    <section className="py-12 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        variants={divanimation}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4"
          
        >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-8">
          Nuestro Campus
        </h2>

        {/* filtros de ig wasaaa*/}
        <div className="flex flex-wrap justify-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          variants={divanimation}
          transition={{ duration: 0.8 }}
        >
          {categorias.map((categoria, index) => (
            <button
              key={index}
              onClick={() => setCategoriaSeleccionada(categoria)}
              className={`m-2 px-4 py-2 rounded-full font-semibold ${
                categoriaSeleccionada === categoria
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {categoria}
            </button>
          ))}
        </div>
        {/* Galería san salvador para el mundo */}
        <AnimatePresence exitBeforeEnter>
        {imagenSeleccionada ? (
          <div className="flex flex-col md:flex-row items-center" key={categoriaSeleccionada}>
            <motion.div
              className="w-full md:w-1/2 mb-6 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              variants={divanimation}
              transition={{ duration: 0.8 }}
            >
              <img
                src={imagenSeleccionada.imagen}
                alt={imagenSeleccionada.titulo}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              
              className="w-full md:w-1/2 md:pl-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              variants={divanimation}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">
                {imagenSeleccionada.titulo}
              </h3>
              <div className="text-lg md:text-xl text-gray-700 grid grid-cols-1 md:grid-cols-2 gap-4">
                {imagenSeleccionada.Array.map((item, index) => (
                  <div key={index} className="">
                    <h3 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">
                      {item.ti}
                    </h3>
                    <div>
                      {item.Array && item.Array.map((item, index) => (
                        <p key={index} className="text-lg md:text-xl text-gray-700">{item.p}</p>
                      ))}
                    </div>
                  </div>
                ))}
                
              </div>
            </motion.div>
            
          </div>
        ) : (
          <p className="text-center text-xl text-gray-700">
            No se encontró información para esta categoría.
          </p>
        )}
          </AnimatePresence>
      </div>
      </motion.div>
    </section>
  );
};

export default ConveniosUSO;
