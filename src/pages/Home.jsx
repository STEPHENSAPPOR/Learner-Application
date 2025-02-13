import laptopImage from '../assets/images/laptop.png';
import softwareDevIcon from '../assets/images/software-dev.png';
import dataScienceIcon from '../assets/images/data-science.png';
import cloudComputingIcon from '../assets/images/cloud-computing.png';
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaGraduationCap, FaVenusMars, FaPhone, FaImage, FaDollarSign } from "react-icons/fa";
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import RegisterForm from '../components/RegisterForm';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <NavBar />
      
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between w-full min-h-screen bg-blue-900 p-12 text-white">
        <div className="max-w-md text-center lg:text-left">
          <h1 className="text-4xl font-bold leading-snug">
            Unlock Your Potential with <br /> Industry-Leading Courses!
          </h1>
          <p className="text-lg mt-4">
            "Join thousands of learners gaining real-world skills and advancing their careers. Our expert-led courses are designed to empower you to succeed."
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg shadow-md hover:bg-gray-200">
            Get started
          </button>
        </div>
        <img src={laptopImage} alt="Laptop with hands typing" className="w-[500px]" />
      </section>
      
      {/* Solutions Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 py-16">
        <h2 className="text-3xl font-bold mb-4 text-center">Our Solutions</h2>
        <p className="text-lg text-gray-700 text-center max-w-2xl mb-8">
          Create your account quickly with just your email or social media login, then explore a wide range.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[{icon: softwareDevIcon, title: 'Software Development', price: 350},
            {icon: dataScienceIcon, title: 'Data Science Mastery', price: 300},
            {icon: cloudComputingIcon, title: 'Cloud Computing Expertise', price: 300}].map(({icon, title, price}) => (
            <div key={title} className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
              <img src={icon} alt={title} className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-700 mb-4">
                Gain skills to excel in {title.toLowerCase()}. Hands-on experience included.
              </p>
              <p className="font-bold">Price: ${price}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Next Step Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center bg-blue-900 text-white px-6 py-16">
        <h2 className="text-3xl font-bold">What will be the next step?</h2>
        <p className="text-lg text-gray-200 mb-6 max-w-2xl">
          Discover our diverse stack of solutions, including software development, data science, and cloud tools. Sign up today and kickstart your journey!
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl">
          {['ReactJs', 'NextJs', 'NodeJs', 'Django', 'MongoDB', 'VueJs', 'PowerBI', 'Python', 'Excel', 'Tableau', 'AWS', 'Azure'].map((tech) => (
            <button key={tech} className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-blue-900">
              {tech}
            </button>
          ))}
        </div>
      </section>

        <RegisterForm/>
      
      <Footer />
    </div>
  );
};

export default Home;
