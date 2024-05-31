import React from 'react'
import { FaRegCopyright, FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import FooterList from '../components/FooterList';
import { FooterData } from '../components/FooterData';

const Footer = () => {
    return (
        <div className='px-8 md:px-16 lg:px-32 py-4 flex flex-col gap-10'>
            <div className=' w-full flex flex-col gap-10'>
                <div className='flex flex-col md:flex-row gap-8 md:gap-32 w-full'>
                    <div className=' w-full'>
                        <h1 className=' text-2xl font-bold flex flex-col gap-4 py-4 text-center uppercase'>Harmnage</h1>
                    </div>
                </div>
                <div className=' flex flex-col md:flex-row w-full justify-between gap-8 md:gap-32'>
                    <div className=' flex flex-col sm:flex-row gap-6 p-2 sm:justify-between md:w-[60%] '>
                        {FooterData.map((data, index) => <FooterList key={index} title={data.title} opt1={data.opt1} opt2={data.opt2} opt3={data.opt3} opt4={data.opt4} opt5={data.opt5} opt6={data.opt6} />)}
                    </div>
                    <div className=' md:w-[40%]'>
                        <h1 className=' text-2xl font-bold flex flex-col gap-4 py-4 w-full'>Join our Newsletter</h1>
                        <form className=' w-full border-2 border-black' action="#">
                            <input className='px-4 py-2 w-[60%]' type="email" name="email" id="email" placeholder='Email address' />
                            <input className='bg-purple-600 text-white px-4 py-2 w-[40%]' type="submit" value="Subscribe Now" />
                        </form>
                    </div>
                </div>
            </div>
            <div className=' flex flex-col md:flex-row items-center justify-between gap-6'>
                <div className=' text-2xl font-bold'>
                <div className=' flex gap-4 justify-center md:justify-start'>
                            <a className=' px-4 py-4 bg-purple-600 text-white rounded-full' href="#"><FaFacebookF /></a>
                            <a className=' px-4 py-4 bg-purple-600 text-white rounded-full' href="#"><FaTwitter /></a>
                            <a className=' px-4 py-4 bg-purple-600 text-white rounded-full' href="#"><FaYoutube /></a>
                            <a className=' px-4 py-4 bg-purple-600 text-white rounded-full' href="#"><FaInstagram /></a>
                        </div>
                </div>
                <div className=' flex flex-col justify-end'>
                    <a href="#">Privacy Policy | Terms & Condition</a>
                    <a className='flex gap-2 items-center' href="#"><FaRegCopyright />Copyright Harmanage</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
