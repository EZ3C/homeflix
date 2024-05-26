const Category = require("../models/category.js")


module.exports.getAllCategories = (async (req, res)=>{
    let category = await Category.find()
    res.json({medias : category});
});

module.exports.postNewCategory = (async (req, res)=>{
    let newCategory = new Category(req.body);

    // Medias.push(newMedia);

    let postedCategory = await newCategory.save();
    res.json(postedCategory);
});