import { Request, Response } from "express"

export default async function getAgeStudent(
    req: Request,
    res: Response
) {
    try {
        res.send("implementar getAgeStudent")
    } catch (error) {
        res.status(500).send("erro em implementar getAgeStudent")
    }
}