import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bg from '../../assets/bg/bg_1.webp';
import bg_1 from '../../assets/tr_5.jpg';
import bg_2 from '../../assets/tr_2.jpg';
import bg_3 from '../../assets/tr_3.jpg';
import bg_4 from '../../assets/tr_4.jpg';

const TrustedPartner = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="" style={{ backgroundImage: `url(${bg})` }}>
      <div className="max-w-7xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          <div className="text-yellow-400">
            <h1 data-aos="fade-right" className="text-5xl font-bold mb-4">
              Your trusted sourcing partner of choice.
            </h1>
            <p className="text-yellow-300 mb-6">
              At S-CUBE BD, we believe in personalized service. Each customer is assigned a dedicated executive who ensures prompt responses to production status updates, TNA (Time and Action) schedules, and inquiries. We prioritize the development of strong and lasting partnerships, and this approach extends equally to both new and existing customers. Our commitment to serving every onboard partner with the highest level of attention and care is what sets us apart.
            </p>
            <div data-aos="flip-down">
              <button className="btn btn-outline bg-yellow-300">About Us</button>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="grid grid-cols-3 gap-4">
              <div data-aos="flip-up" className="rounded-lg overflow-hidden hover:shadow-lg transition-transform transform hover:scale-105">
                <img className="h-56 w-full object-cover" src={bg_1} alt="" />
              </div>
              <div data-aos="flip-up" className="rounded-lg overflow-hidden col-span-2 hover:shadow-lg transition-transform transform hover:scale-105">
                <img className="h-48 w-full object-cover" src={bg_2} alt="" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div data-aos="flip-up" className="rounded-lg overflow-hidden col-span-2 hover:shadow-lg transition-transform transform hover:scale-105">
                <img className="h-48 w-full object-cover" src={bg_3} alt="" />
              </div>
              <div data-aos="flip-up" className="rounded-lg overflow-hidden hover:shadow-lg transition-transform transform hover:scale-105">
                <img className="h-56 w-full object-cover" src={bg_4} alt="" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TrustedPartner;
