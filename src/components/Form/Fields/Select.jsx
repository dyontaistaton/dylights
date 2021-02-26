import React from 'react'
import styled from 'styled-components'; 
import {default as FieldStyle} from './Style'
import { Field } from 'formik';
import {If} from '../../Logic';
import PropTypes from 'prop-types'

export const types = {};

export const Style = styled(FieldStyle) ` 
`; 

const Select = props => {
  const {options,caseSensitive,label,placeholder} = props
  return (
    <Style {...props}>
      <Field {...props} as='select' placeholder='...' required>
        <option disabled selected hidden value=''/>
        {options&&options.map(option=>(<option value={caseSensitive?option:option.toLowerCase()}>{option}</option>))}
      </Field>
      <If value={label||placeholder}>
        <label><h4>{label||placeholder}</h4></label>
      </If>
    </Style>
  ) 
} 

Select.propTypes = { 

  /** All Option Values Within Select Input Field */
  options: PropTypes.arrayOf(PropTypes.string),

  /** Does The Value Of The Select Value Case-Sensitive | Default - Selected Option Value Is Turned To Lower Case */ 
  caseSensitive: PropTypes.bool,

  /** Text Within Select Field */
  label: PropTypes.string, 

  /** Field Name */
  name: PropTypes.string.isRequired,

}

export default Select;

