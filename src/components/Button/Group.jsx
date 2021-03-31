import React from 'react'
import styled from 'styled-components';
import Button from './Button';
import Icon from './Icon';
import PropTypes from 'prop-types'
import {Flex} from '../Layout';
import config from '../../config/site.json'


const Style = styled(Flex)`
  height:min-content;
  background:${config.colors[0]};
  ${props=>`background:${props.background};`}
  border-radius:0.6em;
  transition:0.3s ease;
  width:fit-content; 

  > ${Button.style}{ 
    background-color:transparent; 

    // Setting All Children Elements' Color
    ${props=>`color:${props.fill};`} 

    // Setting Border Radius To Make Button Group
    border-radius:0.6em;

    // Coloring & Edging Toggles
    &[data-toggled]{
      background-color:${config.colors[4]};

      &[data-toggled=true]{
        background-color:${config.colors[0]};
      }

      &:first-child{
        &, > button{
          border-radius: 0.6em 0 0 0.6em; 
        }
      }

      &:last-child{
        &, > button{
          border-radius: 0 0.6em 0.6em 0; 
        }
      }
    }

    > *{
      transition:ease 0.3s;
    } 

    svg{
      transition:ease 0.3s;
    } 

    &:active {
      color:${config.colors[4]};
    
      svg{
        fill:${config.colors[4]}; 
        transition:20ms ease; 
      }
      
      > *{
        transform:scale(1.01);
        transition:20ms ease;
      }
    }
  } 

  &[data-is-one=true]{ 

    &:hover{
      transform:scale(1.02)
    }

    &:active{
      transform:scale(1.01);
      transition:20ms ease;
      background-color:${config.colors[4]}; 

      > *{
        color:${config.colors[3]};
      }
    }

    ${Button.style}{ 
      background-color:unset;
      &:hover{
        transform:scale(1);
      }
    }
  } 

  // Equalizing Button Height
  > ${Icon.style}{

    svg{
      width:40%;

      // Setting Icon Svgs' Fill Color
      ${props=>`fill:${props.fill};`} 
    }
  }

`

const Group = props => {
  const {
    size,
    toggled,
    isOne
  } = props 

  const clonedElements = React.Children.toArray(props.children).map((child,i)=>React.cloneElement(child,{
    size,
    toggled
  }))

  return (
    <Style {...props} a='stretch' data-is-one={isOne}>
      {clonedElements}
    </Style>
  )
}

Group.style = Style;

Group.propTypes = {
  /** Size Of The Button */
  size: PropTypes.oneOf(['smaller','small','large','larger']),

  /** Background Of Button */
  background: PropTypes.string,
  
  /** Color Of Text & Svgs */
  fill: PropTypes.string,

  /** Does Group Of Button Act As One? */
  isOne: PropTypes.bool

}

Group.defaultProps = {
  isOne:true
}

export default Group;