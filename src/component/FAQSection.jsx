'use client';

import React, { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // Default open first item

  const faqs = [
    {
      question: "What is the duration of the Online MBA program?",
      answer: "It’s a 2-year program, and you have up to 4 years to complete it—the validity period is double the duration."
    },
    {
      question: "What specializations are offered?",
      answer: (
        <span>
          You can choose from a wide range of fields, including:<br/>
          <ul className='list-disc ml-6 mt-2'>
            <li>Marketing Management</li>
            <li>HR Management</li>
            <li>Finance Management</li>
            <li>IT Management</li>
            <li>Project Management</li>
            <li>Operations Management</li>
            <li>Hospital &amp; Healthcare Management</li>
          </ul>
        </span>
      )
    },
    {
      question: "Is the degree recognized and accredited?",
      answer: "Yes. The program is approved by UGC, AICTE, and DEB, and the university holds a NAAC ‘A++’ accreditation. It’s also valid for points-based visa evaluation."
    },
    {
      question: "What is the eligibility Criteria for Online MBA & BBA programme?",
      answer: (
        <span>
          <b>MBA programme:</b><br/>
          Bachelor's degree with minimum 50% aggregate (45% for reserve categories)<br/><br/>
          <b>BBA programme:</b><br/>
          HSC (10+2) in any stream or equivalent from any recognized board
        </span>
      )
    },
    {
      question: "Why should one choose Dr. D. Y. Patil Vidyapeeth, Pune?",
      answer: "Dr. D. Y. Patil Vidyapeeth, Pune (DPU) is a Category-I Deemed to be university and has been providing quality education since last 14 years. DPU had been re-accredited by NAAC with a CGPA of 3.64 on a four point scale at ‘A++’ grade and is ranked as one of the top 50 Universities across India by NIRF."
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#f8faff] py-16">
      {/* 1. Collaboration Image Section */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="rounded-3xl overflow-hidden shadow-[0_15px_60px_rgba(0,0,0,0.08)]">
          <img 
            src="https://www.dypatilonline.com/img/collaboration-image.png" 
            alt="DPU COL in Collaboration with edX" 
            className="w-full h-auto object-contain transition-transform duration-500 hover:scale-[1.01]"
            loading="lazy"
          />
        </div>
      </section>

      {/* 2. FAQ Section */}
      <section className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#d2232a] mb-4 tracking-tight">
            Let's clear up some doubts
          </h2>
          <p className="text-lg text-gray-500 font-medium">
            Get answers to common questions about DPU programs
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border transition-all duration-300 rounded-2xl overflow-hidden ${
                openIndex === index 
                  ? 'border-blue-400 shadow-lg bg-white' 
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <button 
                onClick={() => handleToggle(index)}
                className="cursor-pointer w-full px-6 py-6 text-left flex justify-between items-center group"
              >
                <span className={`text-lg md:text-xl font-bold transition-colors ${
                  openIndex === index ? 'text-[#d2232a]' : 'text-gray-800'
                }`}>
                  {faq.question}
                </span>
                <svg 
                  className={`w-6 h-6 text-[#d2232a] transition-transform duration-500 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-6 text-gray-600 border-t border-gray-50 pt-4 text-lg leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQSection;
