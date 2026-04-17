import { db } from "../db.js";

// Get all students
export const getStudents = (req, res) => {
  const sql = "SELECT * FROM students";

  db.query(sql, (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result);
  });
};

// Get student by id
export const getStudentById = (req, res) => {
  const sql = "SELECT * FROM students WHERE id = ?";

  db.query(sql, [req.params.id], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result[0]);
  });
};

// Search students by name
export const searchStudents = (req, res) => {
  const sql = "SELECT * FROM students WHERE name LIKE ?";

  db.query(sql, [`%${req.params.query}%`], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result);
  });
};
