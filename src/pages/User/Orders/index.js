import React from 'react'
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import {List} from '../../../components/Ecommerce/Products';
import Card from './Card'
import {FirestoreAdaptor} from '../../../components/General';

const Style = styled.div `

  //* Order List
  > ul{
    width:100%;
  }
`

const Orders = props => {
  const {uid} = useSelector(state => state.firebase.auth) 
  const orders = useSelector(state => state.firestore.data.orders)
  const products = useSelector(state => state.firestore.data.products)

  return (
    <Style>
      <FirestoreAdaptor queries={[
        {collection:'orders', where:['user','==',uid||''], orderBy:['onCreated','asc'],limit:5},
        {collection:'products'}
      ]}>
        <h3>My Orders</h3>
        <List extras={{products}} items={orders} card={Card} style={{
          overflowY:'scroll',
          maxHeight:'500px'
        }}/>
      </FirestoreAdaptor>
    </Style>
  )
}

export default Orders;