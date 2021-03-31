import React from 'react'
import {FaCheck, FaStroopwafel} from 'react-icons/fa';
import styled from 'styled-components';
import {Button} from '../../components/Button';
import {Flex} from '../../components/Layout';
import config from '../../config/site.json'

const Style = styled(Flex)`
  height:100%;
  width:min-content;

  *{
    text-align:center;
  }

  > ${Flex}{
    position:relative;
    svg:first-child{
      fill:${config.colors[0]};
      width:370px;
    }

    svg:last-child{
      fill:${config.colors[1]};
      position:absolute;
      top: -10px;
      right: 29px;
    }
  }

  > a{
    &,&>button{width:100%;}
  }

`

const CompletedCheckout = props => {
  return (
    <Style center fill d='column' g='20px'>
      <Flex center>
        <FaStroopwafel size='280px'/>
        <FaCheck size='120px'/>
      </Flex>
      <h2>Thank You For Your Purchase</h2>
      <h5>A Confirmation Email Has Been Sent</h5>
      <Button to='/u/o' label='My Orders' fill/>
    </Style>
  )
}

export default CompletedCheckout