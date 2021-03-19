import React, {useState} from 'react';
import PropTypes from 'prop-types'
import Toggle from './Toggle';
import IconToggle from './IconToggle';

export const ToggleGroup = props => {
  let {toggles,onChange,size,initial,value,width} = props;

  // Which Toggle Child Is Selected
  const [toggledIndex, setToggledIndex] = useState(initial|| -1);

  const getToggleProps = i => {
    return {
      onClick:!value?()=>{
        // If Current Child Has Been Un-Toggled
        if(toggledIndex===i){
          onChange&&onChange(-1)
          return setToggledIndex(-1)
        }
  
        // Other Un-Toggled Children Becomes Toggled
        onChange&&onChange(i)
        setToggledIndex(i)
      }:undefined,
      toggled:value!==undefined?value===i:toggledIndex===i,
      size,
      width
    }
  }

  return (
    <>
      {toggles.map((toggle,i)=>{
        const ToggleType = toggle.icon?IconToggle:Toggle; 
        return (
          <ToggleType {...toggle} {...getToggleProps(i)} key={i}/>
        )
      })}
    </>
  )
}

ToggleGroup.propTypes = {

  /** Toggle Nodes Of Toggle Group */
  toggles: PropTypes.arrayOf(PropTypes.object),
  
  /** Size Prop Given To Each Child Component */
  size: PropTypes.oneOf(['smaller','small','large','larger']),

  /** Index Of Initially Toggled Child */
  initial: PropTypes.number,

  /** Callback Ran On Toggled Index Change */
  onChange: PropTypes.func,

  /** Static Index Of Toggled Button Within Group */
  value: PropTypes.number,

  /** Width Of Button Within Toggle Group */
  width: PropTypes.string
}

ToggleGroup.defaultProps = {
  toggles:[]
}

export default ToggleGroup