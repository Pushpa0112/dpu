import React from 'react';

const DegreeSection = () => {
  const points = [
    { 
      text: "Ranked 41st by NIRF", 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L9 9H1L7 14L5 22L12 17L19 22L17 14L23 9H15L12 1z"/>
        </svg>
      ) 
    },
    { 
      text: "Recognized by WES", 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      ) 
    },
    { 
      text: "Hold an NAAC-accredited degree", 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
        </svg>
      ) 
    },
  ];

  return (
    <div className="w-full bg-[#f8fafc] py-16 md:py-24"> 
      <section className="max-w-7xl mx-auto px-6">
        
        {/* Main Title - Matches the bold red style */}
        <h2 className="text-3xl md:text-5xl font-bold text-[#c13333] text-center mb-20 tracking-tight">
          Get a Prestigious Degree from D. Y. Patil Online
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Side: Info Card */}
          <div className="w-full lg:w-[40%]">
            <div className="bg-white rounded-xl shadow-[0_4px_25px_rgba(0,0,0,0.05)] border border-gray-100 p-10 md:p-14 min-h-[400px]">
              <h3 className="text-2xl font-bold text-[#c13333] mb-10">
                About DPU Degree
              </h3>
              
              <ul className="space-y-6">
                {points.map((point, index) => (
                  <li key={index} className="flex items-center gap-6">
                    {/* Red Circular Icon - Exactly like the image */}
                    <div className="flex-shrink-0 w-12 h-12 bg-[#c13333] text-white rounded-full flex items-center justify-center shadow-md">
                      {point.icon}
                    </div>
                    {/* Text - Matches the spacing and color */}
                    <span className="text-[#333] text-lg md:text-xl font-medium">
                      {point.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side: Certificate Image */}
          <div className="w-full lg:w-[52%] flex justify-center">
            <div className="relative group">
              {/* background shadow wrapper */}
              <div className=" rounded-lg scale-95 opacity-50 transition-all duration-700"></div>
              
              <img 
                /* NEW IMAGE SRC */
                src="https://www.dypatilonline.com/onlinemba/pune/images/certificates.webp" 
                alt="DPU Online Degree Certificate" 
                /* NEW CLASSES: 
                  Added aspect-[5/3] for standard certificate proportions.
                  Added drop-shadow-2xl for clean depth.
                  Reduced max-w to [600px] to match the layout better.
                */
                className="relative rounded-lg shadow-xl drop-shadow-2xl w-full h-auto aspect-[5/3] max-w-[600px] object-contain transition-transform duration-500 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default DegreeSection;
