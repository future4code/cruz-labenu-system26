import express, {Express} from "express"
import cors from "cors"
import routerClasses from "./routes/classes/index"
import routerStudents from "./routes/students"
import routerTeachers from "./routes/teachers"

const app: Express = express()

app.use(express.json())
app.use(cors())
app.use("/classes", routerClasses)
app.use("/students", routerStudents)
app.use("/teacher", routerTeachers)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app