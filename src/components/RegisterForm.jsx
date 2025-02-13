import React, { useRef } from 'react';
import { Upload } from 'lucide-react';

const RegisterForm = () => {
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6 w-full">
      <div className="flex w-full max-w-6xl bg-white shadow-lg rounded-xl overflow-hidden min-h-[80vh]">
        {/* Step-by-Step Progress Indicator */}
        <div className="w-1/3 bg-blue-50 p-6 border-r">
          <div className="relative">
            <div className="absolute left-2 top-0 w-1 h-full bg-blue-500"></div>
            {["Sign Up and Choose Your Course", "Onboarding", "Start Learning"].map((step, index) => (
              <div key={index} className="relative mb-6 flex items-start">
                <div className="w-5 h-5 bg-blue-500 rounded-full z-10"></div>
                <div className="ml-4">
                  <h3 className="font-bold">{step}</h3>
                  <p className="text-sm text-gray-600">Description for {step.toLowerCase()}.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Form Section */}
        <div className="w-2/3 p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="border p-2 rounded w-full" placeholder="First name" />
              <input className="border p-2 rounded w-full" placeholder="Last name" />
              <input className="border p-2 rounded w-full" type="email" placeholder="Email" />
              <input className="border p-2 rounded w-full" placeholder="Location" />
              <select className="border p-2 rounded w-full">
                <option>Choose module</option>
                <option value="module1">Software Development</option>
                <option value="module2">Data Science</option>
                <option value="module3">Cloud Computing</option>
              </select>
              <select className="border p-2 rounded w-full">
                <option>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <select className="border p-2 rounded w-full">
                <option>Disabled</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <input className="border p-2 rounded w-full" type="tel" placeholder="Phone" />
            </div>
            <div className="mt-4">
              <button onClick={handleUploadClick} className="border p-2 rounded w-full flex gap-2 items-center justify-center">
                <Upload size={16} /> Upload Image
              </button>
              <input type="file" ref={fileInputRef} className="hidden" />
            </div>
            <div className="mt-4">
              <input className="border p-2 rounded w-full" type="number" placeholder="Amount" />
            </div>
            <div className="mt-4">
              <textarea className="border p-2 rounded w-full" placeholder="Description" />
            </div>
            <div className="mt-6">
              <button className="bg-blue-500 text-white p-2 rounded w-full">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
