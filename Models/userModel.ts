import db from "../Config/db"

export interface User {
    id?: number
    name: string
    age: number
    image: string
}

export function read() {  
    const sql = `SELECT * FROM users`
    return db.query(sql)
}

export async function create(user: User): Promise<void> {
    const sql = `INSERT INTO users (name, age, image) VALUES (?, ?, ?)`
    await db.query(sql, [user.name, user.age, user.image])
}