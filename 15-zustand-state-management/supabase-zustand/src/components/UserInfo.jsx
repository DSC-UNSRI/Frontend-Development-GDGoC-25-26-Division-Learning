export default function UserInfo({ user }) {
  return (
    <div className="flex items-center gap-3 p-4 mb-6 border bg-zinc-900 border-zinc-800 rounded-2xl">
      <div className="flex items-center justify-center font-bold text-indigo-400 border rounded-lg w-9 h-9 bg-indigo-500/20 border-indigo-500/30">
        {user?.email?.[0].toUpperCase()}
      </div>
      <div>
        <p className="text-sm font-medium text-white">{user?.email}</p>
        <p className="text-xs text-green-400">● Authenticated</p>
      </div>
    </div>
  );
}
