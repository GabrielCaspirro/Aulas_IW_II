const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// Definindo as rotas
router.get('/', customerController.listCustomers);
router.get('/create', customerController.createCustomerForm);
router.post('/create', customerController.createCustomer);
router.get('/:id', customerController.showCustomer);
router.get('/:id/edit', customerController.editCustomerForm);
router.post('/:id/edit', customerController.editCustomer);
router.post('/:id/delete', customerController.deleteCustomer);

module.exports = router;
