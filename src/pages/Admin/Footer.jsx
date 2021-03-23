import React from 'react' 
import styled from 'styled-components';
import {Toggle} from '../../components/Button';
import {Flex} from '../../components/Layout';
import config from '../../config/site.json';
import {PathToggleGroup} from '../../components/General'

export const Style = styled(Flex)`
  background-color:${config.colors[4]};
  padding:15px;
  overflow-x:scroll;
`

const Footer = props => { 
  const path = window.location.pathname
  const {routes} = props
  return (
    <Style g='15px'> 
      <PathToggleGroup start='/a' routes={routes} shortened/>
      <Toggle toggled={false} to='/' label='Home'/>
    </Style>
  )
}

export default Footer;