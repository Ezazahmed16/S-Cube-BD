import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/Logo.png';

const Navbar = () => {

    return (
        <div style={{ backgroundColor: "#030712" }}>
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink style={{ color: "#FBC80B" }} to='/home'>Home</NavLink></li>
                            <li className='text-white'><NavLink style={{ color: "#FBC80B" }} to='/outMisson'>Our Mission</NavLink></li>
                            <li className='text-white'><NavLink style={{ color: "#FBC80B" }} to='/OurCapability'>Our Capabilities</NavLink></li>
                            <li className='text-white'><NavLink style={{ color: "#FBC80B" }} to='/WorkPolicy'>We Work</NavLink></li>
                            <li className='text-white'><NavLink style={{ color: "#FBC80B" }} to="/ourExpertise">Our Expertise</NavLink></li>
                            <li><NavLink style={{ color: "#FBC80B" }} to='/contact'>Contact</NavLink></li>
                        </ul>
                    </div>

                    <div className="">
                        <NavLink to='/'>
                            <img className='w-32' src={logo} alt="" />
                        </NavLink>
                    </div>
                </div>

                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink style={{ color: "#FBC80B" }} to='/home'>Home</NavLink></li>
                        <li className='text-white'><NavLink style={{ color: "#FBC80B" }} to='/outMisson'>Our Mission</NavLink></li>
                        <li className='text-white'><NavLink style={{ color: "#FBC80B" }} to='/OurCapability'>Our Capabilities</NavLink></li>
                        <li className='text-white'><NavLink style={{ color: "#FBC80B" }} to='/WorkPolicy'>We Work</NavLink></li>
                        <li className='text-white'><NavLink style={{ color: "#FBC80B" }} to="/ourExpertise">Our Expertise</NavLink></li>
                        <li><NavLink style={{ color: "#FBC80B" }} to='/contact'>Contact</NavLink></li>
                    </ul>
                </div>

            </div>

        </div>
    );
}

export default Navbar;
