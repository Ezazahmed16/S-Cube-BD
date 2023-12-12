import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import bg from '../../assets/bg/bg_4.webp';
import img10 from '../../assets/img/img10.jpg';
import img9 from '../../assets/img/img9.jpg';
import img11 from '../../assets/img/img11.jpg';
import img12 from '../../assets/img/img12.jpg';
import img13 from '../../assets/img/img13.jpg';
import img14 from '../../assets/img/img14.jpg';
import img15 from '../../assets/img/img15.jpg';
import img16 from '../../assets/img/img16.jpg';
import img17 from '../../assets/img/img17.jpg';
import img18 from '../../assets/img/img18.jpg';
import img19 from '../../assets/img/img19.jpg';
import img20 from '../../assets/img/img20.jpg';

const OurCapability = () => {
  const backgroundStyle = {
    backgroundImage: `url(${bg})`,
  };

  const images = [
    'https://img.freepik.com/premium-photo/close-up-top-view-man-polo-shirt-put-rustic-wooden-table-top-with-blank-space-use-texts-display_34810-1484.jpg?w=740',
    'https://img.freepik.com/premium-photo/cargo-pants-isolated_624181-2167.jpg?w=360',
    'https://img.freepik.com/premium-photo/shirt-isolated_770606-2683.jpg?w=360',
    'https://img.freepik.com/premium-photo/pink-pants-blue-jeans-colorful-stylish-female-pants-trousers-suit-all-tastes-white-shelf_274234-7725.jpg?w=740',
    'https://img.freepik.com/premium-photo/women-s-minimal-fashion-pastel-clothes-stylish-female-t-shirts-hoodie-pants-hanger_96872-4203.jpg?w=740',
    'https://img.freepik.com/premium-photo/sheepskin-coat-isolated_624181-2744.jpg?w=360',
    'https://img.freepik.com/premium-photo/sheepskin-coat-isolated_624181-2744.jpg?w=360',

    img16,
    img17,
    img18,
    img19,
    img20,
    'https://cdn.pixabay.com/photo/2019/03/16/08/47/thread-4058667_640.jpg',
    'https://cdn.pixabay.com/photo/2017/10/11/14/32/blur-2841225_640.jpg',
    'https://cdn.pixabay.com/photo/2016/11/19/20/17/catwalk-1840941_640.jpg',
    'https://cdn.pixabay.com/photo/2016/11/23/18/12/bag-1854148_640.jpg',
    'https://img.freepik.com/premium-photo/vareity-pink-bra-hanging-hanger_99272-933.jpg?w=740',
    img10,
    img9,
    img11,
    img12,
    img13,
    img14,
    img15,
    'https://cdn.pixabay.com/photo/2016/03/20/13/48/zip-1268656_640.jpg',
    'https://cdn.pixabay.com/photo/2016/11/22/21/57/apparel-1850804_640.jpg',
    'https://cdn.pixabay.com/photo/2016/07/12/11/45/towels-1511875_640.jpg',
    'https://cdn.pixabay.com/photo/2016/03/27/22/16/fashion-1284496_640.jpg',
    'https://img.freepik.com/free-photo/huge-variety-female-shoes-bags-different-colors-shelves-shop_627829-10303.jpg?w=740&t=st=1701591347~exp=1701591947~hmac=f42de038e1398e7030905ee9f161f99da7210518e4bd883f1ae81451552c60d2',
    'https://img.freepik.com/free-photo/young-man-choosing-cloths-menswear-shop_1303-31028.jpg?size=626&ext=jpg&ga=GA1.1.1389451345.1700558843&semt=ais',
    'https://img.freepik.com/free-photo/dark-haired-woman-with-red-lipstick-smiles-leans-stand-with-clothes-holds-package-pink-background_197531-17609.jpg?size=626&ext=jpg&ga=GA1.1.1389451345.1700558843&semt=ais',
    'https://cdn.pixabay.com/photo/2016/11/19/11/33/footwear-1838767_640.jpg',
  ];

  return (
    <div>
      <div style={backgroundStyle} className="py-10">
        <h1 data-aos="zoom-in" className="text-5xl text-center py-5" style={{ color: '#FBC80B' }}>
          Our Capability
        </h1>
        <p className="text-center py-5 container mx-auto" style={{ color: '#D5A01E' }}>
          At S-Cube BD, our capacity extends beyond delivering exceptional professional services. We prioritize Compliance, ensuring that all our operations adhere to ethical standards and regulatory requirements. Our commitment to on-time delivery and maintaining the highest quality sets us apart. We firmly believe in cultivating long-term, mutually beneficial business relationships built on transparency and ethical commerce practices. Analyzing products and production efficiency, we engage in product reengineering to ensure competitive pricing for our clients. To stay ahead of the curve, we meticulously scrutinize market trends in fabric, color, and style. Our team actively participates in various fairs and collaborates with trend analysis companies to provide our clients with cutting-edge solutions. Our team is the backbone of our success. We invest in our team members, fostering a culture of continuous learning and growth. This investment enhances team expertise, enabling us to grow together and better serve our clients.


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
