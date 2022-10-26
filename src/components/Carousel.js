import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 4 },
};

const items = [
  <div className="item" data-value="1">1</div>,
  <div className="item" data-value="2">2</div>,
  <div className="item" data-value="3">3</div>,
  <div className="item" data-value="4">4</div>,
  <div className="item" data-value="5">5</div>,
];

const Carousel = () => {
  return (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        disableDotsControls="false"
        renderPrevButton={() => {
          return <span className="left-button"><i class="fa-regular fa-chevron-left"></i></span>
        }}
        renderNextButton={() => {
          return <span className="right-button"><i class="fa-regular fa-chevron-right"></i></span>
        }}
    />
  )
}

export default Carousel