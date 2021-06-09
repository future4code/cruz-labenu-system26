import { Request, Response } from "express"
import connection from "../../connection"

export default async function changeTeacherClass(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const id = req.params.id
        const { classname } = req.body

        console.log(req.headers["content-type"])

        await connection("teacher")
            .update({ class_id: classname }).where({ id })

        res.status(201).end()

    } catch (error) {
        res.status(500).send("erro em implementar CreateClass")
    }
}