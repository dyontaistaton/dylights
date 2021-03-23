import React from 'react' 
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import {FirestoreAdaptor} from '../../components/General';
import Purchase from './Purchase'

const Style = styled.ul`
  margin:0;
  padding:0;
  width:100%;
  overflow-y:scroll;
  max-height:325px;
  border-radius:15px; 

  > *:not(last-child){
    margin-bottom:15px;
  }

`

const List = props => { 
  const cart = useSelector(state => state.cart)
  const products = useSelector(state=>state.firestore.data.products);

  return (
    <Style {...props}>
      <FirestoreAdaptor queries={['products']}>
        {cart.purchases.map(purchase=>(
          <Purchase {...purchase} product={products[purchase.product]}/>
        ))}
      </FirestoreAdaptor>
    </Style>
  )
}

export default List