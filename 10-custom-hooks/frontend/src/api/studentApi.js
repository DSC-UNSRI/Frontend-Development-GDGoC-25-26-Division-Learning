const API_URL = import.meta.env.VITE_API_URL;

// Fetch all students
export const getStudents = async () => {
  const res = await fetch(`${API_URL}/students`);

  if (!res.ok) {
    throw new Error("Failed to fetch students");
  }

  return res.json();
};

// Fetch student by id
export const getStudentById = async (id) => {
  const res = await fetch(`${API_URL}/students/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch student");
  }

  return res.json();
};

//  Search students by query
export const searchStudents = async (query) => {
  const res = await fetch(`${API_URL}/search/${query}`);

  if (!res.ok) {
    throw new Error("Failed to search students");
  }

  return res.json();
};
