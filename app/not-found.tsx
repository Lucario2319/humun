// app/not-found.tsx
import Link from "next/link";
import { Frown } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
      {/* Icon */}
      <Frown className="w-16 h-16 text-blue-600 mb-4" />

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
        Sorry, this page is not available at the moment
      </h1>

      {/* Subtitle */}
      <p className="mt-2 text-gray-600">
        The page you’re looking for doesn’t exist or may be under construction.
      </p>

      {/* Back to home */}
      <Link
        href="/"
        className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
}
