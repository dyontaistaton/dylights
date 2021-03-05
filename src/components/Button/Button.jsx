import React from 'react';
import styled from 'styled-components';
import Flex from '../Layout/Flex';
import {If} from '../Logic'
import config from '../../config/site.json';
import PropTypes from 'prop-types'; 

const sizes={
  smaller:'smaller',
  small:'small',
  large:'large',
  larger:'larger'
};

export const Style=styled.button`
  background-color:${config.colors[0]};
  color:${config.colors[1]};
  
  // Button Icon
  svg{
    fill:${config.colors[1]};
  }

  // Sets Headers To Bold
  h1,h2,h3,h4,h5,h6{
    font-weight:bold;
  }

`;

export const Button=props => {
  const {size,label} = props;
  return (
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
  );
};

Button.propTypes = {
  /** Size Of The Button */
  size: PropTypes.oneOf(['smaller','small','large','larger']),

  /** Background Of The Button */
  background: PropTypes.string,

  /** Will The Background Be Contrasted With The Label */
  contrasted: PropTypes.bool,
  
  /** Text Within Button */
  label: PropTypes.string,
}

export default Button;