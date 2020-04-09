const express = require('express');
const router = express.Router();
const  PartnerService = require('./partner.service');





router.post('/submit', create_partner);


module.exports = router;



function create_partner(req, res, next) {
    
    
    PartnerService.create_partner(req.body.user)
        .then(() => res.json({}))
        .catch(err => next(err));

    PartnerService.send_email(req.body.user.email)
}