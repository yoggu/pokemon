import BackLink from "@/components/ui/BackLink";
import PokemonDetail from "./PokemonDetail";

export default function PokemonPage({ params }: { params: { name: string } }) {
  return (
    <>
      <BackLink />
      <PokemonDetail name={params.name} />
    </>
  );
}
