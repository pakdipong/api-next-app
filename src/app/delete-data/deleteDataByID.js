'use server'

import mysql from 'mysql2'

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

export async function deleteForm(fromData) {
    const id = fromData.get('id')

    const sql1 = 'SELECT * FROM footballers WHERE id = ?'
    const sql2 = 'DELETE FROM footballers WHERE id = ?'
    connection.query(sql1, [id], (error, result) => {
        if (result.length === 0) {
            console.log('Not Found')
        } else {
            connection.query(sql2, [id], (error, result) => {
                if (error) {
                   console.error(error)
                } else {
                    console.log('Deleted successfully')
                }
            })
        }
    });
}