const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String},
    email: { type: String  },
    message: { type: String  },
 
},{
collection: 'partners'});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Partner', schema);