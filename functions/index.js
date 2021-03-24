const functions = require('firebase-functions');
const express = require('express')

const allowedDomains = ['https://baked-dylights.web.app','https://localhost:3000','http://localhost:3000']

const cors = require('cors')({origin:(origin,callback)=>{
  // bypass the requests with no origin (like curl requests, mobile apps, etc )
  if (!origin) return callback(null, true);
 
  if (allowedDomains.indexOf(origin) === -1) {
    var msg = `This site ${origin} does not have an access. Only specific domains are allowed to access it.`;
    return callback(new Error(msg), false);
  }

  return callback(null, true);
}});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const app = express();
app.use(cors)

app.post('/createPaymentIntent',require('./stripe').createPaymentIntent)

exports.app = functions.https.onRequest(app)