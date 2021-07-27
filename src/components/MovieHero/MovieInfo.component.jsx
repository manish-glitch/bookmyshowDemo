import React,{useContext, useState} from 'react';
//movieContext
import { MovieContext } from '../../context/movie.context';
import PaymentModel from '../PaymentModel/Payment.component';



const MovieInfo = () => {
    const [isOpen, setIsOpen]=useState(false);
    const [price, setPrice]= useState(0);
    const {movie}= useContext(MovieContext);

    //optional chaining. it will check movie.genres is available or not...if available then do rest of part
    const genres = movie.genres?.map(({name})=>name).join(", ");

    const rentMovies=()=>{
        setIsOpen(true);
        setPrice(149);
    };
    const buyMovies=()=>{
        setIsOpen(true);
        setPrice(549);
    };

    return (
        <>
            <PaymentModel setIsOpen={setIsOpen} isOpen={isOpen} price={price}/>
            <div className="flex flex-col gap-5 ">
                <div className="flex items-center gap-5 md:px-4">
                    <div className="w-40 h-8">
                        <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png" 
                        alt="premier"
                        className="w-full h-full"
                         />
                    </div>
                    <span className="bg-black p-1 text-white rounded-xl text-xs lg:text-sm">Streaming Now</span>
                </div>
                <h1 className=" text-white lg:text-5xl font-bold hidden lg:block">{movie.original_title}</h1>               
                <div className="flex flex-col-reverse gap-3 lg:flex-col lg:gap-5">
                    
                    <div className="text-white font-light flex flex-col gap-2.5 md:px-4">
                        
                        <h4 >{movie.original_language} &bull; Language: <span className="text-red-500 font-normal">Audio(4) , Subtitles(1)</span></h4>    
                        <h4 >{(movie.runtime / 60).toFixed(2)} h &bull; {genres} &bull; UA &bull; {movie.release_date}</h4>
                    </div>
                    <div className="flex items-center gap-3 md:px-4 md:w-screen lg:w-full  ">
                        <button onClick={rentMovies} className="transition duration-1200 ease-in-out bg-red-500 hover:bg-blue-700 transform hover:-translate-y-1 hover:scale-110  w-full py-2 text-white font-semibold rounded-xl">
                            Rent ₹ 149
                        </button>
                        <button onClick={buyMovies} className="transition duration-1200 ease-in-out bg-red-500 hover:bg-blue-700 transform hover:-translate-y-1 hover:scale-110  w-full py-2 text-white font-semibold rounded-xl">
                            Buy ₹ 549
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MovieInfo;
