const config = require('../config.json');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || config.connectionString, { useCreateIndex: true, useNewUrlParser: true ,useUnifiedTopology: true }, (error, client) => {
    if (error) {
      throw error;
    }
  
  });
mongoose.Promise = global.Promise;




module.exports = {
   Admin: require('../admins/admin.model'),
   Solution :require('../solutions/solutions.model'),
   Partner:require('../partners/partner.model'),
   Product:require('../products/product.model')
};