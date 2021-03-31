import React from 'react'
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import config from '../../../config/site.json' 
import dayjs from 'dayjs'
import calender from 'dayjs/plugin/calendar'

dayjs.extend(calender)

const Style = styled.div`
  padding:20px;
  background-color:${config.colors[4]};
  border-radius:15px;

  //* Order Delivered
  &[data-completed=true]{
    background-color:${config.colors[0]};
    color:${config.colors[3]};
  }
`

const Order = props => {
  const {address, user, cart,onCreated,onDelivered,products} = props;
  const {street,state,city} = address

  const onCreatedTimestring = dayjs(onCreated).calendar(null,{
    sameDay: '[Today @] h:mm A',
    nextDay: '[Tomorrow @] h:mm A',
    nextWeek: 'dddd [@] h:mm A',
    lastDay: '[Yesterday @] h:mm A',
    lastWeek: '[Last] dddd [@] h:mm A',
    sameElse: 'DD/MM/YYYY'
  })

  return (
    <Style {...props} data-spaced data-completed={Boolean(onDelivered)} >
      <h4>{onCreatedTimestring}</h4>
      <hgroup> 
        <h5>{street}</h5>
        <h6>{city} {state}</h6>
      </hgroup>
      <code>UID: {user}</code>
      {cart.purchases.map(purchase=>(
        <h6>
          {products?
            `${products[purchase.product].name} - x${purchase.amount} Orders - $${purchase.price*purchase.amount}`
            :'Loading . . .'
          }
        </h6>
      ))} 
    </Style>
  )
}

export default Order