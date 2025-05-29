export function Footer() {
    return (
        <footer className="relative flex z-20 items-center justify-between text-sm p-2 bg-red-500/90 text-white">
            <p>© 2023 PokeWorld. All rights reserved.</p>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <a href="/privacy" className="hover:underline">
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a href="/terms" className="hover:underline">
                            Terms of Service
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}
