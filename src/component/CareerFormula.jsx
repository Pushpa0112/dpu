import React from 'react';

const CareerFormula = ({ onOpenModal }) => {
  const features = [
    {
      title: "Industry-Relevant Curriculum",
      description: "Cutting-edge online programs crafted by industry experts at DPU-COL, ensuring academic rigor and real-world readiness."
    },
    {
      title: "100% Placement Assistance",
      description: "Comprehensive support including internships, resume building, and career guidance to help you succeed professionally."
    },
    {
      title: "Flexible & Credible Learning",
      description: "Learn anytime, anywhere—programs are UGC, AICTE, and DEB approved, and carry the same credibility as on-campus degrees."
    },
    {
      title: "Live & Recorded Immersive Learning",
      description: "Engaging 24/7 access to live lectures, recorded sessions, expert faculty interactions, discussion forums, and an AI-driven LMS."
    }
  ];

  return (
    <section className="py-20  bg-[#f4faff]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 ">
        
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-6xl font-extrabold text-[#d2232a] tracking-tight">
            DPU Online: Career Acceleration Formula
          </h2>
          {/* <button
            type="button"
            className="mt-6 px-8 py-3 bg-[#d2232a] text-white rounded-lg font-bold text-lg shadow hover:bg-[#b11f25] transition-all"
            onClick={onOpenModal}
          >
            Get Counselling
          </button> */}
        </div>

        {/* 2x2 Feature Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-shadow duration-300 border-none"
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#d2232a] mb-4 leading-tight">
                {item.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed font-medium opacity-90">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CareerFormula;
