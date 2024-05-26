let model;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mediaSchema = new Schema({
    name: String,
    mp4_name: String,
    coverJacket: String,
    inSameSaga: {type :Schema.Types.ObjectId, ref: "media"},
    categoriesTags: [{type :Schema.Types.ObjectId, ref: "category"}],
}, {timestamps : true});


model = mongoose.model("media", mediaSchema);

module.exports = model;