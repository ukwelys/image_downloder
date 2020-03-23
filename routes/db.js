var mysql = require('mysql');
connection = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ukwelys_'
}
var conn = mysql.createConnection(connection)
conn.connect()

module.exports = conn;