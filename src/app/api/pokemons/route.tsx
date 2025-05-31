import { types } from "util";

async function GETPokeList() {
    const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0"
    );
    const data = await response.json();
    return data.results;
}

export async function GETPokeInfos() {
    const pokemons = await GETPokeList();

    const pokeInfos = await Promise.all(
        pokemons.map(async (pokemon: any) => {
            const res = await fetch(pokemon.url);
            const info = await res.json();
            return {
                id: info.id,
                name: pokemon.name,
                front_sprite: info.sprites.front_default,
                back_sprite: info.sprites.back_default,
            };
        })
    );
    return pokeInfos;
}

export async function GETPokemonById(id: string) {
    const PokeRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const InfoRes = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${id}`
    );
    const pokemon = await PokeRes.json();
    const pokeInfo = await InfoRes.json();

    const flavor_text =
        pokeInfo.flavor_text_entries
            .find((e: any) => e.language.name === "en")
            ?.flavor_text.replace(/[\n\f]/g, " ") ?? "No flavor text found.";
    const typesUrl = pokemon.types.map((t: any) => t.type.name);

    return {
        id: pokemon.id,
        name: pokemon.name,
        front_sprite: pokemon.sprites.front_default,
        back_sprite: pokemon.sprites.front_default,
        flavor_text: flavor_text,
        types_img: typesUrl,
    };
}
