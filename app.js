// mongo pass : ztLV9atbgY3zHL8D
const express = require("express");
const mongoose = require("mongoose");
const multer  = require('multer');
const path = require("path");
// const __dirname = path.resolve();
// const upload = multer({ dest: 'uploads/' })

const { mediaRoutes } = require("./routes/media");
const { scraperRoutes } = require("./routes/scrapping");
const { categoryRoutes } = require("./routes/category");
const app = express();

mongoose.connect("mongodb+srv://mboyer980:ztLV9atbgY3zHL8D@homeflix-cluster.aju7x4a.mongodb.net/").then(()=>{
    console.log("mongodb connected succesfuly");
})


const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, 'images/');
    },
    filename: (req, file, callback) => {
      const name = file.originalname.split(' ').join('_');
      callback(null, name);
    }
  });
  
  const upload = multer({ storage: storage });
  app.use(upload.single("images"));
app.use("/images", express.static(path.join(__dirname, "images"))); 

app.use(express.json());

app.listen(3001 , ()=>{
    console.log("Now listening to port 3001");
})

app.use(mediaRoutes);

app.use(scraperRoutes);
app.use(categoryRoutes);
