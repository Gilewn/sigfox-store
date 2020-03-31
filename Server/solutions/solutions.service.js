
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
          $exists: true
        }
      })
    }
    

     async function getAllProducts() {
        
         return await  Solution.find({
        products: {
          $exists: true
        }
      }, {
            
            _id: 0,
          products: 1
        }
      )
    }
        


    async function getProductsOfSolution(solutionParam) {
        return await Solution.findOne({
            
          "title": solutionParam
          })
    }
        

   
    async function getProduct(id) {
        return await  Solution.find({
            'products._id': ObjectId(id)
          }, 
           {
              _id: 0,
              products: 1
            }
            
            
          ).map(  function(e,i){
            if( e._id === ObjectId(id) ) return e; });
    }
        
