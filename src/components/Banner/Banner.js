import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import AOS from 'aos'
import 'aos/dist/aos.css'
import bg_1 from "../../assets/bg/bg_3.webp"
import { TypeAnimation } from 'react-type-animation'

const Banner = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${bg_1})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center">
                    <div className="max-w-lg">

                        <motion.h1
                            style={{ color: '#FBC80B' }}
                            className="mb-5 text-5xl font-bold"
                            initial={{ y: -1000 }}
                            animate={{ y: 0 }}
                            transition={{
                                duration: "1",
                                delay: "1"
                            }}
                        >
                            Welcome to 
                        </motion.h1>

                        <TypeAnimation
                            sequence={[

                                `S-CUBE BD`,
                                1000, 
                                'A HOUSE OF ASSURANCE',
                                1000,
                            ]}
                            wrapper="span"
                            speed={20}
                            style={{ fontSize: '2rem', display: 'inline-block', color: '#FBC80B' }}
                            repeat={Infinity}
                        />


                        <p style={{ color: '#D5A01E' }} className="my-5">Your Trusted Apparel Sourcing Partner in Dhaka, Bangladesh!
                            Discover Excellence in Sourcing, Buying, and Consulting.
                            With our experienced and dedicated sales team, along with a hardworking quality assurance team, we offer a complete service to ensure top-notch quality goods at competitive prices.
                            Experience the Difference with CUBE BD!</p>


                        <div data-aos="flip-down" className="">
                            <Link to='/home'>
                                <button style={{ backgroundColor: '#FBC80B' }} className="btn btn-outline">Our Services</button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner