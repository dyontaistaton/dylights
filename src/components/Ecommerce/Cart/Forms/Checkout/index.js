import React from 'react';
import {FaStripe} from 'react-icons/fa';
import styled from 'styled-components';
import {Dynamic} from '../../../../Button';
import {Input, Modal} from '../../../../Form';
import {Full} from '../../../../Form/Fields/Payments';
import Divider from '../../../../General/Divider';
import {Flex} from '../../../../Layout';
import config from '../../../../../config/site.json'
import Errors from './Errors'
import {useSelector} from 'react-redux';

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
  const {render,onSubmit,loading,price,error} = props; 
  const [cardValue, setCardValue] =React.useState(null) 
  const {profile} = useSelector(state => state.firebase)||{}

  const ErrorSplash = Errors[error]||Errors.generic_decline;

  return (
    <Modal
      render={render}
      form={{
        initialValues:{
          address:profile.lastStreet||'',
          name:profile.name||'',
          email:profile.email||'',
          city:profile.lastCity||'',
          state:profile.lastState||'',
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
      <Modal.Splash completed={Boolean(error)}>
        <ErrorSplash/>
      </Modal.Splash>
    </Modal>
  );
};

export default Checkout;