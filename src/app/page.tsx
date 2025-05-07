import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-b from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950">
      <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.8))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.8))]"></div>
      
      <div className="relative z-10 mb-10 text-center">
        <h1 className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">
          CivicMind
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
          Empowering Civic Engagement Through Education
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl relative z-10">
        <Link
          href="/feed"
          className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100 dark:border-blue-900"
        >
          <div className="h-2 bg-blue-500"></div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Policy Feed
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Stay updated with real-time policy changes and legislative updates that matter to you.
            </p>
            <div className="mt-4 flex justify-end">
              <span className="text-blue-500 dark:text-blue-400 flex items-center text-sm font-medium">
                Explore
                <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </div>
          </div>
        </Link>

        <Link
          href="/learn"
          className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-purple-100 dark:border-purple-900"
        >
          <div className="h-2 bg-purple-500"></div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              Learn
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Gamified modules to build confidence in civic knowledge and make voting easier.
            </p>
            <div className="mt-4 flex justify-end">
              <span className="text-purple-500 dark:text-purple-400 flex items-center text-sm font-medium">
                Discover
                <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </div>
          </div>
        </Link>

        <Link
          href="/volunteer"
          className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-green-100 dark:border-green-900"
        >
          <div className="h-2 bg-green-500"></div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
              Get Involved
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Find volunteer opportunities from certified organizations in your community.
            </p>
            <div className="mt-4 flex justify-end">
              <span className="text-green-500 dark:text-green-400 flex items-center text-sm font-medium">
                Participate
                <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </div>
          </div>
        </Link>
      </div>

      <div className="mt-16 relative z-10 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 max-w-2xl">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Why CivicMind?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start">
            <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg mr-3">
              <svg className="w-5 h-5 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 dark:text-gray-100">Trustworthy</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Non-partisan information you can rely on</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-lg mr-3">
              <svg className="w-5 h-5 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 dark:text-gray-100">Educational</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Learning made simple and engaging</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-green-100 dark:bg-green-900 p-2 rounded-lg mr-3">
              <svg className="w-5 h-5 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 dark:text-gray-100">Community Driven</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Built by and for engaged citizens</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-yellow-100 dark:bg-yellow-900 p-2 rounded-lg mr-3">
              <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 dark:text-gray-100">Action Oriented</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">From knowledge to meaningful participation</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 