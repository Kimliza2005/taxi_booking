import React from "react";
import { FaUser, FaGlobe, FaPhone, FaBuilding, FaFileAlt, FaClock, FaDollarSign, FaTrash, FaSignOutAlt } from "react-icons/fa";

const AccountSettings = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-green-600">Your Account</h2>
        <p className="text-lg text-green-500 font-semibold">Chouen Kimliza <span className="inline-block">✅</span></p>
        <p className="text-gray-600">Current Savings Points : 0</p>
      </div>
      
      <div className="space-y-3">
        {menuItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between py-2 px-4 border rounded-lg cursor-pointer hover:bg-gray-100">
            <div className="flex items-center space-x-3">
              {item.icon}
              <span>{item.label}</span>
            </div>
            <span>&gt;</span>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <button className="w-full flex items-center justify-center text-red-500 font-semibold py-2 border border-red-500 rounded-lg hover:bg-red-100">
          <FaSignOutAlt className="mr-2" /> Log Out
        </button>
      </div>
    </div>
  );
};

const menuItems = [
  { label: "My Profile", icon: <FaUser className="text-gray-500" /> },
  { label: "Languages", icon: <FaGlobe className="text-gray-500" /> },
  { label: "Contact Us", icon: <FaPhone className="text-gray-500" /> },
  { label: "Branches", icon: <FaBuilding className="text-gray-500" /> },
  { label: "Terms & Conditions", icon: <FaFileAlt className="text-gray-500" /> },
  { label: "Point History", icon: <FaClock className="text-gray-500" /> },
  { label: "Earn Point", icon: <FaDollarSign className="text-gray-500" /> },
  { label: "Delete Account", icon: <FaTrash className="text-gray-500" /> },
];

export default AccountSettings;
