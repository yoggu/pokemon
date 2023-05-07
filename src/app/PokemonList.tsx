import { Suspense } from "react";
import PokemonListItem from "./PokemonListItem";
import { getPokemonList } from "@/lib/pokeApi";
import PokemonListItemLoading from "./PokemonListItemLoading";
import { NamedAPIResourceList } from "pokemon";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface PokemonListProps {
  limit: number;
  offset: number;
}

export default async function PokemonList({ limit, offset }: PokemonListProps) {
  const pokemonList: NamedAPIResourceList = await getPokemonList({
    limit,
    offset,
  });

  let previousParams;
  let nextParams;
  if (pokemonList.previous) {
    const url = new URL(pokemonList.previous);
    previousParams = url.search;
  }

  if (pokemonList.next) {
    const url = new URL(pokemonList.next);
    nextParams = url.search;
  }

  return (
    <div>
      <ul className="flex flex-col gap-y-2">
        {pokemonList.results.map((pokemon) => (
          <Suspense key={pokemon.name} fallback={<><hr /><PokemonListItemLoading /></>}>
            <hr />
            <PokemonListItem pokemonName={pokemon.name} />
          </Suspense>
        ))}
      </ul>
      <div className="flex gap-10 justify-center py-8">
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
