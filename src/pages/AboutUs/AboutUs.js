import React from 'react'
import OurMisson from '../../components/OurMisson/OurMisson'
import OurCapability from '../../components/OurCapability/OurCapability'
import WorkPolicy from '../../components/WorkPolicy/WorkPolicy'

const AboutUs = () => {
  return (
    <div className='z-10'>
        <OurMisson  />
        <OurCapability />
        <WorkPolicy />
    </div>
  )
}

export default AboutUs