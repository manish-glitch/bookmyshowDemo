import React from "react" ;

import EntertainmentCardSlider from "../components/Entertainment/Entertainment.component";

import PosterSlider from "../components/PosterSlider/PosterSlider.component"

//config
import TempImages from "../Config/TempPosters.config"

const HomePage=()=>{
    return(
        <>
            <div className="flex flex-col gap-10">
                <div className="container mx-auto px-5">
                    <h1 className="md:text-3xl font-bold text-gray-800 my-3 px-3 ">
                        The Best of Entertainment</h1>
                    <EntertainmentCardSlider/>
                
                </div>
                <div className="bg-bmsNav-1000 py-12 ">
                    
                    <div className="container mx-auto px-4 flex flex-col gap-3">
                    <div className=" hidden md:flex">
                        <img
                            src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                            alt="rupay"
                            className="w-full h-full"
                        />
                    </div>
                        <PosterSlider 
                            images={TempImages} 
                            title="Premiers"
                            subtitle="New releases every Friday"
                            isDark
                        />
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 my-8">
            <PosterSlider 
                images={TempImages} 
                title="Online Streaming Events"
                isDark={false}
                />
            </div>
            <div className="container mx-auto px-4 my-8">
                <PosterSlider 
                    images={TempImages} 
                    title="Outdoor Events"
                    isDark={false}
                />
            </div>
        </>
    );
}

export default HomePage;