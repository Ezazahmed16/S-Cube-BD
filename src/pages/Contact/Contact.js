import React from 'react';
import bg from '../../assets/fabric-texture-background1.jpg';
import logo from '../../assets/Logo.png';
import { FaLocationArrow } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BiSolidPhoneCall } from 'react-icons/bi';

const Contact = () => {
    const backgroundStyle = {
        backgroundImage: `url(${bg})`,
    };

    return (
        <div>
            <div style={backgroundStyle} className="min-h-screen">
                <h1 data-aos="zoom-in" className="text-5xl text-center pb-10" style={{ color: '#7F8189' }}>
                    Contact With Us
                </h1>
                <div className="hero">
                    <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-between w-full">

                        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                            <form className="card-body w-full">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Your Name" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="Your Email" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered" placeholder="Message"></textarea>
                                </div>

                                <div className="form-control mt-6 mx-auto">
                                    <div data-aos="zoom-out" className="">
                                        <button style={{ backgroundColor: '#FBC80B' }} className="btn">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="text-center lg:text-left text-white w-full justify-center mx-auto">
                            <div className="mb-5">
                                <div className="flex gap-5 items-center ">
                                    <FaLocationArrow className='w-8 h-8' />
                                    <h1>188, Fakirapool (7th Floor), <br />Motijheel, Dhaka - 1000</h1>
                                </div>
                                <div className="flex gap-5 items-center my-3">
                                    <MdEmail className='w-8 h-8' />
                                    <h1>demo@gmail.com</h1>
                                </div>
                                <div className="flex gap-5 items-center ">
                                    <BiSolidPhoneCall className='w-8 h-8' />
                                    <h1>017127272727</h1>
                                </div>
                            </div>

                            <div className="">
                                <iframe
                                    title="Google Maps"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.4111584306156!2d90.41454746013004!3d23.732713189367704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85954308ac3%3A0x32bd8348bffa01bf!2sFakirapool%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1699868506827!5m2!1sen!2sbd"
                                    width="400"
                                    height="300"
                                    style={{ border: '0' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
