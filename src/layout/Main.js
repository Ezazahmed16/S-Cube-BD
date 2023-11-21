import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../shared/Navbar/Navbar'
import Footer from '../shared/Footer/Footer'
import HeaderNavbar from '../shared/Navbar/HeaderNavbar'
import Headroom from 'react-headroom'

const Main = () => {
  return (
    <div>
      <HeaderNavbar />
      <Headroom style={{ backgroundColor: "#fff" }}>
        <Navbar />
      </Headroom>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Main