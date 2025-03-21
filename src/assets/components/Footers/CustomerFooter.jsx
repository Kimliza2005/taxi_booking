import React from "react";
import playstorePic from"../../images/logo/playstore.png"
import appstorePic from"../../images/logo/Appstore.png"

const CustomerFooter = () => {
    return (
        <>
        <footer
    className="bg-neutral-100 text-center dark:bg-gray-800 lg:text-left text-gray-300">
    <div className="container p-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 m-5">
        <div className="mb-6">
        <img className="h-14 inline cursor-pointer ml-[-20px]" src="https://larrytabus.com/img/logo-white.png" alt="Logo" />
        <p class="mr-[20px] mt-[20px] ml[20px] text-[17px]">
        Larryta provides dependable and affordable bus services throughout Cambodia, linking major destinations such as Phnom Penh,
         Siem Reap, Sihanoukville, and Battambang. Offering comfortable,Larryta guarantees a safe, enjoyable, and hassle-free journey for both locals and tourists
           exploring Cambodia.
        </p>
        </div>

        {/* <!--Second links --> */}
        <div className="mb-6 ">
          <h2
            className="mb-2.5 font-bold uppercase text-[25px] text-neutral-800 dark:text-neutral-200">
            Quick links
          </h2>
          <ul className="mb-0 list-none text-[17px]">
            <li>
              <a className="text-neutral-800 dark:text-neutral-200 " href="/"
              >Buses</a>
            </li>
            <li>
              <a className="text-neutral-800 dark:text-neutral-200" href="/branches"
              >Branches</a>
            </li>
            <li>
              <a className="text-neutral-800 dark:text-neutral-200"
              >About</a>
            </li>
            <li>
              <a className="text-neutral-800 dark:text-neutral-200"
              >FAQs</a>
            </li>
            <li>
              <a className="text-neutral-800 dark:text-neutral-200"
              >Privacy Policy</a>
            </li>
            <li>
              <a className="text-neutral-800 dark:text-neutral-200"
              >Term & Conditions</a>
            </li>
          </ul>
          
        </div>

        {/* <!--Third links section--> */}
        <div className="mb-6 mr-2.5">
          <h2
            className="mb-2.5 font-bold uppercase text-[25px] text-neutral-800 dark:text-neutral-200">
            TripAdvisor
          </h2>
          <a href="https://www.tripadvisor.com/" class="flex justify-center">
          <img class="bg-white p-2.5 rounded-2xl w-[200px]" src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg" 
          alt="" />
          </a>
          
        </div>

        {/* <!--Fourth links section--> */}
        <div className="mb-6">
          <h2
            className="mb-2.5 font-bold uppercase text-[25px] text-neutral-800 dark:text-neutral-200">
            App available on
          </h2>

          <ul className="flex justify-between mb-0 list-none text-[17px]">
            <li>
              <a className="text-neutral-800 dark:text-neutral-200" href="https://play.google.com/store/search?q=larryta+bus&c=apps">
                <img src={playstorePic} alt="" class="mb-5 w-[200px]"/>
              </a>
            </li>
            <li>
              <a className="text-neutral-800 dark:text-neutral-200" href="https://apps.apple.com/us/app/larryta-bus/id6478513013">
                <img src={appstorePic} class="w-[200px]" alt="" />
              </a>
            </li>
          </ul>
          <h2
            className="mb-2.5 font-bold uppercase text-[25px] text-neutral-800 dark:text-neutral-200 mt-[10px]">
            Follow on
          </h2>
          <ul className="flex mb-0 list-none text-[17px] justify-between">
            <li class="mr-6 bg-gray-500 pr-3 pl-3 pt-2 pb-2 rounded-[10px] cursor-pointer hover:bg-gray-700 duration-100">
              <a className="text-neutral-800 dark:text-neutral-200" href="https://web.facebook.com/larrytaexpress">
              <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li class="mr-6 bg-gray-500 pr-3 pl-3 pt-2 pb-2 rounded-[10px] cursor-pointer hover:bg-gray-700 duration-100">
              <a className="text-neutral-800 dark:text-neutral-200" href="https://www.instagram.com/larrytabus">
              <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
            <li class="mr-6 bg-gray-500 pr-3 pl-3 pt-2 pb-2 rounded-[10px] cursor-pointer hover:bg-gray-700 duration-100">
              <a className="text-neutral-800 dark:text-neutral-200" href="#">
              <ion-icon name="call-outline"></ion-icon>
              </a>
            </li>
            <li class="mr-6 bg-gray-500 pr-3 pl-3 pt-2 pb-2 rounded-[10px] cursor-pointer hover:bg-gray-700 duration-100">
              <a className="text-neutral-800 dark:text-neutral-200" href="https://www.youtube.com/@larrytabus">
              <ion-icon name="logo-youtube"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
        
      </div>
    </div>

    {/* <!--Copyright section--> */}
    <div
      className="bg-neutral-200 p-4 text-center text-neutral-700 dark:bg-gray-900 dark:text-neutral-200">
      © Larryta 2004 All rights reserved
    </div>
  </footer>
        </>
    );
}

export default CustomerFooter;



