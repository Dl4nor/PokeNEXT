import { Main, MainTitle } from "@/components/main";
import { GETPokemonById } from "@/app/api/pokemons/route";
import Image from "next/image";

export default async function PokeInfoPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const pokemon = await GETPokemonById(id);

    return (
        <Main>
            <MainTitle
                title={pokemon.name}
                subtitle={pokemon.flavor_text}
            ></MainTitle>
            <Image
                src={pokemon.front_sprite}
                alt={`Pokemon: ${pokemon.name}`}
                width={200}
                height={50}
            ></Image>
        </Main>
    );
}
