const Medias = require("../models/media.js");
const axios  = require("axios");
const fs = require("fs");

let url = "https://api.themoviedb.org/3/search/movie";

let imgEndPoint = "https://image.tmdb.org/t/p/original"
module.exports.scrapeCovers = (async (req, res)=>{
    let desiredMedia = "Divergent insurgent";
    let medias = await axios({
        method: 'get',
        url: url,
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZGFjMDM0MmFmZmQ3NmNhNTk0YTA0M2MxNTdlYjlkNiIsInN1YiI6IjYyMDU3OGY2MzhlNTEwMDExNGU5NzMxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V3l33RZLFOcj1N27FdfGFzKM_RV-ugBh5Y_P1qSYfYA'
        },
        params:
        {
            query : desiredMedia
        }
    })

    let currentMedia = medias.data.results[0];
    let imgurl = currentMedia.poster_path;

    let retrievedCover = await axios({
        method: 'get',
        url: imgEndPoint + imgurl,
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZGFjMDM0MmFmZmQ3NmNhNTk0YTA0M2MxNTdlYjlkNiIsInN1YiI6IjYyMDU3OGY2MzhlNTEwMDExNGU5NzMxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V3l33RZLFOcj1N27FdfGFzKM_RV-ugBh5Y_P1qSYfYA'
        },
        responseType: 'arraybuffer'
    });

    fs.writeFile("scrapped_covers/" + desiredMedia + "." + imgurl.split(".")[1], retrievedCover.data, (err)=>{
        if (err)
            throw err;
        else
            console.log("file succesfully retreived");
    });

    res.json(currentMedia);
});

// module.exports.postNewMedia = (async (req, res)=>{
//     let newMedia = new Medias(req.body);

//     // Medias.push(newMedia);

//     let postedMedia = await newMedia.save();
//     res.json(postedMedia);
// });