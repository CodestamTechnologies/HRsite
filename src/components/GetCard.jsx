import React from 'react'

const GetCard = (props) => {
    return (
        <div className=' p-8 md:p-12 border-2 border-black hover:bg-[#070127] hover:scale-105 transition-all ease-in-out duration-200 hover:text-white rounded-3xl flex flex-col gap-10'>
            <div className='flex justify-center items-center p-2 border-2 border-black bg-purple-200 rounded-full h-12 w-12'>
                <div className=' flex scale-150 text-black '>
                    {props.icon}
                </div>
            </div>
            <div className=' flex flex-col gap-2'>
                <h1 className=' font-bold text-purple-600'>{props.title}</h1>
                <p className=' md:w-[70%] font-bold text-xl '>{props.description}</p>
            </div>
        </div>
    )
}

export default GetCard