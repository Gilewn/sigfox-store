const express = require('express');
const router = express.Router();
const adminService = require('./admin.service');

// routes

router.post('/authenticate', authenticate);
router.post('/register', register);
router.get('/', getAll);
router.put('/:id', update);
router.delete('/:id', _delete);


router.post('/CreateSolution',create_solution);
router.get('/DeleteSolution',delete_solution);
router.post('/UpdateSolution',update_solution);


router.post('/CreateProduct',create_product);


module.exports = router;

function authenticate(req, res, next) {
    adminService.authenticate(req.body)
        .then(admin => admin ? res.json(admin) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function register(req, res, next) {
    adminService.create(req.body)
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
    adminService.create_solution(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function delete_solution(req, res, next) {
    adminService.delete_solution(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}


function update_solution(req, res, next) {
    adminService.update_solution(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}



function create_product(req, res, next) {
    adminService.create_product(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}
