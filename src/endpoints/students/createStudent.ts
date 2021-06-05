import { Request, Response } from "express"
import connection from "../../connection"

export default async function createStudent(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const { class_id, nome, email, data_nasc } = req.body

        console.log(req.headers["content-type"])

        await connection("student")
            .insert({ class_id, nome, email, data_nasc })

        res.status(201).end()

    } catch (error) {
        res.status(500).send()
    }
}