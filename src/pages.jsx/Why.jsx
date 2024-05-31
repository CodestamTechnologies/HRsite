import React from 'react'
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { BsArrowRepeat } from "react-icons/bs";
import { FaInfinity } from "react-icons/fa6";
import { IoIosFlash } from "react-icons/io";
import GetCard from '../components/GetCard';
import { getData } from '../components/getData';

const Why = () => {
    return (
        <div className=' px-8 md:px-32 lg:36 xl:px-44 py-12  flex flex-col gap-12'>
            <div className=' flex flex-col items-center gap-4'>
                <h1 className=' text-3xl font-bold text-center'>The Older <span className=' text-purple-600'>HR software</span> is ineffective. Why Hrmanage?</h1>
                <p className=' text-gray-600 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur voluptate, voluptas aspernatur velit esse quasi.</p>
            </div>
            <div className=' grid lg:grid-cols-2 gap-8'>
                <GetCard icon={<IoShieldCheckmarkOutline />} title={getData[0].title} description={getData[0].description} />
                <GetCard icon={<BsArrowRepeat />} title={getData[1].title} description={getData[1].description} />
                <GetCard icon={<FaInfinity />} title={getData[2].title} description={getData[2].description} />
                <GetCard icon={<IoIosFlash />} title={getData[3].title} description={getData[3].description} />
            </div>
        </div>
    )
}

export default Why