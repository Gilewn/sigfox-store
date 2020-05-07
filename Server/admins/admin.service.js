const config = require('../config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../helpers/db');
const Admin = db.Admin;
const Solution = db.Solution;

module.exports = {
    authenticate,
    token,
    logout,
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
    const refreshTokens = [];
    const admin = await Admin.findOne({ username });
    if (admin && bcrypt.compareSync(password, admin.hash)) {
        const { hash, ...adminWithoutHash } = admin.toObject();
        const token = jwt.sign({ sub: admin.id }, config.secret,{ expiresIn: '1m' });
        const refreshToken = jwt.sign({ sub: admin.id }, config.refreshTokenSecret);
        refreshTokens.push(refreshToken);
        return {
           
            token,
            refreshToken
        };
    }
}


async function token(body) {
    const { token } = body;

    if (!token) {
        return res.sendStatus(401);
    }

    if (!refreshTokens.includes(token)) {
        return res.sendStatus(403);
    }

    jwt.verify(token, config.refreshTokenSecret, (err, admin) => {
        if (err) {
            return res.sendStatus(403);
        }
        const token = jwt.sign({ sub: admin.id }, config.secret,{ expiresIn: '1m' });
        return {
            ...adminWithoutHash,
            token,
           
        };
})

}

async function logout(body) {
    const { token } = body;
    refreshTokens = refreshTokens.filter(token => t !== token);
   return;
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


async function create_solution(solution) {
    
    if (await Solution.findOne({ title: solution.title })) {
        throw 'Solution "' + solution.title + '" is already exists';
    }

    const admin = new Solution(solution);
    await admin.save();
}


async function delete_solution(req) {
    
    const solution = await Solution.findOne({ title: req.params.solution_title})
   
    if (!solution) {
        throw 'Solution "' + req.paramas.solution_title + '" does not exist ';
    } 

    await solution.delete();
}


async function update_solution(req) {
    
    const solution = await Solution.findOne({ title: req.params.solution_title})
    
    if (!solution) {
        throw 'Solution "' + req.paramas.solution_title + '" does not exist ';
    }
    
  
    if (typeof(req.body.new_image) == 'undefined' && typeof(req.body.new_title) == 'undefined'){var newsolution = {title :solution.title,image:solution.image}}
    else if (typeof(req.body.new_image) == 'undefined'){var newsolution = {title :req.body.new_title,image:solution.image}}
    else if(typeof(req.body.new_title) == 'undefined'){var newsolution = {title :solution.title,image:req.body.new_image}}
    
   
    Object.assign(solution,newsolution);

    await solution.save();


}

async function create_product(adminParam) {
    
    
}