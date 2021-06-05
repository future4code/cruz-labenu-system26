import express, {Express, Router} from "express"
import {createClass} from "../../endpoints/classes/index"

const routerClasses: Router = express.Router()

routerClasses.post("/create", createClass)

export default routerClasses