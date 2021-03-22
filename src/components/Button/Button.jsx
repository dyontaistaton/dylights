import React from 'react';
import styled from 'styled-components';
import Flex from '../Layout/Flex';
import {If} from '../Logic'
import config from '../../config/site.json';
import PropTypes from 'prop-types'; 
import {Link} from 'react-router-dom';

const sizes={
  smaller:'smaller',
  small:'small',
  large:'large',
  larger:'larger'
};

export const Style=styled.button`
  background:${config.colors[0]};
  ${props=>`background:${props.background};`}
  color:${config.colors[3]};
  ${props=>`color:${props.fill};`} 
  ${props=>`width:${props.width};`} 
  cursor: pointer;
  height:fit-content;
  display:block;
  padding:0.6em 1.3em; 
  outline:none;
  border:none;
  border-radius:0.6em;
  box-sizing:border-box;
  transition: transform 0.3s ease, background-color 0.3s ease;
  will-change:transform;
  svg{
    width:55%;
    height:55%;
  }
  & > *{
    text-align:center;
    text-transform:uppercase;
    letter-spacing:5px;
    text-align:center;
    font-weight:bolder;
  }
  :hover{
    transform:scale(1.02);
  }
  :active{
    transform:scale(1.01);
    transition:20ms ease;
    background-color:${config.colors[4]};
  }
  
  // If Button Is Not Toggled
  &[data-toggled=false]{
    background-color:${config.colors[4]};
    transition:100ms ease;
  }

  // If Button Is Toggled
  &[data-toggled=true]{
    background-color:${config.colors[0]};
  }

  // Disabled Button
  &[disabled]{
    background:${config.colors[4]};
    :hover:before{
    }
    :before{
      content:'';
      position:absolute;
      pointer-events:none;
      transform-origin:center;
      top:0;
      right:0;
      left:0;
      bottom:0;
      margin:auto;
      border-radius:3px;
      border:none;
      display:block;
      width:70%;
      height:10%;
      z-index:10;
    }
  }
  
  // Button Icon
  svg{
    fill:${config.colors[3]};
    ${props=>`fill:${props.fill};`} 
  }

  // Sets Headers To Bold
  h1,h2,h3,h4,h5,h6{
    font-weight:bold;
  }

`;

export const Button=props => { 
  const {size,label,to,href} = props;

  // If The Bottom Links To Another Page
  const ComponentWrapper = to?Link:href?'a':React.Fragment;

  return (
    <ComponentWrapper {...to||href?{to,href}:undefined}>
      <Style {...props} size={size} data-contrasted={props.contrasted}>
        <Flex center>
          <If value={!size}>
            <h4>{label}</h4>
          </If>
          <If value={size===sizes.small}>
            <h5>{label}</h5>
          </If>
          <If value={size===sizes.large}> 
            <h3>{label}</h3>
          </If>
          <If value={size===sizes.smaller}> 
            <h6>{label}</h6>
          </If>
          <If value={size===sizes.larger}> 
            <h1>{label}</h1>
          </If>
        </Flex>
      </Style>
    </ComponentWrapper>
  );
};

Button.propTypes = {
  /** Size Of The Button */
  size: PropTypes.oneOf(['smaller','small','large','larger']),

  /** Background Of The Button */
  background: PropTypes.string,

  /** Color Of Text */
  fill: PropTypes.string,

  /** Will The Background Be Contrasted With The Label */
  contrasted: PropTypes.bool,
  
  /** Text Within Button */
  label: PropTypes.string,

  /** Width Of Button */
  width: PropTypes.string
}

Button.style = Style;

export default Button;