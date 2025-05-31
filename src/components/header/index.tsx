import Link from "next/link";
import { BurgerButton } from "./_components/burgerbutton";
import { LogoButton } from "./_components/logobutton";

export function Header() {
    return (
        <header className="fixed top-0 right-0 left-0 z-10 bg-red-500/80 text-white">
            <div className="relative flex items-center px-6 py-4 justify-between space-x-4">
                <div className="flex items-center space-x-4">
                    <BurgerButton></BurgerButton>
                    <LogoButton></LogoButton>
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/" className="hover:underline">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:underline">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:underline">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
