import { CloseButton } from "./_components/closebutton";
import Link from "next/link";

export function Aside() {
    return (
        <aside
            className="fixed top-0 left-0 z-20 h-full min-w-50 bg-gray-800/90 text-white
                       transition-all duration-300 ease-in-out
                       transform -translate-x-full
                       "
        >
            <div className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">Filtros</h2>
                    <CloseButton></CloseButton>
                </div>
                <ul className="space-y-2">
                    <li>
                        <Link href="/" className="hover:underline">
                            Tipo
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:underline">
                            Geração
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
}
