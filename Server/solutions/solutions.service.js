
const db = require('../helpers/db');
const Solution = db.Solution;
const ObjectId = require("mongodb").ObjectID;


module.exports = {
    getSolutions,
    getProductsOfSolution,
    getAllProducts,
    getProduct
};


    async function getSolutions() {
    return await Solution.find({
        products: {
          $gt:  {$size: 0} 
        }}, {
            
          _id: 1,
          title:1,
          image:1
      }
        
      )
    }
    

    async function getAllProducts() {
        
         return await  Solution.aggregate([ 
            { "$unwind": "$products" },
            {"$group": {_id:null, products : { $push: '$products' }}}])
        }
    
        


    async function getProductsOfSolution(solutionParam) {
     
        return await Solution.findOne({
            
          "title": solutionParam
          })
    }
        

   
    async function getProduct(id) {
        return await  Solution.aggregate([
          /*{"$match":{"products._id": ObjectId(id)}},
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
            }*/
            {"$match":{"products._id": ObjectId(id)}

          }])
        }
        
