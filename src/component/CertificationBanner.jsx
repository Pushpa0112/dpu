import React from 'react';

const CertificationBanner = ({ onOpenModal }) => {
  return (
    /* The gradient is now applied to the entire section, 
      matching the full-bleed look of your reference image.
    */
    <section className="w-full py-12 md:py-20 px-4 bg-gradient-to-r from-[#eb304e] via-[#b6245d] to-[#601d4b]">
      
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center relative">
        <img
          src="https://www.dypatilonline.com/img/desktop-sec-new.png"
          alt="University Certifications and AI Tools"
          className="w-full h-auto max-w-[1250px] object-contain block mx-auto drop-shadow-2xl"
          loading="lazy"
        />
        
      </div>
    </section>
  );
};

export default CertificationBanner;
