'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

// 1. Define the Types for the props
interface CounsellingModalProps {
  isOpen: boolean;
  onClose: () => void;
}


const CounsellingModal: React.FC<CounsellingModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [course, setCourse] = React.useState("");
  const [state, setState] = React.useState("");
  const [consent, setConsent] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  const router = useRouter();

  if (!isOpen) return null;

  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
    "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli", "Delhi",
    "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");
    setSuccess(false);
    try {
      const response = await fetch("/api/nmims-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          mobile,
          email,
          city: state,
          programme: course,
          source_name: "DPU_ADs",
          source_id: "446",
          university_code: "",
          university_name: "DPU Online",
          supplier_id: "SN00000003"
        })
      });
      const result = await response.json();
      if (result.success) {
        setSuccess(true);
        setMessage(result.message || "Our counselor will connect with you shortly");
        setName("");
        setMobile("");
        setEmail("");
        setState("");
        setCourse("");
        setConsent(false);
        setTimeout(() => {
          onClose();
          router.push("/dpu-online/thankyou");
        }, 1200);
      } else {
        setSuccess(false);
        setMessage(result.message || "Submission failed. Please try again.");
      }
    } catch (err) {
      setSuccess(false);
      setMessage("Submission failed. Please try again.");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Background overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal container */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg transform transition-all animate-in fade-in zoom-in duration-300 overflow-hidden">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              Get 100% Free Counselling
            </h3>
            <p className="text-gray-500 mt-2 font-medium">
              Fill the form to get expert guidance
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {message && (
              <div className={`p-3 rounded text-sm text-center ${success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                {message}
              </div>
            )}
            {/* Input Fields */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-[#d2232a] outline-none transition-all placeholder:text-gray-400 text-black"
              required
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              className="w-full p-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-[#d2232a] outline-none transition-all placeholder:text-gray-400 text-black"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Phone Number"
              className="w-full p-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-[#d2232a] outline-none transition-all placeholder:text-gray-400 text-black"
              required
              value={mobile}
              onChange={e => setMobile(e.target.value)}
            />

            {/* Select Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <select name="program"
                  className="w-full p-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-[#d2232a] outline-none bg-white appearance-none text-gray-600"
                  required
                  value={course}
                  onChange={e => setCourse(e.target.value)}
                >
                  <option value="">Select Course</option>
                  <option value="Online BBA">Online BBA</option>
                  <option value="Online MBA">Online MBA</option>
                  <option value="Online MCA">Online MCA</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="HAHM">HAHM</option>
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>

              <div className="relative">
                <select name="city"
                  className="w-full p-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-[#d2232a] outline-none bg-white appearance-none text-gray-600"
                  required
                  value={state}
                  onChange={e => setState(e.target.value)}
                >
                  <option value="">Select State</option>
                  {indianStates.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>

            {/* Terms */}
            <div className="text-[11px] leading-relaxed text-gray-500">
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-1 rounded border-gray-300 text-[#d2232a] focus:ring-[#d2232a]"
                  checked={consent}
                  onChange={e => setConsent(e.target.checked)}
                  required
                  disabled={isSubmitting}
                />
                <span>
                                        I Agree to <a href="/terms-conditions" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800">Terms and Conditions</a> and <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800">Privacy Policy</a> and provide consent to be contacted via WhatsApp, SMS, Mail etc.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              name="submit"
              className="cursor-pointer w-full  bg-gradient-to-r from-[#eb304e] via-[#b6245d] to-[#601d4b] hover:bg-[#b71b22] text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg active:scale-[0.98] flex items-center justify-center gap-2"
              disabled={isSubmitting || !consent}
            >
              {isSubmitting ? "Submitting..." : "Submit Now"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CounsellingModal;
