const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const nodemailer = require('nodemailer');
const CONNECTION_URL = "mongodb+srv://JGS:JGSJGS@jkcluster-ydbsz.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "sigfox-eshop-db";

var cors = require('cors')

var app = Express();
app.use(cors())

app.use(Express.json());
app.use(Express.urlencoded({
  extended: true
}));

var database, collection_products;

app.listen(5000, () => {
  MongoClient.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (error, client) => {
    if (error) {
      throw error;
    }
    database = client.db(DATABASE_NAME);
    //collection_products = database.collection("Products");
    collection_partners = database.collection("partners")
    collection_solutions = database.collection("solutions")

    console.log("Connected to `" + DATABASE_NAME + "`!");
  });
});

let transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '938149de8b75bf',
    pass: '9239e686261a09'
  }
});

//////GET solutions/////////////////////////////////////
app.get("/", (request, response) => {
  collection_solutions.find({}).toArray((error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    response.send(result);
  });
});

//////GET products specific solution /////////////////////////////////////
app.get("/:solution/products", (request, response) => {
  collection_solutions.findOne({
    "title": request.params.solution
  }, (error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    response.send(result.products);
  });
});

//////GET products/////////////////////////////////////
app.get("/products", (request, response) => {
  collection_solutions.find({}, {
    projection: {
      _id: 0,
      products: 1
    }
  }).toArray((error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    result = result.map(a => a.products);
    result = result.filter(function (el) {
      return el != null;
    });
    result = [].concat.apply([], result);
    response.send(result);
  });
});

/////GET products/:id///////////////////////////////
app.get("/products/:id", (request, response) => {
  collection_solutions.find({}, {
    projection: {
      _id: 0,
      products: 1
    }
  }).toArray((error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    result = result.map(a => a.products);
    result = result.filter(function (el) {
      return el != null;
    });
    result = [].concat.apply([], result);
    result = result.find(x => x._id == request.params.id)
    response.send(result);
  });
});

//////////////////POST products////////////////////////////////
app.post("/products", (request, response) => {
  collection_products.insert(request.body, (error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    response.send(result.result);
  });
});

/////////////////POST PARTNERS//////////////////////////////////
app.post("/partners", (request, response) => {
  collection_partners.insert(request.body, (error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    response.send(result.result);
  });
  const message = {
    from: 'elonmusk@tesla.com',
    to: request.body.user.email,
    subject: 'Design Your Model S | Tesla',
    html: '<h1>Have the most fun you can in a car!</h1><p>Get your <b>Tesla</b> today!</p>'
  };
  transport.sendMail(message, function (err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
  });
});