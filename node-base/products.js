const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'yangjie@0060',
    database: 'test_sql1'
})

const statement = `INSERT INTO products2 SET ?`
const phoneJson = require('./phone.json')

for(let phone of phoneJson) {
    connection.query(statement, phone)
}