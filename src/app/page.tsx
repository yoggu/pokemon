import PokemonList from "./PokemonList";

export default function PokemonListPage({ searchParams }: { searchParams: any }) {

  return (
    <>
      <h1 className="font-semibold text-4xl mb-6">Pokemon Index</h1>
      <PokemonList limit={searchParams.limit} offset={searchParams.offset} />
    </>
  );
}
