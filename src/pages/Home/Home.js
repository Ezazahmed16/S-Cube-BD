import React from 'react'
import Banner from '../../components/Banner/Banner';
import TrustedPartner from '../../components/TrustedPartner/TrustedPartner';
import Cornerstone from '../../components/Cornerstone/Cornerstone';
import MeetOurTeam from '../../components/MeetOurTeam/MeetOurTeam';
import KeyLocarion from '../../components/KeyLocarion/KeyLocarion';
import Sustainability from '../../components/Sustainability/Sustainability';
import Certificates from '../../components/Certificates/Certificates';
import ProductRange from '../../components/ProductRange/ProductRange';


const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Banner />
      <TrustedPartner />
      <KeyLocarion />
      <Cornerstone />
      <ProductRange />
      <Sustainability />
      {/* <OurClients /> */}
      <MeetOurTeam />
      <Certificates />
    </div>
  )
}

export default Home;