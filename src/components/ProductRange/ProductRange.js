import React from 'react'
import bg from '../../assets/img/elegant-mannequin-standing-modern-boutique-window-generated-by-ai.jpg'
import img1 from '../../assets/img/img23.jpg'
import img2 from '../../assets/img/img19.jpg'
import img3 from '../../assets/img/img11.jpg'
import img4 from '../../assets/img/img26.jpg'
import { Link } from 'react-router-dom'

const ProductRange = () => {
    const backgroundStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        alignItems: 'center',
        justifyContent: 'center',
    };
    return (
        <div>
            <div className='min-h-screen' style={backgroundStyle} >
                <div className="">
                    <div style={{ color: "#D5A01E" }} className="py-6">
                        <div className="container p-4 mx-auto">
                            <div className="space-y-4">
                                <h1 data-aos="zoom-in" className="text-5xl text-center pb-10" style={{ color: '#FBC80B' }}>
                                    PRODUCT RANGE
                                </h1>
                            </div>
                            <p className="text-yellow-300 mb-6 text-center">
                                Explore our extensive product catalog showcasing a diverse array of high-quality garments: KNIT: Men's, Ladies, and Kids Apparel Fleece Collection. BABIES: Adorable Baby Rompers, Lingerie and Underwear for Infants. WOVEN: Stylish Shirts, Trendy Ladies Woven Tops and Dresses, Woven Bottoms including Cargo Shorts, Fashionable Swimming Wear, Versatile Jackets, Comfortable Nightwear, Professional Workwear, Elegant Blazers FLAT KNIT:
                                Fashion-Forward Flat Knit Sweaters, OTHERS: Stylish Caps Luxurious Bed Sheets, Plush Towels.
                                Our product range is a testament to our commitment to delivering excellence across every category, ensuring satisfaction and style in every stitch.
                            </p>
                        </div>
                        <div className="">
                            <div className="py-6">
                                <div className="container flex flex-col justify-center p-4 mx-auto">
                                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                                        <img className="object-cover w-full bg-gray-500 aspect-square" src={img1} />
                                        <img className="object-cover w-full bg-gray-500 aspect-square" src={img2} />
                                        <img className="object-cover w-full bg-gray-500 aspect-square" src={img3} />
                                        <img className="object-cover w-full bg-gray-500 aspect-square" src={img4} />
                                    </div>
                                </div>
                                <Link className='flex justify-center items-center h-full' to="/OurCapability">
                                    <button style={{ backgroundColor: '#FBC80B' }} className="btn btn-outline">
                                        See All
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductRange