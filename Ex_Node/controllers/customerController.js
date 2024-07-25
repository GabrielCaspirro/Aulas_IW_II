const Customer = require('../models/customer');

const listCustomers = (req, res) => {
    Customer.getAllCustomers((err, results) => {
        if (err) throw err;
        res.render('index', { customers: results });
    });
};

const createCustomerForm = (req, res) => {
    res.render('create');
};

const createCustomer = (req, res) => {
    const newCustomer = req.body;
    Customer.addCustomer(newCustomer, (err) => {
        if (err) throw err;
        res.redirect('/');
    });
};

const showCustomer = (req, res) => {
    const customerId = req.params.id;
    Customer.getCustomerById(customerId, (err, result) => {
        if (err) throw err;
        res.render('show', { customer: result });
    });
};

const editCustomerForm = (req, res) => {
    const customerId = req.params.id;
    Customer.getCustomerById(customerId, (err, result) => {
        if (err) throw err;
        res.render('edit', { customer: result });
    });
};

const editCustomer = (req, res) => {
    const customerId = req.params.id;
    const updatedCustomer = req.body;
    Customer.updateCustomer(customerId, updatedCustomer, (err) => {
        if (err) throw err;
        res.redirect('/');
    });
};

const deleteCustomer = (req, res) => {
    const customerId = req.params.id;
    Customer.deleteCustomer(customerId, (err) => {
        if (err) throw err;
        res.redirect('/');
    });
};

module.exports = {
    listCustomers,
    createCustomerForm,
    createCustomer,
    showCustomer,
    editCustomerForm,
    editCustomer,
    deleteCustomer
};
