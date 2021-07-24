import React from 'react';
import PlaysFilter from '../components/PlaysFilters/PlaysFilters.component';
import Poster from '../components/Poster/poster.component';


const Plays = () => {
    return (
        <>

            <div className="container mx-auto px-4">
                    
                <div className="w-full lg:flex lg:flex-row-reverse">
                    <div className="lg:w-3/4">
                        <h1 className="text-2xl font-bold mb-4">Plays in Pune</h1>
                    
                        <div className="flex flex-wrap ">
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster 
                                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWw%3D,ots-30,otc-FFFFFF,oy-620,ox-24/et00312831-ulxltxlwjn-portrait.jpg"
                                title="Admission - 31st July (Saturday)"
                                subtitle="English -> ₹300"/>
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster 
                                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWw%3D,ots-30,otc-FFFFFF,oy-620,ox-24/et00312831-ulxltxlwjn-portrait.jpg"
                                title="Admission - 31st July (Saturday)"
                                subtitle="English -> ₹300"/>
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster 
                                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWw%3D,ots-30,otc-FFFFFF,oy-620,ox-24/et00312831-ulxltxlwjn-portrait.jpg"
                                title="Admission - 31st July (Saturday)"
                                subtitle="English -> ₹300"/>
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster 
                                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWw%3D,ots-30,otc-FFFFFF,oy-620,ox-24/et00312831-ulxltxlwjn-portrait.jpg"
                                title="Admission - 31st July (Saturday)"
                                subtitle="English -> ₹300"/>
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster 
                                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWw%3D,ots-30,otc-FFFFFF,oy-620,ox-24/et00312831-ulxltxlwjn-portrait.jpg"
                                title="Admission - 31st July (Saturday)"
                                subtitle="English -> ₹300"/>
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster 
                                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWw%3D,ots-30,otc-FFFFFF,oy-620,ox-24/et00312831-ulxltxlwjn-portrait.jpg"
                                title="Admission - 31st July (Saturday)"
                                subtitle="English -> ₹300"/>
                            </div>
                        </div>
                    
                        
                    </div>
                    <div className="lg:w-3/12 ">
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

export default Plays;
