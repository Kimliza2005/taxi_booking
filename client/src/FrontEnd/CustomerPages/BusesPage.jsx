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
                    <FAQsPage />
                </div>
            </div>
        </>
    )
}

export default BusesPage;