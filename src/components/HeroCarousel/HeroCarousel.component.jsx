import React from "react";
import HeroSlider from "react-slick";
//import css for slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const HeroCarousel =()=>{

    const settingsLg={
        arrows: true, 
        dots:true,
        autoplay: true, 
        centerMode: true,
        centerPadding: "300px", 
        slidesToShow: 1,
        infinite:true,
        slidesToScroll:1,
    };

    const settings = {
        arrows: true,

        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
    };
    const images = [
    "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1626455294524-44d1d547e749?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1625923541779-630119dfa15d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1626186767260-c9301d4dd628?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1626443252351-4f3a387d6d43?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

]
    return(
        <>
            <div className="lg:hidden">
                <HeroSlider {...settings}>
                    {
                        images.map((image)=>(
                            <div className="w-full h-56 md:h-80 py-3">
                                <img src={image} alt="testing" className="w-full h-full rounded-md "/>
                            </div>
                        ))
                    }
                </HeroSlider>  
            </div>
            <div className="hidden lg:block">
                <HeroSlider {...settingsLg}>
                    {
                        images.map((image)=>(
                            <div className="w-full h-96 px-2 py-3">
                                <img src={image} alt="testing" className="w-full h-full rounded-md"/>
                            </div>
                        ))
                    }
                </HeroSlider>  
            </div>
        </>
    );

};

export default HeroCarousel;