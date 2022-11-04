import React from 'react'
import Footer from '../components/Footer'
import Breadcrumb from '../components/items/Breadcrumb'
import Navbar from '../components/Navbar'

const CategoriesView = () => {
  return (
    <>
    <Navbar headerType="header-light"/>
    <Breadcrumb currentPage="Categories"/>
    <Footer />
    </>
  )
}

export default CategoriesView