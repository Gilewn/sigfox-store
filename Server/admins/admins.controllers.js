const express = require('express');
const router = express.Router();
const adminService = require('./admin.service');
const config = require('../config.json');
const jwt = require('jsonwebtoken');
// routes


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

router.post('/register', register);
router.get('/', getAll);
router.put('/:id', update);
router.delete('/:id', _delete);


router.post('/CreateSolution',authenticateJWT,create_solution);
router.delete('/DeleteSolution/:solution_title',authenticateJWT,delete_solution);
router.put('/UpdateSolution/:solution_title',update_solution);

router.post('/CreateProduct',create_product);


module.exports = router;








function login(req, res, next) {
    adminService.login(req.body)
        .then(admin => admin? res.json(admin) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}


function refreshtoken(req, res, next) {
    adminService.refreshtoken(req.body,res)
       
        .catch(err => next(err));
}

function logout(req, res, next) {
    adminService.logout(req.body,res)
       
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
    adminService.create_solution(req.body)
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




function create_product(req, res, next) {
    adminService.create_product(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}
