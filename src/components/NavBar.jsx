import { FiLogIn } from "react-icons/fi";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-3 shadow-md bg-white">
      {/* Left Section: Logo */}
      <div className="flex items-center space-x-2">
        <span className="text-blue-600 font-bold text-lg">C</span>
        <span className="text-black font-semibold">L<span className="text-blue-600">Client</span></span>
      </div>

      {/* Center Section: Links */}
      <div className="flex space-x-6 text-gray-700">
        <a href="#" className="hover:text-blue-600">Home</a>
        <a href="#" className="hover:text-blue-600">Courses</a>
      </div>

      {/* Right Section: Login Button */}
      <button className="flex items-center space-x-1 border border-blue-600 text-blue-600 px-3 py-1 rounded-md hover:bg-blue-100">
        <span>Login</span>
        <FiLogIn />
      </button>
    </nav>
  );
};

export default NavBar;
