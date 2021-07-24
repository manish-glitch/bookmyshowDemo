import React from 'react'
import MovieHero from '../components/MovieHero/MovieHero.component';
import Cast from '../components/Cast/Cast.component';
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import TempImages from "../Config/TempPosters.config";

 const Movie = () => {

    const settings = {
        infinite:true,
        autoplay:false,
        slidesToShow:4,
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
            slidesToShow:3,
            slidesToScroll:1,
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
    
   
    return (
        <>
            <MovieHero/>
            <div className="container ml-5 lg:ml-20 lg:w-2/3">
                <div className="flex flex-col gap-5 mt-10 pr-8">
                    <h1 className="text-3xl font-bold">About the movie</h1>
                    <p className="text-md font-normal md:font-semibold">Set in the 1980s, Wonder Woman`s next big screen adventure finds her facing two all-new foes,
                         Max Lord and The Cheetah, and the unexpected return of a face from her past.</p>
                </div>
                <div className="mt-10">
                    <hr />
                </div>
                <div className="flex flex-col gap-5 mt-10">
                    <h1 className="text-3xl font-bold">Applicable offers</h1>
                    <div className="flex flex-col w-11/12 md:flex-row gap-5">
                        <div className=" border-dashed border-4 border-yellow-300  flex gap-4 bg-yellow-100 p-2.5 rounded-2xl">
                            <div className="w-10 h-8">
                                <img src="https://in.bmscdn.com/offers/tnclogo/rupay-stream-offer-rupay0421.jpg?23042021135408" 
                                alt="rupay" 
                                className="w-full h-full"/>
                            </div>
                            <div className="felx flex-col items-start">
                                <h2 className="font-bold text-gray-700">Rupay Stream Offer</h2>
                                <p className="text-gray-500">Get 50% off up to INR 150 on all RuPay cards* on BookMyShow Stream.</p>
                            </div>
                        </div>
                        <div className=" border-dashed border-4 border-yellow-300  flex gap-4 bg-yellow-100 p-2.5 rounded-2xl"> 
                            <div className="w-10 h-8">
                                <img src="https://in.bmscdn.com/offers/tnclogo/filmy-pass---rs-75-off-on-movies-filmypass99.jpg?17022021111052" 
                                alt="rupay" 
                                className="w-full h-full"/>
                            </div>
                            <div className="felx flex-col items-start">
                                <h2 className="font-bold text-gray-700">Filmy Pass</h2>
                                <p className="text-gray-500">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-10">
                    <hr />
                </div>
                <div className="my-10">
                    <h1 className="text-3xl font-bold mb-5">Cast</h1>
                    <div className="flex flex-wrap gap-8 md:gap-12">
                        <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg"
                        castName="Gal Gadot"
                        role="Wonder Women"/>
                        <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/chris-pine-435-24-03-2017-13-51-09.jpg"
                        castName="Chris Pine"
                        role="Steve Trevor"/>
                        <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/kristen-wiig-9007-24-03-2017-12-36-08.jpg"
                        castName="kristen Wiig"
                        role="Cheetah"/>
                         <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/pedro-pascal-1065016-24-03-2017-17-40-11.jpg"
                        castName="Pedro Pascal"
                        role="Max Lord"/>
                         <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/connie-nielsen-7706-15-05-2017-11-42-20.jpg"
                            castName="Connie Nielsen"
                        role="Hippolyta"/>
                         <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/robin-wright-22180-24-03-2017-12-31-27.jpg"
                        castName="Robin Wright"
                        role="Antiope"/>
                    </div>
                </div>
                <div className="my-10">
                    <hr />
                </div>
                <div >
                    <h1 className="text-3xl font-bold mb-5">Reviews</h1>
                    <div className="border-none border-4 bg-gray-200 rounded-2xl w-3/5 h-24 flex items-center justify-between ">
                        <div className="flex-col ml-10">
                            <h1 className="font-semibold text-lg">Watched? Add your rating & review</h1>
                            <p className="text-sm text-gray-500">Your ratings matter</p>
                        </div>
                        <div className="w-24 mr-10">
                            <button className=" bg-red-500 w-full py-2 text-white font-semibold rounded-xl">
                                Rate now
                            </button>
                        </div>
                    </div>
                </div>

                <div className="my-10">
                    <hr />
                </div>

                <div>
                    <div>
                        <PosterSlider 
                        config={settings}
                        images={TempImages} 
                        title="You might also like!"
                        isDark={false}
                        />
                    </div>
                </div>

                <div className="my-10">
                    <hr />
                </div>

                <div>
                <div>
                        <PosterSlider 
                        config={settings}
                        images={TempImages} 
                        title="BMS XCLUSIV"
                        isDark={false}
                        />
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default Movie;