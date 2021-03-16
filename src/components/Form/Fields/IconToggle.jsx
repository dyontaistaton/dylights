import React from 'react' 
import styled from 'styled-components';
import {default as FieldStyle} from './Style'
import { Field } from 'formik';
import { IconToggle as IconToggleButton } from '../../Button'; 
import PropTypes from 'prop-types'

export const Style = styled(FieldStyle) `
  width:fit-content;
` 

const IconToggle = props => {
  return (
    <Style {...props}>
      <Field {...props}>
        {({field:{value},form:{setFieldValue}})=>(
          <IconToggleButton 
            {...props} 
            data-title={props.title} 
            initial={value} 
            onChange={value=>setFieldValue(props.name,value)}
            type='button'
          />
        )}
      </Field>
    </Style>
  )
} 

IconToggle.propTypes = {

  // Include All Icon Toggle Button PropTypes
  ...IconToggleButton.propTypes, 

  /** Field Name */
  name: PropTypes.string.isRequired, 
}

IconToggle.style = Style;

IconToggle.defaultProps = {
  label: 'Toggle'
}

export default IconToggle;