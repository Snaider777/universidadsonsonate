import Link from 'next/link';
import { FaShoppingCart, FaYoutube, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPodcast, FaTiktok } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';

const SocialButtons = () => {
  return (
    <div className="fixed top-1/2 right-4 transform -translate-y-1/2 flex flex-col space-y-3 z-50">

      {/* Botón de TikTok */}
      <Link href="https://www.tiktok.com/@somosuso?_t=ZP-8wRuVyjc2kJ&_r=1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-transparent flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors duration-200 border border-white">
        <FaTiktok className="text-xl text-black" />
      </Link>
      {/* Botón de YouTube */}
      <Link href="https://www.youtube.com/@universidaddesonsonate4512" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-transparent flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors duration-200 border border-white">
        <FaYoutube className="text-xl text-red-700" />
      </Link>
      {/* Botón de Facebook */}
      <Link href="https://www.facebook.com/usonsonate.edu.sv" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-transparent flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors duration-200 border border-white">
        <FaFacebookF className="text-xl text-blue-700" />
      </Link>

      {/* Botón de Instagram */}
      <Link href="https://www.instagram.com/somos_uso/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-transparent flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors duration-200 border border-white">
        <FaInstagram className="text-xl text-pink-400" />
      </Link>

      {/* Botón de WhatsApp */}
      <Link href="TU_ENLACE_WHATSAPP" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shadow-md hover:bg-green-600 transition-colors duration-200 border border-white">
        <BsWhatsapp className="text-xl text-white" />
      </Link>

    </div>
  );
};

export default SocialButtons;