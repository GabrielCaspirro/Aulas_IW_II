// models/clienteModel.js
const db = require('../config');

// Obtém todos os clientes
const getClients = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM clientes', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};

// Adiciona um novo cliente
const addClient = (client) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO clientes SET ?', client, (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

// Obtém um cliente por ID
const getClientById = (id) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM clientes WHERE id = ?', [id], (err, rows) => {
            if (err) reject(err);
            resolve(rows[0]);
        });
    });
};

// Atualiza um cliente
const updateClient = (id, client) => {
    return new Promise((resolve, reject) => {
        db.query('UPDATE clientes SET ? WHERE id = ?', [client, id], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

// Deleta um cliente
const deleteClient = (id) => {
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM clientes WHERE id = ?', [id], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

module.exports = {
    getClients,
    addClient,
    getClientById,
    updateClient,
    deleteClient
};
