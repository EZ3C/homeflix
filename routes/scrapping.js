const express = require("express");
const { scrapeCovers } = require("../controllers/scrapping");
// const { getAllMedias, postNewMedia } = require("../controllers/media");

const router = express();

router.get("/scrape", scrapeCovers);


module.exports.scraperRoutes = router