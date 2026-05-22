import { useState, useEffect } from "react";
import { getStudents } from "../api/studentApi";

export function useStudents() {
  const [allStudents, setAllStudents] = useState([]);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function loadStudents() {
    setLoading(true);
    try {
      const data = await getStudents();
      setAllStudents(data);
      setStudents(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function search(query) {
    if (!query) {
      setStudents(allStudents);
      return;
    }

    const filtered = allStudents.filter((s) =>
      s.name.toLowerCase().includes(query.toLowerCase()),
    );
    setStudents(filtered);
  }

  useEffect(() => {
    loadStudents();
  }, []);

  return {
    students,
    loading,
    error,
    search,
  };
}
