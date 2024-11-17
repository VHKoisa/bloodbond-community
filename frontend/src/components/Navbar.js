import { Link } from "react-router-dom";
import React, { useState } from "react";
import logo from "../Assets/BloodBond_noBg.png";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div>
      <div className="w-full h-9 bg-red-900 flex items-center justify-start overflow-hidden">
        {/* Wrapper to contain the content and handle overflow */}
        <div className="content-wrapper">
          {/* Content will be repeated inside here to ensure smooth scrolling */}
          <div className="content">
            <h1 className="text-base text-white ubuntu-light px-5">
              Give the gift of life, without cost.
            </h1>
            <h1 className="text-base text-white ubuntu-light px-5">
              A drop of your blood, a lifeline for someone.
            </h1>
            <h1 className="text-base text-white ubuntu-light px-5">
              A small step for you, a giant leap for life.
            </h1>
            <h1 className="text-base text-white ubuntu-light px-5">
              Every drop counts. Donate blood, save lives.
            </h1>
            <h1 className="text-base text-white ubuntu-light px-5">
              Your blood, their future. Donate blood.
            </h1>
            <h1 className="text-base text-white ubuntu-light px-5">
              Be the reason someone smiles.
            </h1>
          </div>
          {/* Duplicate the entire content block to make it continuous */}
          <div className="content">
            <h1 className="text-base text-white ubuntu-light px-5">
              Give the gift of life, without cost.
            </h1>
            <h1 className="text-base text-white ubuntu-light px-5">
              A drop of your blood, a lifeline for someone.
            </h1>
            <h1 className="text-base text-white ubuntu-light px-5">
              A small step for you, a giant leap for life.
            </h1>
            <h1 className="text-base text-white ubuntu-light px-5">
              Every drop counts. Donate blood, save lives.
            </h1>
            <h1 className="text-base text-white ubuntu-light px-5">
              Your blood, their future. Donate blood.
            </h1>
            <h1 className="text-base text-white ubuntu-light px-5">
              Be the reason someone smiles.
            </h1>
          </div>
        </div>
      </div>

      <div className="flex items-center md:hidden justify-between h-16 shadow-lg">
        <Link to="/">
        <img
          src={logo}
          alt="BloodBond_logo"
          className="object-cover w-auto h-20 ml-2"
        />
        </Link>
        <button className="md:hidden mr-2" onClick={toggleNavbar}>
          <i className="fas fa-bars text-black text-2xl"></i>
        </button>
      </div>
      <div className="hidden md:flex justify-between w-full h-20 shadow-lg items-center">
        <div className="flex gap-4 items-center ml-4">
          <Link to="/"><img src={logo} alt="BloodBond_logo" className="h-24 w-auto" /></Link>
          <ul className="flex gap-7 ubuntu-medium text-red-900 text-base">
            <li className="cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/about">About Us</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-4 items-center mr-24">
        <Link to="/donor">
            <button className="bg-red-900 text-white ubuntu-bold text-base py-2 px-4">
              Find Donor
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-red-900 text-white ubuntu-bold text-base py-2 px-4">
              Login
            </button>
          </Link>
        </div>
      </div>
      <div
        id="horizontalNav"
        className={`fixed md:hidden ${
          isNavbarOpen ? "block" : "hidden"
        } bg-white inset-0 z-30 max-w-full ubuntu-medium`}
      >
        <div className="w-full h-9 bg-red-900 flex items-center justify-start overflow-hidden">
          {/* Wrapper to contain the content and handle overflow */}
          <div className="content-wrapper">
            {/* Content will be repeated inside here to ensure smooth scrolling */}
            <div className="content">
              <h1 className="text-base text-white ubuntu-light px-5">
                Give the gift of life, without cost.
              </h1>
              <h1 className="text-base text-white ubuntu-light px-5">
                A drop of your blood, a lifeline for someone.
              </h1>
              <h1 className="text-base text-white ubuntu-light px-5">
                A small step for you, a giant leap for life.
              </h1>
              <h1 className="text-base text-white ubuntu-light px-5">
                Every drop counts. Donate blood, save lives.
              </h1>
              <h1 className="text-base text-white ubuntu-light px-5">
                Your blood, their future. Donate blood.
              </h1>
              <h1 className="text-base text-white ubuntu-light px-5">
                Be the reason someone smiles.
              </h1>
            </div>
            {/* Duplicate the entire content block to make it continuous */}
            <div className="content">
              <h1 className="text-base text-white ubuntu-light px-5">
                Give the gift of life, without cost.
              </h1>
              <h1 className="text-base text-white ubuntu-light px-5">
                A drop of your blood, a lifeline for someone.
              </h1>
              <h1 className="text-base text-white ubuntu-light px-5">
                A small step for you, a giant leap for life.
              </h1>
              <h1 className="text-base text-white ubuntu-light px-5">
                Every drop counts. Donate blood, save lives.
              </h1>
              <h1 className="text-base text-white ubuntu-light px-5">
                Your blood, their future. Donate blood.
              </h1>
              <h1 className="text-base text-white ubuntu-light px-5">
                Be the reason someone smiles.
              </h1>
            </div>
          </div>
        </div>
        <div>
          <div id="nav-bar" className="flex justify-between -mt-2">
            <Link to="/" id="brand" className="flex gap-2 items-center">
              <img
                className="object-cover w-auto h-20 ml-2"
                src={logo}
                alt=""
              />
            </Link>
            <button className="p-2 md:hidden" onClick={toggleNavbar}>
              <i className="fas fa-times text-gray-950 text-xl"></i>
            </button>
          </div>
          <div className="mt-6">
            <Link
              to="/"
              onClick={toggleNavbar}
              className="hover:bg-gray-50 block rounded-xl m-3 p-3 font-medium lsFont"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={toggleNavbar}
              className="hover:bg-gray-50 block rounded-xl m-3 p-3 font-medium lsFont"
            >
              About Us
            </Link>
            <a
              href="#footersection"
              onClick={toggleNavbar}
              className="hover:bg-gray-50 block rounded-xl m-3 p-3 font-medium lsFont"
            >
              Contact Us
            </a>
          </div>
          <div className="block h-[1px] bg-gray-100"></div>
          <div className="text-gray-500 text-2xl sm:text-4xl flex justify-center gap-7 mt-5">
            <Link to="/donor">
            <button 
            onClick={toggleNavbar}
            className="bg-red-900 text-white ubuntu-bold text-base py-2 px-4">
              Find Donor
            </button>
            </Link>
            <Link to="/login">
              <button 
              onClick={toggleNavbar}
              className="bg-red-900 text-white ubuntu-bold text-base py-2 px-4">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
