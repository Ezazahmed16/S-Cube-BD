import React from 'react'
import shihab from '../../assets/shihab.jpg'
import ruman from '../../assets/ruman.jpg'
import sohel from '../../assets/sohel.jpg'
import bg from '../../assets/bg/t_bg_4.webp'

const MeetOurTeam = () => {
    const backgroundStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        alignItems: 'center',
        justifyContent: 'center',
    };
    return (
        <div>
            <div className='block min-h-screen' style={backgroundStyle} >
                <div className="">
                    <div style={{ color: "#D5A01E" }} className="py-6">
                        <div className="container p-4 mx-auto">
                            <div className="space-y-4">
                                <h1 data-aos="zoom-in" className="text-5xl text-center pb-10" style={{ color: '#FBC80B' }}>
                                    Meet With Us
                                </h1>
                            </div>

                            <div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">

                                <div data-aos="fade-up"
                                    data-aos-duration="3000" className="space-y-4">
                                    <img alt="" className="object-cover h-56 w-48 mx-auto mb-4 bg-center rounded-sm bg-gray-500" src={shihab} />
                                    <div className="flex flex-col items-center">
                                        <h4 className="text-xl font-semibold">Md. Asifur Rahman Shihab</h4>
                                        <p style={{ color: "#D5A01E" }} className="text-sm ">
                                            Director ~ Business Development
                                        </p>
                                        <div className="flex mt-2 space-x-2">
                                            <p style={{ color: "#7F8189" }}>+880 1959-783163</p>

                                        </div>
                                    </div>
                                </div>

                                <div data-aos="fade-up"
                                    data-aos-duration="3000" className="space-y-4">
                                    <img alt="" className="object-cover h-56 w-48 mx-auto mb-4 bg-center rounded-sm bg-gray-500" src={ruman} />
                                    <div className="flex flex-col items-center">
                                        <h4 className="text-xl font-semibold">Md. Sazzad Murshed Ruman</h4>
                                        <p style={{ color: "#D5A01E" }} className="text-sm ">
                                            Director ~ Merchandising & IPD
                                        </p>
                                        <div className="flex mt-2 space-x-2">
                                            <p style={{ color: "#7F8189" }}>+8801913162887</p>

                                        </div>
                                    </div>
                                </div>

                                <div data-aos="fade-up"
                                    data-aos-duration="3000" className="space-y-4">
                                    <img alt="" className="object-cover h-56 w-48 mx-auto mb-4 bg-center rounded-sm bg-gray-500" src={sohel} />
                                    <div className="flex flex-col items-center">
                                        <h4 className="text-xl font-semibold">
                                            A S M Abdullah Hasan shohel
                                        </h4>
                                        <p style={{ color: "#D5A01E" }} className="text-sm ">
                                            Director ~ Supply chain & Commercial
                                        </p>
                                        <div className="flex mt-2 space-x-2">
                                            <p style={{ color: "#7F8189" }}>+8801719154759</p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MeetOurTeam