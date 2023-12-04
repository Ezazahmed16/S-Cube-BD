import React from 'react';
import sus from '../../assets/sus_1.jpg'
import part from '../../assets/part.jpg'

const Sustainability = () => {
    const sectionStyle = {
        backgroundImage: `url('https://img.freepik.com/premium-photo/outfit-traveler-black-background-travel-concept_146508-659.jpg?w=740')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };
    return (
        <div>
            <div style={sectionStyle} className="p-4 lg:p-8">
                <div className="container mx-auto space-y-12" style={{ color: '#FBC80B' }}>
                    <div className="overflow-hidden rounded-md shadow-sm lg:flex-row">

                        <div className="p-6 rounded-md shadow-md gap-5 grid grid-cols-1 md:grid-cols-2 items-center">
                            <img  data-aos="fade-up-left" src={sus} alt="" className="object-cover object-center w-full rounded-md h-72 " />
                            <div className="mt-6 mb-2" data-aos="fade-left">
                                <h2 className="text-3xl font-semibold tracki mb-5">Sustainability</h2>
                                <p className="">S Cube BD thrives on Sustainability, nurturing enduring growth. Our 5.0 Strategy, rooted in Empowerment, Excellence, Innovation, Harmony, and Stewardship, embodies a commitment to a flourishing future, guiding every aspect of our buying house operations</p>
                            </div>
                        </div>

                        <div className="p-6 rounded-md shadow-md gap-5 grid grid-cols-1 md:grid-cols-2 items-center">

                            <div  data-aos="fade-right" className="mt-6 mb-2">
                                <h2 className="text-3xl font-semibold tracki mb-5">Why Partner with Us?</h2>
                                <p className="">Choose S Cube BD for an extraordinary experience. Uncover unmatched elegance as we elevate your style with top-tier garments expertly sourced from Bangladesh. Our unwavering commitment to excellence guarantees each piece. Indulge in uncompromised luxury through opulent garments at unprecedented value. Punctual prestige defines our Buying House, exceeding expectations with meticulously timed shipments. Revel in ultimate satisfaction with sumptuous fabrics that redefine opulence. Our foundation rests on integrity and transparency, setting an unparalleled standard for trustworthy partnerships. Enjoy seamless, stress-free support with our 24/7 concierge service. Excellence isn't just promised; it's ingrained in every facet, making S Cube BD your unequivocal destination for fashion brilliance.</p>
                            </div>
                            <img  data-aos="fade-up-right" src={part} alt="" className="object-cover object-center rounded-md h-72 w-full" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sustainability;
