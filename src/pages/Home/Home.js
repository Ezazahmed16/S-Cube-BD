import React from 'react'
import Banner from '../../components/Banner/Banner';
import TrustedPartner from '../../components/TrustedPartner/TrustedPartner';
import Cornerstone from '../../components/Cornerstone/Cornerstone';
import MeetOurTeam from '../../components/MeetOurTeam/MeetOurTeam';
import KeyLocarion from '../../components/KeyLocarion/KeyLocarion';
import OurClients from '../../components/OurClients/OurClients';
import Sustainability from '../../components/Sustainability/Sustainability';
import Certificates from '../../components/Certificates/Certificates';


const Home = () => {
  return (
    <div>
      <Banner />
      <TrustedPartner />
      <KeyLocarion />
      <Cornerstone />
      <Sustainability />
      <OurClients />
      <MeetOurTeam />
      <Certificates />
    </div>
  )
}

export default Home;