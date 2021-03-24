import React from 'react'
import styled from 'styled-components';
import {Flex} from '../Layout';
import PropTypes from 'prop-types'

const Style = styled.div`
  position:relative;
  width:100%;
  padding:10px 0;
  ${props=>props.width&&`width:${props.width};`} 
  ${props=>props.gap&&`padding:${props.padding} 0;`} 
  z-index:-1;

  // Divider
  > hr{
    width:inherit;
  }

  // Flex Container
  > ${Flex}{ 
    // Children Container
    > article{
      padding:0 10px;
      background-color:inherit;
      ${props=>props.padding&&`padding:${props.gap} 0;`}
      ${props=>props.background&&`background:${props.background};`}
    }
  }

  // Both Flex Container & Divider
  > ${Flex}, > hr{
    position:absolute;
    top:0;
    bottom:0;
  }
`

const Divider = props => {
  return (
    <Style {...props}>
      <hr/>
      <Flex center fill>
        <article>
          {props.children}
        </article>
      </Flex>
    </Style>
  )
}

Divider.propTypes = { 
  /** The Padding Of The Divider */
  padding: PropTypes.string,
  
  /** The Gap In Between Divider Children & Divider Line */
  gap: PropTypes.string,
  
  /** Background Of Children Wrapper, Should Match Element Container Background To Look Invisible */
  background: PropTypes.string,
  
  /** The Width Of The Divider */
  width: PropTypes.string
}

Divider.style = Style;

export default Divider;
