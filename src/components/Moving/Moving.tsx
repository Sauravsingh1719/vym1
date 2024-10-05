"use client";
import React from "react";
import { Button } from "../ui/moving-border";
import Link from "next/link";

export function MovingBorderDemo() {
  return (
    <div>
      <Link href='/post'>
      <Button
        borderRadius="1.75rem"
        className="bg-blue dark:bg-slate-900 text-white text-2xl font-thin dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Explore
      </Button>
      </Link>
    </div>
  );
}
