import React, { useState } from 'react';
import logo from '../images/logo2.jpg';
import { Navigate } from 'react-router-dom';

const Main1 = ({ setModalAdd, setModalLog }) => {
  const [isLoginHovered, setIsLoginHovered] = useState(false);
  const login = () => {
    Navigate('/menu')
  }

  return (
    <div className='max-w-7xl flex flex-col md:flex-row items-center justify-between mx-auto p-6 mt-16'>
      {/* Text Section */}
      <div className='md:w-1/2 flex flex-col justify-center gap-6 text-center md:text-left'>
        <h1 className='text-5xl md:text-6xl font-extrabold text-gray-900'>CoffeShop</h1>
        <h2 className='text-lg md:text-xl font-medium text-gray-700 leading-relaxed'>
          “Temukan Perpaduan Kenyamanan dan Kenikmatan Rasa Kopi di Setiap Cangkirnya Hanya di CoffeShop”
        </h2>
        <p className='text-gray-600 text-lg flex items-center justify-center md:justify-start'>
          📍 Lokasi: <span className='font-semibold ml-2'>Puri Pamulang</span>
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
          <button
            className='bg-white px-8 py-3 border-2 border-black rounded-lg font-semibold text-black hover:bg-black hover:text-white transition duration-300'
            onClick={() => setModalAdd(true)}
          >
            Daftar
          </button>
          <button
            onClick={() => window.location.href='/menu'}
            onMouseEnter={() => setIsLoginHovered(true)}
            onMouseLeave={() => setIsLoginHovered(false)}
            className={`px-8 py-3 border-2 rounded-lg font-semibold transition duration-300 ${isLoginHovered ? 'bg-white text-black border-black' : 'bg-black text-white border-black hover:bg-gray-800'}`}
          >
            Login
          </button>
        </div>
      </div>
      
      {/* Image Section */}
      <div className='md:w-1/2 flex justify-center mt-8 md:mt-0'>
        <img src={logo} alt='Coffee Shop' className='w-[70%] md:w-[60%] object-cover rounded-lg shadow-xl' />
      </div>
    </div>
  );
};

export default Main1;