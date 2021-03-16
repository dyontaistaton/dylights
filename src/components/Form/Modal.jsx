import React from 'react'
import {Modal as BaseModal} from '../General';
import PropTypes from 'prop-types'
import {Form} from './Form';

const Modal = props => {
  return (
    <Form {...props.form}>
      <BaseModal {...props}>
        {props.children}
      </BaseModal>
    </Form>
  )
}

Modal.propTypes = {
  //* Include All Modal PropTypes
  ...Modal.propTypes,
  
  /** All The Form Props */
  form: PropTypes.object
}

export default Modal;