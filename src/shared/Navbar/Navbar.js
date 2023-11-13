import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/Logo.png'
import background from '../../assets/fabric-texture-background1.jpg'


const Navbar = () => {

    const [isMenuActive, setIsMenuActive] = useState(false);

    const toggleMenu = () => {
      setIsMenuActive(!isMenuActive);
    };
  
    const navbarStyle = {
      background: isMenuActive ? 'white' : `url(${background})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    };

    return (
        <div>
            <div style={navbarStyle} className="navbar z-50">
                <div className="navbar-start">
                    <div className={`btn btn-accent lg:hidden ${isMenuActive ? 'active' : ''}`}>
                        <label tabIndex={0} className="btn btn-accent lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>

                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            <li><Link to='/home'>Home</Link></li>
                            <li className='z-30' tabIndex={0}>
                                <details className=''>
                                    <summary>About Us</summary>
                                    <ul className="p-2 bg-black">
                                        <li className='text-white'><Link to='/outMisson'>Our Mission</Link></li>
                                        <li className='text-white'><Link to='/OurCapability'>Our Capabilities</Link></li>
                                        <li className='text-white'><Link to='/WorkPolicy'>We Work</Link></li>
                                        <li className='text-white'><Link to="/ourExpertise">Our Expertise</Link></li>
                                    </ul>
                                </details>
                            </li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>

                    <div className="px-0 md:px-10 ">
                        <Link to='/' className="normal-case text-xl">
                            <img className='w-32 ' src={logo} alt="" />
                        </Link>
                    </div>

                </div>

                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-5 text-white font-bold">
                        <li><Link to='/home'>Home</Link></li>
                        <li className='z-30' tabIndex={0}>
                            <details className=''>
                                <summary>About Us</summary>
                                <ul className="p-2 bg-black">
                                    <li className='text-white'><Link to='/outMisson'>Our Mission</Link></li>
                                    <li className='text-white'><Link to='/OurCapability'>Our Capabilities</Link></li>
                                    <li className='text-white'><Link to='/WorkPolicy'>We Work</Link></li>
                                    <li className='text-white'><Link to="/ourExpertise">Our Expertise</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Navbar