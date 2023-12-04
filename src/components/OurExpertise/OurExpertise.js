import React from 'react'
import bg from "../../assets/bg/bg_5.webp"
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import ex_1 from '../../assets/ex_3.jpg'
import ex_2 from '../../assets/tr_2.jpg'
import ex_3 from '../../assets/ex_5.jpg'
import ex_4 from '../../assets/tr_5.jpg'
import ex_9 from '../../assets/dress-model.jpg'

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
        'https://img.freepik.com/premium-photo/male-shoe-store-mexico_79390-1852.jpg?size=626&ext=jpg&ga=GA1.1.1389451345.1700558843&semt=ais',
        'https://img.freepik.com/free-photo/shop-consultant-man-choosing-suit-looking-mannequin_7502-4366.jpg?size=626&ext=jpg&ga=GA1.1.1389451345.1700558843&semt=ais',
        'https://cdn.pixabay.com/photo/2016/03/27/22/05/necktie-1284463_1280.jpg',
        'https://img.freepik.com/free-photo/woman-with-shopping-bags-studio-yellow-background-isolated_1303-14294.jpg?size=626&ext=jpg&ga=GA1.1.1389451345.1700558843&semt=sph',
        'https://cdn.pixabay.com/photo/2014/06/25/21/46/bikini-377487_640.jpg',
        `${ex_9}`,
        'https://img.freepik.com/free-photo/young-handsome-man-choosing-shoes-shop_1303-19707.jpg?size=626&ext=jpg&ga=GA1.1.1389451345.1700558843&semt=ais',
        'https://img.freepik.com/free-photo/best-friends-together-spend-time-two-beautiful-girls-make-purchases-clothing-store-they-dressed-same-clothes_146671-15090.jpg?w=740&t=st=1701591103~exp=1701591703~hmac=66fe6b13ec63b5a56dea21c8be7ce82a7bf89365eaaf798256ed25287ee65e3d',
        'https://img.freepik.com/free-photo/children-s-bright-clothes-hang-display-baby-clothing-store_627829-6471.jpg?w=740&t=st=1701591192~exp=1701591792~hmac=0725aafba866c7fc632a0270ba2016bc58d4900703a64c7f5eab97fff7292326',
        'https://img.freepik.com/free-photo/two-stylish-shop-assistants-elegantly-dressed-working-menswear-store_613910-19747.jpg?size=626&ext=jpg&ga=GA1.1.1389451345.1700558843&semt=ais',
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