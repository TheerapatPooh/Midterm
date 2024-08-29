import { Request, Response } from "express"
import { list, read, create, User, update, remove } from "../Models/userModel"
import fs from 'fs';
import path from 'path'

export async function getAllUser(req: Request, res: Response) {
    try {
        const user = await list();
        res.send(user);
    } catch (error) {
        res.status(500).send(error)
    }
}

export async function getUser(req: Request, res: Response) {
    try {
        const id = parseInt(req.params.id)
        const user = await read(id)
        res.send(user);
    } catch (error) {
        res.status(500).send(error)
    }
}

export async function createUser(req: Request, res: Response) {
    try {
        const { name, age } = req.body
        const image = req.file?.filename || ''
        const newUser: User = {
            name,
            age,
            image
        }
        const result = await create(newUser)
        res.status(201).json({ message: 'User created successfully', result });
    } catch (error) {
        res.status(500).send(error)
    }
}


export async function updateUser(req: Request, res: Response) {
    try {
        const id = parseInt(req.params.id)
        const { name, age } = req.body;
        const image = req.file?.filename || ''

        const users: any[] = await read(id)
        const user = users[0]

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (image && user.image) {
            const oldImagePath = path.join(__dirname, '..', 'uploads', user.image)
            if (fs.existsSync(oldImagePath)) {
                fs.unlinkSync(oldImagePath)
            }
        }

        const updatedUser: Partial<User> = {
            name: name || user.name,
            age: age || user.age,
            image: image || user.image,
        };

        await update(id, updatedUser);
        res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
        res.status(500).send(error);
    }
}

export async function removeUser(req: Request, res: Response) {
    try {
        const id = parseInt(req.params.id)

        const users: any[] = await read(id)
        const user = users[0]

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (user.image) {
            const oldImagePath = path.join(__dirname, '..', 'uploads', user.image)
            if (fs.existsSync(oldImagePath)) {
                fs.unlinkSync(oldImagePath)
            }
        }

        await remove(id);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).send(error);
    }
}

