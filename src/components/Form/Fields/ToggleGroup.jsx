import React from 'react'
import styled from 'styled-components';
import { Field } from 'formik';
import { ToggleGroup as OGToggleGroup} from '../../Button';
import { Style as ToggleStyle } from '../../Button/Toggle';
import PropTypes from 'prop-types'

export const Style = styled.div`
  // Add Margin Top If Needed
  &:not(:first-child){
    margin-top:10px;
  }

  // Spreading All Fields To Full Width
  ${ToggleStyle.toString()} button{
    width:100%;
  }
`

const ToggleGroup = props => {
  let { toggles } = props;
  return (
    <Style>
      <Field {...props}>
        {({field:{value}, form:{setFieldValue}})=>{
          const initialToggledIndex = toggles.find(toggle=>toggle.value===value)||undefined; 
          const handleOnChange = index => setFieldValue(props.name, index===-1?'':toggles[index].value);
          return (
            <OGToggleGroup initial={initialToggledIndex} onChange={handleOnChange} toggles={props.toggles}/> 
          )
        }}
      </Field>
    </Style>
  )
}

ToggleGroup.propTypes = {

  // Include All Un-Fielded Toggle Group PropTypes
  ...OGToggleGroup.propTypes,

  /** Field Name */
  name: PropTypes.string.isRequired,

  /** Initial Value Of Input Field */
  value: PropTypes.any
}

export default ToggleGroup;