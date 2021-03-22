import React from 'react'
import styled from 'styled-components';
import {If} from '../../Logic';

export const Style = styled.div`
  padding-top:13px;
` 

const Footer = props => {

  const childrenProps = {
    onHide:props.onHide
  }
  const clonedChildren = React.Children.toArray(props.children).map(child=>{return React.cloneElement(child,{...child.props,...childrenProps})})
  
  return (
    <Style>
      <If value={!props.render} Else={props.render&&props.render(childrenProps)}>
        {clonedChildren} 
      </If>
    </Style>
  )
}

Footer.style = Style;

export default Footer;