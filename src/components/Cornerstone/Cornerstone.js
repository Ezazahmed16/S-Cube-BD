import React, { useEffect } from 'react'
import bg from '../../assets/fabric-texture-background1.jpg'
import { motion } from "framer-motion";
import AOS from 'aos'
import 'aos/dist/aos.css'

const Cornerstone = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    const backgroundStyle = {
        backgroundImage: `url(${bg})`,
    };

    return (
        <div style={backgroundStyle} className='py-5'>
            <h1 style={{ color: '#D5A01E' }} className='text-3xl md:text-5xl text-center py-5'>The <span style={{ color: '#FBC80B' }} > Cornerstone </span> of Every Collection</h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
                <div
                    className="card w-72 shadow-xl border-2 border-accent mx-auto"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                >
                    <div className="card-body">
                        <h2 style={{ color: '#D5A01E' }} className="card-title ">Research & Development</h2>
                        <p className='text-accent text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, officiarem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, officia!</p>
                    </div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                        <figure><img className='h-40 w-56 mb-2' src="https://cdn.pixabay.com/photo/2017/08/01/00/38/man-2562325_640.jpg" alt="Shoes" /></figure>
                    </motion.div>
                </div>

                <div
                    className="card w-72 shadow-xl border-2 border-accent mx-auto"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                >
                    <div className="card-body">
                        <h2 style={{ color: '#D5A01E' }} className="card-title ">Design</h2>
                        <p className='text-accent text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, officiarem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, officia!</p>
                    </div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                        <figure><img className='h-40 w-56 mb-2' src="https://cdn.pixabay.com/photo/2016/11/24/20/30/floor-plan-1857175_640.jpg" alt="Shoes" /></figure>
                    </motion.div>

                </div>

                <div
                    className="card w-72 shadow-xl p-2 border-2 border-accent mx-auto"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                >
                    <div className="card-body">
                        <h2 style={{ color: '#D5A01E' }} className="card-title ">Production</h2>
                        <p className='text-accent text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, officiarem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, officia!</p>
                    </div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                        <figure><img className='h-40 w-56 mb-2' src="https://cdn.pixabay.com/photo/2018/02/02/17/14/triangle-3125882_640.jpg" alt="Shoes" /></figure>
                    </motion.div>
                </div>

                <div
                    className="card w-72 shadow-xl p-2 border-2 border-accent mx-auto"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                >
                    <div className="card-body">
                        <h2 style={{ color: '#D5A01E' }} className="card-title ">Operations Support</h2>
                        <p className='text-accent text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, officiarem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, officia!</p>
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