import { Main, MainTitle } from "@/components/main";
import { NextDex } from "@/components/nextdex";
import { GETPokeInfos } from "./api/pokemons/route";

export default async function Home() {
    const pokemons = await GETPokeInfos();

    return (
        <Main>
            <MainTitle
                title="NextDex"
                subtitle="Veja os detalhes de cada Pokémon!"
            ></MainTitle>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 w-[90vw] text-black font-mono font-extrabold p-4">
                {pokemons.map((pokemon) => (
                    <NextDex key={pokemon.id} pokemon={pokemon}></NextDex>
                ))}
            </div>
        </Main>
    );
}
