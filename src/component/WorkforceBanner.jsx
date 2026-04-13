'use client';

import React from 'react';
// import { useModal } from '@/context/ModalContext';

const WorkforceBanner = ({ onOpenModal }) => {
  // const { openModal } = useModal();

  return (
    <section className="relative w-full lg:py-28 overflow-hidden bg-white">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          // backgroundImage: `url(/media_1732366602118.png)`,
        }}
      >
        {/* Removed backdrop-blur to fix the blur issue. Adjusted opacity for better contrast */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-5 tracking-tighter leading-tight">
          Superchargee your workforce
        </h1>

        <p className="text-xl md:text-2xl font-light opacity-95 mb-10 max-w-3xl mx-auto leading-relaxed">
          Choose from a range of programs or tailor them to suit your business needs.
        </p>

        {/* Updated Button: Solid Brand Red (#A82323) with better hover state */}
        <div className="flex justify-center pt-2">
          <button 
            type="button"
            className="cursor-pointer bg-gradient-to-r from-[#eb304e] via-[#b6245d] to-[#601d4b] hover:bg-[#8B1C1C] text-white px-10 py-4.5 rounded-2xl text-lg font-bold transition-all duration-300  active:scale-95 flex items-center gap-2 mb-4"
            onClick={onOpenModal}
          >
            Enquire Now
            {/* <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg> */}
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkforceBanner;
