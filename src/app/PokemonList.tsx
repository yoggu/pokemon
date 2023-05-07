import { Suspense } from "react";
import PokemonListItem from "./PokemonListItem";
import { getPokemonList } from "@/lib/pokeApi";
import PokemonListItemLoading from "./PokemonListItemLoading";
import { NamedAPIResourceList } from "pokemon";
import { ChevronLeft, ChevronRight, ChevronFirst } from "lucide-react";
import Link from "next/link";

interface PokemonListProps {
  limit: number;
  offset: number;
  name: string;
}

export default async function PokemonList({
  limit,
  offset,
  name,
}: PokemonListProps) {
  if (name) {
    limit = 2000;
    offset = 0;
  }
  const pokemonList: NamedAPIResourceList = await getPokemonList({
    limit,
    offset,
  });

  let previousParams;
  let firstParams;
  if (pokemonList.previous) {
    const url = new URL(pokemonList.previous);
    previousParams = url.search;
    const firstUrl = new URL(pokemonList.previous);
    firstUrl.searchParams.set("offset", "0");
    firstParams = firstUrl.search;
  }

  let nextParams;
  if (pokemonList.next) {
    const url = new URL(pokemonList.next);
    nextParams = url.search;
  }

  const filteredPokemonList = name
    ? pokemonList.results.filter((pokemon) =>
        pokemon.name.includes(name?.toLowerCase())
      )
    : pokemonList.results;

  return (
    <div>
      <ul className="flex flex-col gap-y-2">
        {filteredPokemonList.map((pokemon) => (
          <Suspense
            key={pokemon.name}
            fallback={
              <>
                <PokemonListItemLoading />
                <hr />
              </>
            }
          >
            <PokemonListItem pokemonName={pokemon.name} />
            <hr />
          </Suspense>
        ))}
      </ul>
      <div className="flex gap-10 justify-center py-8">
        {firstParams && (
          <Link href={firstParams} className="flex">
            <ChevronFirst /> First
          </Link>
        )}
        {previousParams && (
          <Link href={previousParams} className="flex">
            <ChevronLeft /> Previous
          </Link>
        )}
        {nextParams && (
          <Link href={nextParams} className="flex">
            Next <ChevronRight />
          </Link>
        )}
      </div>
    </div>
  );
}
