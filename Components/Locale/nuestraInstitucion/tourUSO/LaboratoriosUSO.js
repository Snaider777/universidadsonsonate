"use client";
import { useEffect, useState } from 'react';
import { motion, scroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
const LaboratoriosUSO = () => {
    const [scrollDirection, setScrollDirection] = useState(null);
    const { ref, inView } = useInView();
    useEffect(() => {
      let scrollUlti = window.scrollY;
      const leerScrollDire = () =>{
        let scrollActu = window.scrollY;
        if(scrollActu > scrollUlti){
          setScrollDirection('down');
        }else{
          setScrollDirection('up');
        }
        scrollUlti = scrollActu > 0 ? scrollActu : 0;
      };
      window.addEventListener('scroll', leerScrollDire);
      return () => {
        window.removeEventListener('scroll', leerScrollDire);
      };
    }, []);
    // Animaciones
    const textAnimation = {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    };
    const imgAnimation = {
      hidden: { opacity: 0, x: 90 },
      visible: { opacity: 1, x: 0 },
    };
    const divAnimation = {
      hidden: { opacity: 0, x: 90 },
      visible: { opacity: 1, x: 0 },
      up: {opacity: 1, y: 20},
      down: {opacity: 1, y: -0}
    };
    const figuraAnition={
      hidden: {opacity: 0, y: -50},
      visible: {opacity: 1, x: 10},
      up: {opacity: 1, y: 0},
      down: {opacity: 1, y: 0}
    };
    const config = {
      
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 800,
      fade: true,
      arrows: true,
      pauseOnHover: false,
  };
    return (
      <div ref={ref} className=" overflow-hidden bg-[#1f3d7a] py-20">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        <motion.div
          className="relative flex flex-col md:flex-col lg:flex-row lg:w-screen justify-center items-center h-auto w-full p-4 bg-[#1f3d7a]"
        >
          {/* Contenido de texto */}
            <motion.div
            className="relative flex flex-col justify-center items-start p-4 md:p-8 w-full md:w-full lg:w-1/2 text-white"
            initial={{ opacity: 0, scale: 1 }}
            animate={inView ? (scrollDirection === 'down' ? divAnimation.down : divAnimation.up) : divAnimation.hidden}
            variants={textAnimation}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              ¡BIENVENIDO A LA UNIVERSIDAD DE SONSONATE!
            </h2>
            <p className="text-base md:text-lg lg:text-xl mb-4">
              En la Universidad de Sonsonate, nos enorgullecemos de ofrecer una
              educación de calidad que fomenta el crecimiento académico, personal
              y profesional de nuestros estudiantes. Nuestra institución se
              distingue por su compromiso con la excelencia, la innovación y el
              desarrollo integral de nuestra comunidad universitaria.
            </p>
            <p className="text-base md:text-lg lg:text-xl mb-4">
              Aquí, encontrarás un ambiente de aprendizaje inclusivo y dinámico,
              donde podrás desarrollar tus habilidades, explorar tus pasiones y
              alcanzar tus metas. Te invitamos a formar parte de nuestra familia y
              a ser protagonista de tu propia historia de éxito. ¡Bienvenido a
              nuestra universidad!
            </p>
            <motion.button
              className="bg-[#05ce0e] text-white font-semibold text-sm md:text-base lg:text-lg px-4 py-2 rounded-lg mt-2 hover:bg-green-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
            <Link href="/nuestraInstitucion">
              Conoce más
            </Link> 
            </motion.button>
          </motion.div>
          <motion.div
            className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 1, delay: 0.5 }}
            variants={imgAnimation}
          >
            <div className="relative felx-col">
              {/* Círculo de Fondo */}
              <div className="absolute -left-6 -top-6 w-72 h-72 bg-green-600 rounded-3xl opacity-30"></div>
              {/* Imagen */}
              <motion.img
                src="/images/img-inicio-1.webp" 
                alt="Estudiante feliz"
                className="realtive z-10 w-3/5 h-4/6 "
              />
            </div>
          </motion.div>
        </motion.div>
        </div>
        <motion.div
            initial={{opacity: 0, y: 20}}
            animate={inView ? (scrollDirection === 'down' ? divAnimation.down : divAnimation.up) : divAnimation.hidden}
            transition={{duration: 0.9}}
            variants={figuraAnition}
        >
          <div className="absolute w-full h-16">
                <div className="absolute top-0 left-0 w-full h-20 bg-[#05ce0e] transform -skew-y-3 origin-top-left"
                ></div>
          </div>
        </motion.div>
      </div>
    );
  };
  
  export default LaboratoriosUSO;
  