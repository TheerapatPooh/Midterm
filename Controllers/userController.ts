import { Request, Response } from "express"
import { fetchAllUser } from "../Models/userModel"

export async function getAllUser(req: Request, res: Response){
    try {
        const users = await fetchAllUser()
        res.send(users)
    } catch (error) {
        res.status(500).send(error)
    }
}