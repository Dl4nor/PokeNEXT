"use client";

import { IoMenu } from "react-icons/io5";

export function BurgerButton() {
    return (
        <button
            className="rounded p-1
                       transition-colors duration-300 ease 
                     hover:bg-red-900/80  
                     "
            onClick={() => {
                // Toggle the aside menu visibility
                const aside = document.querySelector("aside");
                if (aside) {
                    aside.classList.remove("-translate-x-full");
                    aside.classList.add("translate-x-0");
                }
            }}
        >
            <IoMenu className="w-7 h-7" />
        </button>
    );
}
