"use client";
import { FaArrowsAlt } from "react-icons/fa";

export function RotateButton({ toggle }: { toggle: () => void }) {
    return (
        <button
            className="border-2 p-1 bg-gray-700/20 border-gray-700/80 w-[40%] h-[90%]"
            onClick={toggle}
        >
            <FaArrowsAlt className="w-[100%] h-[100%] transition-all duration-200 ease-in-out hover:scale-110" />
        </button>
    );
}
