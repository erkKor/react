import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailsView = () => {
    const params = useParams()
    const { id, name } = useParams()

  return (
    <>
        <h1>{id}</h1>
        <p></p>
    </>
  )
}

export default ProductDetailsView