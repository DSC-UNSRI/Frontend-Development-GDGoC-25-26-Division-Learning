import { useEffect, useState } from "react"

import StudentList from "../components/StudentList"
import { fetchStudents } from "../api/studentApi"

export default function StudentsPage() {

  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    document.title = `Students (${students.length})`
  }, [students])

  useEffect(() => {

    async function loadStudents() {
      try {
        const data = await fetchStudents()
        setStudents(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadStudents()

  }, [])

  if (loading) return <p>Loading students...</p>

  if (error) return <p>Error: {error}</p>

  return (
    <div className="space-y-4">
      <StudentList students={students} />
    </div>
  )
}