import React from 'react'
import Icon from './Icon'
import {Modal as BaseModal} from '../General'

const FormIconModal = props => {
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
      <Icon {...props} onClick={handleClick} type='button'/>
      <BaseModal show={isShown} onHide={handleClose} position={props.position} form={props.form}>
        {props.children}
      </BaseModal>
    </>
  ) 
}

FormIconModal.propTypes = {

  //* Include All Button Props 
  ...Icon.propTypes,
  
  //* Include All Modal Props
  ...BaseModal.propTypes, 
  
}

FormIconModal.Header = BaseModal.Header;
FormIconModal.Body = BaseModal.Body;
FormIconModal.Footer = BaseModal.Footer;

export default FormIconModal;