const mongoose = require('mongoose');
const { Schema } = mongoose;

const dataSetSchema = new Schema({
  title:  String, // String is shorthand for {type: String}
  images: [String],
  
});

module.exports = mongoose.model('DataSet', dataSetSchema);