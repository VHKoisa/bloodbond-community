import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../Assets/BloodBond_noBg.png";
import heartbeat3 from "../Assets/heartbeat3.png.crdownload";
import heart from "../Assets/heartbeat1.png";
const Footer = () => {
  return (
    <div className="mt-5 h-auto md:h-72 bg-[url('https://t3.ftcdn.net/jpg/02/62/65/20/360_F_262652000_Vm0XlmMMDuEGgJ2H1sMXQcxa2vU34RuQ.jpg')] md:bg-[url('https://wallpaperaccess.com/full/3272197.jpg')] bg-cover">

      <div className="flex flex-col md:flex-row justify-evenly items-center">
        {/* Column 1 */}
        <div className="flex flex-col items-center">
        <img className="object-cover w-auto h-36" src={logo} alt="BloodBond_logo"/>
        {/* Social icons div */}
        <div className="flex gap-4 text-red-950 md:text-2xl">
          <i className="fa-brands fa-x-twitter cursor-pointer hover:text-black"></i>
          <i className="fa-brands fa-facebook cursor-pointer hover:text-black"></i>
          <i className="fa-brands fa-instagram cursor-pointer hover:text-black"></i>
          <i className="fa-brands fa-linkedin-in cursor-pointer hover:text-black"></i>
        </div>
        </div>

       {/* Column 2 */}
       <div className="flex flex-col gap-4 my-6 -ml-3 md:-ml-0 md:my-0">
        <div>
          <h1 className="text-red-950 ubuntu-bold" href="#">Contact</h1>
          <div className="h-[2px] w-16 bg-red-900"></div>
        </div>
        <div className="flex flex-col gap-2">
          <a className="text-red-900 ubuntu-medium" href="#">Call</a>
          <a className="text-red-900 ubuntu-medium" href="#">Loaction</a>
        </div>
       </div>

       {/* Column 3 */}
       <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-red-950 ubuntu-bold">Navigation</h1>
          <div className="h-[2px] w-16 bg-red-900"></div>
        </div>
        <div className="flex flex-col gap-2">
          <Link className="text-red-900 ubuntu-medium" to="/">Home</Link>
          <Link className="text-red-900 ubuntu-medium" to="/about">About Us</Link>
        </div>
       </div>
       {/* Column 3 ends */}

       {/* column 4 */}
        <img className="hidden md:block mt-5" src={heartbeat3} alt=""/>
        <img className="md:hidden" src={heart} alt=""/>
       {/* Column 4 ends here */}
      </div>
    </div>
  );
};

export default Footer;