import { Request, Response } from "express"
import connection from "../../connection"

export default async function createClass(
    req: Request,
    res: Response
): Promise<void> {
    try {

        const { nome, data_inicio, data_final, modulo } = req.body

        console.log(req.headers["content-type"])

        await connection("class")
            .insert({ nome, data_inicio, data_final, modulo })

        res.status(201).end()

    } catch (error) {
        res.status(500).send("erro em implementar CreateClass")
    }
}