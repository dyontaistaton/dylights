import React from 'react';
import styled from 'styled-components';
import { Formik, Form as FForm } from 'formik';
import { Style as FieldStyle } from './Fields' 


export const Style = styled.div `
  form{
    ${FieldStyle.toString()}{
      &:not(:last-child){
        margin-bottom:10px;
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