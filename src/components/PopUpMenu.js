import React from 'react'

const PopUpMenu = () => {
  return (
    <div className="popup-menu" id="mobileMenu">
        <div className="container">
            <button className="close"  id="" type="button" onclick="slideLeft()" >
                <i className="fa-solid fa-x"></i>
            </button>
            <div className="main-links">
                <a href="index.html">Home</a>
                <a href="#">Categories</a>
                <a href="#">Products</a>
                <a href="#">Contact</a>
            </div>  
        </div>
    </div>
  )
}

export default PopUpMenu