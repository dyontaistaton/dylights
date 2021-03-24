const Stripe = require('stripe')

const privateKey = 'sk_test_51HcHMtKnUTYIhGZpt4Zez52zBVEfb1qEWCK3b7xjyZbENUcw2gBiUy641JnNb3rk6zjm668SxEGnksbxgbhXbxnB00jy6BrmCa'

const stripe = new Stripe(privateKey);

const createPaymentIntent = async ( req, res ) => {
  try{
    console.log(req.body)
    const {amount} = req.body

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency:'usd'
    })

    res.status(200).send(paymentIntent)
  }
  catch(err){
    res.status(500).json({statusCode:500,message:err.message})
  }

}

exports.createPaymentIntent = createPaymentIntent