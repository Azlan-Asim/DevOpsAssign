import { User } from "@/db";

export default async function UsersPage() {
  const res = await fetch("http://localhost:3000/api/users", { cache: "no-store" });
  const users: User[] = await res.json();

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 text-gray-900 p-6">
      <h1 className="text-3xl font-bold mb-6">Users List</h1>
      <ul className="w-full max-w-md bg-white shadow rounded divide-y divide-gray-200">
        {users.map(u => (
          <li key={u.id} className="p-4 hover:bg-gray-50 transition">{u.name}</li>
        ))}
      </ul>
    </div>
  );
}
