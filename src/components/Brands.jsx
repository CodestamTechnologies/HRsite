import React from "react";

export default function Brands(){
    return(
        <div className="container mx-auto px-5 py-12  max-w-8xl lg:px-10 xl:px-16 lg:py-12 xl:py-16 lg:mx-auto lg:h-auto text-center">
            <p className=" font-bold pb-8">+8000 businesses uses hramanage for their forms </p>
            <div className=" grid grid-cols-2 sm:grid-cols-3  lg:grid lg:grid-cols-6 lg:gap-6 lg:items-center">
            <div className="p-3 flex justify-center items-center">
                <img className="object-cover" src="./Amazon.webp" width={"80%"}/>
            </div>
            <div className="p-3 flex justify-center items-center">
                <img className="object-cover" src="./Dribbble.svg" width={"80%"}/>
            </div>
            <div className="p-3 flex justify-center items-center">
                <img className="object-cover" src="./HubSpot.webp" width={"80%"}/>
            </div>
            <div className="p-3 flex justify-center items-center">
                <img className="object-cover" src="./Notion.svg" width={"80%"}/>
            </div>
            <div className="p-3 flex justify-center items-center">
                <img className="object-cover" src="./Netflix.svg" width={"80%"}/>
            </div>
            <div className="p-3 flex justify-center items-center">
                <img className="object-cover" src="./Zoom.webp" width={"100%"}/>
            </div>
        </div>
        </div>
    )
}