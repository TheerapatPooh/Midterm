import db from "../Config/db"

export interface User {
    id: number
    name: string
    age: number
    image: string
}

export function fetchAllUser() {  
    const sql = `SELECT * FROM users`;
    return db.query(sql)
}