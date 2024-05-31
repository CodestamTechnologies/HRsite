import React from 'react'
import Button from '../components/Button'

const Empower = () => {
    return (
        <div className=' px-8 md:px-32 lg:36 xl:px-44 py-12  flex flex-col gap-12'>
            <div className=' flex flex-col items-center gap-4'>
                <h1 className=' text-3xl font-bold text-center'>Empower <span className=' text-purple-600'>Employees</span> and Automate with HR management</h1>
                <p className=' text-gray-600 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur voluptate, voluptas aspernatur velit esse quasi.</p>
            </div>
            <div className=' grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-around'>
                <Button link="#" name="Time and attendance" style="light" />
                <Button link="#" name="Insights and reporting" />
                <Button link="#" name="Employee Productivity" style="light" />
                <Button link="#" name="Full-service payout" style="light" />
            </div>

            <div className="flex flex-col gap-12 lg:gap-4 lg:flex-row justify-center py-12">
                <div className="lg:w-1/2 flex flex-col gap-6 justify-center items-start text-center lg:text-start">
                    <div className=" w-full lg:w-[80%] flex flex-col gap-2">
                        <h1 className="text-3xl font-bold">After joining, You can see the difference</h1>
                    </div>

                    <div className=" w-full lg:w-[80%] ">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam saepe minima ex sint ad autem veniam, excepturi nisi sed voluptates.
                    </div>

                    <div className=" w-full lg:w-[80%] ">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam saepe minima ex sint ad autem veniam, excepturi nisi sed voluptates.
                    </div>

                </div>

                <div className=" w-full h-[400px] bg-[#070127] rounded-xl lg:w-1/2 flex flex-col gap-4 justify-end">

                </div>
            </div>



            <div className="flex flex-col-reverse gap-8 lg:flex-row justify-between w-full py-12">
                <div className=" w-full h-[400px] bg-[#070127] rounded-xl lg:w-1/2 flex flex-col gap-4 justify-end">

                </div>


                <div className="lg:w-[40%] flex flex-col gap-6 justify-center items-start text-center lg:text-start">
                    <div className=" w-full flex flex-col gap-2">
                        <h1 className="text-3xl font-bold">After joining, You can see the difference</h1>
                    </div>

                    <div className=" w-full  ">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam saepe minima ex sint ad autem veniam, excepturi nisi sed voluptates.
                    </div>

                    <div className=" w-full  ">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam saepe minima ex sint ad autem veniam, excepturi nisi sed voluptates.
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Empower
