const pool = require('../config/db');

const getAllCustomers = (callback) => {
    pool.query('SELECT * FROM customers', callback);
};

const getCustomerById = (id, callback) => {
    pool.query('SELECT * FROM customers WHERE id = ?', [id], callback);
};

const createCustomer = (customer, callback) => {
    pool.query('INSERT INTO customers SET ?', customer, callback);
};

const updateCustomer = (id, customer, callback) => {
    pool.query('UPDATE customers SET ? WHERE id = ?', [customer, id], callback);
};

const deleteCustomer = (id, callback) => {
    pool.query('DELETE FROM customers WHERE id = ?', [id], callback);
};

module.exports = {
    getAllCustomers,
    getCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer
};
