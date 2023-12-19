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

const productRangeDetails = () => {
  const backgroundStyle = {
    backgroundImage: `url(${bg})`,
  };

  const images = [
    'https://img.freepik.com/premium-photo/folded-classic-grey-wool-coat-white-background_624181-698.jpg?w=360',
    'https://img.freepik.com/premium-photo/winter-jacket-isolated_624181-3499.jpg?w=360',
    'https://img.freepik.com/free-photo/football-composition-with-jersey_23-2147827779.jpg?w=740&t=st=1702978143~exp=1702978743~hmac=b17a407a82b01771c79f669b9b182ffd8e49597d4f39ebd794e42c118011ac5c',
    'https://img.freepik.com/premium-photo/polo-tshirt-mockxaup-design_751108-905.jpg?w=740',
    'https://img.freepik.com/premium-photo/new-clean-towels-are-neatly-stacked-shelves-store-interior-modern-bathroom-hotel-shelves-with-bath-accessories-new-relaxation-room_678914-4871.jpg?w=740',
    'https://img.freepik.com/premium-photo/black-flared-cotton-knee-length-skirt-white-background_624181-7697.jpg?w=360',
    'https://img.freepik.com/premium-photo/top-view-women-s-lace-underwear_96549-474.jpg?w=740',
    'https://img.freepik.com/premium-photo/showcase-male-business-suits-store_279525-311.jpg?w=740',
    'https://img.freepik.com/premium-photo/jeans-wooden-background_93675-19687.jpg?w=360',
    'https://img.freepik.com/premium-photo/graphic-shirt-trendy-design-mockup_460848-12972.jpg?w=740',
    'https://img.freepik.com/premium-photo/classic-male-wool-coat-warm-scarf_279525-505.jpg?w=360',
    'https://img.freepik.com/premium-photo/khaki-casual-warm-jacket-with-white-fur-collar-isolated-white_624181-7660.jpg?w=360',
    'https://img.freepik.com/premium-photo/flat-lay-summer-accessories-with-3-colorful-bikini-sunscreen-beach-hat-coral-starfish-shape-sunglasses-heart-shape-palm-leaves-isolated-white-background_164138-790.jpg?w=740',
    'https://img.freepik.com/premium-photo/sweater-clothes-hunger_23-2147955955.jpg?w=360',
    'https://img.freepik.com/premium-photo/warm-winter-sweater-isolated-white-background_900706-5247.jpg?w=740',
    'https://img.freepik.com/premium-photo/beautiful-woman-shirt-hanging-wall_1339-179175.jpg?w=740',
    'https://img.freepik.com/premium-photo/beautiful-woman-shirt-hanging-with-wood-hanger-wall_1339-156357.jpg?w=360',
    'https://img.freepik.com/premium-photo/black-men-s-autumn-bologna-jacket_383357-1078.jpg?w=740',
    'https://img.freepik.com/premium-photo/dark-red-polo-shirt-short-sleeve-template-mockup-generative-ai-illustration_145713-2262.jpg?w=740',
    'https://img.freepik.com/premium-photo/jacket-isolate-white_87394-16336.jpg?w=740',
    'https://img.freepik.com/premium-photo/hanging-shirt-with-wood-hanger-wall_1339-169354.jpg?w=740',
    'https://img.freepik.com/premium-photo/pink-jacket-jumper-hanger-with-sneakers-set-baby-clothes-accessories-spring-autumn-white-background-fashion-kids-outfit-flat-lay-top-view_479776-7509.jpg?w=740',
    'https://img.freepik.com/premium-photo/stylish-men-s-suits-hangers-store-front-view-elegance-fashion_120897-3444.jpg?w=740',
    'https://img.freepik.com/premium-photo/fur-coats-made-ladies-exposed-sale_104603-6012.jpg?w=740',
    'https://img.freepik.com/premium-photo/quilted-jacket-isolated_624181-2850.jpg?w=740',
    'https://img.freepik.com/premium-photo/close-up-top-view-man-polo-shirt-put-rustic-wooden-table-top-with-blank-space-use-texts-display_34810-1484.jpg?w=740',
    'https://img.freepik.com/premium-photo/cargo-pants-isolated_624181-2167.jpg?w=360',
    'https://img.freepik.com/premium-photo/t-shirts-pastel-color-hanger-white-background-basic-female-clothes-spring-summer-outfit_479776-4635.jpg?w=740',
    'https://img.freepik.com/premium-photo/shirt-isolated_770606-2683.jpg?w=360',
    'https://img.freepik.com/premium-photo/children-s-things-hang-hanger-clothing-store_539606-11.jpg?w=740',
    'https://img.freepik.com/premium-photo/pair-striped-shorts-blue-background_889227-6862.jpg?w=740',
    'https://img.freepik.com/premium-photo/pink-pants-blue-jeans-colorful-stylish-female-pants-trousers-suit-all-tastes-white-shelf_274234-7725.jpg?w=740',
    'https://img.freepik.com/premium-photo/women-s-minimal-fashion-pastel-clothes-stylish-female-t-shirts-hoodie-pants-hanger_96872-4203.jpg?w=740',
    'https://img.freepik.com/premium-photo/sheepskin-coat-isolated_624181-2744.jpg?w=360',
    'https://img.freepik.com/premium-photo/sheepskin-coat-isolated_624181-2744.jpg?w=360',

    img16,
    img17,
    img18,
    img19,
    img20,
    'https://img.freepik.com/premium-photo/set-men-s-underwear-light-background_94064-10552.jpg?w=740',
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
    'https://img.freepik.com/premium-photo/fur-coats-hangers-interior_593040-515.jpg?w=740',
  ];

  return (
    <div>
      <div style={backgroundStyle} className="py-10">
        <h1 data-aos="zoom-in" className="text-5xl text-center py-5" style={{ color: '#FBC80B' }}>
          PRODUCT RANGE
        </h1>
        {/* <p className="text-center py-5 container mx-auto" style={{ color: '#D5A01E' }}>
          At S-Cube BD, our capacity extends beyond delivering exceptional professional services. We prioritize Compliance, ensuring that all our operations adhere to ethical standards and regulatory requirements. Our commitment to on-time delivery and maintaining the highest quality sets us apart. We firmly believe in cultivating long-term, mutually beneficial business relationships built on transparency and ethical commerce practices. Analyzing products and production efficiency, we engage in product reengineering to ensure competitive pricing for our clients. To stay ahead of the curve, we meticulously scrutinize market trends in fabric, color, and style. Our team actively participates in various fairs and collaborates with trend analysis companies to provide our clients with cutting-edge solutions. Our team is the backbone of our success. We invest in our team members, fostering a culture of continuous learning and growth. This investment enhances team expertise, enabling us to grow together and better serve our clients.
        </p> */}
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

export default productRangeDetails;
