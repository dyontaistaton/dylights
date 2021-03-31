import React from 'react'
import styled from 'styled-components'; 
import Input from './Input';
import {Field} from 'formik';
import config from '../../../config/site.json'
import PropTypes from 'prop-types'

export const Style = styled(Input.style)`
  // File Inputs
  input{
    cursor:pointer;
    color:${config.colors[5]};

    // Hide Default Upload Button
    &::-webkit-file-upload-button{
      visibility:hidden;
      margin-right:-102px;
      margin-top:4px;
    }

    // Make Placeholder Color Dark Black
    &::placeholder{
      color:${config.colors[5]};
    }
  } 
`

const File = props => {
  return (
    <Style {...props}>
      <Field>
        {({form:{setFieldValue}})=>(
          <>
            <input 
              {...props} 
              noSpacing={null}
              onChange={e=>setFieldValue(props.name,e.target.files[0])}
              type='file'
            />
            <label><h4>{props.label||props.placeholder}</h4></label>
          </>
        )}
      </Field>
    </Style>
  )
}

File.propTypes = {

  /** Text Within Input Field */
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

File.style = Style;

File.defaultProps = {
  label: 'File'
}

export default File
