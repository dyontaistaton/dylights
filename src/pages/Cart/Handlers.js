import axios from 'axios'
import config from '../../config/site.json'
import {CardElement} from '@stripe/react-stripe-js'
import {CreateOrder} from '../../redux/ecommerce/orders/actions';

const BuildHandlers = cache => { 
  const {
    setLoading,
    setCompleted,
    stripe,
    stripeElements,
    fullCost,
    dispatch,
    cart,
    userId,
    setError,
    profile
  } = cache;

  const handleSuccess = ({values,paymentIntent}) => { 
    const order = {
      name:values.name,
      user:userId,
      email:values.email,
      cart,
      address:{
        city:values.city,
        state:values.state,
        zip:values.card.value.postalCode,
        street:values.address 
      },
      payment:{
        client_secret:paymentIntent.client_secret,
        status:paymentIntent.status
      } 
    }

    //* Create Order
    dispatch(CreateOrder(order,orderId=>{

      setLoading(false);
      setCompleted({...order,id:orderId});

    })) 
  }

  const handleError = async (values,confirmPaymentReq) => { 
    
    setLoading(false);

    const errorCode = (confirmPaymentReq.error.decline_code||confirmPaymentReq.error.code).toLowerCase()

    setError(errorCode) 

    setTimeout(()=>setError(false),10*1000);

  }

  const handleCheckout = async (values,actions) => {
    const {card,name,address,state,email,city,} = values;

    setLoading(true);

    //* Declare Billing Info
    const billingInfo = {
      name,
      email,
      address:{
        line1:address,
        postal_code:card.value.postalCode,
        state,
        city
      }
    } 

    //* Create & Retrieve Payment Intent
    const paymentIntentReq = await axios.post(config.functionsUrl+'/createPaymentIntent',{
      amount:fullCost*100,
      email:email,
      customer:profile.stripeId
    })

    //* Create Payment Method
    const paymentMethodReq = await stripe.createPaymentMethod({
      type:'card',
      card:stripeElements.getElement(CardElement),
      billing_details:billingInfo
    })

    const attachCustomerReq = await axios.post(config.functionsUrl+'/attachCustomer',{
      paymentMethod:paymentMethodReq.paymentMethod,
      customer:{id:profile.stripeId}
    })

    //* Confirm Payment
    const confirmPaymentReq = await stripe.confirmCardPayment(paymentIntentReq.data.client_secret,{
      payment_method:attachCustomerReq.data.id||paymentMethodReq.paymentMethod.id,
      receipt_email:email,
      shipping:{
        address:billingInfo.address,
        name:billingInfo.name
      }
    })

    //* When Payment Throws Error
    if(confirmPaymentReq.error){
      return handleError(values,confirmPaymentReq)
    }

    //* When Payment Is Successful
    if(confirmPaymentReq.paymentIntent&&confirmPaymentReq.paymentIntent.status==='succeeded'){
      return handleSuccess({values,paymentIntent:confirmPaymentReq.paymentIntent})
    } 
  }

  return Object.freeze({
    handleSuccess,
    handleCheckout
  })
}

export default BuildHandlers;