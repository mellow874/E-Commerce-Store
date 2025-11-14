import React from "react";

//Import images
import Logo from "../assets/Logo.png";
import Menu from "../assets/Menu.png";
import Bag from "../assets/Bag.png";
import Store from "../assets/Store.png";
import Logout from "../assets/Logout.png";



export default function Sidebar() {
  return (
    <div className="flex flex-col items-center bg-gray-100 w-20 h-[992px] justify-between shadow-md">
      {/* Top Logo */}
      <a
        href="/"
        className="p-4  transition rounded-lg"
        title="Logo"
      >
        <img
          src={Logo}
          alt="Logo"
          className="w-8 h-8 object-contain"
        />
      </a>

      {/* Nav Links */}
      <ul className="flex flex-col space-y-4 mb-auto mt-6">
        <li>
          <a
            href="#"
            className="flex justify-center py-3 w-full  rounded-lg transition"
            title="Menu"
          >
            <img src={Menu} alt="Menu" className="w-6 h-6" />
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex justify-center p-2 bg-black w-10 h-10 gap-2 rounded-lg transition"
            title="Store"
          >
            <img src={Store} alt="Store" className="w-6 h-6" />
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex justify-center py-3 w-full  rounded-lg transition"
            title="Products"
          >
            <img src={Bag} alt="Products" className="w-6 h-6 " />
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex justify-center py-3 w-full  rounded-lg transition"
            title="Customers"
          >
            <img src={Logout} alt="Customers" className="w-6 h-6" />
          </a>
        </li>
      </ul>

      {/* Bottom Profile Dropdown */}
      <div className="relative group border-t border-gray-200 w-full flex justify-center py-4">
        {/* Dropdown */}
        <ul className="absolute bottom-16 hidden group-hover:block bg-white shadow-lg rounded-lg text-sm w-40">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              New project...
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Settings
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Profile
            </a>
          </li>
          <li>
            <hr className="my-1 border-gray-200" />
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
