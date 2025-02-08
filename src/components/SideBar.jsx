import { FaTachometerAlt, FaFileInvoice, FaUsers, FaGraduationCap, FaTh, FaCog, FaPowerOff } from 'react-icons/fa';

const SideBar = () => {
  return (
    <div className="w-64 h-screen bg-blue-900 text-white flex flex-col p-4">
      <nav className="flex-1">
        <ul className="space-y-2">
          <li className="flex items-center space-x-2 p-2 hover:bg-blue-700 rounded">
            <FaTachometerAlt />
            <span>Dashboard</span>
          </li>
          <li className="flex items-center space-x-2 p-2 hover:bg-blue-700 rounded">
            <FaFileInvoice />
            <span>Invoices</span>
          </li>
          <li className="flex items-center space-x-2 p-2 bg-blue-600 rounded">
            <FaUsers />
            <span>Learners</span>
          </li>
          <li className="flex items-center space-x-2 p-2 hover:bg-blue-700 rounded">
            <FaGraduationCap />
            <span>Courses</span>
          </li>
          <li className="flex items-center space-x-2 p-2 hover:bg-blue-700 rounded">
            <FaTh />
            <span>Report</span>
          </li>
        </ul>
      </nav>
      <div className="space-y-2">
        <div className="flex items-center space-x-2 p-2 hover:bg-blue-700 rounded">
          <FaCog />
          <span>Settings</span>
        </div>
        <div className="flex items-center space-x-2 p-2 hover:bg-blue-700 rounded">
          <FaPowerOff />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
