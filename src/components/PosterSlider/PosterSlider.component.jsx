import React from 'react'
import Poster from '../Poster/poster.component';
//config
import PosterCarouselSettings from '../../Config/PosterCarousel.config';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

 const PosterSlider = (props) => {
    return (
        <>
            <div className="flex flex-col items-start mt-1 mb-5 gap-1.5">
                <h1 className={`text-4xl font-bold ${
                    props.isDark ? "text-white" : "text-gray-800"
                }`}>{props.title}</h1>
                <p className={`text-sm  ${
                    props.isDark ? "text-white" : "text-gray-800"
                }`}>{props.subtitle}</p>
            </div>
            <Slider {...PosterCarouselSettings}>
                {props.images.map((image)=>(
                    <Poster {...image} isDark={props.isDark}/>
                ))}
            </Slider>
        </>
    );
};

export default PosterSlider;
