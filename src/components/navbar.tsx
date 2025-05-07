"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/civiclogo.png" alt="CivicMind Logo" className="h-10 w-10 object-contain" />
          <span className="text-xl font-bold">CivicMind</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="flex items-center space-x-1">
            <Link
              href="/feed"
              className={`px-4 py-2 text-sm transition-colors hover:text-primary ${
                pathname === "/feed" ? "text-primary font-medium" : "text-muted-foreground"
              }`}
            >
              Feed
            </Link>
            <Link
              href="/learn"
              className={`px-4 py-2 text-sm transition-colors hover:text-primary ${
                pathname === "/learn" ? "text-primary font-medium" : "text-muted-foreground"
              }`}
            >
              Learn
            </Link>
            <Link
              href="/volunteer"
              className={`px-4 py-2 text-sm transition-colors hover:text-primary ${
                pathname === "/volunteer" ? "text-primary font-medium" : "text-muted-foreground"
              }`}
            >
              Get Involved
            </Link>
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 