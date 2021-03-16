import React from 'react'
import styled from 'styled-components'; 
import config from '../../../config/site.json'
import {Flex, Grid} from '../../Layout';
import PropTypes from 'prop-types'

import Header from './Header';
import Footer from './Footer'
import Body from './Body'


export const Style = styled(Flex)`
  visibility:none;
  pointer-events:none;
  width:100vw;
  height:100vh;
  margin:0;
  padding:45px;
  box-sizing:border-box;
  transition:visibility 0s;
  z-index:10000;

  &, & > figure{
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
  }  
  // Modal Back-drop
  > figure{
    background-color: #000000ac;
    opacity:0;
    transition:ease 200ms;
    transition-delay:400ms;
  }

  // Modal Content Wrapper
  > ${Grid}{
    position: relative;
    background-color:${config.colors[5]};
    width:min-content;
    min-width:237px;
    min-height:350px;
    ${props=>`
      min-width:unset;
      min-height:unset;
    `}
    padding:20px;
    border-radius:25px;
    color:${config.colors[3]};
    opacity:0;
    transition-delay:200ms; 
    transition:ease 400ms; 
    transform:translateY(-40px);

    // Header Component
    > ${Header.style}{

    }

    // Body Component
    > ${Body.style}{
      
    }

    // Footer Component
    > ${Footer.style}{

    } 
  }

  

  // Modal Shown
  &[data-show=true]{
    visibility:visible;
    pointer-events:unset;

    // Modal Back-drop
    > figure{
      opacity:1;
      transition-delay:0s;
    }

    > ${Grid}{
      transition-delay:200ms; 
      opacity:1;
      transform:translateY(0);
    }
  }

`

const POSITIONS = {
  topMiddle:'top-middle',
  topLeft:'top-left',
  topRight:'top-right',
  bottomMiddle:'bottom-middle',
  bottomLeft:'bottom-left',
  bottomRight:'bottom-right',
  middleLeft:'middle-left',
  middleRight:'middle-right',
  center:'center',
}

const Modal = props => {
  let {
    show,
    onHide,
    position,
    children,
    wrapper
  } = props; 

  let Wrapper = wrapper||React.Fragment;

  const getFlexProps = position => {
    let flexProps = {
      fill:true
    };

    if(position===POSITIONS.center){return {...flexProps,center:true}}
    if(position.startsWith('top')) {flexProps.a='flex-start'}
    if(position.startsWith('bottom')) {flexProps.a='flex-end'}
    if(position.startsWith('middle')) {flexProps.a='center'}
    if(position.endsWith('middle')) {flexProps.j='center'}
    if(position.endsWith('left')) {flexProps.j='flex-start'}
    if(position.endsWith('right')) {flexProps.j='flex-end'}

    return flexProps;
  }

  const childrenProps = {
    onHide
  }
  const clonedChildren = React.Children.toArray(children).map(child=>React.cloneElement(child,{...child.props,...childrenProps})) 
   
  return ( 
    <Style {...props} data-show={show} {...getFlexProps(position)}>
      <Wrapper {...props}>
        <figure onClick={onHide}/>
        <Grid cr='auto 1fr auto'>
          {clonedChildren}
        </Grid>
      </Wrapper>
    </Style>
  )
}

Modal.style = Style;

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

Modal.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
  position: PropTypes.oneOf(Object.values(POSITIONS)),
  fit: PropTypes.bool
};

Modal.defaultProps = {
  fit:false,
  position: 'center'
}; 

export default Modal;