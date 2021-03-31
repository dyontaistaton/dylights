import React from 'react'
import {useSelector} from 'react-redux';
import {List} from '../../../components/Ecommerce/Products';
import {FirestoreAdaptor} from '../../../components/General';
import {default as OrderCard} from './Card'

const Orders = props => {
  const {orders,products} = useSelector(state => state.firestore.data) 

  return (
    <FirestoreAdaptor queries={[
      {
        collection:'orders',
        orderBy:['onCreated','asc'],
        limit:'30'
      },
      {
        collection:'products'
      }
    ]}>
      <h3>All Orders</h3>
      <List extras={{products}} items={orders} card={OrderCard} style={{
        overflowY:'scroll',
        maxHeight:'500px'
      }}/>
    </FirestoreAdaptor>
  )
}

Orders.name = 'Orders'

export default Orders