import React from 'react'
import bg from '../../assets/tr_4.jpg'
import r_bg from '../../assets/r_bg.jpg'
import { Link } from 'react-router-dom';

const OurClients = () => {
    const backgroundStyle = {
        backgroundImage: `url(https://cdn.pixabay.com/photo/2013/11/19/23/23/window-213496_1280.jpg)`,
        backgroundSize: 'cover',
    };
    return (
        <div className="hero min-h-screen" style={backgroundStyle}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="max-w-7xl mx-auto h-screen">
                <div className="py-10">
                    <h1 data-aos="fade-right" style={{ color: "#FBC80B" }} className="text-5xl font-bold text-center">OUR CLIENTS COME FROM ALL AROUND THE WORLD
                    </h1>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pt-5 justify-center items-center">
                        <img className='image-full ' src="https://www.synergiesworldwide.com/wp-content/uploads/2021/11/tkmx.png" alt="" srcset="" />
                        <img className='image-full ' src="https://www.synergiesworldwide.com/wp-content/uploads/2021/11/ross.png" alt="" srcset="" />
                        <img className='image-full ' src="https://www.synergiesworldwide.com/wp-content/uploads/2021/11/barlie.png" alt="" srcset="" />
                        <img className='image-full ' src="https://www.synergiesworldwide.com/wp-content/uploads/2021/11/newyork.png" alt="" srcset="" />
                        <img className='image-full ' src="https://www.synergiesworldwide.com/wp-content/uploads/2021/11/kennt.png" alt="" srcset="" />
                        <img className='image-full ' src="https://www.synergiesworldwide.com/wp-content/uploads/2021/11/kennt.png" alt="" srcset="" />
                        <img className='image-full ' src="https://www.synergiesworldwide.com/wp-content/uploads/2021/11/chaps.png" alt="" srcset="" />
                        <img className='image-full ' src="https://www.synergiesworldwide.com/wp-content/uploads/2021/11/ben.png" alt="" srcset="" />
                        <img className='image-full ' src="https://www.synergiesworldwide.com/wp-content/uploads/2019/04/4120665836.png" alt="" srcset="" />
                        <img className='image-full ' src="https://www.synergiesworldwide.com/wp-content/uploads/2019/04/logo-galerieslafayette.png" alt="" srcset="" />
                        <img className='image-full ' src="https://www.synergiesworldwide.com/wp-content/uploads/2019/04/logo-zara.png" alt="" srcset="" />
                        <img className='image-full ' src="https://www.synergiesworldwide.com/wp-content/uploads/2019/04/logo-zippy.png" alt="" srcset="" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurClients