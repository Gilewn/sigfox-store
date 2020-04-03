const mongoose = require('mongoose');
const Schema = mongoose.Schema;




const schema = new Schema({
  title: { type: String, unique: true, required: true },
  image: { type: String, required: true },
  products:{type: Array}
 
},{
collection: 'solutions'},{versionKey: false});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Solution', schema);









