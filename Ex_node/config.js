// config.js
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',  
    database: 'cadastro_clientes'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao MySQL!');
});

module.exports = connection;
