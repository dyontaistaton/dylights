import React from 'react'
import styled from 'styled-components';
import config from '../../config/site.json'
import {Flex} from '../Layout'
import {Icon as IconButton} from '../Button'
import {FaFacebookF, FaInstagram} from 'react-icons/fa';
import Cookies from '../../assets/cookies.jpg'

export const Style = styled(Flex) `
  background-color:${config.colors[0]};
  padding:10px 0;
  color:${config.colors[1]};
  background-image:url(${Cookies});
  background-position:center;

  > ${Flex}{
    position:fixed;
    right:20px;
    bottom:20px;
  }
` 

const Footer = props => {
  return (
    <Style center>
      <p>2021 © <strong>Dylights</strong> ⦁ Developed By <strong>StatonFoundation™</strong> ⦁ Powered by <strong>WebBase™</strong></p>
      <Flex d='column' g='20px'>
        <IconButton size='large' icon={FaInstagram()} href='https://www.instagram.com/baked.dylights/'/>
        <IconButton size='large' icon={FaFacebookF()} href='https://www.facebook.com/Dylights-100578018768942'/> 
      </Flex>
    </Style>
  )
}

export default Footer