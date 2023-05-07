import { Pokemon } from "pokedex-promise-v2";
import { pokedex } from "@/lib/pokedex";
import Image from "next/image";
import Link from "next/link";

interface PokemonListItemProps {
  pokemonName: string;
}

export default async function PokemonListItem({
  pokemonName,
}: PokemonListItemProps) {
  const pokemon: Pokemon = await pokedex.getPokemonByName(pokemonName);

  return (
    <li>
      <Link href={`/pokemon/${pokemon.id}`}>
        <div className="flex ">
          <h3 className="text-lg font-semibold">{pokemon.name}</h3>
          <Image
            alt={pokemon.name}
            src={pokemon.sprites.front_default ?? ""}
            width={100}
            height={100}
          />
        </div>
      </Link>
    </li>
  );
}
