"use client";

import "@/styles/modal.css";
import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Modal from "react-modal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/modal.css";

const convenios = [
    {
        nombre: "Ministerio de Educación, Ciencia y Tecnología (MINEDUCYT)",
        imagen: "/images/Minesteriodeeducacion.jpg",
        descripcion: "Firmado el 30 de agosto de 2022, este convenio establece líneas de trabajo conjuntas entre el Ministerio de Educación, Ciencia y Tecnología (MINEDUCYT) y la Universidad de Sonsonate (USO), con el objetivo de fomentar la cooperación mutua en áreas como la formación docente, la investigación y el fortalecimiento de estudiantes de Educación Media. Las partes se comprometen a gestionar espacios para el desarrollo de prácticas educativas, implementar programas de capacitación Y apoyar la reforma curricular, así como promover la participación estudiantil y el uso de tecnología en el aula. El convenio tendrá una vigencia de tres años y busca mejorar los procesos de enseñanza-aprendizaje, con especial énfasis en elevar los resultados en pruebas de rendimiento académico.",
    },
    {
        nombre: "Universidad de Santander (UDES)",
        imagen: "/images/UDES.png",
        descripcion: "El 28 de febrero de 2023, la Universidad de Santander (UDES) y la Universidad de Sonsonate (USO) firmaron un Convenio Específico de Formación en la Maestría en Educatrónica, en el marco de un Convenio Marco Internacional de Cooperación Interinstitucional firmado el 1 de agosto de 2018. Este convenio tiene como objetivo la creación de una Cohorte Especial de 11 docentes de la USO, quienes se integrarán a la Maestría en Educatrónica de la UDES durante el periodo académico año 2023, con una duración de un año. La formación de estos docentes busca potenciar un staff internacional que apoye la investigación científica y el desarrollo tecnológico en el ámbito educativo tanto en El Salvador como en Colombia. Las condiciones específicas incluyen una ruta formativa acelerada, la aprobación de proyectos de grado por la rectoría de la USO, y un Diplomado e-Content que se desarrollará paralelamente. La USO asumirá el costo de la matrícula de los estudiantes, pagándola en tres cuotas de igual valor. Este convenio tendrá una duración de dos años y podrá ser modificado por acuerdo mutuo entre las partes.",
    },
    {
        nombre: "Federación Salvadoreña de Ajedrez (FSA)",
        imagen: "/images/Fsda.png",
        descripcion: "El presente convenio de colaboración, suscrito el 12 de septiembre de 2022, establece un marco de cooperación entre la Universidad de Sonsonate (USO) y la Federación Salvadoreña de Ajedrez (FSA) para promover el desarrollo integral de la comunidad sonsonateca a través del ajedrez. Ambas instituciones buscan fomentar la paz social y la convivencia solidaria intergeneracional, así como potenciar la organización comunitaria mediante la práctica del deporte. La USO se compromete a proporcionar instalaciones y materiales necesarios, mientras que la FSA ofrecerá asesoría técnica y recursos didácticos para el establecimiento de escuelas deportivas. Para asegurar el seguimiento de las acciones conjuntas, se formará una comisión mixta que se encargará de proponer y coordinar actividades relacionadas con el deporte y la recreación. Este convenio tiene una duración de un año, con posibilidad de renovación, y se enfoca en el fortalecimiento de la cultura deportiva en el municipio de Sonsonate.",
    },
    {
        nombre: "GS1 El Salvador",
        imagen: "/images/GS1.png",
        descripcion: "El convenio firmado el 14 de marzo de 2024 entre la Universidad de Sonsonate (USO) y la Asociación GS1 El Salvador tiene como objetivo fortalecer la formación profesional de los estudiantes a través de programas especializados en estándares internacionales GS1. Entre las actividades destacan la formación continua en logística y cadena de suministros, así como un programa de prácticas profesionales donde los estudiantes aplicarán el modelo de madurez de GS1 en empresas locales. Además, se promoverá la colaboración entre académicos, estudiantes y empresas para fomentar la innovación logística. Las actividades se desarrollarán de manera virtual y presencial, sin intercambio económico entre las partes, y abarcarán de marzo a noviembre de cada año.",
    },{
        nombre: "Fundación Margoth y Rolando Duarte",
        imagen: "/images/Fundaciónmargoth.png",
        descripcion: "El 25 de marzo de 2024, la Licenciada Ana María de los Ángeles Rodríguez Salazar, rectora de la Universidad de Sonsonate (USO), y el Licenciado Francisco Javier Enrique Duarte Schlageter, presidente de la Fundación Margoth y Rolando Duarte, firmaron un Convenio Marco de Cooperación Técnica, Económica y Acompañamiento. Este acuerdo establece mecanismos de coordinación y colaboración para desarrollar actividades técnicas, educativas y prácticas en el área agropecuaria, con el objetivo de abordar la pobreza en comunidades rurales y urbanas. El convenio incluye la provisión de bienes y servicios necesarios para la ejecución de proyectos específicos, así como la realización de prácticas para estudiantes y docentes de la USO. Su vigencia es de dos años, con posibilidad de prórroga, y puede ser modificado por acuerdo escrito entre las partes.",
    }
];

