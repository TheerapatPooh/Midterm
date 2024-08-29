import db from "../Config/db"
import { RowDataPacket } from 'mysql2';


export interface User {
    id?: number
    name: string
    age: number
    image: string
}

export async function list() {  
    const sql = `SELECT * FROM users`
    const [rows] = await db.query(sql)
    return rows
}

export async function read(id: number): Promise<RowDataPacket[]> {
    const sql = `SELECT * FROM users WHERE id = ?`;
    const [rows] = await db.query<RowDataPacket[]>(sql, [id]);
    return rows; 
}

export async function create(user: User): Promise<void> {
    const sql = `INSERT INTO users (name, age, image) VALUES (?, ?, ?)`
    await db.query(sql, [user.name, user.age, user.image])
}

export async function update(id: number, user: Partial<User>): Promise<void> {
    const sql = `UPDATE users SET name = ?, age = ?, image = ? WHERE id = ?`
    await db.query(sql, [user.name, user.age, user.image, id])
}

export async function remove(id: number): Promise<void> {
    const sql = `DELETE FROM users WHERE id = ?`
    await db.query(sql, [id]);
}

