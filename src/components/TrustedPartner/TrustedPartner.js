import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import bg from '../../assets/fabric-texture-background1.jpg';
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
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <motion.div
                        initial={false}
                        animate={
                            isLoaded && isInView
                                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                        }
                        transition={{ duration: 1, delay: 1 }}
                        viewport={{ once: true }}
                        onViewportEnter={() => setIsInView(true)}
                    >
                        <img
                            src="https://media.istockphoto.com/id/1222584804/photo/young-woman-choosing-clothes.jpg?s=1024x1024&w=is&k=20&c=GCdlsujOIOAD6Z8y5LypBZXGk4II7eYpT4nOZOuXsac="
                            alt=''
                            className="max-w-xs md:max-w-lg rounded-lg shadow-2xl"
                            onLoad={() => setIsLoaded(true)}
                        />
                    </motion.div>
                    <div style={{ color: '#7F8189' }}>
                        <h1 className="text-5xl font-bold">Your <span style={{ color: '#FBC80B' }}>trusted</span> sourcing partner of choice.</h1>
                        <p style={{ color: '#7F8189' }} className="py-6">At S-CUBE BD, we believe in personalized service. Each customer is assigned a dedicated executive who ensures prompt responses to production status updates, TNA (Time and Action) schedules, and inquiries. We prioritize the development of strong and lasting partnerships, and this approach extends equally to both new and existing customers. Our commitment to serving every onboard partner with the highest level of attention and care is what sets us apart.</p>

                        <div data-aos="flip-down" className="">
                            <button style={{ backgroundColor: '#FBC80B', hover: { backgroundColor: '#D5A01E' } }} className="btn">About Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustedPartner;
