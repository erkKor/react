import React from 'react'
import Card from '../items/Card'

const BigSquareWCardsRight = ({products}) => {
  return (
    <section className="big-square-cards" id="bigSquareRight">
        <div className="container">
        <div className="card-grid">
                {
                  products.map(product => <Card key={product.id} product={product} />)
                }
            </div>
            <div className="big-square">
                <h1>2 FOR USD $49</h1>
                <button className="button-theme-white">FLASH SALE
                    <div className="button-theme-border"></div>
                </button>
            </div>
        </div>
    </section>
  )
}

export default BigSquareWCardsRight