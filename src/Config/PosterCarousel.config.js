const settings = {
    infinite:true,
    autoplay:false,
    slidesToShow:5,
    slidesToScroll:2,
    InitialSlide:0,
    responsive:[
    {
        breakpoints:1024,
        settings:{
            slidesToShow:3,
            slidesToScroll:2,
            infinite:true,

        },
    },
    {   
    
        breakpoints:600,
        settings:{
        slidesToShow:3,
        slidesToScroll:1,
        infinite:true,
        InitialSlide:1,

        },
    },
    {   
    
        breakpoints:480,
        settings:{
        slidesToShow:1,
        slidesToScroll:1,
        infinite:true,

        },
    },

],

};

export default settings;