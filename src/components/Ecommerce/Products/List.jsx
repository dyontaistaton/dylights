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
        {products&&Object.entries(products).map(([key,product])=>(
          <>{card({product,key})}</>
        ))}
      </Style>
    )}>
      <>{wrapper&&wrapper({
        children:products&&Object.entries(products).map(([key,product])=>(
          <>{card({product,key})}</>
        ))
      })}</>
    </If>
  )
}

List.style = Style;

export default List