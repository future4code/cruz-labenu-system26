import {Request, Response} from "express"

export default async function changeTeacherClass (
    req: Request,
    res: Response
) {
    try {
        res.send("implementar changeTeacherClass")
    } catch (error) {
        res.status(500).send("erro em implementar changeTeacherClass")
    }
}