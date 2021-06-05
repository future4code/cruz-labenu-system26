import {Request, Response} from "express"

export default async function createClass (
    req: Request,
    res: Response
) {
    try {
        res.send("implementar CreateClass")
    } catch (error) {
        res.status(500).send("erro em implementar CreateClass")
    }
}