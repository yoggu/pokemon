import { Suspense } from "react";
import PokemonListItem from "./PokemonListItem";
import { pokedex } from "@/lib/pokedex";
import PokemonListItemLoading from "./PokemonListItemLoading";

export default async function PokemonList() {
  const interval = {
    limit: 50,
    offset: 0,
  };
  const pokemonList = await pokedex.getPokemonsList(interval);
  return (
    <main className="flex flex-col max-w-4xl m-auto px-4">
      <h1 className="font-semibold text-2xl">Pokemon List</h1>
      <ul>
        {pokemonList.results.map((pokemon) => (
          <Suspense key={pokemon.name} fallback={<PokemonListItemLoading />}>
            <PokemonListItem pokemonName={pokemon.name} />
          </Suspense>
        ))}
      </ul>
    </main>
  );
}
