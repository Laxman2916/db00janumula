const mongoose = require("mongoose")
const vehicleSchema = mongoose.Schema({Brand: String,price: {type:Number,min:15,max:100},size: String})
module.exports = mongoose.model("vehicle",vehicleSchema)