import Brands from "../components/Brands";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

export default function Hero() {
    return (
        <div className=' bg-[#070127] text-white h-dvh min-h-[600px] px-8 lg:px-40 xl:px-48'>
            <Navbar />
            <div className=" flex flex-col justify-center h-[80%] gap-8 mx-auto text-white">
                <div className="text-center flex flex-col  gap-4 py-6">
                    <h1 className=" text-2xl md:text-4xl lg:text-6xl font-extrabold tracking-wider">Maximize the <span className="text-purple-600">Potential</span> of your employees</h1>
                    <p className=" lg:px-32">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis asperiores impedit earum magni officiis est distinctio pariatur, esse a vel?</p>
                </div>
                <div className="flex flex-wrap justify-center gap-8">
                    <Button link="#" name="Start for free" />
                    <Button link="#" name="Meet an expert" style="light" />
                </div>
            </div>
        </div>
    )
}