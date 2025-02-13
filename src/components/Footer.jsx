import { FaFacebook, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";
import footerImage from "../assets/images/footer.png";

const Footer = () => {
  return (
    <div className="bg-blue-900 text-white py-6 px-10">
      <div className="flex justify-between items-center">
    
        <div>
          <img src={footerImage} alt="Client Logo" className="w-[180px]" />
        </div>

       
        <div className="flex space-x-16">
          <div>
            <h3 className="text-lg font-semibold">Menu</h3>
            <ul className="mt-2">
              <li className="hover:underline cursor-pointer">Home</li>
              <li className="hover:underline cursor-pointer">Courses</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="mt-2">+23341002000</p>
            <p>New Reiss, Ghana, Accra</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Social</h3>
            <ul className="mt-2 flex space-x-4">
              <li className="hover:text-gray-300">
                <a href="#">
                  <FaLinkedin size={20} />
                </a>
              </li>
              <li className="hover:text-gray-300">
                <a href="#">
                  <FaFacebook size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      
      <div className="mt-6 flex justify-between border-t border-gray-400 pt-4">
        <p className="flex items-center">
          <MdCopyright className="mr-1" /> 2025 - G-client, All rights reserved
        </p>
        <a href="#" className="flex items-center hover:underline">
          Back to top <FaArrowUp className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
