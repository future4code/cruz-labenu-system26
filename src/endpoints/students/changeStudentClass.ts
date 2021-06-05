import {Request, Response} from "express"

export default async function changeStudentClass (
    req: Request,
    res: Response
) {
    try {
        res.send("implementar changeStudentClass")
    } catch (error) {
        res.status(500).send("erro em implementar changeStudentClass")
    }
}