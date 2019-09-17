import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import "./CarouselComponent.css";

 
export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 0;
  return (
    <div className="carousel-container">
      <h3 className="carousel-title">Newest Movies</h3> 
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={4}
        gutter={12}
        leftChevron={<button className="carousel-chevron">{'<'}</button>}
        rightChevron={<button className="carousel-chevron">{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
        slideToScroll={1}
        alwaysShowChevrons={false}
      >
        <div style={{ height: 200, background: '#ddc' }}>First card</div>
        <div style={{ height: 200, background: '#ddc' }}>Second card</div>
        <div style={{ height: 200, background: '#ddc' }}>Third card</div>
        <div style={{ height: 200, background: '#ddc' }}>Fourth card</div>
        <div style={{ height: 200, background: '#ddc' }}>Fifth card</div>
        <div style={{ height: 200, background: '#ddc' }}>Sixth card</div>
        <div style={{ height: 200, background: '#ddc' }}>Seventh card</div>
        <div style={{ height: 200, background: '#ddc' }}>Eighth card</div>
      </ItemsCarousel>
    </div>
  );
};