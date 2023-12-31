import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bg_1 from '../../assets/banner_bg_03.jpg';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="min-h-screen hero" style={{ backgroundImage: `url(${bg_1})` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-5xl" data-aos="zoom-out" style={{ color: '#FBC80B' }}>
            Welcome to
          </h1>

          <TypeAnimation
            sequence={[
              'S-CUBE BD',
              1000,
              'A HOUSE OF ASSURANCE',
              1000,
            ]}
            wrapper="span"
            speed={20}
            style={{ fontSize: '2rem', display: 'inline-block', color: '#FBC80B' }}
            repeat={Infinity}
          />

          <p style={{ color: '#D5A01E' }} className="my-5">
            Your Trusted Apparel Sourcing Partner in Dhaka, Bangladesh! Discover Excellence in Sourcing, Buying, and Consulting. With our experienced and dedicated sales team, along with a hardworking quality assurance team, we offer a complete service to ensure top-notch quality goods at competitive prices. Experience the Difference with CUBE BD!
          </p>

          <div data-aos="flip-down">
            <Link to="/WorkPolicy">
              <button style={{ backgroundColor: '#FBC80B' }} className="btn btn-outline">
                Our Services
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
