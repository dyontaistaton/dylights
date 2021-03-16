import React, {useState} from 'react';
import Button from './Button'
import PropTypes from 'prop-types' 

export const Toggle = props => { 
  const {initial,toggled,onChange,onClick} = props
  const [isToggled, setToggled] = useState(initial||false); 

  // Depending On If The State Is Clamped By The Parent or Otherwise
  const isToggleStateClamp = toggled!==undefined; 

  return (
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