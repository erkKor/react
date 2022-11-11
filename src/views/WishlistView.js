import React from 'react'
import Navbar from '../components/Navbar'
import Breadcrumb from '../components/items/Breadcrumb'
import Footer from '../components/Footer'
import Filler from '../components/Filler'

const WishlistView = () => {
  return (
  <>
    <Navbar headerType="header-light"/>
    <Breadcrumb currentPage="Wishlist"/>
    <Filler />
    <Footer />
  </>
  )
}

export default WishlistView