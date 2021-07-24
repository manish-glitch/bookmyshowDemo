import React from 'react';

import PlaysFilter from '../components/PlaysFilters/PlaysFilters.component';
import Poster from '../components/Poster/poster.component';


const Sports = () => {
    return (
        <>

            <div className="container mx-auto px-4">
                    
                <div className="w-full flex flex-col-reverse lg:flex lg:flex-row-reverse">
                    <div className="lg:w-3/4">
                        <h1 className="text-2xl font-bold mb-4">Sports in Pune</h1>
                    
                        <div className="flex flex-wrap ">
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster 
                                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00136242-gglrpzqftm-portrait.jpg"
                                title="Johnson Call Of Duty Mobile Tournament"
                                subtitle="Online (play from home) ->₹100"/>
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster 
                                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00136242-gglrpzqftm-portrait.jpg"
                                title="Johnson Call Of Duty Mobile Tournament"
                                subtitle="Online (play from home) ->₹100"/>
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster 
                                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00136242-gglrpzqftm-portrait.jpg"
                                title="Johnson Call Of Duty Mobile Tournament"
                                subtitle="Online (play from home) ->₹100"/>
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster 
                                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00136242-gglrpzqftm-portrait.jpg"
                                title="Johnson Call Of Duty Mobile Tournament"
                                subtitle="Online (play from home) ->₹100"/>
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster 
                                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00136242-gglrpzqftm-portrait.jpg"
                                title="Johnson Call Of Duty Mobile Tournament"
                                subtitle="Online (play from home) ->₹100"/>
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster 
                                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00136242-gglrpzqftm-portrait.jpg"
                                title="Johnson Call Of Duty Mobile Tournament"
                                subtitle="Online (play from home) ->₹100"/>
                            </div>
                        </div>
                    
                        
                    </div>
                    <div className=" lg:w-3/12 ">
                        <h1 className="text-2xl font-bold mb-4">Filters</h1>
                        
                            
                            <div >
                                <PlaysFilter title="Date" tags={["today", "tomorrow","this weekend","never"]}/>
                            </div>
                            <div >
                                <PlaysFilter title="Language" tags={["Tamil", "Telgu","Marathi","Hindi","English"]}/>
                            </div>
                            <div >
                                <PlaysFilter title="Categories" tags={["Theatre"]}/>
                            </div>
                            <div >
                                <PlaysFilter title="Geners" tags={["Drama", "Adaptation","Comedy","Historical","Mythological","Online Streaming Plays"]}/>
                            </div>
                            <div >
                                <PlaysFilter title="More Filters" tags={["Online Streaming", "Kinds Allowed"]}/>
                            </div>
                            <div >
                                <PlaysFilter title="Price" tags={["Free", "0-500","501-2000","above 2000"]}/>
                            </div>
                        
                    </div>
                </div>
            </div>

        </>
    );
}

export default Sports;
