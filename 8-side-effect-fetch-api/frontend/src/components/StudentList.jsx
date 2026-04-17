export default function StudentList({ students }) {
  return (
    <div className="grid gap-3">

      {students.map((student) => (
        <div
          key={student.id}
          className="p-4 border rounded"
        >
          <h2 className="font-semibold">
            {student.name}
          </h2>

          <p className="text-sm text-gray-600">
            {student.major}
          </p>

          <p className="text-sm">
            Year {student.year}
          </p>
        </div>
      ))}

    </div>
  )
}