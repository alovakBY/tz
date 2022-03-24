const feathers = require("@feathersjs/feathers");
const express = require("@feathersjs/express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;

const app = express(feathers());
const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));

const mongoClient = new MongoClient("mongodb://localhost:27017");

mongoClient.connect((err, db) => {
   if (err) return console.log(err);
   const dbo = db.db("my_db");
   app.listen(port, () => {
      console.log(`Feathers server listening on port ${port}`);
   });
   dbo.createCollection("cards", function (err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
   });
});

app.use("/cards", (req, res) => {
   console.log(req.body);
   res.send(req.body);
});
