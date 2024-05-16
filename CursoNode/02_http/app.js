// Selecionar o módulo http do node
var http = require('http');

// Abrir um servidor http
http.createServer(function(req, res){
    res.end('<b>Oi 2C</b> Bem vindos ao servidor');
}).listen(8081);

console.log('Servidor rodando....');



