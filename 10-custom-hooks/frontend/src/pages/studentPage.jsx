import { useStudents } from "../hooks/useStudents";

import StudentList from "../components/StudentList";
import SearchBar from "../components/SearchBar";

export default function StudentsPage() {
  const { students, loading, error, search } = useStudents();

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="space-y-4">
      <SearchBar onSearch={search} />

      {!students.length && <p>No students found</p>}
      <StudentList students={students} />
    </div>
  );
}
