import React from 'react'
import styled from 'styled-components';

const Style = styled.div`

`

const Body = props => {
  return (
    <Style>
      {props.children}
    </Style>
  )
}

Body.style = Style

export default Body