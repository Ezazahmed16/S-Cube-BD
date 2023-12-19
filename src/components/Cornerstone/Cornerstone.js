import React, { useEffect } from 'react'
import bg from '../../assets/bg/t_bg_2.webp'
import { motion } from "framer-motion";
import AOS from 'aos'
import 'aos/dist/aos.css'

const Cornerstone = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    const backgroundStyle = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
    };

    return (
        <div style={backgroundStyle} className='py-5'>
            <h1 data-aos="fade-right" style={{ color: '#FBC80B' }} className='text-3xl md:text-5xl text-center py-5'>The Cornerstone of Every Collection</h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto opacity-90">
                <div
                    className="card w-72 shadow-xl border-2 border-accent mx-auto bg-gray-900 "
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                >
                    <div className="card-body">
                        <h2 style={{ color: '#FBC80B' }} className="card-title ">Research & Development</h2>
                        <p style={{ color: "#D5A01E" }} className='text-accent text-sm'>S-Cube BD's Research & Development ensures compliance, timely delivery, and quality, offering competitive pricing through continuous product and market analysis.</p>
                    </div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                        <figure><img className='h-40 w-56 mb-2' src="https://img.freepik.com/premium-photo/portrait-young-attractive-hipster-asia-female-owner-startup-look-camera-work-happy-with-box-home-prepare-parcel-delivery-sme-supply-chain-procurement-omnichannel-ecommerce-online-concept_265022-52842.jpg?w=740" alt="Shoes" /></figure>
                    </motion.div>
                </div>

                <div
                    className="card w-72 shadow-xl border-2 border-accent mx-auto bg-gray-900"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                >
                    <div className="card-body">
                        <h2 style={{ color: '#FBC80B' }} className="card-title ">Design</h2>
                        <p style={{ color: "#D5A01E" }} className='text-sm'>
                            S-Cube BD's design expertise blends creativity and functionality, ensuring captivating aesthetics and optimal user experience for your brand.</p>
                    </div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                        <figure><img className='h-40 w-56 mb-2' src="https://img.freepik.com/premium-photo/owner-business-asian-young-women-fashion-designer-working-her-designer-showroom-lifestyle-stylish-tailor-taking-measurements-mannequin-cutting-cloths-studio-small-business_265022-41999.jpg?w=740" alt="Shoes" /></figure>
                    </motion.div>

                </div>

                <div
                    className="card w-72 shadow-xl p-2 border-2 border-accent mx-auto bg-gray-900"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                >
                    <div className="card-body">
                        <h2 style={{ color: '#FBC80B' }} className="card-title ">Production</h2>
                        <p style={{ color: "#D5A01E" }} className='text-sm'>At S-Cube BD, our production prowess guarantees seamless execution, meeting deadlines with unparalleled quality and compliance adherence.</p>
                    </div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                        <figure><img className='h-40 w-56 mb-2' src="https://cdn.pixabay.com/photo/2023/07/13/08/58/ai-generated-8124243_640.jpg" alt="Shoes" /></figure>
                    </motion.div>
                </div>

                <div
                    className="card w-72 shadow-xl p-2 border-2 border-accent mx-auto bg-gray-900"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                >
                    <div className="card-body">
                        <h2 style={{ color: '#FBC80B' }} className="card-title ">Operations Support</h2>
                        <p style={{ color: "#D5A01E" }} className='text-sm'>Our dedicated operations team ensures streamlined processes, providing unwavering support for a hassle-free and efficient business experience.</p>
                    </div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                        <figure><img className='h-40 w-56 mb-2' src="https://cdn.pixabay.com/photo/2017/07/06/14/48/organization-2478211_1280.jpg" alt="Shoes" /></figure>
                    </motion.div>
                </div>

            </div>
        </div>
    )
}

export default Cornerstone