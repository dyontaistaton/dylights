import React from 'react'
import styled from 'styled-components';
import {If} from '../../Logic';

export const Style = styled.ul `

`

const List = props => {
  const {products, card, wrapper} = props;
  return (
    <If value={wrapper} Else={(
      <Style>
        {products&&products.map(product=>(
          <>{card({product})}</>
        ))}
      </Style>
    )}>
      <>{wrapper&&wrapper({
        children:products&&products.map(product=>(
          <>{card({product})}</>
        ))
      })}</>
    </If>
  )
}

List.style = Style;

export default List