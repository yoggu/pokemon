import PokemonList from "./PokemonList";
import Search from "./Search";

export default async function PokemonListPage(
  props: {
    searchParams: Promise<any>;
  }
) {
  const searchParams = await props.searchParams;
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
