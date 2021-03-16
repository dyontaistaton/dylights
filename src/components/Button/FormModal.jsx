import React from 'react'
import Button from './Button'
import {Modal as BaseModal} from '../Form'

const FormModal = props => {
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
      <BaseModal show={isShown} onHide={handleClose} position={props.position} form={props.form}>
        {props.children}
      </BaseModal>
    </>
  ) 
}

FormModal.propTypes = {

  //* Include All Button Props 
  ...Button.propTypes,
  
  //* Include All Modal Props
  ...BaseModal.propTypes, 
  
}

FormModal.Header = BaseModal.Header;
FormModal.Body = BaseModal.Body;
FormModal.Footer = BaseModal.Footer;

export default FormModal;