import { FaUser, FaDollarSign, FaCalendarAlt, FaClock, FaPen } from "react-icons/fa";

const Invoices = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-3xl p-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-3 mb-4">
          <h2 className="text-xl font-semibold">
            <span className="text-gray-500">Invoices</span> | <span className="text-black">Create invoice</span>
          </h2>
          <div className="flex items-center space-x-3">
            <button className="bg-gray-200 p-2 rounded-full">
              🌙 {/* Placeholder for dark mode toggle */}
            </button>
            <div className="flex items-center space-x-2 bg-gray-200 py-1 px-3 rounded-full">
              <span className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-semibold">JD</span>
              <span className="text-gray-700">John Doe</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <div className="border rounded-md flex items-center p-3 bg-gray-100 cursor-pointer">
            <FaUser className="text-gray-500 mr-3" />
            <span className="text-gray-600 flex-grow">Select learner</span>
            <span className="text-gray-400">▼</span>
          </div>
          <div className="border rounded-md flex items-center p-3 bg-gray-100">
            <FaDollarSign className="text-gray-500 mr-3" />
            <input type="text" placeholder="Enter amount in USD" className="bg-transparent flex-grow focus:outline-none" />
          </div>
          <div className="border rounded-md flex items-center p-3 bg-gray-100">
            <FaCalendarAlt className="text-gray-500 mr-3" />
            <input type="date" className="bg-transparent flex-grow focus:outline-none text-gray-600" />
          </div>
          <div className="border rounded-md flex items-center p-3 bg-gray-100 cursor-pointer">
            <FaClock className="text-gray-500 mr-3" />
            <span className="text-gray-600 flex-grow">Status</span>
            <span className="text-gray-400">▼</span>
          </div>
          <div className="border rounded-md flex items-center p-3 bg-gray-100">
            <FaPen className="text-gray-500 mr-3" />
            <input type="text" placeholder="Payment details" className="bg-transparent flex-grow focus:outline-none" />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end mt-6 space-x-3">
          <button className="flex items-center border py-2 px-4 rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300">
            Cancel →
          </button>
          <button className="flex items-center bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800">
            Create invoice →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Invoices;
