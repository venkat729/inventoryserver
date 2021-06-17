var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'inventory'
})
connection.connect()

module.exports = connection