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

const app = express();
app.use(cors)

const { createPaymentIntent, createCustomer, attachCustomer} = require('./stripe')

app.post('/createPaymentIntent', createPaymentIntent)

app.post('/attachCustomer', attachCustomer)

exports.app = functions.https.onRequest(app)

exports.onUserCreate = functions.firestore.document('/users/{uid}').onCreate((snapshot,context)=>{
  
  //* Create Stripe User
  createCustomer(snapshot,context)
})
