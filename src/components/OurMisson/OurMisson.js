import React, { useEffect } from 'react';
import bg from '../../assets/fabric-texture-background1.jpg';
import AOS from 'aos'
import 'aos/dist/aos.css'
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

                  At S-Cube BD, our mission is clear and concise: to deliver exceptional professional services that effectively address our clients' business challenges. We achieve this by attracting and retaining top talent, fostering a collaborative culture that encourages both professional and personal growth. Our commitment is to be the most trusted and respected professional services firm, recognized by our clients for delivering excellence.

                </p>
              </div>

              <div data-aos="zoom-out-left" className="">
                <img
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6bc85e103416677.5f4d06575886f.jpg"
                  className="rounded-3xl shadow-2xl"
                  alt=""
                />
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
