import React from 'react';

const ExcellenceSection = () => {
  const stats = [
    {
      value: "1,00,000",
      label: "Alumni",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
        </svg>
      )
    },
    {
      value: "Multiple",
      label: "Specializations",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L1 7l11 5 11-5-11-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      )
    },
    {
      value: "24/7",
      label: "Career Support",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      )
    },
    {
      value: "No-Cost",
      label: "EMI",
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-gradient-to-r from-[#eb304e] via-[#b6245d] to-[#601d4b] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-white text-3xl md:text-5xl font-bold text-center mb-16 tracking-tight">
          Excellence in a Glimpse
        </h2>

        {/* Stats Flexbox Container (Centered) */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {stats.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-10 flex flex-col items-center justify-center text-center shadow-2xl transition-all hover:scale-110 w-full sm:w-[260px] md:w-[280px]"
            >
              {/* Circular Icon Wrapper (Larger) */}
              <div className="w-24 h-24 rounded-full bg-[#c13333] text-white flex items-center justify-center mb-8 shadow-inner">
                {item.icon}
              </div>
              
              {/* Bold Value (Larger) */}
              <h3 className="text-2xl font-extrabold text-black leading-tight">
                {item.value}
              </h3>
              
              {/* Gray Subtitle */}
              <p className="text-gray-500 text-base font-semibold mt-2">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExcellenceSection;