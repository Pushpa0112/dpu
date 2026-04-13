import React from 'react';

const HeroSection = ({ onOpenModal }) => {
    // Array of all Indian States & UTs
    const indianStates = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
        "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
        "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
        "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
        "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
        "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
        "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
    ];

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = {
            name: form.name.value,
            email: form.email.value,
            mobile: form.mobile.value,
            city: form.city.value,
            programme: form.program.value,
            source_name: "DPU_ADs",
            source_id: "446",
            university_code: "",
            university_name: "DPU Online",
            supplier_id: "SN00000003"
        };
        try {
            const res = await fetch('/api/nmims-lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                window.location.href = '/dpu-online/thankyou';
            } else {
                const result = await res.json();
                alert(result.message || 'Submission failed. Please try again.');
            }
        } catch (err) {
            alert('Submission failed. Please try again.');
        }
    };

    return (
        <section className="relative overflow-hidden pt-16 md:pt-32 pb-8 md:pb-20 flex items-center min-h-[70vh] md:min-h-[60vh]">
            {/* Background Image with Red Gradient Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    // backgroundImage: `url('https://dypatilmba.jaroeducation.com/img/DPU%20Web%20Banner.jpg')`,
                }}
            >
                <div className="absolute inset-0  bg-gradient-to-r from-[#eb304e] via-[#b6245d] to-[#601d4b]"></div>
            </div>

            <div className="relative z-10 max-w-7xl  font-sans  mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center w-full">

                {/* Left Content */}
                <div className="text-white space-y-2 animate-fadeIn antialiased mt-10">
                    {/* DPU - Added font-black for more weight and tracking-tighter for modern look */}
                    <h1 className="text-4xl  lg:text-8xl font-black tracking-tighter font-sans">
                        DPU
                    </h1>

                    {/* Subtitle - Tracking-wide and Medium font for readability */}
                    <h2 className="text-lg xs:text-xl  md:text-3xl lg:text-4xl font-semibold leading-tight  ">
                        Learn Remotely , Lead Globally
                    </h2>

                    
                    <p className="text-base xs:text-lg md:text-xl font-normal opacity-90 ">
                        India's Only Comfort Learning Platform
                    </p>

                    <div className="pt-4">
                        <button

                            type="button"

                            className="bg-white cursor-pointer text-[#d2232a] px-5 py-2 rounded-[12px] font-bold text-medium md:text-lg flex items-center gap-2 hover:bg-gray-100 transition-all shadow-lg border-2 border-transparent active:border-blue-400"

                            onClick={onOpenModal}

                        >

                            Learn More

                        </button>
                    </div>
                </div>

                {/* Right Form Card */}
                <div className="bg-white rounded-2xl p-8 shadow-2xl w-full max-w-md ml-auto">
                    <h3 className="text-xl font-bold text-[#1a202c] mb-6 text-center">
                        Get 100% Free Counselling
                    </h3>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <input
                            name='name'
                            type="text"
                            placeholder="Name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 text-gray-700"
                        />
                        <input
                            name='email'
                            type="email"
                            placeholder="Email id"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 text-gray-700"
                        />
                        <input
                            name='mobile'
                            type="tel"
                            placeholder="Contact Number"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 text-gray-700"
                        />

                        {/* Course Selection */}
                        <div className="relative">
                            <select name='program' className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 text-gray-500 bg-white appearance-none">
                                <option value="">Select Course</option>
                                <option value="MBA">Online MBA</option>
                                <option value="BBA">Online BBA</option>
                                <option value="MCA">Online MCA</option>
                                <option value="DM">Digital Marketing</option>
                                <option value="HAHM">HAHM</option>

                            </select>
                            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                        </div>

                        {/* State Selection - Dynamically Mapped */}
                        <div className="relative">
                            <select name='city' className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 text-gray-500 bg-white appearance-none">
                                <option value="">Select State</option>
                                {indianStates.map((state) => (
                                    <option key={state} value={state}>
                                        {state}
                                    </option>
                                ))}
                            </select>
                            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 py-1">
                            <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 accent-[#d2232a]" id="terms" />
                            <label htmlFor="terms" className="text-[12px] leading-tight text-gray-700">
                                I Agree to  <a href="/terms-conditions" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800">Terms and Conditions</a> and <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800">Privacy Policy</a> and provide consent to be contacted via WhatsApp, SMS, Mail etc.
                            </label>
                        </div>

                        <button name='submit' className="w-full cursor-pointer bg-gradient-to-r from-[#eb304e] via-[#b6245d] to-[#601d4b] hover:bg-[#b11f25] text-white py-3 rounded-[12px] font-bold text-lg transition-all shadow-md mt-2 active:scale-[0.98]">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
