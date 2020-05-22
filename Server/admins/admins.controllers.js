const express = require('express');
const router = express.Router();
const adminService = require('./admin.service');
const config = require('../config.json');
const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, config.accessTokenSecret, (err, admin) => {

            if (err) {
                return res.sendStatus(403);
            }

            req.admin = admin;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};



router.post('/login', login);
router.post('/refreshtoken', refreshtoken);
router.post('/logout', logout); 

//router.post('/register', register);
//router.get('/', getAll);
//router.put('/:id', update);
//router.delete('/:id', _delete);


router.get('/solutions', authenticateJWT, getSolutions);
router.get('/solutions/:id', authenticateJWT, getSolution); 
router.post('/solutions',authenticateJWT,create_solution);
router.delete('/solutions/:id',authenticateJWT,delete_solution);
router.put('/solutions/:id',authenticateJWT,update_solution);



router.get('/products',authenticateJWT,getProducts);
router.get('/products/:id',authenticateJWT,getProduct);
router.post('/products',authenticateJWT,createProduct);
router.delete('/products/:id',authenticateJWT,delete_product);
router.put('/products/:id',authenticateJWT,update_product);


module.exports = router;

function getSolutions(req, res, next) {
    adminService.getSolutions()
        .then(solutions => res.header({
            'Content-Range': "8"
            
        }).json(solutions))
        .catch(err => next(err));
}

function getSolution(req, res, next) {
    adminService.getSolution(req.params.id)
        .then(solution => solution ? res.json(solution) : res.sendStatus(404))
        .catch(err => next(err));
}

function login(req, res, next) {
    adminService.login(req.body.username, req.body.password)
        .then(admin => admin ? res.json(admin) : res.status(400).json({
            message: 'Username or password is incorrect'
        }))
        .catch(err => next(err));
}

function refreshtoken(req, res, next) {
    adminService.refreshtoken(req.body, res)

        .catch(err => next(err));
}

function logout(req, res, next) {
    adminService.logout(req.body, res)

        .catch(err => next(err));
}

function register(req, res, next) {
    adminService.create(req)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getById(req, res, next) {
    adminService.getById(req.params.id)
        .then(admin => admin ? res.json(admin) : res.sendStatus(404))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    adminService.getAll()
        .then(admin => res.json(admin))
        .catch(err => next(err));
}

function update(req, res, next) {
    adminService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    adminService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function create_solution(req, res, next) {
    adminService.create_solution(req)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function delete_solution(req, res, next) {
    adminService.delete_solution(req)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function update_solution(req, res, next) {
    adminService.update_solution(req)
        .then(() => res.json({}))
        .catch(err => next(err));
}   

function getProducts(req, res, next) {
   
    adminService.getProducts()
        .then( solutions => solutions? res.header({
            'Content-Range': "30"
            
        }).json(solutions[0].products) : res.sendStatus(404))
        .catch(err => next(err));
}


function getProduct(req, res, next) {
    adminService.getProduct(req.params.id)
        .then(product => product ? res.json(product[0].products) : res.sendStatus(404))
        .catch(err => next(err));
}  


function createProduct(req, res, next) {
    adminService.createProduct(req)
         .then(() => res.json({}))
        .catch(err => next(err));
}   





function delete_product(req, res, next) {
    adminService.delete_product(req)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function update_product(req, res, next) {
    adminService.update_product(req)
        .then(() => res.json({}))
        .catch(err => next(err));
}