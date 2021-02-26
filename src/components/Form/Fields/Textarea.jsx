import React from 'react'
import styled from 'styled-components';
import {default as FieldStyle} from './Style'
import { Field } from 'formik'
import {If} from '../../Logic';
import PropTypes from 'prop-types'

export const types = {

};

export const Style = styled(FieldStyle) `
`

const Textarea = props => {
  const {placeholder, label} = props;
  return ( 
    <Style>
      <Field {...props} as='textarea' placeholder='...'/>
      <If value={placeholder||label}>
        <label><h4>{placeholder||label}</h4></label>
      </If>
    </Style> 
  )
}

Textarea.propTypes = {

  /** Text Within Text Area Field */
  label: PropTypes.string,

  /** Field Name */
  name: PropTypes.string.isRequired, 
}

export default Textarea;
