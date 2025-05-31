export function Main(props: { children: React.ReactNode }) {
    return (
        <main className="flex flex-col items-center justify-start pt-20 min-h-[95vh] w-full bg-slate-800 text-black">
            {props.children}
        </main>
    );
}

export function MainTitle(props: { title: string; subtitle: string }) {
    return (
        <div className="flex flex-col gap-1 items-center justify-center w-full">
            <h1 className="font-extrabold text-4xl text-white text-center">
                {props.title}
            </h1>
            <p className="text-md text-gray-200 text-center">
                {props.subtitle}
            </p>
        </div>
    );
}
