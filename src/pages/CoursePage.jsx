import { FaSearch, FaPlus } from "react-icons/fa";
import softwareImg from "../assets/images/software.png";
import cloudImg from "../assets/images/cloud.png";
import dataImg from "../assets/images/data.png";

const CoursePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Courses</h2>
        <button className="bg-blue-900 text-white px-4 py-2 flex items-center">
          Create Course <FaPlus className="ml-2" />
        </button>
      </div>

      {/* Search Bar */}
      <div className="mt-4">
        <div className="flex items-center border p-3 bg-white">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search Course"
            className="w-full bg-transparent outline-none"
          />
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        {/* Course Card 1 */}
        <div className="border bg-white">
          <img src={softwareImg} alt="Software Engineer Path" className="w-full" />
          <div className="p-4">
            <h3 className="font-semibold">Software Engineer Path</h3>
            <p className="mt-2">
              Price: <span className="font-semibold">$ 380.00</span>
            </p>
            <p className="mt-1">
              Duration: <span className="font-semibold">12 weeks</span>
            </p>
            <p className="mt-1">
              Instructor: <span className="font-semibold">Benjamin</span>
            </p>
            <p className="mt-1">
              Learners: <span className="font-semibold">+200</span>
            </p>
            <button className="mt-4 w-full bg-blue-900 text-white px-4 py-2">
              View more
            </button>
          </div>
        </div>

        {/* Course Card 2 */}
        <div className="border bg-white">
          <img src={cloudImg} alt="Cloud Computing Expertise" className="w-full" />
          <div className="p-4">
            <h3 className="font-semibold">Cloud Computing Expertise</h3>
            <p className="mt-2">
              Price: <span className="font-semibold">$ 380.00</span>
            </p>
            <p className="mt-1">
              Duration: <span className="font-semibold">12 weeks</span>
            </p>
            <p className="mt-1">
              Instructor: <span className="font-semibold">Williams</span>
            </p>
            <p className="mt-1">
              Learners: <span className="font-semibold">+200</span>
            </p>
            <button className="mt-4 w-full bg-blue-900 text-white px-4 py-2">
              View more
            </button>
          </div>
        </div>

        {/* Course Card 3 */}
        <div className="border bg-white">
          <img src={dataImg} alt="Data Science Mastery" className="w-full" />
          <div className="p-4">
            <h3 className="font-semibold">Data Science Mastery</h3>
            <p className="mt-2">
              Price: <span className="font-semibold">$ 380.00</span>
            </p>
            <p className="mt-1">
              Duration: <span className="font-semibold">12 weeks</span>
            </p>
            <p className="mt-1">
              Instructor: <span className="font-semibold">Enoch</span>
            </p>
            <p className="mt-1">
              Learners: <span className="font-semibold">+200</span>
            </p>
            <button className="mt-4 w-full bg-blue-900 text-white px-4 py-2">
              View more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
