import React from 'react' 
import styled from 'styled-components';
import {default as FieldStyle} from './Style'
import { Field } from 'formik';
import { Toggle as ToggleButton } from '../../Button'; 
import PropTypes from 'prop-types'

export const Style = styled(FieldStyle) `
  // Setting Button Width To Match Other Field Elements
  button{
    width:313px;
    max-width:100%;
  }
` 

const Toggle = props => {
  return (
    <Style {...props}>
      <Field {...props}>
        {({field:{value},form:{setFieldValue}})=>(
          <ToggleButton 
            {...props} 
            initial={value} 
            onChange={value=>setFieldValue(props.name,value)}
            type='button'
          />
        )}
      </Field>
    </Style>
  )
}

Toggle.propTypes = { 

  // Including All Toggle Button Prop Types
  ...ToggleButton.propTypes, 

  /** Field Name */
  name: PropTypes.string.isRequired, 
}

Toggle.style = Style;

Toggle.defaultProps = {
  label: 'Toggle'
}

export default Toggle;