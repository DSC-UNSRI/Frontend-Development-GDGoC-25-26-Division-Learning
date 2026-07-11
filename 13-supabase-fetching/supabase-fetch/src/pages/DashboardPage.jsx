import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useStudents } from "../hooks/useStudents";
import StudentsTable from "../components/StudentsTable";
import UserInfo from "../components/UserInfo";

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { data: students, isLoading, error } = useStudents();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

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

        {/* User info */}
        <UserInfo user={user} />

        {/* Students table */}
        <StudentsTable
          students={students}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </div>
  );
}
