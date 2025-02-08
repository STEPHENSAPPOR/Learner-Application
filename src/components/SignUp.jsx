import { FaUser, FaEnvelope, FaLock, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import registerImage from '../assets/images/register.png'


const SignUp = () => {
  return (
    <div className="flex h-screen">
      
      <div className="w-1/3  text-white flex flex-col justify-center items-center p-10">
        
        <div className="mt-8">
          <img
            src={registerImage}
            alt="Illustration"
            className="w-60"
          />
        </div>
      </div>

     
      <div className="w-2/3 flex justify-center items-center">
        <div className="w-full max-w-md">
          <div className="text-right mb-4">
            <span className="text-gray-600">Already have an account?</span>
            <Link to="/login" className="text-blue-700 font-semibold ml-2">
              Login →
            </Link>
          </div>
          <h2 className="text-2xl font-bold mb-6">Register to get started</h2>
          <form>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <FaUser className="absolute left-3 top-3 text-gray-500" />
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border px-10 py-2 rounded-md focus:ring focus:ring-blue-300"
                />
              </div>
              <div className="relative">
                <FaUser className="absolute left-3 top-3 text-gray-500" />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border px-10 py-2 rounded-md focus:ring focus:ring-blue-300"
                />
              </div>
            </div>
            <div className="relative mt-4">
              <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
              <input
                type="email"
                placeholder="Email"
                className="w-full border px-10 py-2 rounded-md focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="relative">
                <FaLock className="absolute left-3 top-3 text-gray-500" />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border px-10 py-2 rounded-md focus:ring focus:ring-blue-300"
                />
              </div>
              <div className="relative">
                <FaLock className="absolute left-3 top-3 text-gray-500" />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full border px-10 py-2 rounded-md focus:ring focus:ring-blue-300"
                />
              </div>
            </div>
            <div className="relative mt-4">
              <FaPhone className="absolute left-3 top-3 text-gray-500" />
              <input
                type="text"
                placeholder="Contact"
                className="w-full border px-10 py-2 rounded-md focus:ring focus:ring-blue-300"
              />
            </div>
            <button className="w-full mt-6 bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800">
              Create Account →
            </button>
            <p className="text-xs text-gray-600 mt-4 text-center">
              By confirming your email, you agree to our
              <Link to="/terms" className="text-blue-700 ml-1">
                Terms of Service
              </Link>
              and our
              <Link to="/privacy" className="text-blue-700 ml-1">
                Privacy Policy
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
