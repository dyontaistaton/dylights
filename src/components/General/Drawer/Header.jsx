import React from 'react'
import {FaArrowRight} from 'react-icons/fa';
import styled from 'styled-components';
import {Icon} from '../../Button';

const Style = styled.div`
  position:relative;

  > ${Icon.style}:first-child{
    position:absolute;
    top:20px;
    left:20px;
  }

`

const Header = props => {
  return (
    <Style>
      <Icon icon={FaArrowRight()} onClick={props.onHide} background='transparent'/>
      {props.children}
    </Style>
  )
}

Header.style = Style;

export default Header