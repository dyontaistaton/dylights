import {useElements, useStripe} from '@stripe/react-stripe-js';
import React from 'react';
import {FaStripe} from 'react-icons/fa';
import styled from 'styled-components';
import {Button, Dynamic} from '../../../Button';
import {Input, Modal} from '../../../Form';
import {Full} from '../../../Form/Fields/Payments';
import Divider from '../../../General/Divider';
import {Flex} from '../../../Layout';
import config from '../../../../config/site.json'
import BadgeCheckOutlineSvg from '../../../Svg/BadgeCheckOutline'

const Style=styled.div`
   ${Modal.Body.style}{

    //* 2x Input Container
    > ${Flex} > ${Input.style}{
      //* City Input
      &:first-child{
        flex-grow:1;
      }
      
      //* State Input
      &:last-child{
        flex-shrink:1;
      }
    }

    > *:not(:first-child), > ${Input.style}:not(:first-child) { 
      margin-top:10px;
    }
  }

  //* Splash Screen
  ${Modal.Splash.style}{ 
     
      *{ 
        text-align:center;
      }

      //* BadgeCheckOutline Svg
      svg{
        width:220px;
        height:220px;

        &,path{
          fill:white;
        }
      }
    }
`;

const Checkout = props => {
  const {render,onSubmit,loading,completed,price,handleClose}=props; 
  const [cardValue, setCardValue] =React.useState(null)

  return (
    <Modal
      render={render}
      form={{
        initialValues:{
          address:'',
          name:'',
          email:'',
          city:'',
          state:'',
        },
        onSubmit:(values,actions)=>{
          onSubmit({...values,card:cardValue},actions)
        },
        noSpacing:true
      }}
      wrapper={Style}
      
    > 
      <Modal.Header> 
        <hgroup>
          <h3>Checkout</h3>
          <h5>Payment Info | ${price}</h5>
        </hgroup>
      </Modal.Header>
      <Modal.Body>
        <Input autocomplete='name' label='Name' width='340px' name='name'/>
        <Input autocomplete='email' name='email' label='Email' fill/>
        <Input autocomplete='street-address' label='Address' fill name='address'/>
        <Flex center g='10px'>
          <Input label='City' autocomplete="shipping locality" fill name='city'/>
          <Input width='unset' label='State' name='state' autocomplete="shipping region" noSpacing/>
        </Flex>
        <Divider background={config.colors[5]} padding='20px'>
          <Flex center d='column'>
            <FaStripe size='65px'/>
          </Flex>
        </Divider>
        <Full fill onChange={setCardValue}/>
      </Modal.Body>
      <Modal.Footer>
        <Dynamic loading={loading} label='Purchase' width='100%' size='large' type='submit'/>
      </Modal.Footer>
      <Modal.Splash 
        completed={completed}
        render={({onHide})=>(
          <Flex fill style={{height:'100%'}} a='center' j='space-between' d='column'>
            <Flex fill center d='column' data-spaced>
              <BadgeCheckOutlineSvg fill='white'/>
              <hgroup>
                <h2>Purchase</h2>
                <h4>Successful</h4>
              </hgroup>
              <p>
                We are now processing your order. An <strong>Order Confirmation </strong> 
                has been sent to your email. Your order will be <strong>Baked Fresh</strong> upon delivery
              </p>
            </Flex>
            <Button width='100%' label='Complete' onClick={()=>{handleClose(onHide)}} type='button'/>
          </Flex>
        )}
      /> 
    </Modal>
  );
};

export default Checkout;