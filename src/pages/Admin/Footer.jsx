import React from 'react' 
import styled from 'styled-components';
import {Toggle} from '../../components/Button';
import {Flex} from '../../components/Layout';
import config from '../../config/site.json'

export const Style = styled(Flex)`
  background-color:${config.colors[5]};
  padding:15px;
`

const Footer = props => { 
  const path = window.location.pathname
  const {routes} = props
  return (
    <Style g='15px'> 
      {routes.map(route=>(
        <Toggle 
          toggled={path.includes(route.name.toLowerCase())} 
          label={route.name} 
          to={`/a/${route.name.toLowerCase()}`}
        />
      ))}
      <Toggle toggled={false} to='/' label='Home'/>
    </Style>
  )
}

export default Footer;