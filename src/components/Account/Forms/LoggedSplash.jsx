import React from 'react';
import {FaThumbsUp} from 'react-icons/fa';
import styled from 'styled-components';
import {Flex} from '../../Layout';
import config from '../../../config/site.json'

const Style = styled(Flex)`
  border-radius:100%;
  background-color:${config.colors[5]};
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  transform: scale(0);
  transform-origin: top left;
  transition:200ms ease;
  opacity:0;

  > ${Flex}{
    transform: rotateZ(45deg);
    transform-origin: center;
    transition:220ms ease;
  } 

  //* When Current Session Becomes Authorized
  &[data-authorized=true]{
    border-radius:25px; 
    transform: scale(1) rotateZ(0deg);
    opacity:1; 

    > ${Flex}{
      transform: rotateZ(0);
    }
  } 
`

const LoggedSplash = props => { 
  return (
    <Style data-authorized={props.authorized} center>
      <Flex d='column' center g='10px'>
        <FaThumbsUp size='125px'/>
        <h3>Logged In</h3>
        <h5>To Your Account</h5>
      </Flex>
    </Style>
  )
}

LoggedSplash.style = Style;

export default LoggedSplash;