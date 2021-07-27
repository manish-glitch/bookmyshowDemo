import React,{useContext} from "react";
import {BiChevronRight, BiSearch, BiMenu, BiChevronDown,BiShareAlt} from "react-icons/bi";
import { MovieContext } from "../../context/movie.context";


const NavSm=()=>{
    const {movie}=useContext(MovieContext);
    return (    
    <>
        <div className="text-white flex items-center justify-between">
            <div>
                <h2 className="text-xl font-bold ">{movie.original_title}</h2>
            </div>
            <div className="w-8 h-8"><BiShareAlt className="w-full h-full"/></div>
        </div>
    </>
    );
};

const NavLg=()=>{
    return(
        <>
           <div className="container mx-auto px-4 flex items-center justify-between">
                <div className="flex items-center w-1/2 gap-4">
                    <div className="w-12 h-12">
                        <img src="https://i.ibb.co/zPBYW3H/mgbin-bookmyshow-office-android-ticket-png.png"
                            alt="logo"
                            className="w-full h-full"
                        />
                    </div>
                    <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
                        <BiSearch />
                        <input 
                            type="search" 
                            className="w-full bg-transparent border-none focus:outline-none" 
                            placeholder="Search for Movies, Events, Plays, Sports and Activities"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-4">
                <span className="text-gray-400 hover:text-white cursor-pointer text-sm flex items-center">
                    Pune<BiChevronDown/></span>
                    <button className="bg-red-500 text-white px-1 py-1 text-xs rounded-md">sign in</button>
                    <div className="w-8 h-8 text-white">
                        <BiMenu className="w-full h-full "/>
                    </div>
                </div>
             
            </div> 
        </>
    );
};

const MovieNavbar = () =>{
    return <>
    <nav className="absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-sm lg:relative lg:bg-bmsNav-700  px-4 py-4">
        <div className="md:hidden">{/*mobile screen */}
            <NavSm/>
        </div>
        <div className="hidden md:block  lg:hidden">{/*medium screen here wehave same as mobile navbar */}
            <NavSm/>
        </div>
        <div className="hidden lg:flex">{/*large screen */}
            <NavLg/>
        </div>
    </nav>


    </>;
};

export default MovieNavbar;