import React, { useState } from 'react';
import { User, Mail, MapPin, Phone, Upload, DollarSign, FileText, ChevronDown } from 'lucide-react';

const ApplicationForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [module, setModule] = useState("");
  const [disabled, setDisabled] = useState("");
  
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Application</h2>
        <span className="text-gray-500">Profile</span>
      </div>
      <h2 className="text-2xl font-semibold mb-6">Start new application</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center border rounded-lg p-2">
          <User className="text-gray-500" size={20} />
          <input type="text" placeholder="First name" className="ml-2 w-full outline-none" />
        </div>
        <div className="flex items-center border rounded-lg p-2">
          <User className="text-gray-500" size={20} />
          <input type="text" placeholder="Last name" className="ml-2 w-full outline-none" />
        </div>
        <div className="flex items-center border rounded-lg p-2">
          <Mail className="text-gray-500" size={20} />
          <input type="email" placeholder="Email" className="ml-2 w-full outline-none" />
        </div>
        <div className="flex items-center border rounded-lg p-2">
          <MapPin className="text-gray-500" size={20} />
          <input type="text" placeholder="Location" className="ml-2 w-full outline-none" />
        </div>
        <div className="flex items-center border rounded-lg p-2 relative">
          <select className="w-full outline-none appearance-none" value={module} onChange={(e) => setModule(e.target.value)}>
            <option value="" disabled>Choose module</option>
            <option>Software Development</option>
            <option>Data Science</option>
            <option>Cloud Computing</option>
          </select>
          <ChevronDown className="text-gray-500 absolute right-3" size={20} />
        </div>
        <div className="flex items-center border rounded-lg p-2 relative">
          <select className="w-full outline-none appearance-none" value={disabled} onChange={(e) => setDisabled(e.target.value)}>
            <option value="" disabled>Disabled</option>
            <option>Yes</option>
            <option>No</option>
          </select>
          <ChevronDown className="text-gray-500 absolute right-3" size={20} />
        </div>
        <div className="flex items-center border rounded-lg p-2">
          <Phone className="text-gray-500" size={20} />
          <input type="text" placeholder="Phone" className="ml-2 w-full outline-none" />
        </div>
      </div>
      <div className="flex items-center border rounded-lg p-2 mt-4">
        <input type="file" onChange={handleFileChange} className="hidden" id="fileUpload" />
        <label htmlFor="fileUpload" className="flex items-center cursor-pointer w-full">
          <Upload className="text-gray-500" size={20} />
          <span className="ml-2">{selectedFile ? selectedFile.name : "Upload image"}</span>
        </label>
      </div>
      <div className="flex items-center border rounded-lg p-2 mt-4">
        <DollarSign className="text-gray-500" size={20} />
        <input type="text" placeholder="Amount" className="ml-2 w-full outline-none" />
      </div>
      <div className="border rounded-lg p-2 mt-4">
        <textarea placeholder="Description" className="w-full h-24 outline-none"></textarea>
      </div>
      <div className="flex justify-between mt-6">
        <button className="px-4 py-2 bg-gray-300 text-black rounded-lg">Back</button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Register</button>
      </div>
    </div>
  );
};

export default ApplicationForm;
