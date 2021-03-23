import React from 'react'
import styled from 'styled-components';
import config from '../../config/site.json'
import {Flex} from '../Layout'
import {Icon as IconButton} from '../Button'
import {FaFacebookF, FaInstagram} from 'react-icons/fa';

export const Style = styled(Flex) `
  background-color:${config.colors[0]};
  padding:10px 0;
  color:${config.colors[3]};
  background:${config.colors[5]};

  > h6{
    text-align:center;
  }

  > ${Flex}{  
    position:fixed;
    right:20px;
    bottom:20px;
  }
` 

const Footer = props => {
  return (
    <Style center {...props}>
      <h6>2021 © <strong>Dylights</strong> ⦁ Developed By <strong>StatonFoundation™</strong></h6>
      <Flex d='column' g='20px'>
        <IconButton size='large' icon={FaInstagram()} href='https://www.instagram.com/baked.dylights/'/>
        <IconButton size='large' icon={FaFacebookF()} href='https://www.facebook.com/Dylights-100578018768942'/> 
      </Flex>
    </Style>
  )
}

Footer.style = Style;

export default Footer