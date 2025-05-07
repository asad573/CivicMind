import React from "react";
import Link from "next/link"

export default function FeedPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">Policy Feed</h1>
      <p className="text-xl mb-8">
        Stay updated with real-time policy changes and legislative updates.
      </p>
      <div className="w-full max-w-3xl bg-card rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
        <p>
          We're working on integrating the Legiscan API to provide you with real-time
          updates on policies and bills that matter to you. Check back soon!
        </p>
      </div>
      <Link
        href="/"
        className="mt-8 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90"
      >
        Back to Home
      </Link>
    </main>
  )
} 