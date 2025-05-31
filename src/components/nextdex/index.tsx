"use client";

import Link from "next/link";
import { FaCircle, FaSearch } from "react-icons/fa";
import { useState } from "react";
import { RotateButton } from "@/components/flipButton";
import PokeImage from "@/components/pokeImage";

type Pokemon = {
    id: number;
    name: string;
    front_sprite: string;
    back_sprite: string;
};

export function NextDex({ pokemon }: { pokemon: Pokemon }) {
    const [isFront, setIsFront] = useState(true);
    const toggle = () => setIsFront((prev) => !prev);

    return (
        <div
            key={pokemon.id}
            className="flex flex-col gap-2 text-center mx-auto min-w-50 max-w-[20vw] bg-red-400/90 p-4 rounded-xl shadow-2xl"
        >
            <div className="flex justify-evenly">
                <div className="flex gap-1">
                    <FaCircle />
                    <FaCircle />
                    <FaCircle />
                </div>
                <div className="flex gap-1">
                    <FaCircle />
                    <FaCircle />
                    <FaCircle />
                </div>
            </div>
            <div className="bg-gray-700 py-[5%] px-[10%] rounded-xl rounded-bl-4xl">
                <div className=" bg-blue-300/80 rounded-2xl border-r-2 border-b-2 border-white/50">
                    <h1>{pokemon.name}</h1>
                    <PokeImage
                        isFront={isFront}
                        front={pokemon.front_sprite}
                        back={pokemon.back_sprite}
                        name={pokemon.name}
                    />
                    <h1>#{pokemon.id}</h1>
                </div>
            </div>
            <div className="flex items-center justify-around text-center">
                <Link
                    className="flex items-center justify-center gap-2 bg-green-400/70 py-1 w-[50%] max-h-[70%] rounded-md border-2 border-black
                                           transition-all duration-300 ease-in-out hover:bg-green-300 
                                          "
                    href={`/pokemon/${pokemon.id}`}
                >
                    <p className="font-mono text-xl">Info</p>
                    <div>
                        <FaSearch className="transform rotate-y-180" />
                    </div>
                </Link>
                <RotateButton toggle={toggle}></RotateButton>
            </div>
        </div>
    );
}
