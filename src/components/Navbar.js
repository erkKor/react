import React from 'react'

const Navbar = () => {
  return (
    <header className="header-gray">
        <nav className="container">
            <div className="brand"><strong>Fixxo.</strong></div>
            <div className="menu-categories">
                <a href="" className="active">Home</a>
                <a href="">Categories</a>
                <a href="">Products</a>
                <a href="">Contacts</a>
            </div>
            <div className="icon-links">
                    <a href=""><i className="fa-light fa-magnifying-glass"></i></a>
                    <a href=""><i className="fa-light  fa-code-compare rotate-icon rotate-icon" ></i></a>
                    <a href="">
                        <i className="fa-light fa-heart"></i>
                        <span className="badge">1</span>
                    </a>
                    <a href="">
                        <i className="fa-light fa-bag-shopping"></i>
                        <span className="badge">3</span>
                    </a>
            </div>
        </nav>
    </header>
  )
}

export default Navbar