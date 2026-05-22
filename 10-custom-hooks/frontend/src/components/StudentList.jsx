export default function StudentList({ students }) {
  return (
    <div className="space-y-2">
      {students.map((student) => (
        <div key={student.id} className="border p-3 rounded">
          <h3 className="font-bold">{student.name}</h3>

          <p>{student.major}</p>
          <p>Year: {student.year}</p>
        </div>
      ))}
    </div>
  );
}
