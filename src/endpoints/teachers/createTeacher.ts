import { Request, Response } from "express"
import connection from "../../connection"

export default async function createTeacher(
    req: Request,
    res: Response
) {
    try {
        const { class_id, nome, email, data_nasc } = req.body

        console.log(req.headers["content-type"])

        await connection("teacher")
            .insert({ class_id, nome, email, data_nasc })

        res.status(201).end()

    } catch (error) {
        res.status(500).send()
    }
}