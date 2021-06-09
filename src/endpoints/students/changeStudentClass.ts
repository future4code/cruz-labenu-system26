import { Request, Response } from "express"
import connection from "../../connection"

export default async function changeStudentClass(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const id = req.params.id
        const { classname } = req.body

        console.log(req.headers["content-type"])

        await connection("student")
            .update({ class_id: classname }).where({ id })

        res.status(201).end()

    } catch (error) {
        res.status(500).send("erro em implementar CreateClass")
    }
}