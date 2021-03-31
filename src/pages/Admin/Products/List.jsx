import React from 'react'
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import {FirestoreAdaptor} from '../../../components/General'
import {If} from '../../../components/Logic';
import  {InfoStrip} from '../../../components/Ecommerce/Products/Cards'

const Style = styled.ul`
  max-width:100%;
  width:min-content;
  padding:0;

  //* Adding Margins Between Children
  > *:not(:last-child){
    margin-bottom:10px; 
  }
`

const List = props => {
  const products = useSelector(state => state.firestore.data.products) 

  return ( 
    <Style>
      <FirestoreAdaptor
        queries={['products']}
      >
        <If value={products}>
          {products&&Object.entries(products).map(([key,product])=>(
            <InfoStrip 
              key={key}
              product={product}
              header={( 
                <></>
              )}
            /> 
          ))}
        </If> 
      </FirestoreAdaptor>
    </Style>
  )
}

export default List