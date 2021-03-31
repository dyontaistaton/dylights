import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import config from '../../config/site.json'
import {Flex} from '../../components/Layout';
import Page from '../../components/Page';
import List from './List'
import {Button} from '../../components/Button';
import {Forms} from '../../components/Ecommerce/Cart'
import {If} from '../../components/Logic';
import {useElements, useStripe} from '@stripe/react-stripe-js';
import BuildHandlers from './Handlers'
import {useHistory} from 'react-router';
import CompletedCheckout from './CompletedCheckout';


const Style = styled(Flex)` 
  width:100%;
  padding:35px;
  background:${config.colors[4]};
  margin:15px;
  flex-grow:1;

  //* Checkout Section
  > section:last-child{ 

    @media (max-width:400px){

      //* Total Cost
      > ${Flex}:not(:first-child){
        > h4{
          width:100%;
        } 
        
        > ${Flex}{
          flex-wrap:wrap;
        }

        *{
          white-space:nowrap;
        }
      }
    }
  }
`

const Cart = props => {
  const history = useHistory()
  const dispatch = useDispatch()
  const stripe = useStripe()
  const stripeElements = useElements()
  const cart = useSelector(state => state.cart);
  const uid = useSelector(state => state.firebase.auth.uid);
  const profile = useSelector(state => state.firebase.profile)
  const [loading, setLoading] = React.useState(false);
  const [completed, setCompleted] = React.useState(false)
  const [error, setError] = React.useState(false)

  const shippingCost = 5;
  const totalCost = cart.totalCost + shippingCost;
  const taxCost = Math.ceil(cart.totalCost*6)/100;
  const fullCost = totalCost + taxCost; 

  const {handleCheckout} = BuildHandlers({
    stripe,
    stripeElements,
    setLoading,
    setCompleted,
    setError,
    fullCost,
    dispatch,
    history,
    cart,
    userId:uid,
    profile
  }) 

  return (
    <Page>
      <Page.Header size='smaller'/>
      <Page.Body a='stretch' {...completed?{a:'center',j:'center'}:undefined}>
        <If value={!completed} Else={(
          <CompletedCheckout order={completed}/>
        )}>
          <Style d='column' j='space-between'>
            <section>
              <Flex a='center' j='space-between'>
                <h3>Cart</h3>
                <h5>( {cart.totalAmount} Order{cart.totalAmount>1?'s':''} )</h5>
              </Flex>
              <List/>
            </section>
            
            {/* Only Renders When There Are Items In The Cart */}
            <If value={cart.totalAmount}>
              <section>
                <Flex a='center' j='space-between'>
                  <h5>Shipping</h5>
                  <h5>$5</h5>
                </Flex>
                <Flex a='center' j='space-between'>
                  <h4>Total</h4>
                  <Flex center g='10px'>
                    <h4>${totalCost.toFixed(2)}</h4>
                    <h5>( + ${taxCost.toFixed(2)} Tax )</h5>
                  </Flex>
                </Flex>
                <Forms.Checkout 
                  error={error}
                  loading={!stripe||loading}
                  completed={completed}
                  handleComplete={onHide=>onHide()}
                  price={fullCost.toFixed(2)}
                  onSubmit={handleCheckout} 
                  render={({handleToggle})=>(
                    <Button label='Checkout' width='100%' size='large' type='button' onClick={handleToggle}/>
                  )}
                />
              </section>
            </If> 
          </Style>
        </If> 
      </Page.Body>
    </Page>
  )
}

Cart.path = '/c'

export default Cart