const express = require('express');

const productController = require("../controllers/product");

const router = express.Router();

router.post('/', productController.postProduct);

router.post('/insert-many', productController.insertManyProduct);

router.get('/', productController.getProduct);


router.get('/:id', productController.getProductById);

router.get('/by-featured-product/:featured', productController.getProductByFeatured);

router.get('/by-top-rated/:toprated', productController.getProductByTopRated);

router.get('/by-special-offer/:specialoffer', productController.getProductBySpecialOffer);

router.get('/by-best-seller/:bestseller', productController.getProductByBestSeller);

module.exports = router;