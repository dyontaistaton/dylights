import React from 'react'
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import config from '../../../config/site.json'
import dayjs from 'dayjs'
import calender from 'dayjs/plugin/calendar'
import {If} from '../../../components/Logic';
import HashLoader from 'react-spinners/HashLoader'
dayjs.extend(calender)

const Style = styled.div`
  padding:20px;
  background-color:${config.colors[4]};
  border-radius:15px;
`

const Order = props => {
  const {address, cart, onCreated,products} = props;
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
    <Style data-spaced>
      <h4>{onCreatedTimestring}</h4>
      <hgroup> 
        <h5>{street}</h5>
        <h6>{city} {state}</h6>
      </hgroup>
      {cart.purchases.map(purchase=>(
        <If value={products} Else={(
          <h6>Loading . . .</h6>
        )}>
          <h6> 
            {products?
              `${products[purchase.product].name} - x${purchase.amount} Order${purchase.amount>1?'s':''}`
              :(<HashLoader size='10px'/>)
            }
          </h6>
        </If>
      ))} 
    </Style>
  )
}

export default Order