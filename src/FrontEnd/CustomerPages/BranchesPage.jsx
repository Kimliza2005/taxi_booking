import React from "react";
 const BranchesPage = () => {
    return (
        <>
        <div>
        <h1 class="text-5xl m-7 font-bold bg-gradient-to-r from-green-500 via-yellow-400 to-yellow-300 bg-clip-text text-transparent">Branches</h1>
        <p class="m-8 text-gray-500 text-[18px]">Larryta has been expanding its branches to meet the needs of both domestic and international customers. Below are the locations of the branches in Cambodia. You can visit the branch nearest to you.</p>
        </div>
        
<ul class="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
    <li class="flex flex-col sm:flex-row xl:flex-col items-start shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 rounded-2xl">
        <div class="order-1 sm:ml-6 xl:ml-0">
            <h3 class="mb-1 text-slate-900 font-semibold">
                <span class="mb-1 block text-sm leading-6 text-indigo-500">Headless UI</span>Completely unstyled, fully
                accessible UI components
            </h3>
            <div class="prose prose-slate prose-sm text-slate-600">
                <p>Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind
                    CSS.</p>
            </div><a
                class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
                href="">Learn
                more<span class="sr-only">, Completely unstyled, fully accessible UI components</span>
                <svg class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400" width="3" height="6"
                    viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="M0 0L3 3L0 6"></path>
                </svg></a>
        </div>
        <img src="https://placehold.jp/3d4070/ffffff/150x150.png" alt="" class="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" width="1216" height="640"/>
    </li>
    <li class="flex flex-col sm:flex-row xl:flex-col items-start shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 rounded-2xl">
        <div class="order-1 sm:ml-6 xl:ml-0">
            <h3 class="mb-1 text-slate-900 font-semibold">
                <span class="mb-1 block text-sm leading-6 text-purple-500">Heroicons</span>Beautiful hand-crafted SVG
                icons, by the makers of Tailwind CSS.
            </h3>
            <div class="prose prose-slate prose-sm text-slate-600">
                <p>A set of 450+ free MIT-licensed SVG icons. Available as basic SVG icons and via first-party React and
                    Vue libraries.</p>
            </div><a
                class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
                href="">Learn
                more<span class="sr-only">, Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.</span>
                <svg class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400" width="3" height="6"
                    viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="M0 0L3 3L0 6"></path>
                </svg></a>
        </div>
        <img src="https://placehold.jp/2d80b0/ffffff/150x150.png" alt="" class="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" width="1216" height="640"/>
    </li>
    <li class="flex flex-col sm:flex-row xl:flex-col items-start shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 rounded-2xl">
        <div class="order-1 sm:ml-6 xl:ml-0">
            <h3 class="mb-1 text-slate-900 font-semibold">
                <span class="mb-1 block text-sm leading-6 text-cyan-500">Hero Patterns</span>Seamless SVG background
                patterns by the makers of Tailwind CSS.
            </h3>
            <div class="prose prose-slate prose-sm text-slate-600">
                <p>A collection of over 100 free MIT-licensed high-quality SVG patterns for you to use in your web
                    projects.</p>
            </div><a
                class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
                href="">Learn
                more<span class="sr-only">, Seamless SVG background patterns by the makers of Tailwind CSS.</span>
                <svg class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400" width="3" height="6"
                    viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="M0 0L3 3L0 6"></path>
                </svg></a>
        </div>
        <img src="https://placehold.jp/3d4070/ffffff/150x150.png" alt="" class="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" width="1216" height="640"/>
    </li>
</ul>
</>
    )
 }

 export default BranchesPage;