import React from 'react'
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import config from '../../config/site.json'
import {Flex} from '../../components/Layout';
import Page from '../../components/Page';
import List from './List'
import {Form, ToggleGroup} from '../../components/Form';
import {Button} from '../../components/Button';
import {Forms} from '../../components/Ecommerce/Cart'

const Style = styled(Flex)` 
  width:100%;
  padding:35px;
  background:${config.colors[4]};
  margin:15px;
  flex-grow:1;
`

const Cart = props => {
  const cart = useSelector(state => state.cart);

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
          
          <section>
            <Flex a='center' j='space-between'>
              <h4>Shipping</h4>
              <h5>$5</h5>
            </Flex>
            <Flex a='center' j='space-between'>
              <h3>Total</h3>
              <h4>${cart.totalCost + 5}</h4>
            </Flex>
            <Forms.Checkout render={({handleToggle})=>(
              <Button label='Checkout' width='100%' size='large' type='button' onClick={handleToggle}/>
            )}/>
          </section>
          
        </Style>
      </Page.Body>
    </Page>
  )
}

Cart.path = '/c'

export default Cart