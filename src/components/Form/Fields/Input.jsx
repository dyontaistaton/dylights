import React from 'react' 
import styled from 'styled-components';
import {default as FieldStyle} from './Style'
import { Field } from 'formik'
import { If } from '../../Logic';
import config from '../../../config/site.json'
import PropTypes from 'prop-types'

export const types = {

};

export const Style = styled(FieldStyle)`
  input{ 
    ${props=>props.fill&&`width:100%;`} 

    &:focus, &:not(:placeholder-shown){
      & ~ label {
        top:3px;
      }
    }
  }
` 

const Input = props => {
  const {placeholder, label} = props;
  return ( 
    <Style {...props}>
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

Input.defaultProps = {
  label: 'Input',
}

Input.style = Style; 

export default Input;