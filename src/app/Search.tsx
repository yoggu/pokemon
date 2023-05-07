"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function Search() {
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    // Get data from the form.
    const data = {
      pokemonName: form.pokemonName.value,
    };

    const url = `?name=${data.pokemonName}`;
    router.push(url);

  }

  function resetSearch() {
    router.push("/");
  }

  return (
    <div className="mb-4">
      <form onSubmit={handleSubmit} className="flex justify-center gap-4">
        <Input name="pokemonName" type="search" placeholder="Search" />
        <Button type="submit">Search</Button>
        <Button variant="outline"  onClick={resetSearch} type="reset">
          Reset
        </Button>
      </form>
    </div>
  );
}
