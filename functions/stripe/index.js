const Stripe = require('stripe');

const ErrorLogger = require('../ErrorLogger')

const privateKey = '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'

const stripe = new Stripe(privateKey);

const createPaymentIntent = async ( req, res ) => {
  try{
    const {amount,email,customer} = req.body

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      receipt_email:email,
      customer,
      currency:'usd',
      setup_future_usage:'on_session'
    })

    res.status(200).send(paymentIntent)
  }
  catch(err){
    res.status(500).json({statusCode:500,message:err.message})
    ErrorLogger(err, {
      httpRequest:{
        method: req.method,
        url: req.originalUrl,
        userAgent: req.get('user-agent'),
        referrer: '',
        remoteIp: req.ip
      },
      user:req.body.email
    })
  } 
}

const attachCustomer = async ( req, res ) => {
  try {
    const {paymentMethod,customer} = req.body;

    const attachPaymentToCustomer = await stripe.paymentMethods.attach(
      paymentMethod.id,  // <-- your payment method ID collected via Stripe.js
      { customer: customer.id } // <-- your customer id from the request body 
    ); 

    res.status(200).send(attachPaymentToCustomer) 
  }
  catch(err){
    res.status(500).json({statusCode:500,message:err.message})
    ErrorLogger(err, {
      httpRequest:{
        method: req.method,
        url: req.originalUrl,
        userAgent: req.get('user-agent'),
        referrer: '',
        remoteIp: req.ip
      },
      user:req.body.email
    })
  }
}

const createCustomer = async (snapshot,context) => {
  const {email,phone,id} = snapshot.data();

  try{ 
    //* Create Stripe Customer
    const customer = await stripe.customers.create({
      email,
      phone,
      metadata:{
        uid:id
      }
    }) 
    
    //* Add Stripe Id To Firestore User Object
    await snapshot.ref.update({stripeId:customer.id})
  }

  catch(error) { 
    console.error(error)
    ErrorLogger(error,{user:id})
  }
  
}

module.exports = Object.freeze({
  createPaymentIntent,
  createCustomer,
  attachCustomer
})