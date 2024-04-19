import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const items = [
    <div className="item" data-value="1">1</div>,
    <div className="item" data-value="2">2</div>,
    <div className="item" data-value="2">2</div>,
];

const HomeCarousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        autoPlay
        infinite
        disableButtonsControls
        autoPlayInterval={2000}
        animationDuration={2000}
    />
);
export default HomeCarousel;