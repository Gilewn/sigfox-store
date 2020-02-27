const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const CONNECTION_URL = "mongodb+srv://JGS:JGSJGS@jkcluster-ydbsz.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "sigfox-eshop-db";

var cors = require('cors')

var app = Express();
app.use(cors())

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

var database, collection;

app.listen(5000, () => {
  MongoClient.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
    if(error) {
        throw error;
    }
    database = client.db(DATABASE_NAME);
    collection = database.collection("products");
    collection_partners = database.collection("partners")
    console.log("Connected to `" + DATABASE_NAME + "`!");
});
});


//////GET products/////////////////////////////////////

app.get("/products", (request, response) => {
  
  collection.find({}).toArray((error, result) => {
      if(error) {
          return response.status(500).send(error);
      }
      response.send(result);
  });
});




/////GET products/:id///////////////////////////////
app.get("/products/:id", (request, response) => {
  collection.findOne({ "_id": new ObjectId(request.params.id) }, (error, result) => {
      if(error) {
          return response.status(500).send(error);
      }
      response.send(result);
  });
});



//////////////////POST products////////////////////////////////
app.post("/products", (request, response) => {
  collection.insert(request.body, (error, result) => {
      if(error) {
          return response.status(500).send(error);
      }
      response.send(result.result);
  });
});

/////////////////POST PARTNERS//////////////////////////////////
app.post("/partners", (request, response) => {
  collection_partners.insert(request.body, (error, result) => {
      if(error) {
          return response.status(500).send(error);
      }
      response.send(result.result);
  });
});
