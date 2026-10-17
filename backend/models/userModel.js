import db from "../config/db.js"

export async function createUser(name,email,password) {
    const [result]=await db.execute(`insert into users(name,email,password) values(?,?,?)`,[name,email,password])
    return result;
}

export async function findUserByEmail(email) {
    const[row]=await db.execute(`select * from users where email=?`,[email])
    return row[0]
}