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
      <div style={backgroundStyle} className="py-5">
        <div className="max-h-screen">
          <h1 data-aos="zoom-in" className="text-5xl text-center" style={{ color: '#7F8189' }}>
            Our Mission
          </h1>
        </div>
        <div className="">
          <div className="hero min-h-screen">
            <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center">
              <div style={{ color: '#7F8189' }}>
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                  exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                  exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                  exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                  exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                  exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
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
