const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.set('view engine', 'ejs');

const clientesRouter = require('./controllers/clientController');
app.use('/', clientesRouter);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
