
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
app.use('/partners', require('./partners/partner.controllers'));


app.use(errorHandler);


const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 5000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});

















