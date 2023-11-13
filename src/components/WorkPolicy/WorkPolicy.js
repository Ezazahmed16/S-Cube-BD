import React from 'react'
import bg from '../../assets/fabric-texture-background1.jpg'

const WorkPolicy = () => {

    const backgroundStyle = {
        backgroundImage: `url(${bg})`,
    };

    return (
        <div>
            <div style={backgroundStyle} className="">
                <h1 data-aos="zoom-in" className="text-5xl text-center pb-5" style={{ color: '#7F8189' }}>
                    We Work
                </h1>

                <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-3 opacity-70">

                    <div data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        className="card bg-base-100 shadow-xl ">
                        <div className="card-body">
                            <h2 style={{ color: "#FBC80B" }} className="card-title mx-auto">Vendor  KPI</h2>
                            <p>Compliance,
                                on time delivery & quality.</p>
                        </div>
                    </div>

                    <div data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" className="card bg-base-100 shadow-xl opacity-50">
                        <div className="card-body">
                            <h2 style={{ color: "#FBC80B" }} className="card-title mx-auto">Stable  business  relationship
                            </h2>
                            <p>We believe in long term  mutually beneficial business  relationship with transparent  and ethical commerce.
                            </p>
                        </div>

                    </div>
                    <div data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" className="card bg-base-100 shadow-xl opacity-50">
                        <div className="card-body">
                            <h2 style={{ color: "#FBC80B" }} className="card-title mx-auto">Price  competitiveness  analysis</h2>
                            <p>We analyses the product,  production efficiency,  product reengineering to  ensure competitive price</p>
                        </div>

                    </div>
                    <div data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" className="card bg-base-100 shadow-xl opacity-50">
                        <div className="card-body">
                            <h2 style={{ color: "#FBC80B" }} className="card-title mx-auto">Market  trend  analysis</h2>
                            <p>We scrutinize market trends of  fabric, colour and style by  attending different fair and  consult with trend analysis  companies.</p>
                        </div>

                    </div>
                    <div data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" className="card bg-base-100 shadow-xl opacity-50">
                        <div className="card-body">
                            <h2 style={{ color: "#FBC80B" }} className="card-title mx-auto">Employee engagement</h2>
                            <p>Our team is our strength  and we invest on team  members to enrich team  expertise to grow together</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default WorkPolicy