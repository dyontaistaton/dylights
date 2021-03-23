import React from 'react'
import styled from 'styled-components';
import HashLoader from 'react-spinners/HashLoader'
import config from '../../../config/site.json'

export const Style = styled.ul `
  padding:0;
`

const List = props => {
  const {products, card, wrapper} = props;

  //* Loading, Waiting Products
  if(!products){return (
    <HashLoader size='220px' color={config.colors[0]}/>
  )}

  //* Custom Wrapper
  if(wrapper){return (
    <React.Fragment>
      {wrapper({
        ...props,
        children:Object.entries(products).map(([key,product])=>card({product,key}))
      })}
    </React.Fragment>
  )}

  //* All Goes As Planned, There Are Products With No Wrapper
  return (
    <Style {...props}>
      {Object.entries(products).map(([key,product])=>card({product,key}))}
    </Style>
  )
}

List.style = Style;

export default List