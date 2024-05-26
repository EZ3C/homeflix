const express = require("express");
const multer = require("multer");
var upload = multer({dest:'./upload/'});
const { getAllMedias, postNewMedia } = require("../controllers/media");

const router = express();

router.get("/medias", getAllMedias);
router.post("/medias" , postNewMedia);


module.exports.mediaRoutes = router