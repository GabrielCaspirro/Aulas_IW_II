// controllers/clientesController.js
const express = require('express');
const router = express.Router();
const clientModel = require('../models/clientModel');

// Rota inicial - Lista de clientes
router.get('/', async (req, res) => {
    try {
        const clients = await clientModel.getClients();
        res.render('index', { clients });
    } catch (err) {
        res.render('error', { error: err });
    }
});

// Rota para adicionar cliente (GET)
router.get('/add', (req, res) => {
    res.render('add');
});

// Rota para adicionar cliente (POST)
router.post('/add', async (req, res) => {
    try {
        await clientModel.addClient(req.body);
        res.redirect('/');
    } catch (err) {
        res.render('error', { error: err });
    }
});

// Rota para editar cliente (GET)
router.get('/edit/:id', async (req, res) => {
    try {
        const client = await clientModel.getClientById(req.params.id);
        res.render('edit', { client });
    } catch (err) {
        res.render('error', { error: err });
    }
});

// Rota para editar cliente (POST)
router.post('/edit/:id', async (req, res) => {
    try {
        await clientModel.updateClient(req.params.id, req.body);
        res.redirect('/');
    } catch (err) {
        res.render('error', { error: err });
    }
});

// Rota para deletar cliente
router.get('/delete/:id', async (req, res) => {
    try {
        await clientModel.deleteClient(req.params.id);
        res.redirect('/');
    } catch (err) {
        res.render('error', { error: err });
    }
});

module.exports = router;
