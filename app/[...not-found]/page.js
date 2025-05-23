import Link from 'next/link';

export default function NotFoundCatchAll() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-extrabold text-red-400 mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-6">Sorry, the page you&rsquo;re looking for does not exist.</p>
      <Link href="/" className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow transition duration-200">
        Go Back to Homepage
      </Link>
    </div>
  );
}