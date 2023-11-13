import React from 'react';
import bg from '../../assets/fabric-texture-background1.jpg';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const OurCapability = () => {
  const backgroundStyle = {
    backgroundImage: `url(${bg})`,
  };

  const images = [
    'https://cdn.pixabay.com/photo/2020/03/09/16/02/silk-4916174_640.jpg',
    'https://cdn.pixabay.com/photo/2016/07/12/11/45/towels-1511875_640.jpg',
    'https://cdn.pixabay.com/photo/2017/02/16/21/50/textile-2072568_640.jpg',
    'https://cdn.pixabay.com/photo/2015/09/09/18/01/black-932213_640.jpg',
    'https://cdn.pixabay.com/photo/2016/03/20/13/48/zip-1268656_640.jpg',
    'https://cdn.pixabay.com/photo/2017/09/28/08/38/arrangement-2794696_640.jpg',
    'https://cdn.pixabay.com/photo/2020/03/09/16/02/silk-4916174_640.jpg',
    'https://cdn.pixabay.com/photo/2016/07/12/11/45/towels-1511875_640.jpg',
    'https://cdn.pixabay.com/photo/2017/02/16/21/50/textile-2072568_640.jpg',
    'https://cdn.pixabay.com/photo/2015/09/09/18/01/black-932213_640.jpg',
    'https://cdn.pixabay.com/photo/2016/03/20/13/48/zip-1268656_640.jpg',
    'https://cdn.pixabay.com/photo/2017/09/28/08/38/arrangement-2794696_640.jpg',
  ];


  return (
    <div>

      <div style={backgroundStyle} className="">
        <h1 data-aos="zoom-in" className="text-5xl text-center pb-5" style={{ color: '#7F8189' }}>
          Our Capability
        </h1>
        <p className="text-center py-5 container mx-auto" style={{ color: '#7F8189' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad esse magni dolores in eos
          repudiandae vel fuga autem doloremque, pariatur exercitationem distinctio. Iste quibusdam
          deleniti quos placeat corporis fuga ullam animi blanditiis adipisci, vel, exercitationem
          aliquam dolore? Est sapiente dolorum maxime veritatis, quis perspiciatis illum autem
          repellat odio velit harum, aperiam magnam sit et, alias nisi quisquam id neque accusantium!
        </p>
      </div>

      <div style={backgroundStyle} className="p-10">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {images.map((image, i) => (
              <img
                data-aos="fade-up"
                data-aos-duration="3000"
                key={i}
                src={image}
                alt="gallery"
                style={{ width: '100%', display: 'block', cursor: 'pointer' }}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default OurCapability;
