import { Request, Response } from "express"
import { fetchAllUser } from "../Models/userModel"

export async function getAllUser(req: Request, res: Response){
    try {
        let [rows, field] = await fetchAllUser();
        res.json(rows);
    } catch (error) {
        res.status(500).send(error)
    }
}