import PokemonList from "./PokemonList";
import Search from "./Search";

export default function PokemonListPage({
  searchParams,
}: {
  searchParams: any;
}) {
  return (
    <>
      <h1 className="font-semibold text-4xl mb-6">Pokemon Index</h1>
      <Search />
      <PokemonList
        limit={searchParams.limit}
        offset={searchParams.offset}
        name={searchParams.name}
      />
    </>
  );
}
