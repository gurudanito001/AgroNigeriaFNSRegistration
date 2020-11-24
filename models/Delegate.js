const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const DelegateSchema = new Schema({
  firstname: {type: String},
  lastname: {type: String},
  phoneNumber: {type: String},
  email: {type: String},
  companyName: {type: String},
  serviceDescription: {type: String},
  companyAddress: {type: String},
  vip: {type: Boolean},
  admitted: {type: Boolean}
});

module.exports = mongoose.model("Delegate", DelegateSchema);
