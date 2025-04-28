import { useState } from "react";

const FAQsPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Larryta’s destination?",
      answers: [
        "Phnom Penh to Siem Reap",
        "Phnom Penh to Sihanoukville",
        "Siem Reap to Phnom Penh",
        "Siem Reap to Sihanoukville",
        "Sihanoukville to Phnom Penh",
        "Sihanoukville to Siem Reap",
        "Phnom Penh to Battambang",
        "Battambang to Phnom Penh",
      ],
    },
   
    {
      question: "How can I book bus tickets?",
      answers: [
        <>
          Website:{" "}
          <a
            href="https://www.larrytabus.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            www.larrytabus.com
          </a>
        </>,
        <>
          Play Store:{" "}
          <a
            href="https://play.google.com/store/apps/details?id=com.larrytabus.express&hl=en&gl=US"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Download Here
          </a>
        </>,
        <>
          App Store:{" "}
          <a
            href="https://apps.apple.com/us/app/larryta-bus/id6478513013"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Download Here
          </a>
        </>,
        <>Hotline: 016 202020</>,
      ],
    },

    {
        question: "What are the payment options?",
        answers: [
          "You can make payment via ៖",
          "ABA Pay",
          "KHQR",
          "Visa Card",
          "Union Pay",
          "Master Card",
        ],
      },
      {
        question: "When should I arrive at the bus station?",
        answers: [
          "You should arrive at the bus station at least 15 minutes before departure.",
        ],
      },
      {
        question: "Where is the company located or branched?",
        answers: [
          "Phnom Penh No. 21, France St. (47), Sangkat Srah Chork, Khan Daun Penh, Phnom Penh (North of TOTAL gas station).",
          "Siem Reap No. 752, National Road No 6, Chong Kaosou Village.",
          "Sihanoukville No 644, Street Kamakor, Sangkat 2, Sihanoukville",
          "Battambang Sangkat, Phum Prek Mohatep, Street, La He St, Krong Battambang 021104",
        ],
      },

      {
        question: "Can I request to reschedule my trip?",
        answers: [
          " Yes, you can change schedule shall be made at least 4 hours (during office hour 6h30-21h00) prior to departure of the confirmed route at no charge.",
        ],
      },
      {
        question: "How can I book bus tickets online for travel within Cambodia?",
        answers: [
          "To book bus tickets online in Cambodia, you can use the Larryta Bus service. This platform provides a fast, secure, and hassle-free booking process, allowing you to reserve your ticket in just 2–5 minutes.",
        ],
      },
      {
        question: "What is the cost of traveling by car in Cambodia?",
        answers: [
          "Traveling by Larryta Bus in Cambodia is very affordable. The fare depends on the bus operator, the route you choose, and the amenities provided on the bus.",
        ],
      },
      {
        question: "How will I receive my booking confirmation?",
        answers: [
          "You will receive the booking confirmation for your e-ticket bus via Telegram or email.",
        ],
      },
      {
        question: "Are sleeper buses available in Cambodia?",
        answers: [
          "Yes, most bus operators in Cambodia offer sleeper buses. You will also have a variety of other bus options for your journey, including minivans, hotel buses, VIP buses, luxury buses, and seated buses.",
        ],
      },

      

      
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="m-7">
      <div>
        <h1 className="text-5xl mb-3 font-bold bg-gradient-to-r from-green-500 via-yellow-400 to-yellow-300 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h1>
        <p className="mb-3 text-gray-500 text-[18px]">
          Find answers to common questions about booking a trip with Larryta.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg w-full bg-white shadow-md">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left text-lg font-semibold text-gray-900 flex justify-between items-center p-5"
            >
              {faq.question}
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            {/* Dropdown Content */}
            {openIndex === index && (
              <div className="border-t p-5 bg-white">
                <ul className="text-gray-900 space-y-2 list-disc ml-3.5">
                  {faq.answers.map((answer, i) => (
                    <li key={i}>{answer}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQsPage;
