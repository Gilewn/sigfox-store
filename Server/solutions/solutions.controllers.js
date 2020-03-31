const express = require('express');
const router = express.Router();
const solutionsService = require('./solutions.service');



router.get('/', getSolutions);
router.get('/products',getAllProducts);
router.get('/:solution/products',getProductsOfSolution);
router.get('/products/:id',getProduct);

module.exports = router;

function getSolutions(req, res, next) {
    solutionsService.getSolutions()
        .then(solutions=> res.json(solutions))
        .catch(err => next(err));
}




function getAllProducts(req, res, next) {
    solutionsService.getAllProducts()
        .then( solutions => solutions? res.json(solutions) : res.sendStatus(404))
        .catch(err => next(err));
}



function getProductsOfSolution(req, res, next) {
    solutionsService.getProductsOfSolution(req.params.solution)
        .then(solutions => solutions ? res.json(solutions.products) : res.sendStatus(404))
        .catch(err => next(err));
}



function getProduct(req, res, next) {
    solutionsService.getProduct(req.params.id)
        .then(product => product ? res.json(product) : res.sendStatus(404))
        .catch(err => next(err));
}