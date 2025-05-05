import React from "react";
import { FaBell } from "react-icons/fa";
const DashboardPage = () => {
    return (
        <>

            {/* Dashboard Layout section */}
            <div className="h-screen flex-1 bg-zinc-100 space-y-6">
                {/* Navbar section */}
                <div className="w-full h-[8ch] px-12 bg-zinc-50 shadow-md flex items-center justify-between">

                    {/* Right side: Notification and Profile */}
                    <div className="flex items-center gap-x-8 ml-auto">
                        {/* Notification */}
                        <button className="relative">
                            <div className="w-5 h-5 bg-zinc-50 flex items-center justify-center absolute -top-1.5 -right-2.5 rounded-full p-0.5">
                                <span className="bg-red-600 text-white rounded-full w-full h-full flex items-center justify-center text-xs">3</span>
                            </div>
                            <FaBell className="text-xl" />
                        </button>

                        {/* Profile img */}
                        <img
                            src="https://i.pinimg.com/originals/64/f0/d3/64f0d39d98ca065c3654a58e7c4caa06.jpg"
                            alt="profile img"
                            className="w-11 h-11 rounded-full object-cover object-center cursor-pointer"
                        />
                    </div>
                </div>


                {/* Dashboard contents */}
                <div className="w-full px-12">
                    <h1 className="text-xl text-zinc-800 font-medium">
                        This is the Dashboard page.
                        
                    </h1>
                </div>
            </div>

        </>
    )
}

export default DashboardPage;