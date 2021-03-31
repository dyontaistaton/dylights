import React from 'react'
import {FaTimes} from 'react-icons/fa';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import {Icon} from '../Button';

const Style = styled.div `
  position:absolute; 
  top:20px;
  right:20px;
`

const HomeButton = props => {
  const history = useHistory()
  return (
    <Style {...props}>
      <Icon icon={FaTimes()} data-title='Home' onClick={()=>history.push('/')}/>
    </Style>
  )
}

export default HomeButton;