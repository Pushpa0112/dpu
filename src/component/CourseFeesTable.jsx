import React from 'react';

const CourseFeesTable = ({ onOpenModal }) => {
  const courseData = [
    { name: "Online BBA", fees: "₹1,45,400/-", duration: "3 Years" },
    { name: "Online MBA", fees: "₹1,89,400/-", duration: "2 Years" },
    { name: "Online MCA", fees: "₹1,40,000/-", duration: "2 Years" },
    { name: "Digital Marketing", fees: "₹28,000/-", duration: "6 Months" },
    { name: "HAHM", fees: "₹28,000/-", duration: "6 Months" },
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header Text */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-6xl font-extrabold text-[#d2232a] mb-4">
            DPU Online Courses
          </h2>
          <p className="text-gray-600 text-base md:text-xl font-medium">
            Updated Fees for 2025 Academic Year
          </p>
        </div>

        {/* Outer Container for Shadow & Radius */}
        <div className="overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100">
          
          {/* Scrollable Wrapper */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white min-w-[600px]">
              <thead>
                <tr className="bg-[#f1f4f9] text-[#4a5568] text-xs md:text-base font-bold uppercase tracking-wider">
                  <th className="px-6 md:px-8 py-5 text-left">Courses</th>
                  <th className="px-6 md:px-8 py-5 text-center">Full Fees</th>
                  <th className="px-6 md:px-8 py-5 text-right">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {courseData.map((course, index) => (
                  <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                    {/* Course Name */}
                    <td className="px-6 md:px-8 py-6 text-gray-900 font-bold text-sm md:text-lg whitespace-nowrap">
                      {course.name}
                    </td>
                    
                    {/* Fees */}
                    <td className="px-6 md:px-8 py-6 text-center">
                      <span className="text-[#d2232a] font-bold text-sm md:text-lg">
                        {course.fees}
                      </span>
                    </td>
                    
                    {/* Duration */}
                    <td className="px-6 md:px-8 py-6 text-right whitespace-nowrap">
                      <span className="inline-block bg-[#fde8e8] text-[#d2232a] px-4 md:px-5 py-1.5 rounded-full text-xs md:text-sm font-bold shadow-sm">
                        {course.duration}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Subtle Mobile Indicator (Optional) */}
          <div className="md:hidden bg-gray-50 text-[10px] text-center py-2 text-gray-400 font-medium border-t border-gray-100 uppercase tracking-widest">
            ← Swipe to view more →
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseFeesTable;