import React from 'react'
import Button from './Button'
import {Modal as BaseModal} from '../General'

const Modal = props => {
  const [isShown, setIsShown] = React.useState(false);

  /* Upon Button Click, Change Modal State */
  const handleClick = e => {
    setIsShown(!isShown);
  } 

  /* Upon Modal Close, Change Modal State */
  const handleClose = e => {
    setIsShown(false);
  }

  return (
    <>
      <Button {...props} onClick={handleClick} type='button'/>
      <BaseModal show={isShown} onHide={handleClose} position={props.position}>
        {props.children}
      </BaseModal>
    </>
  ) 
}

Modal.propTypes = {

  //* Include All Button Props 
  ...Button.propTypes,
  
  //* Include All Modal Props
  ...BaseModal.propTypes, 
  
}

Modal.Header = BaseModal.Header;
Modal.Body = BaseModal.Body;
Modal.Footer = BaseModal.Footer;

export default Modal;