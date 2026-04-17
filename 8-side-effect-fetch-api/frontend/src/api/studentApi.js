const API_URL = import.meta.env.VITE_API_URL

export const fetchStudents = async () => {
  const res = await fetch(`${API_URL}/students`)

  if (!res.ok) {
    throw new Error("Failed to fetch students")
  }

  return res.json()
}