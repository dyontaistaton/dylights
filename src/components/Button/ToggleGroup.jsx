import React, {cloneElement, useState} from 'react';
import PropTypes from 'prop-types'
import Toggle from './Toggle';
import IconToggle from './IconToggle';

export const ToggleGroup = props => {
  let {toggles,onChange,size,initial} = props;

  // Which Toggle Child Is Selected
  const [toggledIndex, setToggledIndex] = useState(initial|| -1);

  const getToggleProps = i => {
    return {
      onClick:()=>{
        // If Current Child Has Been Un-Toggled
        if(toggledIndex===i){
          onChange&&onChange(-1)
          return setToggledIndex(-1)
        }
  
        // Other Un-Toggled Children Becomes Toggled
        onChange&&onChange(i)
        setToggledIndex(i)
      },
      toggled:toggledIndex===i,
      size,
    }
  }

  return (
    <>
      {toggles.map((toggle,i)=>{
        const ToggleType = toggle.icon?IconToggle:Toggle; 
        return (
          <ToggleType {...toggle} {...getToggleProps(i)}/>
        )
      })}
    </>
  )
}

ToggleGroup.propTypes = {

  /** Toggle Nodes Of Toggle Group */
  toggles: PropTypes.arrayOf(PropTypes.object),
  
  /** Size Prop Given To Each Child Component */
  size: PropTypes.oneOf('smaller','small','large','larger'),

  /** Index Of Initially Toggled Child */
  initial: PropTypes.number,

  /** Callback Ran On Toggled Index Change */
  onChange: PropTypes.func
}

ToggleGroup.defaultProps = {
  toggles:[]
}

export default ToggleGroup