import { Skeleton } from "@/components/ui/skeleton";

export default function PokemonListItemLoading() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-20 w-20" />
      <div className="space-y-2">
        <Skeleton className="h-5 w-[150px]" />
      </div>
    </div>
  );
}
