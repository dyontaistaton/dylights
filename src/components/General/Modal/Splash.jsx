import React from 'react';
import styled from 'styled-components';
import {Flex} from '../../Layout';
import config from '../../../config/site.json'
import PropTypes from 'prop-types'
import {If} from '../../Logic';

const Style = styled(Flex)`
  border-radius:100%;
  background-color:${config.colors[5]};
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  transform: scale(0);
  transform-origin: top left;
  transition:200ms ease;
  opacity:0;
  padding:inherit;

  > *{
    transform: rotateZ(45deg);
    transform-origin: center;
    transition:220ms ease;
  } 

  //* When Current Session Becomes Authorized
  &[data-completed=true]{
    border-radius:25px; 
    transform: scale(1) rotateZ(0deg);
    opacity:1; 

    > *{
      transform: rotateZ(0);
    }
  } 
`

const Splash = props => { 

  const childrenProps = {
    onHide:props.onHide
  }
  const clonedChildren = React.Children.toArray(props.children).map(child=>{return React.cloneElement(child,{...child.props,...childrenProps})})

  return (
    <Style data-completed={props.completed} {...props}>
      <If value={!props.render} Else={props.render&&props.render(childrenProps)}>
        {clonedChildren} 
      </If>
    </Style>
  )
}

Splash.style = Style;

Splash.propTypes = {
  //* Include All Flex Props
  ...Flex.propTypes,

  /** Is Modal Completed? Will Splash Be Displayed */
  completed: PropTypes.bool
}

Splash.defaultProps = {
  center:true,
}

export default Splash;