import React from "react";
import Link from "next/link";

export default function Government101Page() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 bg-gray-100 dark:bg-gradient-to-b dark:from-gray-900 dark:to-purple-950">
      <div className="w-full max-w-3xl bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-purple-200 dark:border-purple-800">
        <h1 className="text-3xl font-bold text-purple-800 dark:text-purple-300 mb-4">Government 101</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Welcome to the Government 101 module! Here, you'll learn about the three branches of government and how they work together to create and enforce laws.
        </p>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-6">
          <li><strong>Legislative Branch:</strong> Makes the laws (e.g., Congress).</li>
          <li><strong>Executive Branch:</strong> Enforces the laws (e.g., President, Governor).</li>
          <li><strong>Judicial Branch:</strong> Interprets the laws (e.g., Courts).</li>
        </ul>
        <p className="mb-6">Each branch has its own powers and responsibilities, but they also work together to ensure a balance of power through a system called <strong>checks and balances</strong>.</p>
        <Link href="/learn" className="inline-block px-5 py-2 bg-purple-600 text-white font-medium rounded-lg shadow hover:bg-purple-700 transition-colors">Back to Modules</Link>
      </div>
    </main>
  );
} 