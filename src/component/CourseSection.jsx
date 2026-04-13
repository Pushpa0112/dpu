import React from 'react';

const CourseSection = ({ onOpenModal }) => {
  const courses = [
    {
      title: "Online BBA",
      duration: "3 Years",
      fees: "@Rs 1,45,400 /-",
      img: "https://ignou.distancembacolleges.com/wp-content/uploads/2024/10/ignou-mba-mb.png"
    },
    {
      title: "Online MBA",
      duration: "2 Years",
      fees: "@Rs 1,89,400/-",
      img: "https://ignou.distancembacolleges.com/wp-content/uploads/2024/10/ignou-mca-mb.png"
    },
    {
      title: "Online MCA",
      duration: "2 Years",
      fees: "@Rs 1,40,000/-",
      img: "https://ignou.distancembacolleges.com/wp-content/uploads/2024/10/ignou-ma-mb.png"
    },
    {
      title: "Digital Marketing",
      duration: "6 Months",
      fees: "@Rs 28,000/-",
      img: "https://ignou.distancembacolleges.com/wp-content/uploads/2024/10/ignou-ba-mb.png"
    },
    {
      title: "HAHM",
      duration: "6 Months",
      fees: "@Rs 28,000/-",
      img: "https://ignou.distancembacolleges.com/wp-content/uploads/2024/10/ignou-bcom-mb.png"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-[#f0f7ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              {/* Image Section */}
              <div className="h-44 sm:h-52 md:h-56 overflow-hidden flex items-center justify-center bg-gray-50">
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content Section */}
              <div className="p-5 md:p-7 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-extrabold text-[#d2232a] mb-3 md:mb-4">
                  {course.title}
                </h3>

                <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                  <div className="flex items-center gap-2 md:gap-3 text-gray-700 font-medium">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="flex-shrink-0"
                    >
                      <g clipPath="url(#clip0_236_281)">
                        <path
                          d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z"
                          fill="#383837"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_236_281">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <span><strong>Duration:</strong> {course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3 text-gray-700 font-medium">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#383837"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="flex-shrink-0"
                    >
                      <path d="M6 3h12" />
                      <path d="M6 8h12" />
                      <path d="m6 13 8.5 8" />
                      <path d="M6 13h3" />
                      <path d="M9 13c6.667 0 6.667-10 0-10" />
                    </svg>
                    <span><strong>Fees:</strong> {course.fees}</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-auto flex gap-2 md:gap-3">
                  <button
                    type="button"
                    className="cursor-pointer flex-1  bg-gradient-to-r from-[#eb304e] via-[#b6245d] to-[#601d4b] hover hover:bg-[#b11f25] text-white py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-bold flex items-center justify-center gap-2 transition-colors"
                    onClick={onOpenModal}
                  >
                    {/* <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg> */}

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 512 512"
                      fill="white"
                      className="flex-shrink-0"
                    >
                      <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-32c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                    </svg>

                    Brochure
                  </button>
                  <button
                    type="button"
                    className="cursor-pointer flex-1 bg-[#e1effe] hover:bg-[#d0e5fd] text-[#d2232a] py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-bold flex items-center justify-center gap-2 transition-colors"
                    onClick={onOpenModal}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                    Enquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
