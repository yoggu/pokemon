import { Skeleton } from "@/components/ui/skeleton";

export default function PokemonLoading() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-5 w-[150px]" />
    </div>
  );
}
