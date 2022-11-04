import React from 'react'
import SmallCard from './items/SmallCard'

const TrippleColumnProducts = ({items = []}) => {
  return (
    <section className="three-row-products">
        <div className="container">
            <div className="product-column">
                <h2>Latest Product</h2>
                {
                 items.map(product => <SmallCard key={product.articleNumber} product={product} />)
                }
            </div>
            <div className="product-column">
                <h2>Best Selling Product</h2>
                {
                  items.map(product => <SmallCard key={product.articleNumber} product={product} />)
                }
            </div>
            <div className="product-column">
                <h2>Top Reacted Product</h2>
                {
                  items.map(product => <SmallCard key={product.articleNumber} product={product} />)
                }
            </div>
        </div>
    </section>
  )
}

export default TrippleColumnProducts