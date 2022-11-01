import React from 'react'
import Card from '../items/Card'

const FeaturedProducts = ({items = []}) => {
  return (
    <section className="featured-products">
        <div className="container">
            <div className="section-title">
                <h3>Featured Products</h3>
            </div>
            <div className="card-grid">
                {
                  items.map(product => <Card key={product.articleNumber} product={product} />)
                }
            </div>
        </div>
    </section>
  )
}

export default FeaturedProducts