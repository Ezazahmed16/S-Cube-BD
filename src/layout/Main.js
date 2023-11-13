import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../shared/Navbar/Navbar'
import Footer from '../shared/Footer/Footer'
import HeaderNavbar from '../shared/Navbar/HeaderNavbar'

const Main = () => {
  return (
    <div>
      <HeaderNavbar />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Main