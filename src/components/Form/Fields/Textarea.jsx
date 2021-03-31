import React from 'react'
import styled from 'styled-components';
import {default as FieldStyle} from './Style'
import { Field } from 'formik'
import {If} from '../../Logic';
import PropTypes from 'prop-types'

export const types = {

};

export const Style = styled(FieldStyle) `
  textarea {
    ${props=>props.fill&&`width:100%;`} 
    padding-top:20px;
    transition:ease-in-out 0.3s, padding-top 0s; 
    height:180px;
    resize:vertical; 
    & ~ label {
      top:13px;
      bottom: calc(100% - 49px);
    }

    &:focus, &:not(:placeholder-shown){
      & ~ label {
        top:3px;
      }
    }
  }
`

const Textarea = props => {
  const {placeholder, label} = props;
  return ( 
    <Style {...props}>
      <Field {...props} noSpacing={null} as='textarea' placeholder='...'/>
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

  /** Does Input Width Fill Parent Element? */
  fill: PropTypes.bool, 

  /** The Width Of The Input Element */
  width: PropTypes.string,
  
  /** Disables Field Spacing */
  noSpacing: PropTypes.bool
}

Textarea.style = Style;

Textarea.defaultProps = {
  label: 'Textarea',
}

export default Textarea;
