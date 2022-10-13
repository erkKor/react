import React from 'react'

const ShowcaseCardBigSmall = () => {
  return (
    <section className="showcasecard-big-small">
        <div className="container">
            <div className="big-card">
                <h2>Winter Clearance <span>Up to 70% Off!</span></h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem apriam eaque ipsa quae ab illo inventore.</p>
                <button className="button-theme-dark">SHOP NOW
                    <div className="button-theme-border"></div>
                </button>
            </div>
            <div className="small-card">
                <h2>New <span>Arrivals</span></h2>
                <button className="button-theme-dark">SHOP NOW
                    <div className="button-theme-border"></div>
                </button>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseCardBigSmall