import express, {Express, Router} from "express"
import {changeStudentClass, createStudent, getAgeStudent} from "../../endpoints/students/index"

const routerStudents: Router = express.Router()

routerStudents.put("/change-class/:id", changeStudentClass)
routerStudents.post("/create", createStudent)
routerStudents.get("/age/:id", getAgeStudent)

export default routerStudents