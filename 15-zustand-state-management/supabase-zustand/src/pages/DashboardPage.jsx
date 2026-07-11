import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useStudents } from "../hooks/useStudents";
import { useCreateStudent } from "../hooks/useCreateStudent";
import { useUpdateStudent } from "../hooks/useUpdateStudent";
import StudentsTable from "../components/StudentsTable";
import StudentForm from "../components/StudentForm";
import UserInfo from "../components/UserInfo";

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { data: students, isLoading, error } = useStudents();

  const createMutation = useCreateStudent();
  const updateMutation = useUpdateStudent();

  // jika null = form tersembunyi
  // jika {} = mode create (form kosong)
  // jika { id, name, ... } = mode edit (form pre-filled)
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const handleSubmit = (formData) => {
    if (selectedStudent?.id) {
      // Mode edit
      updateMutation.mutate(
        { id: selectedStudent.id, ...formData },
        { onSuccess: () => setSelectedStudent(null) },
      );
    } else {
      // Mode create
      createMutation.mutate(
        { ...formData, year: Number(formData.year) },
        { onSuccess: () => setSelectedStudent(null) },
      );
    }
  };

  const isFormLoading = createMutation.isPending || updateMutation.isPending;

  return (
    <div className="min-h-screen px-4 py-8 bg-zinc-950">
      <div className="max-w-2xl mx-auto">
        {/* Navbar */}
        <div className="flex items-center justify-between mb-10">
          <span className="text-xl font-bold text-white font-display">
            auth<span className="text-indigo-500">.</span>app
          </span>
          <button
            onClick={handleLogout}
            className="text-sm font-medium transition-colors text-zinc-400 hover:text-rose-400"
          >
            Sign out
          </button>
        </div>

        <UserInfo user={user} />

        {/* Tombol Add Student */}
        {!selectedStudent && (
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setSelectedStudent({})}
              className="px-4 py-2 text-xs font-semibold text-white transition-colors bg-indigo-500 hover:bg-indigo-600 rounded-xl"
            >
              + Add Student
            </button>
          </div>
        )}

        {/* Form — muncul kalau selectedStudent bukan null */}
        {selectedStudent !== null && (
          <StudentForm
            initial={selectedStudent?.id ? selectedStudent : null}
            onSubmit={handleSubmit}
            onCancel={() => setSelectedStudent(null)}
            isLoading={isFormLoading}
          />
        )}

        <StudentsTable
          students={students}
          isLoading={isLoading}
          error={error}
          onEdit={(student) => setSelectedStudent(student)}
        />
      </div>
    </div>
  );
}
