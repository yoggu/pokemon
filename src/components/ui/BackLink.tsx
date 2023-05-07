"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackLink() {
  const router = useRouter();
  function goBack() {
    router.back();
   }
  return (
    <button className="flex gap-1 mb-4 font-semibold cursor-pointer" onClick={goBack}>
      <ArrowLeft />
      Back
    </button>
  );
}
