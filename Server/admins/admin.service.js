const config = require('../config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../helpers/db');
const Admin = db.Admin;
const Solution = db.Solution;

module.exports = {
    authenticate,
    create,
    getById,
    getAll,
    update,
    delete: _delete,

    create_solution,
    delete_solution,
    update_solution,

    create_product

};

async function authenticate({ username, password }) {
    const admin = await Admin.findOne({ username });
    if (admin && bcrypt.compareSync(password, admin.hash)) {
        const { hash, ...adminWithoutHash } = admin.toObject();
        const token = jwt.sign({ sub: admin.id }, config.secret);
        return {
            ...adminWithoutHash,
            token
        };
    }
}

async function getById(id) {
    return await Admin.findById(id).select('-hash');
}


async function getAll() {
    return await Admin.find().select('-hash');
}

async function create(adminParam) {
    // validate
    if (await Admin.findOne({ username: adminParam.username })) {
        throw 'Username "' + adminParam.username + '" is already taken';
    }

    const admin = new Admin(adminParam);

    // hash password
    if (adminParam.password) {
        admin.hash = bcrypt.hashSync(adminParam.password, 10);
    }

    // save admin
    await admin.save();
}

async function update(id, adminParam) {
    const admin = await Admin.findById(id);

    // validate
    if (!admin) throw 'Admin not found';
    if (admin.username !== adminParam.username && await Admin.findOne({ username: adminParam.username })) {
        throw 'Username "' + adminParam.username + '" is already taken';
    }

    // hash password if it was entered
    if (adminParam.password) {
        adminParam.hash = bcrypt.hashSync(adminParam.password, 10);
    }

    // copy adminParam properties to admin
    Object.assign(admin, adminParam);

    await admin.save();
}

async function _delete(id) {
    await Admin.findByIdAndRemove(id);
}


async function create_solution(adminParam) {
    
    if (await Solution.findOne({ title: adminParam.title })) {
        throw 'Solution "' + adminParam.username + '" is already exists';
    }

    const admin = new Solution(adminParam);
    await admin.save();
}


async function delete_solution(adminParam) {
    
    const solution = await Solution.findOne({ title: adminParam.title})
        
    if (!solution) {
        throw 'Solution "' + adminParam.title + '" does not exist ';
    } 

    await solution.delete();
}



async function update_solution(adminParam) {
    
    const solution = await Solution.findOne({ title: adminParam.title})
    
    if (!solution) {
        throw 'Solution "' + adminParam.title + '" does not exist ';
    } 

    if (typeof(adminParam.new_image) !== 'undefined'){var newsolution = {title :adminParam.new_title,image:adminParam.new_image}}
    else{var newsolution = {title :adminParam.new_title,image:solution.image}}
   
   
    Object.assign(solution,newsolution);

    await solution.save();
}

async function create_product(adminParam) {
    
    
}