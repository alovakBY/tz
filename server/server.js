const feathers = require("@feathersjs/feathers");
const express = require("@feathersjs/express");
const service = require("feathers-mongodb");
const MongoClient = require("mongodb").MongoClient;

const app = express(feathers());
const port = 8000;

// app.listen(port, () => {
//    console.log("We are live on " + port);
// });

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

// app.use("/cards", new CardsService());

// app.use(express.errorHandler());

app.use("/cards", service({}));

MongoClient.connect("mongodb://0.0.0.0:27017")
   .then(function (client) {
      // Set the model now that we are connected
      app.service("cards").Model = client.db("feathers").collection("cards");

      // Now that we are connected, create a dummy Message
      app.service("cards")
         .create({
            text: "Message created on server",
         })
         .then((message) => console.log("Created message", message));
   })
   .catch((error) => console.error(error));

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
