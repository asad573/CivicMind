import React from "react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 bg-gray-100 dark:bg-gradient-to-b dark:from-gray-900 dark:to-purple-950">
      <div className="w-full max-w-3xl bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-purple-200 dark:border-purple-800">
        <h1 className="text-3xl font-bold text-purple-800 dark:text-purple-300 mb-4">About CivicMind</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          <strong>CivicMind</strong> is an education platform dedicated to empowering individuals with the knowledge and confidence to engage in civic life. Our mission is to make civic education accessible, engaging, and actionable for everyone.
        </p>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-6">
          <li>Learn how government works at all levels</li>
          <li>Understand your rights and responsibilities as a citizen</li>
          <li>Stay updated on policy changes and legislative news</li>
          <li>Get involved in your community and make a difference</li>
        </ul>
        <p className="mb-6">We believe that informed citizens are the foundation of a healthy democracy. Whether you're a student, a first-time voter, or a lifelong learner, CivicMind is here to support your civic journey.</p>
        <Link href="/" className="inline-block px-5 py-2 bg-purple-600 text-white font-medium rounded-lg shadow hover:bg-purple-700 transition-colors">Back to Home</Link>
      </div>
    </main>
  );
} 