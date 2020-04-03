const expressJwt = require('express-jwt');
const config = require('../config.json');
const adminService = require('../admins/admin.service');
const solutionsService = require('../admins/admin.service');

module.exports = jwt;

function jwt() {
    const secret = config.secret;
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/admins/authenticate',
            '/admins/register',       
        ]   
    });
}

async function isRevoked(req, payload, done) {
    const admin = await adminService.getById(payload.sub);
    
    // revoke token if user no longer exists
    if (!admin) {
        return done(null, true);
    }

    done();
};