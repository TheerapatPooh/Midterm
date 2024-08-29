import { Request, Response } from "express"
import { read, create, User } from "../Models/userModel"

export async function getAllUser(req: Request, res: Response){
    try {
        let [rows, field] = await read();
        res.json(rows);
    } catch (error) {
        res.status(500).send(error)
    }
}

export async function createUser(req: Request, res: Response){
    try {
        const { name, age } = req.body
        const image = req.file?.filename || ''
        const newUser: User = {
            name,
            age,
            image
        }
       const result = await create(newUser)
        res.status(201).json({message: 'User created successfully', result});
    } catch (error) {
        res.status(500).send(error)
    }
}