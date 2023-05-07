import { Suspense } from "react";
import PokemonListItem from "./PokemonListItem";
import { getPokemonList } from "@/lib/pokeApi";
import PokemonListItemLoading from "./PokemonListItemLoading";
import { NamedAPIResourceList } from "pokemon";

export default async function PokemonList() {
  const interval = {
    limit: 50,
    offset: 0,
  };
  const pokemonList: NamedAPIResourceList = await getPokemonList(interval);
  return (
    <ul className="flex flex-col gap-y-2">
      {pokemonList.results.map((pokemon) => (
        <Suspense key={pokemon.name} fallback={<PokemonListItemLoading />}>
          <PokemonListItem pokemonName={pokemon.name} />
        </Suspense>
      ))}
    </ul>
  );
}
