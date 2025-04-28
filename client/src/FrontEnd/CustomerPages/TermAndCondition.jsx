import React from "react";

const TermAndCondition = () => {
    return (
        <>
        
            <div className="bg-[#31A505] text-white p-4 text-3xl">
                <h2 className="text-2xl font-bold">Terms & Conditions</h2>
                <p className="text-sm">These Terms & Conditions shall be applied to LARRYTA's Passengers :</p>
            </div>
            <div className="p-4 text-gray-800">
                <ul className="list-disc pl-5 space-y-2">
                    <li>Ticket is non-refundable.</li>
                    <li>Passenger shall arrive at the terminal at least 15 minutes prior to departure schedule.</li>
                    <li>Company will not be responsible for no-show or any late passenger who missed the departure schedule.</li>
                    <li>Cancellation or schedule change shall be made at least 4 hours (during office hour 6h30-21h00) prior to departure of the confirmed route at no charge.</li>
                    <li>No charge for an infant or child aged below 3 years old sharing parent or guardian’s seat, and the company will not respond to any accidents.</li>
                    <li>Child aged over 3 years old or height over 1.0 meter tall shall be seated personally and charged as an adult price.</li>
                    <li>Passengers’ allowable carrying baggage is one only, and shall fit under the seat with the combined dimensions not exceeding 40cm x 40cm x 20cm and 20kg weight.</li>
                    <li>Over 27-week pregnant or disability passenger shall obtain a permit from the company.</li>
                    <li>Smoking, pets, weapons, illegal products, hazardous items, and strong-smelling foods are prohibited on the day of travel.</li>
                    <li>Profanity, racist, sexist comments, or any disturbances are forbidden on the day of travel.</li>
                </ul>
                <p className="text-red-500 mt-4 font-semibold">Remark: The Company reserves the right to change the above terms and conditions without prior notice.</p>
            </div>
        </>
    );
};

export default TermAndCondition;