const express = require("@feathersjs/express");
const feathers = require("@feathersjs/feathers");
const MongoClient = require("mongodb").MongoClient;

const app = express(feathers());
const port = 8000;

// CORS
app.use(function (req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
   );
   next();
});

// Bodyparser
app.use(express.json());

const mongoClient = new MongoClient("mongodb://localhost:27017");
app.post("/cards", async (req, res) => {
   await mongoClient.connect(async (err, db) => {
      if (err) {
         return res.sendStatus(503);
      }

      const dataBase = await db.db("db_cards");

      await dataBase.collection("cards");

      await dataBase
         .collection("cards")
         .insertOne(req.body)
         .then((result) => {
            res.send({ amount: req.body.amount, id: result.insertedId });
         })
         .catch((err) => res.sendStatus(503));
      db.close();
   });
});

app.listen(port, () => {
   console.log(`Feathers server listening on port ${port}`);
});
