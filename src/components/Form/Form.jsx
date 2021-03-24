import React from 'react';
import styled from 'styled-components';
import { Formik, Form as FForm } from 'formik';
import { Style as FieldStyle } from './Fields' 


export const Style = styled.div `
  form{
    ${FieldStyle.toString()}{
      &:not(:first-child){
        margin-top:10px;
        ${props=>props.noSpacing&&`margin-top:0;`}
      }
    }
  }
`

export const Form = props => {
  return (
    <Style {...props}>
      <Formik {...props}>
        <FForm>
          {props.children}
        </FForm>
      </Formik>
    </Style>
  )
}

export default Form;