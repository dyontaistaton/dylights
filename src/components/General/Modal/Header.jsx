import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types'
import {Flex} from '../../Layout';
import {Icon,Button} from '../../Button';
import {FaTimes} from 'react-icons/fa'
import {If} from '../../Logic';

export const Style = styled(Flex)`
  margin-right:50px;
  padding-bottom:13px;

  //Header Title
  > *{
    white-space:nowrap;

  }

  // Close Icon Button
  ~ ${Button.style}.close-button {
    position:absolute;
    z-index:100;
    top:20px;
    right:20px;
  }
`

const Header = props => { 
  return (
    <>
      <Style {...props} a='center' j='space-between' g='55px'>
        {props.children}
      </Style>
      <If value={props.closeButton}>
        <Icon className='close-button' icon={FaTimes()} data-title='Close' size='smaller' onClick={props.onHide} type='button'/>
      </If>
    </>
  )
}

Header.style = Style;

Header.propTypes = {

  /**
   * Display Close Button?
   */
  closeButton: PropTypes.bool

}

Header.defaultProps = {
  closeButton:true
}

export default Header;