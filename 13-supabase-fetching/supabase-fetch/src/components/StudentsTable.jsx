export default function StudentsTable({ students, isLoading, error }) {
  return (
    <div className="overflow-hidden border bg-zinc-900 border-zinc-800 rounded-2xl">
      <div className="px-5 py-4 border-b border-zinc-800">
        <h2 className="font-semibold text-white">Students</h2>
      </div>

      {/* Loading state */}
      {isLoading && (
        <div className="flex items-center justify-center py-16">
          <div className="w-6 h-6 border-2 border-indigo-500 rounded-full border-t-transparent animate-spin" />
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="px-5 py-4 text-sm text-rose-400">
          Failed to load students: {error.message}
        </div>
      )}

      {/* Data */}
      {students && (
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-800">
              <th className="px-5 py-3 text-xs font-medium tracking-wider text-left uppercase text-zinc-400">
                Name
              </th>
              <th className="px-5 py-3 text-xs font-medium tracking-wider text-left uppercase text-zinc-400">
                Major
              </th>
              <th className="px-5 py-3 text-xs font-medium tracking-wider text-left uppercase text-zinc-400">
                Year
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr
                key={student.id}
                className="border-b border-zinc-800/50 last:border-0"
              >
                <td className="px-5 py-3 font-medium text-zinc-100">
                  {student.name}
                </td>
                <td className="px-5 py-3 text-zinc-400">{student.major}</td>
                <td className="px-5 py-3 text-zinc-400">{student.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
