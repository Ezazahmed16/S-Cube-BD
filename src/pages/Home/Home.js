import React from 'react'
import Banner from '../../components/Banner/Banner';
import TrustedPartner from '../../components/TrustedPartner/TrustedPartner';
import Cornerstone from '../../components/Cornerstone/Cornerstone';
import MeetOurTeam from '../../components/MeetOurTeam/MeetOurTeam';
import KeyLocarion from '../../components/KeyLocarion/KeyLocarion';
import OurClients from '../../components/OurClients/OurClients';


const Home = () => {
  return (
    <div>
      <Banner />
      <TrustedPartner />
      <KeyLocarion />
      <Cornerstone />
      <OurClients />
      <MeetOurTeam />
    </div>
  )
}

export default Home;