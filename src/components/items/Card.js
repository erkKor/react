import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Card = ({orgPrice, discPrice}) => {
  return (
    <div className="card">
        <ul className="card-menu">
            <li><a href="/"><i className="fa-light fa-heart"></i></a></li>
            <li><a href="/"><i className="fa-light  fa-code-compare rotate-icon"></i></a></li>
            <li><a href="/"><i className="fa-light fa-bag-shopping"></i></a></li>
        </ul>
        <div className="card-background">
            <Button theme='button-theme' themeBorder='button-theme-border'/>
        </div>
        <div className="card-body">
            <p>Category</p>
            <h3>Modern Black Blouse</h3>
            <div className="stars">
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
            </div>
            <div className="card-prices"> 
                <div className="original-price">{orgPrice}</div>
                <div className="discount-price">{discPrice}</div>
            </div>
        </div>
    </div>
  )
}

Card.propTypes = {
    orgPrice: PropTypes.number,
    discPrice: PropTypes.number,
}

export default Card