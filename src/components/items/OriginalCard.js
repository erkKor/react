import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button'


const OriginalCard = ({discPrice, orgPrice, productName, productCategory}) => {
  return (
    <div className="_card">
        <ul className="_card-menu">
            <li><button><i className="fa-light fa-heart"></i></button></li>
            <li><button><i className="fa-light  fa-code-compare rotate-icon"></i></button></li>
            <li><button><i className="fa-light fa-bag-shopping"></i></button></li>
        </ul>
        <div className="_card-background">
            <img src="" alt=""/>
        <NavLink to="">
            <Button to="/products" theme='button-theme' themeBorder='button-theme-border' btnText="SHOP NOW"/>
        </NavLink>
        </div>
        <div className="_card-body">
            <p>{productCategory}</p>
            <h3>{productName}</h3>
            <div className="stars">
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
            </div>
            <div className="_card-prices"> 
                <div className="original-price">{orgPrice}</div>
                <div className="discount-price">{discPrice}</div>
            </div>
        </div>
    </div>
  )
}

export default OriginalCard