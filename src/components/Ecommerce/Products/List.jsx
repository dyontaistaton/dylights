import React from 'react'
import styled from 'styled-components';
import HashLoader from 'react-spinners/HashLoader'
import config from '../../../config/site.json'
import {Flex} from '../../Layout';
import PropTypes from 'prop-types'

export const Style = styled.ul `
  padding:0;
  border-radius:15px;

  > *:not(:last-child){
    margin-bottom:10px;
  }
`

const List = props => {
  const {items, card, wrapper, extras} = props;
  
  //* Loading, Waiting Items
  if(items===undefined){return (
    <Flex center fill style={{padding:'20px'}}>
      <HashLoader size='100px' color={config.colors[0]}/> 
    </Flex>
  )}

  if(items===null){return(
    <h5>None</h5>
  )}

  //* Custom Wrapper
  if(wrapper){return (
    <React.Fragment>
      {wrapper({
        ...props,
        children:Object.entries(items).map(([key,item])=>card({...item,key,...extras}))
      })}
    </React.Fragment>
  )}

  //* All Goes As Planned, There Are Items With No Wrapper
  return (
    <Style {...props}>
      {Object.entries(items).map(([key,item])=>card({...item,key}))}
    </Style>
  )
}

List.style = Style;

List.propTypes = {
  /** The Item Object To Be Given To Each Card Listed Within List ( IS A MAP ) */
  items: PropTypes.any,
  
  /** The Element Given Item Info Within The List */
  card: PropTypes.any
}

export default List