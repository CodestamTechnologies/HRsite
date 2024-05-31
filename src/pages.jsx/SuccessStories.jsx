import Button from "../components/Button";
import FeedbackCard from "../components/FeedbackCard";

export default function SuccessStories() {
    return (
        <div className="mx-auto flex flex-col gap-4 text-center md:text-left  px-8 md:px-16 lg:px-32 py-8">

            <div className="flex flex-col gap-12 lg:gap-4 lg:flex-row justify-center">
                <div className="lg:w-1/2 flex flex-col gap-6 justify-center items-start text-center lg:text-start">
                    <div className=" w-full lg:w-[80%] flex flex-col gap-2">
                        <h1 className="text-3xl font-bold">Success stories from around the world</h1>
                    </div>

                    <div className=" w-full lg:w-[80%] ">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam saepe minima ex sint ad autem veniam, excepturi nisi sed voluptates.
                    </div>
                    
                    <div className="flex w-full justify-center lg:justify-start">
                    <Button link="#" name="Read more" />
                    </div>

                </div>

                <div className=" w-full lg:w-1/2 flex flex-col gap-4 justify-end">
                    <FeedbackCard image="./p1.webp" name="Johnny Johnson" details="Director, Medical Dlinic" review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?" />
                    <FeedbackCard image="./p3.webp" name="Victoria Azarenka" details="MD Director" review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?" />
                </div>
            </div>
        </div>
    )
}