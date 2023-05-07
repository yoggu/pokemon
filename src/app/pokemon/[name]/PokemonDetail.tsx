import { getPokemon } from "@/lib/pokeApi";
import { Pokemon } from "pokemon";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default async function PokemonDetail({ name }: { name: string }) {
  const pokemon: Pokemon = await getPokemon(name);
  return (
    <Card className="max-w-md mx-auto flex flex-col items-center">
      <CardHeader>
        <CardTitle className="uppercase">{pokemon.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center w-full">
        <div className="h-[100px] w-[100px]">
          {pokemon?.sprites?.front_default && (
            <Image
              alt={pokemon.name}
              src={pokemon.sprites.front_default}
              width={100}
              height={100}
            />
          )}
        </div>
        <ul className="grid gap-3 grid-cols-2 mt-4 w-full">
          {pokemon.stats.map((stat) => (
            <li className="flex gap-1" key={stat.stat.name}>
              <span className="font-semibold">{stat.stat.name}: </span>
              <div>{stat.base_stat}</div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
