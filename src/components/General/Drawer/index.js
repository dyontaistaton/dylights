import React from 'react'
import styled from 'styled-components';
import {Flex,Grid} from '../../Layout';

import Header from './Header'
import Body from './Body'
import Footer from './Footer'

const Style = styled(Flex) `

`

const POSITIONS = {
  top:'top',
  left:'left',
  right:'right',
  bottom:'bottom'
}

const getFlexProps = position => {
  let flexProps = {
    fill:true
  }

  switch(position){
    case POSITIONS.top:break;
    default:break;
  }
}

const Drawer = props => {
  const {
    position,
    onHide,
    wrapper,
    children
  } = props;

  const Wrapper = wrapper||'div';

  const childrenProps = {
    onHide
  }
  const clonedChildren = React.Children.toArray(children).map(child=>React.cloneElement(child,{...child.props,...childrenProps})) 

  return (
    <Style>
      <Wrapper>
        <figure onClick={onHide}/>
        <Grid cr='auto 1fr auto'>
          {clonedChildren}
        </Grid>
      </Wrapper>
    </Style>
  )
}

Drawer.style = Style;

Drawer.Header = Header;
Drawer.Body = Body;
Drawer.Footer = Footer;

Drawer.propTypes = {

}

Drawer.defaultProps = {

}

export default Drawer;