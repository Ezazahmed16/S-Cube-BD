import React, { useEffect, useState } from 'react';
import bg from '../../assets/bg/bg_1.webp';
import AOS from 'aos'
import 'aos/dist/aos.css'
import bg_1 from '../../assets/tr_5.jpg'
import bg_2 from '../../assets/tr_2.jpg'
import bg_3 from '../../assets/tr_3.jpg'
import bg_4 from '../../assets/tr_4.jpg'

const TrustedPartner = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    const backgroundStyle = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
    };

    return (
        <div>
            <div style={backgroundStyle} className="hero min-h-screen">
                <div className="hero-content max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-5 justify-between">
                    <div style={{ color: '#FBC80B' }}>
                        <h1 data-aos="fade-right" style={{ color: "#FBC80B" }} className="text-5xl font-bold">Your trusted sourcing partner of choice.</h1>
                        <p style={{ color: '#D5A01E' }} className="py-6">At S-CUBE BD, we believe in personalized service. Each customer is assigned a dedicated executive who ensures prompt responses to production status updates, TNA (Time and Action) schedules, and inquiries. We prioritize the development of strong and lasting partnerships, and this approach extends equally to both new and existing customers. Our commitment to serving every onboard partner with the highest level of attention and care is what sets us apart.</p>

                        <div data-aos="flip-down" className="">
                            <button style={{ backgroundColor: '#FBC80B' }} className="btn btn-outline">About Us</button>
                        </div>

                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="grid gap-2">
                            <img data-aos="flip-up" className='h-56 w-56' src={bg_1} alt="" />
                            <img data-aos="flip-up" className='h-48 w-56' src={bg_2} alt="" />
                        </div>
                        <div className="grid gap-2">
                            <img data-aos="flip-up" className='h-48 w-56' src={bg_3} alt="" /> 
                            <img data-aos="flip-up" className='h-56 w-56' src={bg_4} alt="" /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustedPartner;
