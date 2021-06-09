import { Request, Response } from "express"
import connection from "../../connection"
import moment from 'moment'

export default async function getAgeStudent(
    req: Request,
    res: Response
) {
    try {
        const id = req.params.id

        let student = await connection("student").select("data_nasc", "nome").where({id})

        let nome = student[0].nome

        let data_nasc = moment(student[0].data_nasc)

        let ano_atual = moment()

        let idade = ano_atual.diff(data_nasc, "years")

        res.status(200).json({
            id,
            idade,
            nome,
        })
    } catch (error) {
        res.status(500).send("erro em implementar getAgeStudent")
    }
}