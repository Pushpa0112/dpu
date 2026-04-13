import React from "react";

const DPUContactButtons = () => (
  <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
    {/* WhatsApp Button */}
    <a
      href="https://wa.me/919137777888"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg transition-colors duration-200"
      aria-label="Chat on WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8 text-white">
        <path d="M20.52 3.48A12.07 12.07 0 0012 0C5.37 0 .01 5.37.01 12c0 2.11.55 4.18 1.6 6.01L0 24l6.18-1.62A12.07 12.07 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 22c-1.85 0-3.67-.5-5.24-1.45l-.37-.22-3.67.96.98-3.58-.24-.37A9.98 9.98 0 012 12C2 6.48 6.48 2 12 2c2.54 0 4.93.99 6.73 2.77A9.97 9.97 0 0122 12c0 5.52-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.18.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.63 1.12 2.81.14.18 1.93 2.95 4.68 4.02.65.28 1.16.45 1.56.58.65.21 1.24.18 1.7.11.52-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
      </svg>
    </a>
    {/* Call Button */}
    <a
      href="tel:9137777888"
      className="flex items-center justify-center w-14 h-14 rounded-full bg-orange-500 hover:bg-orange-600 shadow-lg transition-colors duration-200"
      aria-label="Call Now"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h0a2.25 2.25 0 002.25-2.25v-2.25a.75.75 0 00-.75-.75h-3.25a.75.75 0 00-.75.75v1.25c-5.385 0-9.75-4.365-9.75-9.75V4.5a.75.75 0 00-.75-.75H4.5A2.25 2.25 0 002.25 6.75z" />
      </svg>
    </a>
  </div>
);

export default DPUContactButtons;
