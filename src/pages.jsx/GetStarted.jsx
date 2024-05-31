import React from 'react'
import Button from '../components/Button'

const GetStarted = () => {
    return (
        <div className=' flex flex-col gap-8 px-8 md:px-16 lg:px-32 py-4'>

            <div className=' border-2 border-black rounded-xl p-12'>
                <div className=" flex flex-col justify-center h-[80%] mx-auto  gap-6">
                    <div className="text-start flex flex-col  gap-4 w-[60%]">
                        <h1 className=" text-2xl md:text-4xl font-extrabold tracking-wider">The only HR management app with over 100+ integrations</h1>
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis asperiores impedit earum magni officiis est distinctio pariatur, esse a vel?</p>
                    </div>
                    <div className="flex flex-wrap justify-start ">
                            <Button link="#" name="View All" />
                    </div>
                </div>
            </div>


            <div className=' border-2 border-black bg-[#070127] text-white rounded-xl p-12'>
                <div className=" flex flex-col justify-center h-[80%] gap-6 mx-auto">
                    <div className="text-center flex flex-col gap-4">
                        <h1 className=" text-2xl md:text-4xl font-extrabold tracking-wider">Get started now</h1>
                        <p className=" lg:px-32 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis asperiores impedit earum magni officiis est distinctio pariatur, esse a vel?</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8">
                        <Button link="#" name="Start for free" />
                        <Button link="#" name="Meet an expert" style="light" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetStarted
