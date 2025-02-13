import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { MdEmail, MdLock } from "react-icons/md";

const Account = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-xl font-semibold mb-6">Account</h2>
        
       
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="w-16 h-16 rounded-full object-cover" />
            ) : (
              <div className="w-16 h-16 bg-blue-600 text-white flex items-center justify-center text-xl font-bold rounded-full">
                JD
              </div>
            )}
            <span className="text-gray-700 font-medium">Profile picture</span>
          </div>
          <label className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer">
            <FiUpload />
            <span>Upload image</span>
            <input type="file" className="hidden" onChange={handleImageUpload} />
          </label>
        </div>
        
      
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Full name</label>
          <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-md border">
            <div>
              <label className="text-gray-500 text-sm">First name</label>
              <input
                type="text"
                placeholder="John"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-2 py-1 border-b focus:outline-none focus:border-blue-500 bg-transparent"
              />
            </div>
            <div>
              <label className="text-gray-500 text-sm">Last name</label>
              <input
                type="text"
                placeholder="Doe"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-2 py-1 border-b focus:outline-none focus:border-blue-500 bg-transparent"
              />
            </div>
          </div>
        </div>
        
       
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <p className="text-gray-500 text-sm mb-1">Manage account email address</p>
          <div className="flex items-center bg-gray-50 border rounded-md px-3 py-2">
            <MdEmail className="text-gray-500" />
            <input
              type="email"
              placeholder="Johndoe@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full ml-2 bg-transparent focus:outline-none text-gray-700"
            />
          </div>
        </div>
        
      
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Password</label>
          <p className="text-gray-500 text-sm mb-1">Modify your current accounts</p>
          <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-md border">
            <div className="relative">
              <label className="text-gray-500 text-sm">Current password</label>
              <div className="relative flex items-center border-b">
                <MdLock className="text-gray-500" />
                <input
                  type={showCurrentPassword ? "text" : "password"}
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="************"
                  className="w-full px-2 py-1 focus:outline-none bg-transparent"
                />
                <button type="button" className="absolute right-2 text-gray-500" onClick={() => setShowCurrentPassword(!showCurrentPassword)}>
                  {showCurrentPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </div>
            </div>
            <div className="relative">
              <label className="text-gray-500 text-sm">New password</label>
              <div className="relative flex items-center border-b">
                <MdLock className="text-gray-500" />
                <input
                  type={showNewPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="************"
                  className="w-full px-2 py-1 focus:outline-none bg-transparent"
                />
                <button type="button" className="absolute right-2 text-gray-500" onClick={() => setShowNewPassword(!showNewPassword)}>
                  {showNewPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </div>
            </div>
          </div>
        </div>
        
       
        <div className="flex justify-between">
          <button className="px-4 py-2 border border-gray-400 rounded-md">Logout</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md flex items-center">
            Update <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
