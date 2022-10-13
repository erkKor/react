import React from 'react'
import Card from './items/Card'

const BigSquareWCardsLeft = () => {
  return (
    <section className="big-square-cards">
        <div className="container">
            <div className="big-square">
                <h1>2 FOR USD $29</h1>
                <button className="button-theme-white">FLASH SALE
                    <div className="button-theme-border"></div>
                </button>
            </div>
            <div className="card-grid">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    </section>
  )
}

export default BigSquareWCardsLeft
