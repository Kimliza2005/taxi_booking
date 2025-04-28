import { useState } from "react";

const TravelSearch = () => {
  const [direction, setDirection] = useState("Phnom Penh-Siem Reap");
  const [nationality, setNationality] = useState("Cambodian");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  return (
    <div className="bg-[#31A505] p-6">
      <h2 className="text-white text-3xl font-semibold mb-6">
        Raising the Standard of Land Travel Experience
      </h2>
      <div className="flex flex-wrap gap-3 items-center bg-white p-3 rounded-lg">
        {/* Direction Select */}
        <div >
          <label className="block text-gray-500 text-sm mb-1">Direction</label>
          <select
            className="w-60 p-3 border rounded-md font-semibold bg-white"
            value={direction}
            onChange={(e) => setDirection(e.target.value)}
          >
            <option>Phnom Penh-Siem Reap</option>
            <option>Phnom Penh-Sihanoukville</option>
            <option>Phnom Penh-Battambang</option>
          </select>
        </div>

        {/* Departure Date */}
        <div>
          <label className="block text-gray-500 text-sm mb-1">Departure Date</label>
          <input
            type="date"
            className="w-52 p-3 border rounded-md bg-white"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          />
        </div>

        {/* Return Date */}
        <div >
          <label className="block text-gray-500 text-sm mb-1">Return Date</label>
          <input
            type="date"
            className="w-52 p-3 border rounded-md bg-white"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </div>

        {/* Nationality Select */}
        <div >
          <label className="block text-gray-500 text-sm mb-1">Nationality</label>
          <select
            className="w-52 p-3 border rounded-md font-semibold bg-white focus:ring-2 focus:ring-blue-400"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
          >
            <option>Cambodian</option>
            <option>Non-Cambodia</option>
          </select>
        </div>

        {/* Search Button */}
        <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-500 mt-6">
          Search
        </button>
      </div>
    </div>
  );
};

export default TravelSearch;
