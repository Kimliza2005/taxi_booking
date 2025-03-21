import React from "react";

const Tips = () => {
    return (
        <>
            <div className="p-6 mx-auto">
                <h2 className="text-2xl font-bold mb-6">
                    Book your bus tickets in three easy steps
                </h2>
                <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
                    <div className="flex flex-col items-center text-center">
                        <span className="text-green-500 text-3xl">
                            <img src="https://larrytabus.com/img/search.png" alt="search-icon" class="w-14"></img>
                        </span>
                        <strong>Search</strong>
                        <p className="text-sm">Select your travel direction and departure date.</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <span className="text-green-500 text-3xl">
                            <img src="https://larrytabus.com/img/select-seat.png" alt="seat-icon" class="w-14" />
                        </span>
                        <strong>Select Seat</strong>
                        <p className="text-sm">Select your departure time and seat.</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <span className="text-green-500 text-3xl">
                            <img src="https://larrytabus.com/img/pay-card.png" alt="payment" class="w-14" />
                        </span>
                        <strong>Pay</strong>
                        <p className="text-sm">Securely pay with your preferred method.</p>
                    </div>
                </div>
                <h3 className="text-xl font-bold mt-6">Featured Services</h3>
                <ul className="mt-4 space-y-2">
                    {[
                        "Passenger Insurance",
                        "Punctual Departure Time",
                        "Soft Drink & Wet Towel",
                        "GPS Tracking System",
                        "Reclining Seat",
                    ].map((service, index) => (
                        <li key={index} className="flex items-center">
                            <span className="text-green-500 mr-2"><ion-icon name="checkmark-circle"></ion-icon></span> {service}
                        </li>
                    ))}
                </ul>
            </div>

        </>
    )
}

export default Tips;