import React from 'react'
import styled from 'styled-components';
import {CardElement} from '@stripe/react-stripe-js';
import options from './options'
import PaymentStyle from './Style'

const Style = styled(PaymentStyle)`
  
` 

const Full = props => {
  return (
    <Style {...props}>
      <CardElement options={options} {...props}/>
    </Style> 
  )
}

export default Full;
