import React, { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="w-full shadow-lg lg:h-16">
            <div className="mx-auto lg:flex lg:items-center h-full">
                <div className="flex items-center justify-between pt-4">
                    <div className="w-56">
                        <a href="#" className=" pl-4 text-xl font-bold uppercase">
                            Hramanage
                        </a>
                    </div>

                    {/* Hamburger menu button for medium and large screens */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-800 focus:outline-none"
                        >
                            {isMenuOpen ? (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    ></path>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                <div
                    className={`${isMenuOpen ? "block" : "hidden"} mt-4 w-full lg:flex items-center lg:justify-between text-center lg:mt-0 h-full`}
                >
                    <div className="flex flex-col lg:flex-row w-full gap-2 lg:items-center justify-center">
                        <a
                            href="#"
                            className=" px-4 py-2 rounded-lg text-sm xl:text-md  xl:font-medium text-slate-400 hover:text-purple-400"
                        >
                            Features
                        </a>
                        <a
                            href="#"
                            className=" px-4 py-2 rounded-lg text-sm xl:text-md  xl:font-medium text-slate-400 hover:text-purple-400"
                        >
                            Use Cases
                        </a>
                        <a
                            href="#"
                            className=" px-4 py-2 rounded-lg text-sm xl:text-md  xl:font-medium text-slate-400 hover:text-purple-400"
                        >
                            Pricing 
                        </a>
                        <a
                            href="#"
                            className=" px-4 py-2 rounded-lg text-sm xl:text-md  xl:font-medium text-slate-400 hover:text-purple-400"
                        >
                            Company
                        </a>
                    </div>


                    <div className="flex flex-col mt-4 md:mt-0 gap-4 justify-center items-center rounded-full text-black lg:flex-row">
                        <a
                            href="#"
                            className=" py-2 px-4 w-48 rounded-lg flex flex-col lg:flex-row font-medium xl:font-semibold bg-purple-600 hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 
                            active:bg-purple-700 transition-all duration-300 ease-in-out text-white items-center uppercase justify-center"
                        >
                            Sign up for free
                        </a>

                    </div>
                </div>
            </div>
        </nav>
    );
};

