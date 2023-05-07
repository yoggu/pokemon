import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function PokemonLoading() {
  return (
    <>
      <div className="mb-5">
        <Skeleton className="h-5 w-[80px]" />
      </div>
      <Card className="max-w-md mx-auto flex flex-col items-center">
        <CardHeader>
          <Skeleton className="h-5 w-[150px]" />
        </CardHeader>
        <CardContent className="flex flex-col items-center w-full">
          <Skeleton className="h-20 w-20" />
          <ul className="grid gap-3 grid-cols-2 mt-4 w-full">
            <li className="flex">
              <Skeleton className="h-5 w-[40px]" />
            </li>
            <li className="flex">
              <Skeleton className="h-5 w-[40px]" />
            </li>
            <li className="flex">
              <Skeleton className="h-5 w-[40px]" />
            </li>
            <li className="flex">
              <Skeleton className="h-5 w-[40px]" />
            </li>
            <li className="flex">
              <Skeleton className="h-5 w-[40px]" />
            </li>
            <li className="flex">
              <Skeleton className="h-5 w-[40px]" />
            </li>
          </ul>
        </CardContent>
      </Card>
    </>
  );
}
