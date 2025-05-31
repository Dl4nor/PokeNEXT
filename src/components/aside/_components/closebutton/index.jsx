"use client";

import { IoIosClose } from "react-icons/io";

export function CloseButton() {
    return (
        <button
            onClick={() => {
                const aside = document.querySelector("aside");
                if (aside) {
                    aside.classList.remove("translate-x-0");
                    aside.classList.add("-translate-x-full");
                }
            }}
            className=" bg-slate-500 hover:bg-red-800 transition-all duration-300 ease rounded"
        >
            <IoIosClose className="w-8 h-8" />
        </button>
    );
}
