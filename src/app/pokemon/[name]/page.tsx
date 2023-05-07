import Link from "next/link";
import PokemonDetail from "./PokemonDetail";
import { ArrowLeft } from "lucide-react";

export default function PokemonPage({ params }: { params: { name: string } }) {
  return (
    <>
      <Link className="flex gap-1 mb-4 font-semibold" href={"/"}>
        <ArrowLeft />
        Back
      </Link>
      <PokemonDetail name={params.name} />
    </>
  );
}
