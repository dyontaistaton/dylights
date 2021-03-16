import React from 'react'
import {Field} from 'formik';
import {ToggleGroup as OGToggleGroup} from '../../Button';
import PropTypes from 'prop-types' 

const ToggleGroup = props => {
  let { toggles, wrapper } = props;
  const Wrapper = wrapper||React.Fragment;
  return (
    <Field {...props}>
      {({field:{value}, form:{setFieldValue}})=>{
        const initialToggledIndex = toggles.find(toggle=>toggle.value===value)||undefined; 
        const handleOnChange = index => setFieldValue(props.name, index===-1?'':toggles[index].value);
        return (
          <Wrapper>
            <OGToggleGroup initial={initialToggledIndex} onChange={handleOnChange} toggles={props.toggles}/>  
          </Wrapper>
        )
      }}
    </Field>
  )
}

ToggleGroup.propTypes = {

  // Include All Un-Fielded Toggle Group PropTypes
  ...OGToggleGroup.propTypes,

  /** Field Name */
  name: PropTypes.string.isRequired,

  /** Initial Value Of Input Field */
  value: PropTypes.any,
  
  /** Toggles Within The Group */
  toggles: PropTypes.arrayOf(PropTypes.object),

  /** Wrapper Component Of Toggle Group*/
  wrapper: PropTypes.node
}


ToggleGroup.defaultProps = {
  toggles: []
}

export default ToggleGroup;