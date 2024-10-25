import BackLink from "@/components/ui/BackLink";
import PokemonDetail from "./PokemonDetail";

export default async function PokemonPage(props: { params: Promise<{ name: string }> }) {
  const params = await props.params;
  return (
    <>
      <BackLink />
      <PokemonDetail name={params.name} />
    </>
  );
}
