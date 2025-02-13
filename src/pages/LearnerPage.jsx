import React from 'react';
import { Search, Eye, Edit, Trash2 } from 'lucide-react';

const LearnerPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-xl font-semibold mb-4">Learners</h2>
      
      <div className="flex justify-between mb-4">
        <div className="relative w-1/3">
          <Search className="absolute left-3 top-2.5 text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Search learners"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <select className="border p-2 rounded-lg">
          <option>Sort by</option>
        </select>
        
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
          Create learner <span className="ml-2">+</span>
        </button>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left">Learners</th>
              <th className="p-3 text-left">Course</th>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Gender</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array(6).fill(null).map((_, index) => (
              <tr key={index} className="border-t">
                <td className="p-3 flex items-center">
                  <img src="https://via.placeholder.com/40" alt="avatar" className="w-10 h-10 rounded-full mr-3" />
                  John Doe
                </td>
                <td className="p-3">Software Development</td>
                <td className="p-3">$450.00</td>
                <td className="p-3">Nov 17, 2024</td>
                <td className="p-3">Male</td>
                <td className="p-3 flex space-x-2">
                  <button className="text-blue-600 p-2"><Eye size={20} /></button>
                  <button className="text-green-600 p-2"><Edit size={20} /></button>
                  <button className="text-red-600 p-2"><Trash2 size={20} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LearnerPage;
