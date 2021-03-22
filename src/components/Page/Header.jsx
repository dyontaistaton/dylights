import React from 'react'
import styled from 'styled-components';
import config from '../../config/site.json'
import {Flex} from '../Layout';
import {IconModal,Icon as IconButton} from '../Button'
import {FaShoppingBasket, FaUser, FaWrench} from 'react-icons/fa'
import Logo from '../Svg/Logo' 
import {useSelector} from 'react-redux';
import {If} from '../Logic';
import Cookies from '../../assets/cookies.jpg'
import {Login} from '../Account';
import AccountModal from '../Account/Forms/Modal';
import {Badge} from '../General';


export const Style = styled.div `
  height:300px;
  color:${config.colors[1]};
  background-image:url(${Cookies});
  background-position:center;
  position:relative;

  // Flex Container
  > ${Flex}{
    box-sizing:border-box;
    height:100%;
    padding:20px;
  } 

  @media(max-width:700px){
    #logo{
      width:600px;
    }
  }

  @media(max-width:500px){
    height:200px;
    #logo{
      width:300px;
    }
  }
`

const Header = props => {
  const state = useSelector(state => state);
  const {firebase, cart} = state;
  const {auth} = firebase;

  return (
    <Style>
      <Flex fill d='column' center>
        <Logo id='logo'/>
        <Flex gap='40px'>
          <If value={auth.uid&&auth.uid=='uygHHbh6xKT01NyG91Iv02RDnVw2'}>
            <IconButton data-title='Admin' size='large' icon={FaWrench()} to='/a/o' fill={config.colors[0]} background={config.colors[3]}/> 
          </If>
          <If value={auth.uid}>
            <IconButton to={`/u/${auth.uid}/a`}data-title='Account' size='large' icon={FaUser()} fill={config.colors[0]} background={config.colors[3]}/>
          </If>
          <AccountModal/>
          <Badge background={config.colors[1]} value={cart.totalAmount}>
            <IconButton data-title='Cart' size='large' icon={FaShoppingBasket()} fill={config.colors[0]} background={config.colors[3]}/>
          </Badge>
        </Flex>
      </Flex>
    </Style>    
  )
} 

export default Header;