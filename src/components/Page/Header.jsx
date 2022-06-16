import React from 'react'
import styled from 'styled-components';
import config from '../../config/site.json'
import {Flex} from '../Layout';
import {Icon as IconButton} from '../Button'
import {FaShoppingBasket, FaUser, FaWrench} from 'react-icons/fa'
import Logo from '../Svg/Logo' 
import {useSelector} from 'react-redux';
import {If} from '../Logic';
import Cookies from '../../assets/cookies.jpg'
import AccountModal from '../Account/Forms/Modal';
import {Badge} from '../General';
import {Cart,Admin,User} from '../../pages' 
import {useHistory} from 'react-router-dom';
import StatonIcon from '../Svg/StatonIcon'

export const Style = styled(Flex) `
  height:300px;
  color:${config.colors[1]};
  background-color:${config.colors[0]};
  background-image:url(${Cookies});
  background-position:center;
  position:relative;
  padding:20px;
  box-sizing:border-box; 

  //* Staton Icon SVG
  > #staton-icon{
    fill:white;
    opacity:0.36;
    width:15%;
    height:250px;
    position:absolute;
    bottom:-20%;
    right:-30px;
  }

  > #logo{
    cursor:pointer;
  }

  //* Header Sizing Variants 
  &[data-size=small]{
    height:200px;
  }

  &[data-size=smaller]{
    height:110px;

    //* Button Flex Group
    >${Flex}{
      display:none;
    }
  } 

  //* Media Queries
  @media(max-width:700px){
    > #logo{
      width:600px;
    }
  }

  @media(max-width:500px){
    height:200px;
    > #logo{
      width:300px;
    }

    > #staton-icon{
      width:27%;
      bottom:-40%;
    }
  }
`

const Header = props => {
  const state = useSelector(state => state);
  const history = useHistory()
  const {firebase, cart} = state;
  const {auth} = firebase;

  return (
    <Style d='column' center data-size={props.size} {...props}>
      <Logo id='logo' onClick={()=>{history.push('/')}}/>
      <Flex gap='40px'>
        <If value={auth.uid&&auth.uid==='uygHHbh6xKT01NyG91Iv02RDnVw2'}>
          <IconButton data-title='Admin' size='large' icon={FaWrench()} to={`${Admin.path}/o`} fill={config.colors[0]} background={config.colors[3]}/> 
        </If>
        <If value={auth.uid}>
          <IconButton to={`${User.path}/a`}data-title='Account' size='large' icon={FaUser()} fill={config.colors[0]} background={config.colors[3]}/>
        </If>
        <AccountModal data-title='Become A Member Now' data-visible/>
        <Badge background={config.colors[1]} value={cart.totalAmount}>
          <IconButton to={Cart.path} data-title='Cart' size='large' icon={FaShoppingBasket()} fill={config.colors[0]} background={config.colors[3]}/>
        </Badge>
      </Flex>
      <StatonIcon id='staton-icon'/>
    </Style>    
  )
} 

Header.style = Style;

export default Header;