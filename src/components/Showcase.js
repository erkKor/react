import React from 'react'
import GirlOnChair from '../assets/images/placeholders/girl-on-chair.png'
import SittingPerson from '../assets/images/placeholders/sitting-person.png'

const Showcase = () => {
  return (
    <section className="showcase">
        <div className="container">
            <img src={GirlOnChair} alt="" className="img1" />
            <div className="showcase-text">
                <h1>SALE UP<span>To 50% Off</span></h1>
                <p>Online shopping free home delivery over $100</p>
                    <button className="button-theme">SHOP NOW
                        <div className="button-theme-border"></div>
                    </button>
            </div>
            <img src={SittingPerson} alt="" className="img2" />
        </div>
    </section>
  )
}

export default Showcase