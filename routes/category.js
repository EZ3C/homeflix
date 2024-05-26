const express = require("express");
const { postNewCategory, getAllCategories } = require("../controllers/category");


const router = express();

router.get("/categories", getAllCategories);
router.post("/category", postNewCategory);


module.exports.categoryRoutes = router