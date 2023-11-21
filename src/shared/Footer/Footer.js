import React from 'react'
import logo from '../../assets/Logo.png'
import background from '../../assets/fabric-texture-background1.jpg'
import { Link } from 'react-router-dom'
import { FaFacebook } from 'react-icons/fa'
import { ImWhatsapp } from 'react-icons/im'
import { FaLinkedinIn } from 'react-icons/fa'
import gil_logo from '../../assets/GIL.png'

const footerStyle = {
  background: `url(${background})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const Footer = () => {
  return (
    <div>
      <footer style={{...footerStyle}} className="footer p-10 items-center justify-between text-white">

        <nav>
          <Link to='/' className="normal-case text-xl">
            <img className='w-32 px=5 ' src={logo} alt="" />
          </Link>
          <p className='text-white'>
            <span>188, Fakirapool (7th Floor),</span> <br />
            <span>Motijheel, Dhaka - 1000</span>
          </p>
        </nav>

        <nav>
          <header style={{ color: '#F8C40D' }} className="footer-title">Company</header>
          <Link className='hover:border-b-2 border-white pb-1 ease-out' to=''>Home</Link>
          <Link className='hover:border-b-2 border-white pb-1 ease-out' to=''>Our Misson</Link>
          <Link className='hover:border-b-2 border-white pb-1 ease-out' to=''>Our Capabilities</Link>
          <Link className='hover:border-b-2 border-white pb-1 ease-out' to=''>Work Policy</Link>
          <Link className='hover:border-b-2 border-white pb-1 ease-out' to=''>Our Expertise</Link>
          <Link className='hover:border-b-2 border-white pb-1 ease-out' to=''>Contact</Link>
        </nav>

        <nav>
          <header style={{ color: '#F8C40D' }} className="footer-title">Social</header>
          <div className="grid grid-flow-col gap-4">
            <FaFacebook className='w-8 h-8' />
            <ImWhatsapp className='w-8 h-8' />
            <FaLinkedinIn className='w-8 h-8' />
          </div>

          <header style={{ color: '#F8C40D' }} className="footer-title my-5">WEBSITE DEVELOPED BY</header>

          <div className="">
            <img className='w-44' src={gil_logo} alt="" srcset="" />
          </div>

        </nav>

      </footer>
    </div>
  )
}

export default Footer