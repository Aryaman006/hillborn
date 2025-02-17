import React from "react";
import { AiOutlineLogout } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="w-1/4 bg-gray-100 p-4 rounded-lg shadow-md">
      <div className="mb-8">
        <h2 className="font-bold text-lg">Hello</h2>
        <p className="text-gray-500">Piyush Maheshwari</p>
      </div>
      <ul className="space-y-4">
        <li className="font-semibold">My Orders</li>
        <li className="font-semibold">Account Settings</li>
        <ul className="ml-4 space-y-2 text-gray-600">
          <li>Profile Information</li>
          <li>Manage</li>
          <li>Card Information</li>
        </ul>
        <li className="font-semibold">My Stuff</li>
        <ul className="ml-4 space-y-2 text-gray-600">
          <li>All Notifications</li>
          <li>My Wishlist</li>
          <li>My Reviews & Ratings</li>
        </ul>
      </ul>
      <div className="mt-8 flex items-center space-x-2 cursor-pointer text-red-500">
        <AiOutlineLogout />
        <span>Logout</span>
      </div>
      <div className="mt-4 text-sm text-gray-400">
        <p>Frequently Visited:</p>
        <p>Help Center</p>
      </div>
    </div>
  );
};

export default Sidebar;