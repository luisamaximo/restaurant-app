// server/index.js

const express = require("express");
const fs = require("fs-extra");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

//Where to take requests from
const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

//get request HANDLER
app.get("/api", (req, res) => {
   fs.readFile('src/app/data/booking.json', 'utf8', function (err, data){
    if (err) {
        res.json({ err: err })
    } else {
        res.json({ data: data });
    }    
    })
  });

//post request HANDLER
app.post("/api", (req, res) => {
fs.writeFile('src/app/data/booking.json', JSON.stringify(req.body), 'utf8', function (err, data){
    if (err) {
        res.json({ message: err })
    } else {
        res.json({ message: data });
    }    
    })
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });