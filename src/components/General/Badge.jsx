import React from 'react' 
import styled from 'styled-components';
import {Flex} from '../Layout';
import PropTypes from 'prop-types'
import config from '../../config/site.json'

const Style = styled.div`
  position:relative;

  >${Flex}:last-child{
    position:absolute;
    z-index:100;
    top:-10%;
    right:-10%;
    width:42%;
    height:42%;
    background: ${props=>props.background||config.colors[0]};
    border-radius:100%;
    color:${props=>props.fill||'white'};
  }

` 

const Badge = props => {
  const {max,value} = props
  return (
    <Style {...props}>
      {props.children}
      <Flex center fill>
        <h6>{max?(value>max?`${max}+`:value):value}</h6>
      </Flex>
    </Style>
  )
}

Badge.style = Style;

Badge.propTypes = {
  /** Max Number To Be Displayed On Badge */
  max: PropTypes.number,
  
  /** Value To Be Displayed On Badge */
  value: PropTypes.number.isRequired,

  /** Background Of Badge Element */
  background: PropTypes.string,

  /** Color Of Text Within Element */
  fill: PropTypes.string
}

export default Badge;