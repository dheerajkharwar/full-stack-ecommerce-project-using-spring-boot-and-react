import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { homeCarouselData } from './HomeCarouselData';

const items = homeCarouselData.map((item)=><img className='cursor-pointer' role='presentation' src={item.image}/>)

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