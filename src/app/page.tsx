import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900">
      <h1 className="text-4xl font-bold mb-6">Home Page</h1>
      <Link
        href="/users"
        className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        View Users
      </Link>
    </div>
  );
}
