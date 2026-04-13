"use client";

import React from 'react';
import Link from 'next/link';

const Header = ({ onOpenModal }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white py-2 px-4 shadow-md z-50 animate-fadeInUp">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex items-center min-w-0">
          <Link href="/" className="flex items-center">
            <img
              src="https://www.dypatilonline.com/img/logo-header.png"
              alt="DPU Logo"
              className="h-10 w-auto object-contain cursor-pointer md:h-12"
              style={{ maxWidth: 140 }} // Slightly increased max-width since it's the solo logo
            />
          </Link>
        </div>

        {/* Action Button Section */}
        <div className="flex items-center">
          <button
            type="button"
            className="flex cursor-pointer bg-gradient-to-r from-[#eb304e] via-[#b6245d] to-[#601d4b] hover:opacity-90 text-white font-semibold py-2.5 px-5 md:py-3 md:px-6 rounded-[12px] transition-all duration-300 text-sm md:text-base tracking-wider shadow-sm items-center gap-2"
            onClick={onOpenModal}
          >
            {/* Download Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="flex-shrink-0"
            >
              <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-32c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
            </svg>
            <span className="whitespace-nowrap">Download Brochure</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;