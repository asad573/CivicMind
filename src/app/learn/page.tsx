import React from "react";
import Link from "next/link";

export default function LearnPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 bg-gray-100 dark:bg-gradient-to-b dark:from-gray-900 dark:to-purple-950">
      <div className="w-full max-w-5xl">
        <div className="mb-10 relative">
          <div className="absolute inset-0 bg-purple-200 dark:bg-purple-900 rounded-3xl opacity-20 blur-3xl"></div>
          <div className="relative z-10 text-center py-8">
            <h1 className="text-4xl font-bold text-purple-800 dark:text-purple-300 mb-4">
              Educational Modules
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Gamified modules to help you build confidence in your civic knowledge and voting process.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <Link href="/learn/government-101" className="block bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-purple-100 dark:border-purple-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="h-3 bg-purple-600"></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-full">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-purple-800 dark:text-purple-300 ml-4">Government 101</h2>
              </div>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                Learn about the three branches of government and how they work together to create and enforce laws.
              </p>
              <div className="flex justify-between items-center">
                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-purple-600 text-white dark:bg-purple-700 dark:text-white">
                  Start Learning
                </span>
                <span className="text-purple-600 dark:text-purple-400 text-sm font-medium">3 Modules</span>
              </div>
            </div>
          </Link>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-blue-100 dark:border-blue-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="h-3 bg-blue-600"></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-300 ml-4">How a Bill Becomes Law</h2>
              </div>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                Follow the journey of a bill from introduction to becoming a law, understanding each step of the legislative process.
              </p>
              <div className="flex justify-between items-center">
                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  Coming Soon
                </span>
                <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">5 Modules</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-green-100 dark:border-green-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="h-3 bg-green-600"></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-green-800 dark:text-green-300 ml-4">Voting Rights</h2>
              </div>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                Understand your voting rights and how to exercise them effectively in local, state, and federal elections.
              </p>
              <div className="flex justify-between items-center">
                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  Coming Soon
                </span>
                <span className="text-green-600 dark:text-green-400 text-sm font-medium">4 Modules</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-orange-100 dark:border-orange-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="h-3 bg-orange-600"></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-orange-100 dark:bg-orange-900 p-2 rounded-full">
                  <svg className="w-6 h-6 text-orange-600 dark:text-orange-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-orange-800 dark:text-orange-300 ml-4">Local Government</h2>
              </div>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                Discover how local government affects your daily life and how you can get involved in your community.
              </p>
              <div className="flex justify-between items-center">
                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                  Coming Soon
                </span>
                <span className="text-orange-600 dark:text-orange-400 text-sm font-medium">6 Modules</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-purple-100 dark:border-purple-800">
          <h2 className="text-2xl font-semibold text-purple-800 dark:text-purple-300 mb-4">Learning Pathway</h2>
          <div className="relative">
            <div className="absolute left-4 h-full w-1 bg-purple-200 dark:bg-purple-900"></div>
            <div className="space-y-6 relative z-10">
              <div className="flex">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">1</div>
                <div className="ml-4">
                  <h3 className="font-medium text-gray-800 dark:text-gray-100">Introduction to Civic Education</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Begin with core concepts that form our government</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">2</div>
                <div className="ml-4">
                  <h3 className="font-medium text-gray-800 dark:text-gray-100">Understanding Policy Making</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Learn how laws are created and implemented</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-400 flex items-center justify-center text-white font-bold">3</div>
                <div className="ml-4">
                  <h3 className="font-medium text-gray-800 dark:text-gray-100">Voting & Elections</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Master the electoral process and voting procedures</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-300 flex items-center justify-center text-white font-bold">4</div>
                <div className="ml-4">
                  <h3 className="font-medium text-gray-800 dark:text-gray-100">Advocacy & Civic Participation</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Discover effective ways to make your voice heard</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/"
            className="px-5 py-3 bg-purple-600 text-white font-medium rounded-lg shadow hover:bg-purple-700 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
} 