import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FeaturedProducts from '../components/sections/FeaturedProducts'
import { ProductContext} from '../contexts/contexts'
import Breadcrumb from '../components/items/Breadcrumb'

const ProductsView = () => {
  const products = useContext(ProductContext)
  return (
  <>
    <Navbar headerType="header-light"/>
    <Breadcrumb currentPage="Products"/>
    <FeaturedProducts title="All Products" items={products}/> 
    <Footer />
  </>
  )
}

export default ProductsView