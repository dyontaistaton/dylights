import React from 'react';
import styled from 'styled-components';
import {If} from '../Logic';
import Button from './Button';
import Loader from 'react-spinners/BarLoader';
import config from '../../config/site.json';
import PropTypes from 'prop-types'

const Style=styled.div`
  position:relative;

  // Loader Element
  > *:last-child:not(button){
    display:block;
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    margin:auto; 
  }

  &[data-loading=true] > ${Button.style}{
    pointer-events:none;
  }
`;

const Dynamic=props => {
  const {loading,fill}=props;

  return (
    <Style data-loading={loading}>
      <Button {...props} fill={loading?'transparent':fill}/>
      <If value={loading}>
        <Loader color={fill||config.colors[3]} width='80%' height='7px'/>
      </If>
    </Style>
  );
};

Dynamic.style=Style;

Dynamic.propTypes = {
  //* Include All Button PropTypes
  ...Button.propTypes,
  
  /** Is Button In A Loading State? */
  loading: PropTypes.bool
}


export default Dynamic;