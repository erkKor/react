import React from 'react'
import PropTypes from 'prop-types'

const SmallCard = ({orgPrice, discPrice}) => {
  return (
    <div className="small-card">
        <div className="card-background">
            <button className="button-theme">Quick view
                <div className="button-theme-border"></div>
            </button>
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

SmallCard.propTypes = {
    orgPrice: PropTypes.number,
    discPrice: PropTypes.number,
}

export default SmallCard