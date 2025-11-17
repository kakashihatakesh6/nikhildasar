'use client';
import Link from 'next/link';

export default function NotFound() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="text-2xl mt-4">Page Not Found</h2>
      <p className="text-gray-400 mt-2">The page you're looking for doesn't exist.</p>
      <Link href="/" className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
        Go back home
      </Link>
    </div>
  );
}
