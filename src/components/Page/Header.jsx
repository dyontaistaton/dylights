import React from 'react'
import styled from 'styled-components';
import config from '../../config/site.json'
import {Flex} from '../Layout';
import {Icon as IconButton} from '../Button'
import StatonLogo from '../Svg/StatonIcon' 
import {FaUser,FaShoppingCart} from 'react-icons/fa'

export const Style = styled.div `
  height:450px;
  background-color:${config.colors[4]};
  
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
      <Flex d='column' a='flex-start' j='space-between'>
        <StatonLogo fill={config.colors[5]}/>
        <Flex center g='20px'>
          <IconButton icon={FaUser} backgroundColor={config.colors[5]} to='u'/>
          <IconButton icon={FaShoppingCart} backgroundColor={config.colors[5]} to='c'/>
        </Flex>
      </Flex>
    </Style>    
  )
}

export default Header;