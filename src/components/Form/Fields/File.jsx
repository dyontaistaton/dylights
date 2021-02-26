import React from 'react'
import styled from 'styled-components'; 
import {default as FieldStyle} from './Style';
import {Field} from 'formik';
import PropTypes from 'prop-types'

export const Style = styled(FieldStyle)`

`

const File = props => {
  return (
    <Style {...props}>
      <Field>
        {({form:{setFieldValue}})=>(
          <>
            <input 
              {...props} 
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
}

export default File
