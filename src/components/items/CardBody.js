import React from 'react'

const CardBody = () => {
  return (
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
  )
}

export default CardBody