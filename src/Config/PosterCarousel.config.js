const settings = {
    infinite:true,
    autoplay:false,
    slidesToShow:5,
    slidesToScroll:2,
    InitialSlide:0,
    responsive:[
    {
        breakpoint:1024,
        settings:{
            slidesToShow:3,
            slidesToScroll:3,
            infinite:true,

        },
    },
    {   
    
        breakpoint:600,
        settings:{
        slidesToShow:2,
        slidesToScroll:2,
        infinite:true,
        InitialSlide:2,

        },
    },
    {   
    
        breakpoint:480,
        settings:{
        slidesToShow:3,
        slidesToScroll:1,
   

        },
    },

],

};

export default settings;