import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import {Flex} from '../Layout';
import config from '../../config/site.json'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

const sizes={
  smaller:'smaller',
  small:'small',
  large:'large',
  larger:'larger'
};

export const Style = styled(Button.style)`
  width:50px;
  height:50px;
  background:${config.colors[0]};
  ${props=>`background:${props.background};`}
  border-radius:100%;
  ${props=>`border-radius:${props.borderRadius};`}
  padding:0;
  
  // Button Icon
  svg{ 
    fill:${config.colors[3]};
    ${props=>`fill:${props.fill};`} 
  }

  // Sizes
  &[data-size=${sizes.smaller}]{
    width:30px;
    height:30px;
  }
  &[data-size=${sizes.small}]{
    width:40px;
    height:40px;
  } 
  &[data-size=${sizes.large}]{
    width:60px;
    height:60px
  } //60
  &[data-size=${sizes.larger}]{
    width:95px;
    height:95px;
  }

  :hover{
    transform:scale(1.2);
  }
  :active{
    transform:scale(1.1);
  }
`; 

const Icon=props => {
  const {to,href} = props

  // If The Bottom Links To Another Page
  const ComponentWrapper = to?Link:href?'a':React.Fragment;

  return (
    <ComponentWrapper {...to||href?{to,href}:undefined}>
      <Style {...props} data-size={props.size}>
        <Flex fill center>
          {props.icon}
        </Flex>
      </Style>
    </ComponentWrapper>
  );
};

Icon.propTypes = {
  /** To Where Does This Button Link */
  to: PropTypes.string,

  /** Color Of Icon Button Background */
  background: PropTypes.string,

  /** Icon Component Of Button */
  icon: PropTypes.node,

  /** Color Of Svg */
  fill: PropTypes.string,

  /** Border Radius Of Button */
  borderRadius: PropTypes.string,
  
  /** Size Of The Icon Button */
  size: PropTypes.oneOf(['smaller','small','large','larger'])
}

Icon.style = Style;

export default Icon;