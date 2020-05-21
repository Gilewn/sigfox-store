
const Express = require("express");
const nodemailer = require('nodemailer');
const errorHandler = require('./helpers/error-handler');
const https = require('https');
const fs = require('fs');

//const jwt = require('jsonwebtoken');
//const jwt = require('./helpers/jwt');

var cors = require('cors')
var app = Express();



app.use(cors({
  
  exposedHeaders: ['Content-Range','X-Total-Count']
}));

app.use(Express.json());
app.use(Express.urlencoded({
  extended: true
}));

app.use('/public',require('./solutions/solutions.controllers'));
app.use('/admins', require('./admins/admins.controllers'));
app.use('/partners', require('./partners/partner.controllers'));


//app.use('/products',require('./solutions/solutions.controllers'));
//app.use('/:solution/products',require('./solutions/solutions.controllers'));
//app.use('/products/:id',require('./solutions/solutions.controllers'));
//app.use(jwt);



app.use(errorHandler);


const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 5000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});


/*https.createServer({
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem'),
  passphrase: 'Hello World!!!!Im John!!!!!'
}, app)
.listen(5000);*/














