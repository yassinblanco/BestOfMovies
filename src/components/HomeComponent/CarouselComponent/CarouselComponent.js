import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import "./CarouselComponent.css";

 
export default (props) => {
        
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
      
    <div className="carousel-container">
      <h3 className="carousel-title">{props.title}</h3> 
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={5}
        gutter={12}
        leftChevron={<button className="carousel-chevron"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>}
        rightChevron={<button className="carousel-chevron"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>}
        outsideChevron={false}
        chevronWidth={chevronWidth}
        slideToScroll={1}
        alwaysShowChevrons={false}
      >
        {
            props.movies.map( movie => {
                return( 
                <div className="carousel-item" key={movie.id}>
                    <img src={movie.image} alt={movie.name} width={"100%"} />
                    <h4>{movie.name}</h4>
                </div>);
            })
        }
      </ItemsCarousel>
    </div>
  );
};