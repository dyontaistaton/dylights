import React from 'react'
import {Modal as BaseModal} from '../General';
import PropTypes from 'prop-types'
import {Form} from './Form';

const Modal = props => {
  const {onClose,render,onOpen,onChange} = props;
  const [shown, setShown] = React.useState(false);

  const handleClose = () =>{
    setShown(false)
    onChange(false)
    onClose()
  }

  const handleOpen = () => {
    setShown(true)
    onChange(true)
    onOpen() 
  }

  const handleToggle = () => {
    setShown(!shown);
    onChange(!shown);
    shown?onClose():onOpen()
  }

  const renderProps = {
    handleClose,
    handleOpen,
    handleToggle,
    shown
  }

  return (
    <Form {...props.form}>
      {render&&render(renderProps)}
      <BaseModal {...props} show={shown} onHide={handleClose}>
        {props.children}
      </BaseModal>
    </Form>
  )
}

Modal.propTypes = {
  //* Include All Modal PropTypes
  ...Modal.propTypes,
  
  /** All The Form Props */
  form: PropTypes.object,
  
  /** Event Callback, Ran When Modal Is Closed */
  onClose: PropTypes.func,
  
  /** Event Callback, Ran When Modal Is Opened */
  onOpen: PropTypes.func,

  /** Event Callback, Ran When Modal Open State Is Changed */
  onChange: PropTypes.func
}

Modal.defaultProps = {
  onClose:()=>{},
  onOpen:()=>{},
  onChange:()=>{},
  onSubmit:()=>console.log('No Function For "onSubmit"')
}

Modal.Header = BaseModal.Header;
Modal.Body = BaseModal.Body;
Modal.Footer = BaseModal.Footer;
Modal.Splash = BaseModal.Splash;

export default Modal;