import React from "react";
import { FaDollarSign, FaFileInvoice, FaUsers, FaClock } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const revenueData = [
    { month: "Jan", revenue: 5000 },
    { month: "Feb", revenue: 10000 },
    { month: "Mar", revenue: 15000 },
    { month: "Apr", revenue: 18000 },
    { month: "May", revenue: 9000 },
    { month: "Jun", revenue: 14000 },
    { month: "Jul", revenue: 22000 },
    { month: "Aug", revenue: 17000 },
    { month: "Sep", revenue: 19000 },
    { month: "Oct", revenue: 16000 },
    { month: "Nov", revenue: 18000 },
    { month: "Dec", revenue: 25000 },
  ];

  const invoices = [
    { name: "Jane Cooper", role: "Software Developer", amount: "$420.00", avatar: "https://i.pravatar.cc/40?img=1" },
    { name: "Savannah Nguyen", role: "Data Science", amount: "$420.00", avatar: "https://i.pravatar.cc/40?img=2" },
    { name: "Jerome Bell", role: "Data Science", amount: "$420.00", avatar: "https://i.pravatar.cc/40?img=3" },
    { name: "Theresa Webb", role: "Cloud Engineer", amount: "$420.00", avatar: "https://i.pravatar.cc/40?img=4" },
    { name: "Ralph Edwards", role: "Software Developer", amount: "$420.00", avatar: "https://i.pravatar.cc/40?img=5" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <p className="text-gray-600">Welcome back, John</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 bg-gray-200 rounded-full">🌙</button>
          <div className="flex items-center gap-2 bg-white p-2 rounded-lg shadow">
            <div className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white font-bold rounded-full">JD</div>
            <span className="text-gray-800">John Doe</span>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[{ label: "Collected", value: "$20000", icon: <FaDollarSign /> },
          { label: "Pending", value: "$10000", icon: <FaClock /> },
          { label: "Total invoices", value: "35", icon: <FaFileInvoice /> },
          { label: "Total Learners", value: "50", icon: <FaUsers /> }
        ].map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow flex items-center gap-4">
            <div className="text-2xl text-blue-600">{item.icon}</div>
            <div>
              <p className="text-gray-600">{item.label}</p>
              <h2 className="text-xl font-semibold">{item.value}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Revenue & Latest Invoices */}
      <div className="grid grid-cols-2 gap-6">
        {/* Recent Revenue */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Recent Revenue</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={revenueData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#3b82f6" radius={[5, 5, 0, 0]} barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Latest Invoices */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Latest Invoices</h2>
          <ul>
            {invoices.map((invoice, index) => (
              <li key={index} className="flex justify-between items-center py-3 border-b last:border-b-0">
                <div className="flex items-center gap-4">
                  <img src={invoice.avatar} alt="avatar" className="w-10 h-10 rounded-full" />
                  <div>
                    <h3 className="font-semibold">{invoice.name}</h3>
                    <p className="text-gray-600 text-sm">{invoice.role}</p>
                  </div>
                </div>
                <p className="font-semibold">{invoice.amount}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
