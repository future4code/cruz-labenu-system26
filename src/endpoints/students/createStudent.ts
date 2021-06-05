import {Request, Response} from "express"

export default async function createStudent (
    req: Request,
    res: Response
) {
    try {
        res.send("implementar CreateStudent")
    } catch (error) {
        res.status(500).send("erro em implementar CreateStudent")
    }
}