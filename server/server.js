const feathers = require("@feathersjs/feathers");
const express = require("@feathersjs/express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;

const app = express(feathers());
const port = 8000;

// const mongoClient = MongoClient.connect(
//    "mongodb://localhost:27017",
//    (err, database) => {
//       if (err) return console.log(err);
//       require("./app/routes")(app, database);
//       app.listen(port, () => {
//          console.log("We are live on " + port);
//       });
//       database.close();
//    }
// );

// class CardsService {
//    constructor() {
//       this.cards = [];
//    }

//    async find() {
//       // Just return all our messages
//       return this.cards;
//    }

//    async create(data) {
//       // The new message is the data merged with a unique identifier
//       // using the messages length since it changes whenever we add one
//       const card = {
//          id: this.cards.length,
//          cardNumber: data.cardNumber,
//          expirationDate: data.expirationDate,
//          cvv: data.cvv,
//          amount: data.amount,
//       };

//       // Add new message to the list
//       this.cards.push(card);

//       return card;
//    }
// }

app.use("/cards", (req, res) => {
   console.log(req);
   res.send("hello");
});

// app.use("/cards");

app.listen(port, () => {
   console.log(`Feathers server listening on port ${port}`);
});

// function noteRoutes(app, db) {
//    app.post("/cards", (req, res) => {
//       // Здесь будем создавать заметку.
//       res.send("xui");
//    });
// }

// noteRoutes(app, {});
