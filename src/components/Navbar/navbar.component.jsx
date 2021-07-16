import React from "react";
import {BiChevronRight, BiSearch, BiMenu, BiChevronDown} from "react-icons/bi"


const NavSm=()=>{
    return (    
    <>
        <div className="text-white flex items-center justify-between">
            <div>
                <h2 className="text-xl font-bold ">It All Starts Here</h2>
                <span className="text-gray-500 text-sm flex items-center">Pune<BiChevronRight/></span>
            </div>
            <div className="w-8 h-8"><BiSearch className="w-full h-full"/></div>
        </div>
    </>
    );
};
const NavMd=()=>{
    return(  
    <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
        <BiSearch />
        <input 
        type="search" 
        className="w-full bg-transparent border-none focus:outline-none" 
        placeholder="Search for Movies, Events, Plays, Sports and Activities"/>
    </div>
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

const Navbar = () =>{
    return <>
    <nav className="bg-bmsNav-700  px-4 py-4">
        <div className="md:hidden">{/*mobile screen */}
            <NavSm/>
        </div>
        <div className="hidden md:flex lg:hidden">{/*medium screen */}
            <NavMd/>
        </div>
        <div className="hidden lg:flex">{/*large screen */}
            <NavLg/>
        </div>
    </nav>


    </>;
};

export default Navbar;