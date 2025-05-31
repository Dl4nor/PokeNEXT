"use client";
import Image from "next/image";

export default function PokeImage({
    isFront,
    front,
    back,
    name,
}: {
    isFront: boolean;
    front: string;
    back: string;
    name: string;
}) {
    return (
        <Image
            className={`hover:scale-110 transition-all duration-300 ease-in-out
                       ${
                           isFront
                               ? ""
                               : "transform rotate-y-180 -translate-y-0.5"
                       } 
                      `}
            src={isFront ? front : back}
            alt={`Sprite do ${name}`}
            width={300}
            height={50}
        />
    );
}
