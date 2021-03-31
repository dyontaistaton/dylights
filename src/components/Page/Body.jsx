import React from 'react' 
import styled from 'styled-components';
import {Flex} from '../Layout';

export const Style = styled(Flex) `
  height:100%;
  flex-grow:1;
  position:relative;
`

const Body = props => { 
  return(
    <Style {...props}>
      {props.children}
    </Style>
  )
}

Body.style = Style;

export default Body
