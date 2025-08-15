"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const [query, setQuery] = useState("");

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
        <Link href="/" className="font-semibold">
          Uni-Website
        </Link>

        <div className="flex-1 hidden md:flex">
          <form action="/search" className="w-full">
            <input
              type="text"
              name="q"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search colleges, exams, branches..."
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500"
            />
          </form>
        </div>

        <nav className="hidden gap-6 md:flex">
          <Link href="/" className={isActive("/") ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}>Home</Link>
          <Link href="/colleges" className={isActive("/colleges") ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}>Colleges</Link>
          <Link href="/exams" className={isActive("/exams") ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}>Exams</Link>
          <Link href="/cutoffs" className={isActive("/cutoffs") ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}>Cutoffs</Link>
          <Link href="/news" className={isActive("/news") ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}>News</Link>
          <Link href="/counseling" className={isActive("/counseling") ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}>Counseling</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/signin">
            <Button variant="outline">Sign in</Button>
          </Link>
          <Link href="/signup">
            <Button>Sign up</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}


