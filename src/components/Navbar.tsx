import React, { useState, useContext } from "react";
import logo from "../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const { getCartCount } = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between font-medium p-5">
      <div>
        <img src={logo} className="w-16" alt="" />
      </div>

      <ul className="hidden md:flex gap-5 text-gray-500">
        <NavLink to="/">
          <p>Home</p>
          <hr className="border-none h-[2px] bg-gray-500 hidden" />
        </NavLink>

        <NavLink to="/men">
          <p>Men</p>
          <hr className="border-none h-[2px] bg-gray-500 hidden" />
        </NavLink>

        <NavLink to="/women">
          <p>Women</p>
          <hr className="border-none h-[2px] bg-gray-500 hidden" />
        </NavLink>

        <NavLink to="/kids">
          <p>Kids</p>
          <hr className="border-none h-[2px] bg-gray-500 hidden" />
        </NavLink>

        <NavLink to="/about">
          <p>About</p>
          <hr className="border-none h-[2px] bg-gray-500 hidden" />
        </NavLink>

        <NavLink to="/contact">
          <p>Contact</p>
          <hr className="border-none h-[2px] bg-gray-500 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-5 text-xl">
        <div className="flex items-center bg-gray-200 rounded-md px-2 border-2 ">
          <input
            type="text"
            className="bg-inherit rounded-md w-32 border-4 focus:border-none text-lg outline-none"
            placeholder="Search"
          />
          <IoSearch className="cursor-pointer" />
        </div>
        <div className="group">
          {" "}
          <IoPersonOutline className="cursor-pointer" />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-3">
            <div className="text-gray-500 py-3 px-5 bg-slate-100 text-sm">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Order</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative">
          <IoCartOutline className="cursor-pointer w-5 min-w-5" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        <FiMenu
          onClick={() => setVisible(true)}
          className="cursor-pointer md:hidden"
        />

        <div
          className={`absolute top-0 right-0 bottom-0 bg-white overflow-hidden transition-all ${
            visible ? "w-full" : "w-0"
          }`}
        >
          <div>
            <div
              onClick={() => setVisible(false)}
              className="flex items-center gap-2 text-gray-500 py-2 cursor-pointer"
            >
              <IoIosArrowBack />
              <p>Back</p>
            </div>

            <div className="flex flex-col items-center text-gray-600">
              <NavLink
                onClick={() => setVisible(false)}
                className="py-2"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                onClick={() => setVisible(false)}
                className="py-2"
                to="/men"
              >
                Men
              </NavLink>
              <NavLink
                onClick={() => setVisible(false)}
                className="py-2"
                to="/women"
              >
                Women
              </NavLink>
              <NavLink
                onClick={() => setVisible(false)}
                className="py-2"
                to="/kids"
              >
                Kids
              </NavLink>
              <NavLink
                onClick={() => setVisible(false)}
                className="py-2"
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                onClick={() => setVisible(false)}
                className="py-2"
                to="/contact"
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
