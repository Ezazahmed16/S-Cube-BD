import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/Logo.png';

const Navbar = () => {
  return (
    <div className="">
      <div className="mx-auto bg-gray-900  py-4 flex items-center justify-between px-10">
        <div className="lg:hidden">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-neutral">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-900 rounded-box w-52">
              <li><NavLink to='/home' className="text-white">Home</NavLink></li>
              <li><NavLink to='/outMisson' className="text-white">Our Mission</NavLink></li>
              <li><NavLink to='/OurCapability' className="text-white">Our Capabilities</NavLink></li>
              <li><NavLink to='/WorkPolicy' className="text-white">We Work</NavLink></li>
              <li><NavLink to="/ourExpertise" className="text-white">Our Expertise</NavLink></li>
              <li><NavLink to='/contact' className="text-white">Contact</NavLink></li>
            </ul>
          </div>
        </div>

        <div data-aos="flip-right" className="">
          <NavLink to='/'>
            <img className='w-32' src={logo} alt="" />
          </NavLink>
        </div>

        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><NavLink to='/home' className="text-white">Home</NavLink></li>
            <li><NavLink to='/outMisson' className="text-white">Our Mission</NavLink></li>
            <li><NavLink to='/OurCapability' className="text-white">Our Capabilities</NavLink></li>
            <li><NavLink to='/WorkPolicy' className="text-white">We Work</NavLink></li>
            <li><NavLink to="/ourExpertise" className="text-white">Our Expertise</NavLink></li>
            <li><NavLink to='/contact' className="text-white">Contact</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
