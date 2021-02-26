import React from 'react' 
import styled from 'styled-components';
import {default as FieldStyle} from './Style'
import { Field } from 'formik'
import { If } from '../../Logic';
import PropTypes from 'prop-types'

export const types = {

};

export const Style = styled(FieldStyle)`
` 

const Input = props => {
  const {placeholder, label} = props;
  return ( 
    <Style>
      <Field {...props} as='input' placeholder='...'/>
      <If value={placeholder||label}>
        <label><h4>{placeholder||label}</h4></label>
      </If>
    </Style> 
  )
}

Input.propTypes = {
  
  /** Field Name */
  name: PropTypes.string.isRequired, 
}

export default Input;