Modal.setAppElement("#__next");

const ConveniosUSO = () => {
const [modalIsOpen, setModalIsOpen] = useState(false);
const [currentConvenio, setCurrentConvenio] = useState(null);
const {ref, inView} = useInView();

const config = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1280, // xl
            settings: {
            slidesToShow: 4,
            },
        },
        {
            breakpoint: 1024, // lg
            settings: {
            slidesToShow: 3,
            },
        },
        {
            breakpoint: 768, // md
            settings: {
            slidesToShow: 2,
            },
        },
        {
            breakpoint: 640, // sm
            settings: {
            slidesToShow: 1,
            },
        }
    ],
};
const textAnimation = {
    hidden: { opacity: 0, x: -90 },
    visible: { opacity: 1, x: 0 },
};
const openModal = (convenio) => {
    setCurrentConvenio(convenio);
    setModalIsOpen(true);
};

const closeModal = () => {
    setCurrentConvenio(null);
    setModalIsOpen(false);
};
const divAnimation = {
    hidden: { opacity: 0, x: 90 },
    visible: { opacity: 1, x: 0 },
}
return (
    <section className="relative overflow-hidden py-12 bg-[#1f3d7a] ">
    <div ref={ref} className=" bg-[#1f3d7a] relative container mx-auto px-4 ">
    <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-white mb-8"
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 0.8 }}
        variants={textAnimation}
    >
        Nuestros Convenios
    </motion.h2>
    <motion.div 
        className="container mx-auto justify-center items-center w-full"
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 0.8 }}
        variants={divAnimation}
    >
        <div className="justify-center items-center w-full">
            <p className="text-center text-white text-lg md:text-xl mb-8">
                La Universidad de Sonsonate (USO) mantiene convenios de colaboración con diversas instituciones nacionales e internacionales, con el objetivo de fomentar la cooperación académica, científica y tecnológica, así como el intercambio de experiencias y conocimientos en beneficio de la comunidad universitaria y la sociedad en general.
            </p>
        </div>
    </motion.div>
    <Slider {...config}>
        {convenios.map((convenio, index) => (
            <div key={index} className="px-2">
                <motion.div
                    className="flex justify-center items-center bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer py-4"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => openModal(convenio)}
                >
                    <img
                    src={convenio.imagen}
                    alt={convenio.nombre}
                    className="w-auto h-24 object-contain"
                    />
                </motion.div>
            </div>
        ))}
        </Slider>
    </div>
    {/* Modal para mostrar info */}
    {currentConvenio && (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Detalle del Convenio"
            className="modal"
            overlayClassName="overlay"
        >
            <div className="flex flex-col items-center text-center p-4">
                <img
                    src={currentConvenio.imagen}
                    alt={currentConvenio.nombre}
                    className="w-auto h-32 object-contain mb-4"
                />
                <h3 className="text-2xl font-bold text-blue-600 mb-2">
                {currentConvenio.nombre}
                </h3>
                <p className="text-gray-700 mb-4">{currentConvenio.descripcion}</p>
                <button
                    onClick={closeModal}
                    className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                    Cerrar
                </button>
            </div>
        </Modal>
    )}
    </section>
);
};

export default ConveniosUSO;
