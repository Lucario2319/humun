"use client";

import { useState } from "react";

export default function RegisterPage() {
    const [selection, setSelection] = useState<"delegate" | "delegation" | null>(null);


  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Register</h1>

      {/* Buttons to choose role */}
      {!selection && (
        <div className="flex space-x-6">
          <button
            onClick={() => setSelection("delegate")}
            className="bg-gradient-to-r from-primary-800 to-primary-700 text-white px-6 py-3 rounded-lg font-medium hover:from-yellow-700 hover:to-yellow-900 transition-all transform hover:scale-105 hover:shadow-xl"
          >
            Register as Delegate
          </button>
          <button
            onClick={() => setSelection("delegation")}
            className="bg-gradient-to-r from-primary-800 to-primary-700 text-white px-6 py-3 rounded-lg font-medium hover:from-yellow-700 hover:to-yellow-900 transition-all transform hover:scale-105 hover:shadow-xl"
          >
            Register as Delegation
          </button>
        </div>
      )}

      {/* Show forms based on selection */}
      {selection === "delegate" && (
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSesKAwosxv3SX1iVEAjQrpB-q-XetF0MllBDluolj9RApKCXg/viewform?embedded=true"
          width="640"
          height="1812"
          className="rounded-lg shadow-lg"
        >
          Loading…
        </iframe>
      )}

      {selection === "delegation" && (
        <iframe
          src="https://forms.gle/DSncQ5Q43vNgHfKB6"
          width="640"
          height="1812"
          className="rounded-lg shadow-lg"
        >
          Loading…
        </iframe>
      )}

      {/* Back button */}
      {selection && (
        <button
          onClick={() => setSelection(null)}
          className="mt-6 text-sm text-gray-600 underline hover:text-gray-800"
        >
          ← Go back
        </button>
      )}
    </div>
  );
}
