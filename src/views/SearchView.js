import React from 'react'
import Navbar from '../components/Navbar'
import Breadcrumb from '../components/items/Breadcrumb'
import Footer from '../components/Footer'

const SearchView = () => {
  return (
  <>
    <Navbar headerType="header-light"/>
    <Breadcrumb currentPage="Search"/>
    <Footer />
  </>
  )
}

export default SearchView