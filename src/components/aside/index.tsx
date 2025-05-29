import { Button } from "./_components/closebutton";

export function Aside() {
    return (
        <aside
            className="fixed top-0 left-0 z-10 h-full min-w-50 bg-gray-800/90 text-white
                       transition-all duration-300 ease-in-out
                       transform -translate-x-full
                       "
        >
            <div className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">Filtros</h2>
                    <Button></Button>
                </div>
                <ul className="space-y-2">
                    <li>
                        <a href="/" className="hover:underline">
                            Tipo
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="hover:underline">
                            Geração
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
}
