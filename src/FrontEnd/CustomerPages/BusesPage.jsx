import React from "react";
import TravelSearch from "./TravelSearch";
import Tips from "./Tips";
import FAQsPage from "./FAQsPage";
import Slogan from "./Slogan";


const BusesPage = () => {
    return (
        <>
            <div class="w-full">
                <TravelSearch />
                <Tips />
                <Slogan />
                <div className="p-6 mx-auto">
                    {/* <h2 className="text-2xl font-bold mb-6">
                        FAQ
                    </h2> */}
                    <FAQsPage />
                </div>
            </div>
        </>
    )
}

export default BusesPage;