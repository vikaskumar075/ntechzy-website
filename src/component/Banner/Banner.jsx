import React from 'react';
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaCirclePlay } from "react-icons/fa6";
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

const Banner = () => {
  return (
    <div className='bg-cover bg-center h-screen flex flex-col justify-between p-4 lg:p-8'>
      <div className='flex flex-col lg:flex-row gap-6'>
        {/* Social Media Icons */}
        <div className='flex lg:flex-col items-center lg:items-start gap-4 lg:gap-6 mt-4 lg:mt-40'>
          <FiFacebook className='text-white text-xl lg:text-2xl'/>
          <FaInstagram className='text-white text-xl lg:text-2xl'/>
          <CiTwitter className='text-white text-xl lg:text-2xl'/>
        </div>

        {/* Text and Image Container */}
        <div className='flex flex-col lg:flex-row items-center lg:items-start flex-grow gap-4 lg:gap-10'>
          {/* Text Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className='text-center lg:text-left text-white flex-grow p-4'
          >
            <span className='block text-lg mt-2 lg:mt-20 font-semibold mb-2'>Innovative Ideas</span>
            <h1 className='text-2xl lg:text-4xl font-bold mb-4'>We offer You A digital Platform</h1>
            <p className='max-w-lg mx-auto lg:mx-0 text-sm lg:text-base'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quasi iusto ratione nemo culpa atque, laudantium ut nostrum consectetur animi quidem error rem impedit at. Dolorum ullam nemo assumenda nam!
            </p>
            <div className='flex flex-col items-center lg:items-start mt-5'>
              <span className='text-white text-lg font-semibold'>Get Started</span>
              <div className='flex flex-row items-center gap-3 lg:gap-5 mt-3'>
                <FaCirclePlay className='text-white text-2xl lg:text-3xl'/>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>View Videos</button>
              </div>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            className='flex-shrink-0 w-full lg:w-2/5 xl:w-1/2 2xl:w-1/3 h-auto mr-[-30px]'
          >
            <img src='https://gaaga.wpengine.com/wp-content/uploads/2023/06/Gaaga-Slider-1-Image-1.jpg' alt='Banner Image' className='w-full h-auto object-cover rounded-lg' />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
