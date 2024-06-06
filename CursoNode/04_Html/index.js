const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.sendFile(__dirname + "/paginas/index.html");
});

app.get('/blog', function(req, res){
    res.send('Me chama de carlos e me devolve o martelo, só que estamos na página do blog');
});

app.get('/sobre', function(req, res){
    res.sendFile(__dirname + "/paginas/sobre.html");
});

app.get('/cadastro', function(req, res){
    res.send('Cadastro: xxxxxxx');
});

app.get('/cadastro/:nome/:idade', function(req, res){
    res.send('Cadastro: ' + req.params.nome + " - Idade: " + req.params.idade);
});

app.listen(8081, function(){
    console.log("aiii papai, SERVIDOR TÁ ON http://localhost:8081");
});


