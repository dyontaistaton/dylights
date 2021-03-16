import React from 'react'
import styled from 'styled-components';

export const Style = styled.div`
  padding:13px 0;
`

const Body = props => {
  return (
    <Style>
      {props.children}
    </Style>
  )
}

Body.style = Style;

export default Body;
