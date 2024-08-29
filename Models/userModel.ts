import db from "../Config/db"

export interface User {
    id: number
    name: string
    age: number
    image: string
}

export function fetchAllUser(): Promise<any> {  
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM users`;
        db.query(sql, (err:any, results:any) => {
            if (err) {
                reject(err); 
            } else {
                resolve(results);  
            }
        });
    });
}