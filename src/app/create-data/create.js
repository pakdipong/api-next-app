'use server'

import mysql from 'mysql2'

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

export async function createForm(fromData){
    const name = fromData.get('name')
    const position = fromData.get('position')
    const club = fromData.get('club')
    const country = fromData.get('country')
    
    const sql = 'INSERT INTO footballers (name, position, club, country) VALUES (?, ?, ?, ?)'
    connection.query(sql, [name, position, club, country], (error, result) => {
        if (error) {
            console.error(error)
        } else {
            console.log('Created successfully')
        }
    })
}