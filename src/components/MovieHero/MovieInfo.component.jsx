import React from 'react';

const MovieInfo = () => {
    return (
        <>
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
                <h1 className="hidden md:text-5xl text-white font-bold ">Wonder Women 1984</h1>               
                <div className="flex flex-col-reverse lg:flex-col gap-5">
                    <div className="text-white font-light flex flex-col gap-2.5 md:px-4">
                        <h4 >English &bull; Language: <span className="text-red-500 font-normal">Audio(4) , Subtitles(1)</span></h4>    
                        <h4 >2h 31m &bull; Action, Adventure, Fantasy &bull; UA &bull; 24 Dec 2020</h4>
                    </div>
                    <div className="flex items-center gap-3 md:px-4 md:w-screen lg:w-full  ">
                        <button className="transition duration-1200 ease-in-out bg-red-500 hover:bg-blue-700 transform hover:-translate-y-1 hover:scale-110  w-full py-2 text-white font-semibold rounded-xl">
                            Rent ₹ 149
                        </button>
                        <button className="transition duration-1200 ease-in-out bg-red-500 hover:bg-blue-700 transform hover:-translate-y-1 hover:scale-110  w-full py-2 text-white font-semibold rounded-xl">
                            Buy ₹ 699
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MovieInfo;
