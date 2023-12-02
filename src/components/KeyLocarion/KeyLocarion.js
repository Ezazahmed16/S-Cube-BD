import React from 'react'
import bg from '../../assets/tr_4.jpg'
import r_bg from '../../assets/r_bg.jpg'
import { Link } from 'react-router-dom';

const KeyLocarion = () => {

    const backgroundStyle = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
    };

    return (
        <div style={backgroundStyle}>
            <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-5 max-w-7xl mx-auto">
                <div className="py-10">
                    <h1 data-aos="fade-right" style={{ color: "#FBC80B" }} className="text-5xl font-bold">Key Location</h1>
                    <div className="grid gap-5 grid-cols-3 pt-5">
                        <h1  data-aos="fade-right" className='text-center bg-slate-900 p-3' style={{ color: "#FBC80B" }}>Bangladesh</h1>
                        <h1  data-aos="fade-right" className='text-center bg-slate-900 p-3' style={{ color: "#FBC80B" }}>Italy</h1>
                        <h1 data-aos="fade-right" className='text-center bg-slate-900 p-3' style={{ color: "#FBC80B" }}>UK</h1>
                        <h1  data-aos="fade-right" className='text-center bg-slate-900 p-3' style={{ color: "#FBC80B" }}>USA</h1>
                        <h1  data-aos="fade-right" className='text-center bg-slate-900 p-3' style={{ color: "#FBC80B" }}>Russia</h1>
                        <h1  data-aos="fade-right" className='text-center bg-slate-900 p-3' style={{ color: "#FBC80B" }}>Belgium</h1>
                    </div>
                    <div style={{ color: "#FBC80B" }} className="py-10">
                        <p>Our pivotal locations, spanning Bangladesh, Italy, the UK, Russia, and Belgium, epitomize a global nexus of excellence. Each destination plays a crucial role in our international footprint, symbolizing diversity, quality, and unparalleled collaboration.</p>
                        <Link to='/contact'>
                            <div data-aos="flip-down" className="mt-5">
                                <button style={{ backgroundColor: '#FBC80B' }} className="btn btn-outline">Contact</button>
                            </div>
                        </Link>
                    </div>
                </div>
                <div data-aos="fade-up-left" className="p-5 shadow-2xl image-full">
                    <img className='h-screen w-full' src={r_bg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default KeyLocarion