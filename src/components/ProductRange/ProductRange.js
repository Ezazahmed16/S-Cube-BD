import React from 'react'
import bg from '../../assets/img/elegant-mannequin-standing-modern-boutique-window-generated-by-ai.jpg'
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
                                        <img className="object-cover w-full bg-gray-500 aspect-square rounded-xl" src='https://img.freepik.com/premium-photo/multicolored-man-s-shirts-showcase-boutique_213607-982.jpg?w=740' alt=''/>
                                        <img className="object-cover w-full bg-gray-500 aspect-square rounded-xl" src='https://img.freepik.com/premium-photo/two-hoodies-hanging-wall-one-which-says-i-love-you_889227-730.jpg?w=740'  alt=''/>
                                        <img className="object-cover w-full bg-gray-500 aspect-square rounded-xl" src='https://img.freepik.com/premium-photo/graphic-shirt-trendy-design-mockup_460848-12972.jpg?w=740'  alt=''/>
                                        <img className="object-cover w-full bg-gray-500 aspect-square rounded-xl" src='https://img.freepik.com/premium-photo/stylish-clothes-hipster-fashion-pink-shirt-denim-overalls-hanger-wardrobe-trends_161568-3751.jpg?w=740'  alt=''/>
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