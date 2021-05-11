import React from 'react';
import CarouselItem from './CarouselItem';
import './Carousel.css';


const Carousel = (props) => {
    return (
        <div className="carousel-container">
            {props.items.map((item)=>{
                return <CarouselItem  title={item.title} bgColor={item.bgColor} key={item.id}/>
            })}
        </div>
    );
}

export default  Carousel;