import React from 'react'
import bg from "../../assets/bg/bg_5.webp"
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import ex_1 from '../../assets/ex_3.jpg'
import ex_2 from '../../assets/ex2.jpg'
import ex_3 from '../../assets/ex_5.jpg'
import ex_4 from '../../assets/tr_5.jpg'

const OurExpertise = () => {
    const backgroundStyle = {
        backgroundImage: `url(${bg})`,
    };

    const images = [
        'https://cdn.pixabay.com/photo/2021/11/15/05/25/boutique-6796399_640.jpg',
        `${ex_1}`,
        `${ex_2}`,
        'https://img.freepik.com/premium-photo/woman-black-long-skirt-shirt-with-colored-patterns-sneakers-white-background-studio-shot_481253-473.jpg?w=360',
        'https://cdn.pixabay.com/photo/2016/04/19/13/39/store-1338629_1280.jpg',
        `${ex_3}`,
        'https://cdn.pixabay.com/photo/2020/10/04/07/00/girl-5625416_640.jpg',
        `${ex_4}`,
        'https://cdn.pixabay.com/photo/2014/10/27/19/18/baby-shoes-505471_640.jpg',
        'https://cdn.pixabay.com/photo/2015/01/16/15/01/fashion-601553_640.jpg',
        'https://cdn.pixabay.com/photo/2016/03/27/22/05/necktie-1284463_1280.jpg',
        'https://img.freepik.com/free-photo/woman-with-shopping-bags-studio-yellow-background-isolated_1303-14294.jpg?size=626&ext=jpg&ga=GA1.1.1389451345.1700558843&semt=sph',
        'https://cdn.pixabay.com/photo/2014/06/25/21/46/bikini-377487_640.jpg',
        'https://cdn.pixabay.com/photo/2016/04/16/19/51/girl-1333640_640.jpg',
        'https://img.freepik.com/free-photo/young-handsome-man-choosing-shoes-shop_1303-19707.jpg?size=626&ext=jpg&ga=GA1.1.1389451345.1700558843&semt=ais',
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