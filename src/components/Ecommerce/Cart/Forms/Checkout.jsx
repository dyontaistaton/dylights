import {useElements, useStripe,CardNumberElement,CardCvcElement,CardExpiryElement} from '@stripe/react-stripe-js';
import React from 'react';
import styled from 'styled-components';
import {Modal} from '../../../Form';

const Style=styled.div`
   ${Modal.Body.style}{
    width:300px;

    > * {
    }
  }
`;

const Checkout = props => {
  const stripe = useStripe();
  const elements = useElements();

  const {render,onSubmit,loading,completed}=props;

  return (
    <Modal
      render={render}
      form={{
        
      }}
      wrapper={Style}
    > 
      <Modal.Header>
        <hgroup>
          <h3>Enter</h3>
          <h5>payment info</h5>
        </hgroup>
      </Modal.Header>
      <Modal.Body>
        <CardNumberElement/>
        <CardExpiryElement/>
        <CardCvcElement/>
      </Modal.Body>
      <Modal.Footer 
      />
      <Modal.Splash completed={completed}> 
      </Modal.Splash>
    </Modal>
  );
};

export default Checkout;