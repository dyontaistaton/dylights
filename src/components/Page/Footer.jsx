import React from 'react'
import styled from 'styled-components';
import config from '../../config/site.json'
import {Flex} from '../Layout'
import {Icon as IconButton} from '../Button'
import {FaFacebookF, FaInstagram} from 'react-icons/fa';

export const Style = styled(Flex) `
  background-color:${config.colors[0]};
  padding:10px 0;
  color:${config.colors[1]};
  background-color:transparent; 

  > ${Flex}{
    position:fixed;
    right:20px;
    bottom:20px;
  }
` 

const Footer = props => {
  return (
    <Style center>
      <Flex d='column' g='20px'>
        <IconButton size='large' icon={FaInstagram()}/>
        <IconButton size='large' icon={FaFacebookF()}/> 
      </Flex>
      <p>2021 © <strong>Dylights</strong> ⦁ Developed By <strong>StatonFoundation™</strong> ⦁ Powered by <strong>WebBase™</strong></p>
    </Style>
  )
}

export default Footer