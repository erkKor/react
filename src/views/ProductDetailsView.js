import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Breadcrumb from '../components/items/Breadcrumb'
import SaleText from '../components/items/SaleText'
import Navbar from '../components/Navbar'
import ProductDetails from '../components/ProductDetails'
import { useProductContext } from '../contexts/ProductContext'


const ProductDetailsView = () => {
    const {id} = useParams()
    const [product, setProducts] = useState({})
    const {featured, getFeaturedProducts} = useProductContext()

    useEffect(() => {
        const fetchData = async () =>{
          const result = await fetch(`https://win22-webapi.azurewebsites.net/api/products/${id}`)
          setProducts(await result.json())
        }
        fetchData()
        getFeaturedProducts(8)
    },[])

  return (
    <>
      <Navbar headerType="header-light"/>
      <SaleText />
      <Breadcrumb currentPage="Products"/>
      <ProductDetails products={product}/>
      <Carousel items={featured}/>
      <Footer />
    </>
  )
}

export default ProductDetailsView