import Link from "next/link";
import Image from "next/image";

export function LogoButton() {
    return (
        <Link href="/" className="-my-10">
            <Image
                className="ml-5"
                src="/LogoNext.svg"
                alt="PokeNext Logo"
                width={150}
                height={0}
                priority
            />
        </Link>
    );
}
