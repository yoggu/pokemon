import { Pokemon } from "pokemon";
import { getPokemon } from "@/lib/pokeApi";
import Image from "next/image";
import Link from "next/link";

interface PokemonListItemProps {
  pokemonName: string;
}

export default async function PokemonListItem({
  pokemonName,
}: PokemonListItemProps) {
  const pokemon: Pokemon = await getPokemon(pokemonName);

  return (
    <li>
      <Link className="block w-fit" href={`/pokemon/${pokemon.name}`}>
        <div className="flex items-center space-x-4">
          <Image
            alt={pokemon.name}
            src={pokemon.sprites.front_default ?? ""}
            width={80}
            height={80}
          />
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">{pokemon.name}</h3>
          </div>
        </div>
        <div className="flex"></div>
      </Link>
    </li>
  );
}
