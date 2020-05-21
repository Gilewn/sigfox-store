const config = require('../config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../helpers/db');
const Admin = db.Admin;
const Solution = db.Solution;
const ObjectId = require("mongodb").ObjectID;


module.exports = {
    getSolutions,
    getSolution,
    login,
    refreshtoken,
    logout,
    create,
    getById,
    getAll,
    update,
    delete: _delete,
    create_solution,
    delete_solution,
    update_solution,
    
    getProducts,
    getProduct,
    delete_product,
    update_product

};

const refreshTokens = [];






async function login(username, password) {
    const admin = await Admin.findOne({
        username
    });
    if (admin && bcrypt.compareSync(password, admin.hash)) {
        const {
            hash,
            ...adminWithoutHash
        } = admin.toObject();
        const accessToken = jwt.sign({
            sub: admin.id
        }, config.accessTokenSecret, {
            expiresIn: '1m'
        });
        const refreshToken = jwt.sign({
            sub: admin.id
        }, config.refreshTokenSecret);
        refreshTokens.push(refreshToken);
        
        return {
            accessToken,
            refreshToken
        };
    }
}


async function refreshtoken(body, res) {


    const token = body.refreshToken;
    if (!token) {
        throw 'Error 401';
    }

    if (!refreshTokens.includes(token)) {
        throw 'Error 403';
    }


    jwt.verify(token, config.refreshTokenSecret, (err, admin) => {
        if (err) {
            throw 'Error 403';
        }
        const accessToken = jwt.sign({
            sub: admin.id
        }, config.accessTokenSecret, {
            expiresIn: '10m'
        });

        res.json({
            accessToken
        });
    })
}

async function logout(req, res) {
    if (refreshTokens.filter(t => t !== req.refreshToken)) {
        res.send("Logout successful");
    } else {
        res.send("Error");
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
    if (await Admin.findOne({
            username: adminParam.username
        })) {
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
    if (admin.username !== adminParam.username && await Admin.findOne({
            username: adminParam.username
        })) {
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


async function getSolutions() {
    return await Solution.find({},{products:0})
}




async function getSolution(id) {
    return await Solution.findOne({
        "_id": id
    })
}





async function create_solution(req) {

    if (await Solution.findOne({
            _id: req.params.id
        })) {
        throw 'Solution "' + req.params.id + '" is already exists';
    }

    const solution = new Solution(req.body);
    await solution.save();
}


async function delete_solution(req) {

    const solution = await Solution.findOne({
        _id: req.params.id
    })

    if (!solution) {
        throw 'Solution "' + req.paramas.id + '" does not exist ';
    }

    await solution.delete();
}


async function update_solution(req) {

    const solution = await Solution.findOne({
        _id: req.params.id
    })

    console.log(req.body);

    if (!solution) {
        throw 'Solution "' + req.paramas.id + '" does not exist ';
    }
    

    /*if (typeof (req.body.new_image) == 'undefined' && typeof (req.body.new_title) == 'undefined') {
        var newsolution = {
            title: solution.title,
            image: solution.image
        }
    } else if (typeof (req.body.new_image) == 'undefined') {
        var newsolution = {
            title: req.body.new_title,
            image: solution.image
        }
    } else if (typeof (req.body.new_title) == 'undefined') {
        var newsolution = {
            title: solution.title,
            image: req.body.new_image
        }
    } else {
        var newsolution = {
            title: req.body.new_title,
            image: req.body.new_image
        }
    }*/
    var newsolution = {
        title: req.body.title,
        image: req.body.image
    }   
    Object.assign(solution, newsolution);

    await solution.save();


}



async function getProducts() {
    
   
   return await  Solution.aggregate([ 
        { "$unwind": "$products" },
        {"$group": {_id:null, products : { $push: '$products' }}}])
    }



    async function getProduct(id) {
        return await  Solution.aggregate([
          {"$match":{"products._id": ObjectId(id)}},
          {"$project":{ 
              _id : 0 ,
              
              "products" :{
              
                "$arrayElemAt":[
                  {"$filter":{
                    "input":"$products" ,
                    "cond":{"$eq":["$$this._id",ObjectId(id)]}
                  }
                },0]
              }
            }
          }])
        }
        
        

        async function delete_product(req) {

            const product = await   Solution.aggregate([
                {"$match":{"products._id": ObjectId(req.params.id)}},
                {"$project":{ 
                    _id : 0 ,
                    
                    "products" :{
                    
                      "$arrayElemAt":[
                        {"$filter":{
                          "input":"$products" ,
                          "cond":{"$eq":["$$this._id",ObjectId(req.params.id)]}
                        }
                      },0]
                    }
                  }
                }])
                if (!product) {
                    throw 'Product "' + req.paramas.id + '" does not exist ';
                }
            
            await product.delete();
        }



        async function update_product(req) {

            const product = await   Solution.aggregate([
                {"$match":{"products._id": ObjectId(req.params.id)}},
                {"$project":{ 
                    _id : 0 ,
                    
                    "products" :{
                    
                      "$arrayElemAt":[
                        {"$filter":{
                          "input":"$products" ,
                          "cond":{"$eq":["$$this._id",ObjectId(req.params.id)]}
                        }
                      },0]
                    }
                  }
                }])
                if (!product) {
                    throw 'Product "' + req.paramas.id + '" does not exist ';
                }
            
                var newproduct = {
                title: req.body.title,
                image: req.body.image
            }   
            Object.assign(product, newproduct);
        
            await product.save();
             }
        