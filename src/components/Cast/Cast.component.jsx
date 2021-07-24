import React from 'react'

const Cast = (props) => {
    return (
        <>
            <div className="flex flex-col items-center">
                <div className="w-24 h-24 md:w-32 md:h-32">
                        <img 
                        src={props.image} 
                        alt="Gal Gadot" 
                        className="w-full h-full rounded-full"
                        />
                    </div>
                    
                    <h1 className="text-sm md:text-xl font-semibold text-black">{props.castName}</h1>
                    <h4 className="text-xs md:text-sm  text-gray-500">as {props.role}</h4>
            </div>
        </>
    )
}

export default Cast;
