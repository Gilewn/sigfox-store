
const Express = require("express");
const nodemailer = require('nodemailer');
const jwt = require('./helpers/jwt');
var cors = require('cors')
const errorHandler = require('./helpers/error-handler');



var app = Express();
app.use(cors())

app.use(Express.json());
app.use(Express.urlencoded({
  extended: true
}));

app.use('/',require('./solutions/solutions.controllers'));
app.use('/products',require('./solutions/solutions.controllers'));
app.use('/:solution/products',require('./solutions/solutions.controllers'));
app.use('/products/:id',require('./solutions/solutions.controllers'));




app.use(jwt());

app.use('/admins', require('./admins/admins.controllers'));



app.use(errorHandler);


const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 5000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
















/*
let transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '938149de8b75bf',
    pass: '9239e686261a09'
  }
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
});*/