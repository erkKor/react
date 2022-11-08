import React from 'react'
import Navbar from '../components/Navbar'
import Breadcrumb from '../components/items/Breadcrumb'
import Footer from '../components/Footer'

const WishlistView = () => {
  return (
  <>
    <Navbar headerType="header-light"/>
    <Breadcrumb currentPage="Wishlist"/>
    <Footer />
  </>
  )
}

export default WishlistView