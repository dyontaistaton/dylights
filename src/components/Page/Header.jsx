import React from 'react'
import styled from 'styled-components';
import config from '../../config/site.json'
import {Flex} from '../Layout';
import {Icon as IconButton} from '../Button'
import {FaFacebookF, FaInstagram, FaShoppingBasket, FaUser} from 'react-icons/fa'
import Logo from '../Svg/Logo' 

export const Style = styled.div `
  height:300px;
  color:${config.colors[1]};
  background-color:transparent;

  // Flex Container
  > ${Flex}{
    box-sizing:border-box;
    height:100%;
    padding:20px;
  }


`

const Header = props => {
  return (
    <Style>
      <Flex fill d='column' center>
        <Logo/>
        <Flex gap='15px'>
          
          <IconButton size='large' icon={FaUser()}/>
          <IconButton size='large' icon={FaShoppingBasket()}/>
        </Flex>
      </Flex>
    </Style>    
  )
} 

export default Header;