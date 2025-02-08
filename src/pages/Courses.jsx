import { FaBook, FaDollarSign, FaUser, FaClock, FaGlobe, FaImage, FaPencilAlt } from "react-icons/fa";

const Courses = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="bg-white shadow-lg w-full max-w-3xl p-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-3 mb-4">
          <h2 className="text-xl font-semibold">
            <span className="text-gray-500">Courses</span> | <span className="text-black">Create Course</span>
          </h2>
          <div className="flex items-center space-x-3">
            <button className="bg-gray-200 p-2">🌙</button>
            <div className="flex items-center space-x-2 bg-gray-200 py-1 px-3">
              <span className="bg-blue-600 text-white w-7 h-7 flex items-center justify-center text-sm font-semibold">JD</span>
              <span className="text-gray-700">John Doe</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <div className="border flex items-center p-3 bg-gray-100">
              <FaBook className="text-gray-500 mr-3" />
              <input type="text" placeholder="Course Title" className="bg-transparent flex-grow focus:outline-none" />
            </div>
            <div className="border flex items-center p-3 bg-gray-100">
              <FaDollarSign className="text-gray-500 mr-3" />
              <input type="text" placeholder="Price" className="bg-transparent flex-grow focus:outline-none" />
            </div>
          </div>
          <div className="border flex items-center p-3 bg-gray-100">
            <FaUser className="text-gray-500 mr-3" />
            <input type="text" placeholder="Instructor" className="bg-transparent flex-grow focus:outline-none" />
          </div>
          <div className="border flex items-center p-3 bg-gray-100">
            <FaClock className="text-gray-500 mr-3" />
            <input type="text" placeholder="Duration" className="bg-transparent flex-grow focus:outline-none" />
          </div>
          <div className="border flex items-center p-3 bg-gray-100 cursor-pointer">
            <FaGlobe className="text-gray-500 mr-3" />
            <span className="text-gray-600 flex-grow">Stacks</span>
            <span className="text-gray-400">▼</span>
          </div>
          <div className="border flex items-center p-3 bg-gray-100 cursor-pointer">
            <FaImage className="text-gray-500 mr-3" />
            <span className="text-gray-600">Upload image</span>
          </div>
          <div className="border flex items-center p-3 bg-gray-100">
            <FaPencilAlt className="text-gray-500 mr-3" />
            <input type="text" placeholder="Description" className="bg-transparent flex-grow focus:outline-none" />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end mt-6 space-x-3">
          <button className="flex items-center border py-2 px-4 text-gray-700 bg-gray-200 hover:bg-gray-300">
            Cancel →
          </button>
          <button className="flex items-center bg-blue-900 text-white py-2 px-4 hover:bg-blue-800">
            Create Course →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
