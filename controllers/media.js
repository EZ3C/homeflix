const Medias = require("../models/media.js");

module.exports.getAllMedias = (async (req, res)=>{
    let medias = await Medias.find().populate("categoriesTags");
    res.json({medias : medias});
});

module.exports.postNewMedia = (async (req, res)=>{
    let newMedia = new Medias(req.body);

    // Medias.push(newMedia);
    console.log(req.file)
    let postedMedia = await newMedia.save();
    res.json(postedMedia);
});