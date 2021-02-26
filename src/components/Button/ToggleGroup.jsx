import React, {cloneElement, useState} from 'react';
import PropTypes from 'prop-types'

export const ToggleGroup = props => {
  let {children,onChange,size,initial} = props;

  // Which Toggle Child Is Selected
  const [toggledIndex, setToggledIndex] = useState(initial|| -1);

  children = React.Children.toArray(children);
  children = children.map((child,i)=>{
    return cloneElement(child,{
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
    })
  });

  return (
    <>
      {children}
    </>
  )
}

ToggleGroup.propTypes = {

  /** Children Nodes Of Current Component */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  
  /** Size Prop Given To Each Child Component */
  size: PropTypes.oneOf('smaller','small','large','larger'),

  /** Index Of Initially Toggled Child */
  initial: PropTypes.number,

  /** Callback Ran On Toggled Index Change */
  onChange: PropTypes.func
}

export default ToggleGroup