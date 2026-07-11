import { useDeleteStudent } from "../hooks/useDeleteStudent";
import { useFilterStore } from "../stores/useFilterStore";

export default function StudentsTable({ students, isLoading, error, onEdit }) {
  const deleteMutation = useDeleteStudent();
  const search = useFilterStore((state) => state.search);
  const setSearch = useFilterStore((state) => state.setSearch);

  return (
    <div className="overflow-hidden rounded-2xl border bg-zinc-900 border-zinc-800">
      <div className="px-5 py-4 space-y-3 border-b border-zinc-800">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-semibold text-white">Students</h2>
          </div>
        </div>

        {/* Search input — state dikelola Zustand */}
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name..."
          className="px-3 py-2 w-full text-sm text-white rounded-xl border transition-colors bg-zinc-800 border-zinc-700 placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
        />
      </div>

      {isLoading && (
        <div className="flex justify-center items-center py-16">
          <div className="w-6 h-6 rounded-full border-2 border-indigo-500 animate-spin border-t-transparent" />
        </div>
      )}

      {error && (
        <div className="px-5 py-4 text-sm text-rose-400">
          Gagal memuat data: {error.message}
        </div>
      )}

      {students && students.length === 0 && (
        <div className="px-5 py-10 text-sm text-center text-zinc-500">
          No students found{search ? ` for "${search}"` : ""}.
        </div>
      )}

      {students && students.length > 0 && (
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
              <th className="px-5 py-3" />
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
                <td className="px-5 py-3">
                  <div className="flex gap-2 justify-end items-center">
                    <button
                      onClick={() => onEdit(student)}
                      className="text-xs font-medium transition-colors text-zinc-400 hover:text-indigo-400"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteMutation.mutate(student.id)}
                      disabled={deleteMutation.isPending}
                      className="text-xs font-medium transition-colors text-zinc-400 hover:text-rose-400 disabled:opacity-50"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
