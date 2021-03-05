import React, {useState} from 'react';
import styled from 'styled-components';
import Button,{Style as ButtonStyle} from './Button'
import config from '../../config/site.json'; 
import PropTypes from 'prop-types'

export const Style = styled.div` 
  ${ButtonStyle.toString()}{
    background-color:${config.colors[5]}1C;
    transition:100ms ease;

    // If Button Is Toggled
    &[data-toggled=true]{
      background-color:${config.colors[0]};
    }
  }
`

export const Toggle = props => { 
  const {initial,toggled,onChange,onClick} = props
  const [isToggled, setToggled] = useState(initial||false); 

  // Depending On If The State Is Clamped By The Parent or Otherwise
  const isToggleStateClamp = toggled!==undefined; 

  return (
    <Style>
      <Button {...props} data-toggled={toggled!==undefined?toggled:isToggled} onClick={(e)=>{
        if(isToggleStateClamp){ 
          onChange&&onChange(toggled);
          onClick&&onClick(e,toggled);
        }
        else{
          onChange&&onChange(!isToggled);
          onClick&&onClick(e,!isToggled);
          setToggled(!isToggled);
        }
      }}/>
    </Style>
  )
}

Toggle.propTypes = {

  // All Icon PropTypes
  ...Button.propTypes,

  /** Initial Toggled State */
  initial: PropTypes.bool,

  /** Clamped Toggled State, Static Toggle Icon */
  toggled: PropTypes.bool,

  /** Callback Function When Toggled State Changes */
  onChange: PropTypes.func,
  
  /** Callback Function Toggle Group Is  */
  onClick: PropTypes.func
}

export default Toggle