import React from "react";

export default function TestPage() {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-blue-700">Tailwind Test Page</h1>
        <p className="mt-4 text-gray-600">This is a test page to see if Tailwind CSS is working correctly.</p>
        <div className="mt-6 flex space-x-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button 1
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Button 2
          </button>
        </div>
      </div>
    </div>
  );
} 