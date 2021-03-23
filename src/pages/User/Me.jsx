import React from 'react' 
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import {Button} from '../../components/Button';
import {PathToggleGroup} from '../../components/General'
import {Flex, Grid} from '../../components/Layout';
import {Switch} from 'react-router';
import config from '../../config/site.json'

const Style = styled(Grid)`
  height:100vh;


  // Side Panel Flex Container,
  > ${Flex}{
    padding:20px;
    box-sizing:border-box;
    background-color:${config.colors[4]};

    // Panel Buttons
    > ${Button.style}{
      width:100%;
    }
  }

`

const Me = props => {
  const profile = useSelector(state => state.firebase.profile)

  return (
    <Style cc='330px auto' fill>
      <Flex fill d='column' g='10px'>
        <PathToggleGroup size='large' shortened width='100%' routes={[ 
          'Account',
          'Settings',
          'Orders',
        ]}/>
      </Flex>
      <Switch>

      </Switch>
    </Style>
  )
}

Me.style = Style;

export default Me;