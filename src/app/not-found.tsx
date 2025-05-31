import { MainTitle } from "@/components/main";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    return (
        <div
            className="flex flex-col justify-end pb-5 items-center text-center min-h-[95vh] w-full bg-cover bg-center"
            style={{
                backgroundImage: "url('/hero404.jpg')",
            }}
        >
            <div
                className="absolute top-30 left-0
                           animate-[misteryFlight_10s_linear_infinite]
                          "
            >
                <Link href={"/pokemon/250"}>
                    <Image
                        src="/misterybird.gif"
                        alt="Mistery bird"
                        width={200}
                        height={50}
                    ></Image>
                </Link>
            </div>
            <div className="bg-black/60 p-6 rounded-xl">
                <MainTitle
                    title="404 - Página não existe"
                    subtitle="Continue procurando pela grama alta"
                />
            </div>
        </div>
    );
}
