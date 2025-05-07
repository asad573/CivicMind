import React from "react";
import Link from "next/link"

export default function VolunteerPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">Get Involved</h1>
      <p className="text-xl mb-8">
        Find volunteer opportunities from certified organizations.
      </p>
      <div className="w-full max-w-4xl">
        <div className="bg-card rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Volunteer Opportunities</h2>
          <p className="mb-6">
            We're working on partnerships with verified civic organizations to provide meaningful volunteer opportunities. Check back soon for listings!
          </p>
          <div className="border-t border-border pt-4 mt-4">
            <h3 className="text-lg font-medium mb-2">Interested in posting opportunities?</h3>
            <p>
              If you represent an organization that would like to post volunteer opportunities on CivicMind, please contact us at info@civicmind.org.
            </p>
          </div>
        </div>
        
        <div className="bg-card rounded-lg shadow-md p-6 mt-8">
          <h2 className="text-2xl font-semibold mb-4">Ways to Get Involved Now</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="bg-primary/10 text-primary p-1 rounded mr-3 mt-1">•</span>
              <div>
                <h4 className="font-medium">Register to vote</h4>
                <p className="text-sm text-muted-foreground">Ensure your voice is heard by registering to vote in your local elections.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-primary/10 text-primary p-1 rounded mr-3 mt-1">•</span>
              <div>
                <h4 className="font-medium">Attend town halls</h4>
                <p className="text-sm text-muted-foreground">Participate in local government by attending town hall meetings in your community.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-primary/10 text-primary p-1 rounded mr-3 mt-1">•</span>
              <div>
                <h4 className="font-medium">Contact representatives</h4>
                <p className="text-sm text-muted-foreground">Reach out to your elected officials about issues that matter to you.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Link
        href="/"
        className="mt-12 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90"
      >
        Back to Home
      </Link>
    </main>
  )
} 