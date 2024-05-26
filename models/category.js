let model;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: String,
});


model = mongoose.model("category", categorySchema);

module.exports = model;