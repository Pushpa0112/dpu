import React from 'react';

const Footer = ({ onOpenModal }) => {
    const programs = [
        "Online BBA",
        "online MBA",
        "Online MCA",
        "Digital Marketing",
        "HAHM"
    ];

    return (
        <footer className="bg-gradient-to-r from-[#eb304e] via-[#b6245d] to-[#601d4b] text-white py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">

                    {/* Column 1: Brand & About */}
                    <div className="space-y-6">
                        {/* Updated Logos Container - Edukyu removed */}
                        <div className="bg-white rounded-lg px-4 py-2 flex items-center shadow-sm w-fit">
                            {/* DPU Logo */}
                            <img
                                src="https://www.dypatilonline.com/img/logo-header.png"
                                alt="DPU Logo"
                                className="h-8 md:h-10 object-contain"
                            />
                        </div>

                        <p className="text-sm md:text-base leading-relaxed text-white/90">
                            <span className="font-bold text-[20px]">Disclaimer:</span> We act as a marketing service partner only. All the above University hold full rights to request change or removal of any non-relevant content. Images used are for illustrative purposes and do not directly represent the respective colleges or universities.
                        </p>
                        <div className="flex items-center space-x-5 pt-2">
                            <SocialIcon platform="twitter" />
                            <SocialIcon platform="facebook" />
                            <SocialIcon platform="instagram" />
                        </div>
                    </div>

                    {/* Column 2: Programs List */}
                    <div className="md:pl-10">
                        <h4 className="text-lg font-bold mb-6">Programs</h4>
                        <ul className="space-y-3">
                            {programs.map((program, index) => (
                                <li key={index}>
                                    <button
                                        type="button"
                                        onClick={onOpenModal}
                                        className="group flex items-center text-sm md:text-base hover:text-white/80 transition-all bg-transparent p-0 border-0 outline-none"
                                    >
                                        <span className="mr-2 text-white/70">
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                        {program}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Get In Touch</h4>
                        <div className="space-y-5">
                            <div className="flex items-center gap-3">
                                <svg className="w-5 h-5 opacity-90" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <span className="text-sm md:text-base border-b border-transparent hover:border-white/50 transition-all cursor-pointer">
                                   hi@gmail.com
                                </span>
                            </div>

                            <div className="pt-5 border-t border-gray-300">
                                <p className="text-[11px] text-white/70 font-medium mb-2 uppercase tracking-wider">Official Contacts:</p>
                                <div className="flex items-center gap-3">
                                    <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>
                                    <span className="text-xs md:text-sm text-white/90">hi@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Disclaimer Section */}
                <div className="mt-12 pt-8 border-t border-gray-300">
                    <p className="text-[15px] leading-relaxed text-center text-white/80 max-w-5xl mx-auto">
                        <span className="font-bold">Google Transparency Note :</span> All submitted information will be shared with the official admissions team for further processing. This page fully complies with Google’s Misrepresentation and Unacceptable Business Practices policies.
                    </p>
                </div>
            </div>
        </footer>
    );
};

const SocialIcon = ({ platform }) => {
  const icons = {
    twitter: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
    facebook: "M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z",
    instagram: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
  };
  return (
    <a href="#" className="hover:opacity-80 transition-opacity">
      <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
        <path d={icons[platform.toLowerCase()]} />
      </svg>
    </a>
  );
};

export default Footer;