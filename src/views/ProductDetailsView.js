import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import ProductDetails from '../components/ProductDetails'
import { ProductContext } from '../contexts/contexts'

const ProductDetailsView = () => {
  const productContext = useContext(ProductContext)


    const { id, name } = useParams()
    console.log({id})
  return (
    <>
        <h1>{id}</h1>
        <ProductDetails items={productContext.featuredProducts}/>
    </>
  )
}

export default ProductDetailsView