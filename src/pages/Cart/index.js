import React from 'react'
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import config from '../../config/site.json'
import {Flex} from '../../components/Layout';
import Page from '../../components/Page';
import List from './List'
import {Form, ToggleGroup} from '../../components/Form';
import axios from 'axios'
import {Button} from '../../components/Button';
import {Forms} from '../../components/Ecommerce/Cart'
import {If} from '../../components/Logic';
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';

const Style = styled(Flex)` 
  width:100%;
  padding:35px;
  background:${config.colors[4]};
  margin:15px;
  flex-grow:1;
`

const Cart = props => {
  const stripe = useStripe()
  const stripeElements = useElements()
  const cart = useSelector(state => state.cart);
  const [loading, setLoading] = React.useState(false);
  const [completed, setCompleted] = React.useState(false)

  const shippingCost = 5;
  const totalCost = cart.totalCost + shippingCost;
  const taxCost = Math.ceil(cart.totalCost*6)/100;
  const fullCost = totalCost + taxCost; 

  const handleSuccessfulPayment = paymentIntent => {
    setLoading(false);
    setCompleted(true);
  }

  const handleCheckout = async (values,actions) => {
    const {card,name,address,state,email,city} = values;

    setLoading(true);

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

    const paymentIntentReq = await axios.post(config.functionsUrl+'/createPaymentIntent',{
      amount:fullCost*100
    })

    const paymentMethodReq = await stripe.createPaymentMethod({
      type:'card',
      card:stripeElements.getElement(CardElement),
      billing_details:billingInfo
    })

    const confirmPaymentReq = await stripe.confirmCardPayment(paymentIntentReq.data.client_secret,{
      payment_method:paymentMethodReq.paymentMethod.id
    })

    if(confirmPaymentReq.paymentIntent.status==='succeeded'){return handleSuccessfulPayment(confirmPaymentReq.paymentIntent)} 
  }

  return (
    <Page>
      <Page.Header size='smaller'/>
      <Page.Body a='stretch'g='10px'>
        <Style d='column' j='space-between'>
          <section>
            <Flex a='center' j='space-between'>
              <h3>Cart</h3>
              <h5>( {cart.totalAmount} Orders )</h5>
            </Flex>
            <List/>
          </section>
          
          {/* Only Renders When There Are Items In The Cart */}
          <If value={cart.totalAmount}>
            <section>
              <Flex a='center' j='space-between'>
                <h4>Shipping</h4>
                <h5>$5</h5>
              </Flex>
              <Flex a='center' j='space-between'>
                <h3>Total</h3>
                <Flex center g='10px'>
                  <h4>${totalCost.toFixed(2)}</h4>
                  <h5>( + ${taxCost.toFixed(2)} Tax )</h5>
                </Flex>
              </Flex>
              <Forms.Checkout 
                loading={!stripe||loading}
                completed={completed}
                handleClose={onHide=>onHide()}
                price={fullCost.toFixed(2)}
                onSubmit={handleCheckout} 
                render={({handleToggle})=>(
                  <Button label='Checkout' width='100%' size='large' type='button' onClick={handleToggle}/>
                )}
              />
            </section>
          </If>

        </Style>
      </Page.Body>
    </Page>
  )
}

Cart.path = '/c'

export default Cart