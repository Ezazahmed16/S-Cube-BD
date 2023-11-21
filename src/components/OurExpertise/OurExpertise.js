import React from 'react'
import bg from "../../assets/bg/bg_5.webp"
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const OurExpertise = () => {
    const backgroundStyle = {
        backgroundImage: `url(${bg})`,
    };

    const images = [
        'https://cdn.pixabay.com/photo/2019/03/16/08/47/thread-4058667_640.jpg',
        'https://cdn.pixabay.com/photo/2017/10/11/14/32/blur-2841225_640.jpg',
        'https://cdn.pixabay.com/photo/2016/11/19/20/17/catwalk-1840941_640.jpg',
        'https://cdn.pixabay.com/photo/2016/11/23/18/12/bag-1854148_640.jpg',
        'https://cdn.pixabay.com/photo/2016/03/20/13/48/zip-1268656_640.jpg',
        'https://cdn.pixabay.com/photo/2016/11/22/21/57/apparel-1850804_640.jpg',
        'https://cdn.pixabay.com/photo/2020/03/09/16/02/silk-4916174_640.jpg',
        'https://cdn.pixabay.com/photo/2016/07/12/11/45/towels-1511875_640.jpg',
        'https://cdn.pixabay.com/photo/2016/03/27/22/16/fashion-1284496_640.jpg',
        'https://cdn.pixabay.com/photo/2014/10/27/19/18/baby-shoes-505471_640.jpg',
        'https://cdn.pixabay.com/photo/2015/01/16/15/01/fashion-601553_640.jpg',
        'https://cdn.pixabay.com/photo/2017/03/27/12/45/woman-2178480_640.jpg',
        'https://cdn.pixabay.com/photo/2020/06/05/03/35/fashion-5261318_640.jpg',
        'https://cdn.pixabay.com/photo/2016/11/19/11/33/footwear-1838767_640.jpg',
        'https://cdn.pixabay.com/photo/2016/07/22/16/33/fashion-1535208_640.jpg',
    ];


    return (
        <div className='py-10' style={backgroundStyle} >

            <h1 data-aos="zoom-in" className="text-5xl text-center py-5" style={{ color: '#FBC80B' }}>
                Our Expertise
            </h1>

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
    )
}

export default OurExpertise