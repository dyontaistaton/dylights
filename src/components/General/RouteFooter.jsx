import React from 'react' 
import styled from 'styled-components';
import {Flex} from '../Layout';
import config from '../../config/site.json';
import {PathToggleGroup} from '.'

export const Style = styled(Flex)`
  background-color:${config.colors[4]};
  padding:15px;
  overflow-x:scroll;
`

const Footer = props => { 
  const {routes,start} = props
  return (
    <Style g='15px'> 
      <PathToggleGroup start={start} routes={routes} shortened/>
    </Style>
  )
}

export default Footer;