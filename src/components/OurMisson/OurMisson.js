import React, { useEffect } from 'react';
import bg from '../../assets/fabric-texture-background1.jpg';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Certificates from '../Certificates/Certificates';
const OurMission = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])
  const backgroundStyle = {
    backgroundImage: `url(${bg})`,
  };

  return (
    <div>
      <div style={backgroundStyle} className="py-10">
        <div className="">
          <div className="hero min-h-screen">
            <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center">
              <div style={{ color: '#FBC80B' }}>
                <h1 className="text-5xl font-bold">
                  Our Mission at S-Cube BD</h1>
                <p style={{ color: "#D5A01E" }} className="py-6">

                At S-Cube BD, our mission as a buying house is to epitomize excellence, intricately weaving a tapestry of trust, innovation, and unparalleled service within the dynamic global trade landscape. We aspire to stand as the beacon of reliability, fostering lasting partnerships with both clients and suppliers. With a commitment to staying at the forefront of industry trends, we aim to infuse every transaction with a blend of expertise and innovation. Our relentless pursuit of excellence is the driving force behind our mission to redefine standards in the buying house sector, ensuring that each engagement reflects our dedication to delivering exceptional value and forging enduring connections in the ever-evolving realm of international commerce.

                </p>
              </div>

              <div data-aos="zoom-out-left" className="">
                <img
                  src="https://img.freepik.com/premium-photo/fashion-models-runway-fashion-showgenerative-ai_391052-17645.jpg?w=826"
                  alt=""
                />
              </div>


            </div>
          </div>
        </div>
      </div>
      <Certificates />
    </div>
  );
};

export default OurMission;
