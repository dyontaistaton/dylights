import React, {useState} from 'react';
import PropTypes from 'prop-types'
import Icon from './Icon'

export const IconToggle = props => { 
  const {initial,toggled,onChange,onClick} = props
  const [isToggled, setToggled] = useState(toggled||initial||false);

  // Depending On If The State Is Clamped By The Parent or Otherwise
  const isToggleStateClamp = toggled!==undefined; 

  return (
    <Icon {...props} data-toggled={isToggleStateClamp?toggled:isToggled} onClick={(e)=>{
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

IconToggle.propTypes = {

  // All Icon PropTypes
  ...Icon.propTypes,

  /** Initial Toggled State */
  initial: PropTypes.bool,

  /** Clamped Toggled State, Static Toggle Icon */
  toggled: PropTypes.bool,

  /** Callback Function When Toggled State Changes */
  onChange: PropTypes.func,
  
  /** Callback Function Toggle Group Is  */
  onClick: PropTypes.func
}

export default IconToggle