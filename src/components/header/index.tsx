import { BurgerButton } from "./_components/burgerbutton";

export function Header() {
    return (
        <header className="fixed top-0 right-0 left-0 px-6 py-4 bg-red-500/80 text-white">
            <div className="relative flex items-center justify-end space-x-4">
                <BurgerButton></BurgerButton>
                <h1 className="text-xl font-bold absolute -top-0.5 left-20">
                    PokeWorld
                </h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="/" className="hover:underline">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="hover:underline">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:underline">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
