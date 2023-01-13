const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51MJHI1CkeE3wG5GFjMT9sF8i4180a9Mg7pz3bokUEdosjICgUORStcWoqgRPKoy2vVoD1PZ24oz1T8j9nYAtJqRg00tAcZjPfH"
);

// API

// - App config

const app = express();

// - Middlewares

app.use(cors({ origin: true }));
app.use(express.json());

// - API routes

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  
  console.log("Payment Request Recieved: Amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
    payment_method_types: ['card'],
  });

  console.log("PAYMENT INTENT >>>", paymentIntent)
  console.log("CLIENT >>>", paymentIntent)

  // OK - Created

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
});

// - Listen command

exports.api = functions.https.onRequest(app);

// endpoint
// http://127.0.0.1:5001/react-clone-db188/us-central1/api).

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
