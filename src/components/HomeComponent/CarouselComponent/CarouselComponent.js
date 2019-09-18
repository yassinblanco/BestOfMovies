import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import "./CarouselComponent.css";

 
export default (props) => {
  console.log(props.newestMovies);  
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div className="carousel-container">
      <h3 className="carousel-title">Newest Movies</h3> 
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={5}
        gutter={12}
        leftChevron={<button className="carousel-chevron">{'<'}</button>}
        rightChevron={<button className="carousel-chevron">{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
        slideToScroll={1}
        alwaysShowChevrons={false}
      >
        {
            props.newestMovies.map( movie => {
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