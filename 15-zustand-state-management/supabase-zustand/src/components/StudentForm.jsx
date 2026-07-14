import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { studentSchema } from "../schemas/studentSchema";

export default function StudentForm({ initial, onSubmit, onCancel, isLoading }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(studentSchema),
    defaultValues: { name: "", major: "", year: "" },
  });

  // Jika mode edit, isi form dengan data student yang dipilih
  useEffect(() => {
    if (initial?.id) {
      reset({ name: initial.name, major: initial.major, year: initial.year });
    } else {
      reset({ name: "", major: "", year: "" });
    }
  }, [initial, reset]);

  return (
    <div className="p-5 mb-6 space-y-4 border bg-zinc-900 border-zinc-800 rounded-2xl">
      <h3 className="text-sm font-semibold text-white">
        {initial?.id ? "Edit Student" : "Add New Student"}
      </h3>

      <div className="grid grid-cols-3 gap-3">
        {/* Name */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-zinc-400">Name</label>
          <input
            {...register("name")}
            placeholder="Student name"
            className="w-full px-3 py-2 text-sm text-white transition-colors border bg-zinc-800 border-zinc-700 placeholder-zinc-500 rounded-xl focus:outline-none focus:border-indigo-500"
          />
          {errors.name && (
            <p className="text-xs text-rose-400">{errors.name.message}</p>
          )}
        </div>

        {/* Major */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-zinc-400">Major</label>
          <input
            {...register("major")}
            placeholder="e.g. Informatics"
            className="w-full px-3 py-2 text-sm text-white transition-colors border bg-zinc-800 border-zinc-700 placeholder-zinc-500 rounded-xl focus:outline-none focus:border-indigo-500"
          />
          {errors.major && (
            <p className="text-xs text-rose-400">{errors.major.message}</p>
          )}
        </div>

        {/* Year */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-zinc-400">Year</label>
          <input
            {...register("year")}
            type="number"
            placeholder="e.g. 2023"
            className="w-full px-3 py-2 text-sm text-white transition-colors border bg-zinc-800 border-zinc-700 placeholder-zinc-500 rounded-xl focus:outline-none focus:border-indigo-500"
          />
          {errors.year && (
            <p className="text-xs text-rose-400">{errors.year.message}</p>
          )}
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-xs font-medium transition-colors text-zinc-400 hover:text-white"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleSubmit(onSubmit)}
          disabled={isLoading}
          className="px-4 py-2 text-xs font-semibold text-white transition-colors bg-indigo-500 hover:bg-indigo-600 disabled:opacity-50 rounded-xl"
        >
          {isLoading ? "Saving..." : initial?.id ? "Update" : "Add Student"}
        </button>
      </div>
    </div>
  );
}