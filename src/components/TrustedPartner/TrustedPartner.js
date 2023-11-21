import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import bg from '../../assets/bg/bg_1.webp';
import AOS from 'aos'
import 'aos/dist/aos.css'

const TrustedPartner = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);

    const backgroundStyle = {
        backgroundImage: `url(${bg})`,
    };

    const visibleMask = 'linear-gradient(90deg, transparent 0%, black 100%)';
    const hiddenMask = 'linear-gradient(90deg, transparent 0%, black 0%)';

    return (
        <div>
            <div style={backgroundStyle} className="hero min-h-screen">
                <div className="hero-content max-w-3xl ">
                    <div style={{ color: '#FBC80B' }}>
                        <h1 data-aos="fade-right" style={{ color: "#FBC80B" }} className="text-5xl font-bold">Your trusted sourcing partner of choice.</h1>
                        <p style={{ color: '#D5A01E' }} className="py-6">At S-CUBE BD, we believe in personalized service. Each customer is assigned a dedicated executive who ensures prompt responses to production status updates, TNA (Time and Action) schedules, and inquiries. We prioritize the development of strong and lasting partnerships, and this approach extends equally to both new and existing customers. Our commitment to serving every onboard partner with the highest level of attention and care is what sets us apart.</p>

                        <div data-aos="flip-down" className="">
                            <button style={{ backgroundColor: '#FBC80B' }} className="btn btn-outline">About Us</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustedPartner;
