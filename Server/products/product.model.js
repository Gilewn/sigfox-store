const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
   title: { type: String, unique: true, required: true },
   description: { type: String, required: true },
   generaldetails: { type: String, required: true },
   solution: { type: String, required: true },
   images: { type: Array},
   certifications: { type: Array}
   

},{
collection: 'solutions'});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Product', schema);