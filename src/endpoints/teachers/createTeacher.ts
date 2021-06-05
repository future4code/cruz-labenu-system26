import {Request, Response} from "express"

export default async function createTeacher (
    req: Request,
    res: Response
) {
    try {
        res.send("implementar CreateTeacher")
    } catch (error) {
        res.status(500).send("erro em implementar CreateTeacher")
    }
}