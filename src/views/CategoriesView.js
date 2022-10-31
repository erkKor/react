import React from 'react'
import Navbar from '../components/Navbar'
import FeaturedProducts from '../components/sections/FeaturedProducts'

const CategoriesView = ({items = []}) => {
  return (
    <>
    <Navbar headerType="header-light"/>
    <FeaturedProducts products={items}/> 
      </>
  )
}

export default CategoriesView