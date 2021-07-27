import React, {useContext} from 'react';
import { MovieContext } from '../../context/movie.context';
import MovieInfo from './MovieInfo.component';


const MovieHero = () => {
    const {movie}=useContext(MovieContext);

    return (
        <>
            <div className="relative md:hidden w-full " style={{height:"calc(180vw)"}}>
                {/*mobile */}
                <div className="absolute z-30 bottom-2">
                    <MovieInfo/>
                </div>
                <div className="w-full h-56 absolute bottom-0 z-10 bg-opacity-40 bg-gradient-to-tr from-black  backdrop-filter  backdrop-sepia backdrop-blur-xl rounded-t-lg"/>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt="poster"
                    className="w-full h-full"
                />
               
            </div>
            <div className="relative hidden md:block  lg:hidden" 
                    style={{height:"calc(100vw)"}}>
                         {/*medium */}
 
                <div className="w-full h-56 absolute bottom-0 z-10    backdrop-filter  backdrop-blur-md rounded-t-lg"/>

                <div className="absolute z-30 bottom-2 ">
                    <MovieInfo/>
                </div>

                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt="poster"
                    className="w-full h-full"
                />
            </div>
            <div className="relative hidden lg:block overflow-hidden"
            style={{height:"30rem"}}>

                <div className="absolute z-10 w-full h-full" 
                    style={{
                        backgroundImage:
                        "linear-gradient(90deg, rgba(0,0,0,1) 40%, rgba(0,0,0,0.4009978991596639) 61%, rgba(10,10,0,0.40379901960784315) 100%)"    
                    }} 
                />
               <div className="absolute z-20 left-24 top-12 flex items-center gap-7">
                <div className=" w-64 z-20 h-96 ">
                        <img 
                            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}

                            alt="poster"
                            className="w-full h-full rounded-xl"
                        />
                    </div>
                    <div className=" z-20">
                        <MovieInfo/>
                    </div>
               </div>
             
                {/*large (here i am having problem with image fit)*/}
                    <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}

                        alt="poster"
                        className="w-full h-full transform scale-x-100 scale-y-150"
                />
                
                </div>
        </>
    )
}

export default MovieHero;
