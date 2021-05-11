import React from 'react';
import './CarouselItem.css';

const CarouselItem = (props) => {
    return (
        <div className="carousel-item" style={{backgroundColor:props.bgColor}}> 
            <p className="carousel-item-p">{props.title}</p>
        </div>
    );

}

export default CarouselItem;