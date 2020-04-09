const config = require('../config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../helpers/db');
const Partner = db.Partner;
const nodemailer = require('nodemailer');


module.exports = {
    
    create_partner,
    send_email

};

let transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: '938149de8b75bf',
      pass: '9239e686261a09'
    }
  });

  


async function create_partner(request) {
console.log(request);

    const partner = new Partner(request);
    await partner.save();
}
    



async function send_email(email) {
    
    const message = {
        from: 'elonmusk@tesla.com',
        to: email,
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
}





    




      
        
         
    
    
        
    
    






