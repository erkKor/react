import React, { useContext } from 'react'
import Card from '../items/Card'
import { ProductContext } from '../../contexts/contexts'


const FeaturedProducts = () => {

  const products = useContext(ProductContext)

  return (
    <section className="featured-products">
        <div className="container">
            <div className="section-title">
                <h3>Featured Products</h3>
            </div>
            <div className="card-grid">
                {
                  products.featuredProducts.map(product => <Card key={product.articleNumber} product={product} />)
                }
            </div>
        </div>
    </section>
  )
}

export default FeaturedProducts