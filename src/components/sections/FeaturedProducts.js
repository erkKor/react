import React from 'react'
import Card from '../items/Card'


const FeaturedProducts = ({products}) => {
  return (
    <section className="featured-products">
        <div className="container">
            <div className="section-title">
                <h3>Featured Products</h3>
            </div>
            <div className="card-grid">
                {
                  products.map(product => <Card key={product.id} product={product} />)
                }
                
            </div>
        </div>
    </section>
  )
}

export default FeaturedProducts