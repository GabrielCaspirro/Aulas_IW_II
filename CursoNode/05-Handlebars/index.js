const express = require('express');
const Sequelize = require('sequelize');
const app = express();
const hand = require('express-handlebars');

//Template Engine
app.engine('handlebars', hand.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Conexão Banco de Dados
const sequelize = new Sequelize('test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

//Rotas
app.get('/cadastro', (req, res) => {
    res.render('formulario');
});

app.post('/add', (req, res) => {
    res.send("Formulário recebido");
});


app.listen(8081, function(){
    console.log("SERVIDOR ON http://localhost:8081");
});


