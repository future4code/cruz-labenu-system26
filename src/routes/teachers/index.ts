import express, {Express, Router} from "express"
import {changeTeacherClass, createTeacher} from "../../endpoints/teachers/index"

const routerTeachers: Router = express.Router()

routerTeachers.put("/change-class/:id", changeTeacherClass)
routerTeachers.post("/create", createTeacher)

export default routerTeachers