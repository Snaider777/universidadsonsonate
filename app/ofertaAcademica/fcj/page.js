"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Datos de facultades
const facultades = [
   {
    nombre: "Licenciatura en Ciencias Juridicas",
    descripcion:
      "Contribuye a la justicia y al bienestar social estudiando Derecho.",
    imagen: "/images/psicologia.webp",
    categoria: "Facultad de Ciencias Juridicas",
    href: "/oferta/derecho",
  },
];

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
  - Las otras 4 se organizan en una cuadrícula de 2 columnas.
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
  // Ahora, 'chunkedItems' usará directamente el array 'facultades'
  // ya que no hay filtro que aplicar.
  const chunkedItems = chunkArray(facultades, 5);

  return (
    <section className="py-12 bg-[#1f3d7a]">
      <div className="max-w-7xl mx-auto px-4 text-white">
        <h2 className="text-3xl font-bold text-center mb-8">Oferta Académica</h2>

        <AnimatePresence exitBeforeEnter>
          {chunkedItems.map((group, index) => (
            <OfferContainer key={index} items={group} containerIndex={index} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}