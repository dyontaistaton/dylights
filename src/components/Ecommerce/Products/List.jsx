import React from 'react'
import styled from 'styled-components';
import {If} from '../../Logic';

export const Style = styled.div `
`

const List = props => {
  const {products, card, wrapper} = props;
  return (
    <If value={wrapper} Else={(
      <ul>
        {products.map(product=>(
          <>{card({product})}</>
        ))}
      </ul>
    )}>
      <>{wrapper&&wrapper({
        children:products.map(product=>(
          <>{card({product})}</>
        ))
      })}</>
    </If>
  )
}

export default List