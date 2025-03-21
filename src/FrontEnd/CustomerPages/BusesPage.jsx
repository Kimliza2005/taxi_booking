import React from "react";
import TravelSearch from "./TravelSearch";
import Tips from "./Tips";
import FAQsPage from "./FAQsPage";
import Slogan from "./Slogan";
import NewsAndPromotions from "./NewsAndPromotions.";

const BusesPage = () => {
    return (
        <>
            <div class="w-full">
                <TravelSearch />
                <Tips />
                <NewsAndPromotions />
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