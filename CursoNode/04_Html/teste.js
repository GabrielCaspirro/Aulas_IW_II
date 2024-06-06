const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

/*sequelize.authenticate().then(() => {
    console.log("Conectado com sucesso!");
}).catch((erro) => {
    console.log("Erro: " + erro);
});*/

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

const Usuario = sequelize.define('usuario', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    }
});

//Postagem.sync(force=true);
//Usuario.sync(force=true);

Postagem.create({
    titulo: 'PRIMEIRA POSTAGEM',
    conteudo: 'Essa é a minha primeira postagem'
});


