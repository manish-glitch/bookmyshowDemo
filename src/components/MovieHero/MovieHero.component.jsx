import React from 'react';
import MovieInfo from './MovieInfo.component';


const MovieHero = () => {
    return (
        <>
            <div className="relative md:hidden w-full " style={{height:"calc(180vw)"}}>
                {/*mobile */}
                <div className="absolute z-30 bottom-2">
                    <MovieInfo/>
                </div>
                <div className="w-full h-56 absolute bottom-0 z-10 bg-opacity-40 bg-gradient-to-tr from-black  backdrop-filter  backdrop-sepia backdrop-blur-xl rounded-t-lg"/>
                <img src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/wonder-woman-1984-et00077622-22-02-2021-07-00-29.jpg"
                    alt="poster"
                    className="w-full h-full"
                />
               
            </div>
            <div className="relative hidden md:block  lg:hidden" 
                    style={{height:"calc(100vw)"}}>
                         {/*medium */}
 
                <div className="w-full h-56 absolute bottom-0 z-10 bg-opacity-40 bg-gradient-to-tr from-black backdrop-filter backdrop-sepia backdrop-blur-xl rounded-t-lg"/>

                <div className="absolute z-30 bottom-2 ">
                    <MovieInfo/>
                </div>

                <img src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/wonder-woman-1984-et00077622-22-02-2021-07-00-29.jpg"
                    alt="poster"
                    className="w-full h-full"
                />
            </div>
            <div className="relative hidden lg:block overflow-hidden"
            style={{height:"30rem"}}>

                <div className="absolute z-10 w-full h-full" 
                    style={{
                        backgroundImage:
                        "linear-gradient(90deg, rgba(2,0,36,1) 13%, rgba(36,36,0,0.9108018207282913) 55%, rgba(113,121,9,0.7455357142857143) 72%, rgba(254,255,0,0.1881127450980392) 100%)"    
                    }} 
                />
               <div className="absolute z-20 left-24 top-12 flex items-center gap-7">
                <div className=" w-64 z-20 h-96 ">
                        <img 
                            src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/wonder-woman-1984-et00077622-22-02-2021-07-00-29.jpg"
                            alt="poster"
                            className="w-full h-full rounded-xl"
                        />
                    </div>
                    <div className=" z-20">
                        <MovieInfo/>
                    </div>
               </div>
             
                {/*large (here i am having problem with image fit)*/}
                    <img src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/wonder-woman-1984-et00077622-22-02-2021-07-00-29.jpg"
                        alt="poster"
                        className="w-full h-full transform scale-x-100 scale-y-150"
                />
                
                </div>
        </>
    )
}

export default MovieHero;
