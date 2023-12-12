import React from 'react'
import bg from '../../assets/bg/bg_3.webp'
import work_bg_5 from '../../assets/work_bg_5.jpg'
import work_bg_3 from '../../assets/work_bg_3.jpg'

const WorkPolicy = () => {

    const backgroundStyle = {
        backgroundImage: `url(${bg})`,

    };

    return (
        <div>
            <div style={backgroundStyle} className="py-10 min-h-screen ">
                <h1 data-aos="zoom-in" className="text-5xl text-center pb-5" style={{ color: '#FBC80B' }}>
                    We Work
                </h1>
                <p style={{ color: "#FBC80B" }} className="py-6 w-3/4 mx-auto text-center">
                    Our work at S-Cube BD is crafted to captivate every discerning buyer, inviting them into a realm of unparalleled excellence. We aspire to leave an indelible impression by seamlessly addressing our clients' business challenges with finesse and innovation. Our commitment to attracting and retaining top-tier talent ensures a service that not only meets but exceeds expectations. Embracing a culture of collaboration and continuous growth, we aim to be the magnetic force that draws buyers in, positioning us as the epitome of trust and distinction in the buying house landscape.
                </p>

                <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-3 opacity-70">

                    <div data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        className="card shadow-xl bg-gray-800">
                        <figure className="px-2 pt-10 max-h-36">
                            <img src="https://cdn.pixabay.com/photo/2018/01/25/10/46/businessman-3105873_640.jpg" alt="Shoes" className="rounded-xl h-36" />
                        </figure>
                        <div className="card-body">
                            <h2 style={{ color: "#FBC80B" }} className="card-title mx-auto">Vendor  KPI</h2>
                            <p style={{ color: '#D5A01E' }}>Compliance,
                                on time delivery & quality.</p>
                        </div>

                    </div>

                    <div data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" className="card shadow-xl opacity-50 bg-gray-800">
                        <figure className="px-2 pt-10 max-h-36">
                            <img src={work_bg_3} alt="Shoes" className="rounded-xl h-36" />
                        </figure>
                        <div className="card-body">
                            <h2 style={{ color: "#FBC80B" }} className="card-title mx-auto">Stable  business  relationship
                            </h2>
                            <p style={{ color: '#D5A01E' }}>We believe in long term  mutually beneficial business  relationship with transparent  and ethical commerce.
                            </p>
                        </div>

                    </div>
                    <div data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" className="card shadow-xl opacity-50 bg-gray-800">
                        <figure className="px-2 pt-10 max-h-36">
                            <img src="https://img.freepik.com/free-photo/character-holding-green-arrow-tree-with-money_1134-289.jpg?size=626&ext=jpg&ga=GA1.1.1389451345.1700558843&semt=ais" alt="Shoes" className="rounded-xl h-36" />
                        </figure>
                        <div className="card-body">
                            <h2 style={{ color: "#FBC80B" }} className="card-title mx-auto">Price  competitiveness  analysis</h2>
                            <p style={{ color: '#D5A01E' }}>We analyses the product,  production efficiency,  product reengineering to  ensure competitive price</p>
                        </div>

                    </div>
                    <div data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" className="card shadow-xl opacity-50 bg-gray-800">
                        <figure className="px-2 pt-10 max-h-36">
                            <img src="https://img.freepik.com/free-photo/examining-business-documents_1098-18049.jpg?size=626&ext=jpg&ga=GA1.1.1389451345.1700558843&semt=ais" alt="Shoes" className="rounded-xl h-36" />
                        </figure>
                        <div className="card-body">
                            <h2 style={{ color: "#FBC80B" }} className="card-title mx-auto">Market  trend  analysis</h2>
                            <p style={{ color: '#D5A01E' }}>We scrutinize market trends of  fabric, colour and style by  attending different fair and  consult with trend analysis  companies.</p>
                        </div>

                    </div>
                    <div data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" className="card shadow-xl opacity-50 bg-gray-800">
                        <figure className="px-2 pt-10 max-h-36">
                            <img src={work_bg_5} alt="Shoes" className="rounded-xl h-36" />
                        </figure>
                        <div className="card-body">
                            <h2 style={{ color: "#FBC80B" }} className="card-title mx-auto">Employee engagement</h2>
                            <p style={{ color: '#D5A01E' }}>Our team is our strength  and we invest on team  members to enrich team  expertise to grow together</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default WorkPolicy