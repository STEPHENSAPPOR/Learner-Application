import { FaArrowRight } from "react-icons/fa";
import path from "../assets/images/path.png"; // Ensure this image is in your project

const Details = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="flex w-full max-w-5xl space-x-6">
        {/* Left Side: Course Info */}
        <div className="w-1/3 bg-white shadow-lg p-4">
          <img src={path} alt="Course" className="w-full" />
          <h2 className="text-lg font-semibold mt-3">Software Engineering Path</h2>
          <div className="border-t mt-3 pt-3">
            <h3 className="text-md font-semibold">About Course</h3>
            <p className="text-gray-600 text-sm mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting.
            </p>
            <div className="mt-3 space-y-2 text-sm">
              <p className="flex justify-between">
                <span className="text-gray-500">Price:</span>
                <span className="font-semibold">$ 380.00</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-500">Duration:</span>
                <span className="font-semibold">12 weeks</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-500">Instructor:</span>
                <span className="font-semibold">Benjamin</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-500">Date:</span>
                <span className="font-semibold">07 Jan, 2025</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Description & Stacks */}
        <div className="w-2/3 bg-white shadow-lg p-4">
          <h3 className="text-md font-semibold">Description</h3>
          <p className="text-gray-600 text-sm mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
          <h3 className="text-md font-semibold mt-4">Stacks</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            <button className="border bg-gray-100 px-4 py-2 text-sm">ReactJs</button>
            <button className="border bg-gray-100 px-4 py-2 text-sm">NextJs</button>
            <button className="border bg-gray-100 px-4 py-2 text-sm">NodeJs</button>
            <button className="border bg-gray-100 px-4 py-2 text-sm">Django</button>
            <button className="border bg-gray-100 px-4 py-2 text-sm">MongoDB</button>
            <button className="border bg-gray-100 px-4 py-2 text-sm">Vue.Js</button>
          </div>

          {/* Buttons */}
          <div className="flex justify-end mt-6 space-x-3">
            <button className="flex items-center border py-2 px-4 text-gray-700 bg-gray-200 hover:bg-gray-300">
              Back <FaArrowRight className="ml-2" />
            </button>
            <button className="flex items-center bg-blue-900 text-white py-2 px-4 hover:bg-blue-800">
              Update <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
