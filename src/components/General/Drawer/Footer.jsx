import React from 'react'
import styled from 'styled-components';

const Style = styled.div`

`

const Footer = props => {
  return (
    <Style>
      {props.children}
    </Style>
  )
}

Footer.style = Style

export default Footer