import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaDollarSign, FaImage } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    location: "",
    module: "",
    gender: "",
    disability: "",
    phone: "",
    amount: "",
    description: "",
  });

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Start New Application</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center border p-2 rounded-lg">
          <FaUser className="mr-2" />
          <input
            type="text"
            placeholder="First name"
            className="w-full outline-none"
          />
        </div>
        <div className="flex items-center border p-2 rounded-lg">
          <FaUser className="mr-2" />
          <input
            type="text"
            placeholder="Last name"
            className="w-full outline-none"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="flex items-center border p-2 rounded-lg">
          <FaEnvelope className="mr-2" />
          <input
            type="email"
            placeholder="Email"
            className="w-full outline-none"
          />
        </div>
        <div className="border p-2 rounded-lg">
          <input
            type="text"
            placeholder="Location"
            className="w-full outline-none"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <select className="border p-2 rounded-lg w-full">
          <option>Choose module</option>
        </select>
        <select className="border p-2 rounded-lg w-full">
          <option>Gender</option>
        </select>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <select className="border p-2 rounded-lg w-full">
          <option>Disabled</option>
        </select>
        <div className="flex items-center border p-2 rounded-lg">
          <FaPhone className="mr-2" />
          <input
            type="text"
            placeholder="Phone"
            className="w-full outline-none"
          />
        </div>
      </div>
      <div className="mt-4 border p-2 rounded-lg bg-gray-100 text-gray-500 flex items-center">
        <FaImage className="mr-2" /> Upload image
      </div>
      <div className="flex items-center border p-2 rounded-lg mt-4">
        <FaDollarSign className="mr-2" />
        <input
          type="text"
          placeholder="Amount"
          className="w-full outline-none"
        />
      </div>
      <textarea
        className="w-full border p-2 rounded-lg mt-4"
        placeholder="Description"
      ></textarea>
      <div className="flex justify-between mt-4">
        <button className="px-4 py-2 bg-gray-300 rounded-lg">Back</button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Register</button>
      </div>
    </div>
  );
};

export default Register;
