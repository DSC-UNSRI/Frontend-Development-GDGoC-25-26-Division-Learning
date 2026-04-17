import express from "express"
import { getStudents, getStudentById, searchStudents } from "../controllers/studentController.js"

const router = express.Router()

router.get("/students", getStudents)
router.get("/students/:id", getStudentById)
router.get("/search/:query", searchStudents)

export default router