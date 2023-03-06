const express = require('express');

const brandController = require("../controllers/brand.js")

const router = express.Router();

router.post('/', brandController.postBrand);

router.post('/insert-many', brandController.insertManyBrand);

router.get('/', brandController.getBrand);

module.exports = router;