import laptopImage from '../assets/images/laptop.png';
import softwareDevIcon from '../assets/images/software-dev.png';
import dataScienceIcon from '../assets/images/data-science.png';
import cloudComputingIcon from '../assets/images/cloud-computing.png';
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaGraduationCap, FaVenusMars, FaPhone, FaImage, FaDollarSign } from "react-icons/fa";
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-6">
      <div className="max-w-5xl flex items-center space-x-10 mb-12 bg-blue-900">
        {/* Text Section */}
        <div className="text-white max-w-md ">
          <h1 className="text-3xl font-bold mb-4">
            Unlock Your Potential with <br /> Industry-Leading Courses!
          </h1>
          <p className="text-lg mb-6">
            "Join thousands of learners gaining real-world skills and advancing their careers.
            Our expert-led courses are designed to empower you to succeed."
          </p>
          <button className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg shadow-md hover:bg-gray-200">
            Get started
          </button>
        </div>

        {/* Image Section */}
        <div>
          <img
            src={laptopImage}
            alt="Laptop with hands typing"
            className="w-[400px]"
          />
        </div>
      </div>
      <div>

      </div>
      {/* Solutions Section */}
      <div className="text-center text-black mb-8">
        <h2 className="text-3xl font-bold">Our solutions</h2>
        <p className="text-lg text-black">
          Create your account quickly with just your email or social media login, then explore a wide range
        </p>
      </div>

      <div className="flex space-x-6">
        {/* Software Development Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-80">
          <img src={softwareDevIcon} alt="Software Development" className="w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Software Development</h3>
          <p className="text-gray-700 mb-4">
            Unlock your potential with comprehensive training in modern software development, from coding fundamentals to building complex applications.
          </p>
          <p className="font-bold">Price: $350</p>
        </div>

        {/* Data Science Mastery Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-80">
          <img src={dataScienceIcon} alt="Data Science Mastery" className="w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Data Science Mastery</h3>
          <p className="text-gray-700 mb-4">
            Equip yourself with the skills to analyze, interpret, and leverage data, becoming an expert in machine learning, AI, and data-driven decision-making.
          </p>
          <p className="font-bold">Price: $300</p>
        </div>

        {/* Cloud Computing Expertise Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-80">
          <img src={cloudComputingIcon} alt="Cloud Computing Expertise" className="w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Cloud Computing Expertise</h3>
          <p className="text-gray-700 mb-4">
            Gain hands-on experience in cloud architecture and deployment, preparing you to design, implement, and manage scalable cloud solutions in the real world.
          </p>
          <p className="font-bold">Price: $300</p>
        </div>
      </div>
      {/* Next Step Section */}
      <div className="text-center text-black bg-blue-900 mt-16">
        <h2 className="text-3xl font-bold">What will be next step</h2>
        <p className="text-lg text-gray-200 mb-6">
          Discover our diverse stack of solutions, including software development, data science, and cloud tools. Sign up today and kickstart your journey!
        </p>
        <div className="grid grid-cols-4 gap-4">
          {['ReactJs', 'NextJs', 'NodeJs', 'Django', 'MongoDB', 'VueJs', 'PowerBI', 'Python', 'Excel', 'Tableau', 'AWS', 'Azure'].map((tech) => (
            <button key={tech} className="px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-blue-900">
              {tech}
            </button>
          ))}
        </div>
      </div>


      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
        <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-5xl flex">
          {/* Left Section - Steps */}
          <div className="w-1/3 pr-10">
            <div className="relative">
              <div className="absolute w-1 bg-blue-500 h-full left-3 top-1"></div>
              <div className="relative mb-8">
                <div className="w-6 h-6 bg-white border-4 border-blue-500 rounded-full absolute -left-4 top-1"></div>
                <h3 className="font-semibold text-lg">Sign Up and Choose Your Course</h3>
                <p className="text-gray-500 text-sm">
                  Create your account quickly with just your email or social media login, then explore a wide range.
                </p>
              </div>
              <div className="relative mb-8">
                <div className="w-6 h-6 bg-white border-4 border-blue-500 rounded-full absolute -left-4 top-1"></div>
                <h3 className="font-semibold text-lg">Onboarding</h3>
                <p className="text-gray-500 text-sm">
                  Create your account quickly with just your email or social media login, then explore a wide range.
                </p>
              </div>
              <div className="relative">
                <div className="w-6 h-6 bg-white border-4 border-blue-500 rounded-full absolute -left-4 top-1"></div>
                <h3 className="font-semibold text-lg">Start Learning</h3>
                <p className="text-gray-500 text-sm">
                  Create your account quickly with just your email or social media login, then explore a wide range.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="w-2/3">
            <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center border p-2 rounded-md bg-gray-100">
                <FaUser className="text-gray-500 mr-2" />
                <input type="text" placeholder="First name" className="bg-transparent focus:outline-none w-full" />
              </div>
              <div className="flex items-center border p-2 rounded-md bg-gray-100">
                <FaUser className="text-gray-500 mr-2" />
                <input type="text" placeholder="Last name" className="bg-transparent focus:outline-none w-full" />
              </div>
              <div className="flex items-center border p-2 rounded-md bg-gray-100">
                <FaEnvelope className="text-gray-500 mr-2" />
                <input type="email" placeholder="Email" className="bg-transparent focus:outline-none w-full" />
              </div>
              <div className="flex items-center border p-2 rounded-md bg-gray-100">
                <FaMapMarkerAlt className="text-gray-500 mr-2" />
                <input type="text" placeholder="Location" className="bg-transparent focus:outline-none w-full" />
              </div>
              <div className="flex items-center border p-2 rounded-md bg-gray-100">
                <FaGraduationCap className="text-gray-500 mr-2" />
                <input type="text" placeholder="Choose module" className="bg-transparent focus:outline-none w-full" />
              </div>
              <div className="flex items-center border p-2 rounded-md bg-gray-100">
                <FaVenusMars className="text-gray-500 mr-2" />
                <input type="text" placeholder="Gender" className="bg-transparent focus:outline-none w-full" />
              </div>
              <div className="flex items-center border p-2 rounded-md bg-gray-100">
                <FaUser className="text-gray-500 mr-2" />
                <input type="text" placeholder="Disabled" className="bg-transparent focus:outline-none w-full" />
              </div>
              <div className="flex items-center border p-2 rounded-md bg-gray-100">
                <FaPhone className="text-gray-500 mr-2" />
                <input type="text" placeholder="Phone" className="bg-transparent focus:outline-none w-full" />
              </div>
            </div>
            <div className="border p-2 rounded-md bg-gray-100 flex items-center justify-center mt-4 cursor-pointer">
              <FaImage className="text-gray-500 mr-2" />
              <span className="text-gray-500">Upload image</span>
            </div>
            <div className="flex items-center border p-2 rounded-md bg-gray-100 mt-4">
              <FaDollarSign className="text-gray-500 mr-2" />
              <input type="text" placeholder="Amount" className="bg-transparent focus:outline-none w-full" />
            </div>
            <textarea className="border p-2 rounded-md bg-gray-100 w-full mt-4" rows="3" placeholder="Description"></textarea>
            <button className="w-full mt-6 py-3 bg-blue-900 text-white font-semibold rounded-md flex items-center justify-center">
              Register
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
