import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {login, register} from '../../../redux/auth/actions';
import {Icon} from '../../Button';
import {If} from '../../Logic';
import Login from './Login'
import Register from './Register'
import config from '../../../config/site.json'
import {FaUser} from 'react-icons/fa';

const Modal = props => {
  const dispatch = useDispatch()

  //* Grab Current Logged In User Auth Info
  const {auth} = useSelector(state => state.firebase);

  //* Determines Which Form Is Rendered
  const [isRegistering, setIsRegistering] = React.useState(true)
  
  //* Determines If Modal Is Shown
  const [shown, setShown] = React.useState(false)
  
  //* Sets Dynamic Buttons Loading States
  const [isLoading, setIsLoading] = React.useState(false)

  //* On Login Form Submit
  const handleLoginSubmit = values => {
    const {email, password} = values;

    setIsLoading(true)
    dispatch(login({email,password}))
  } 

  //* On Register Form Submit
  const handleRegisterSubmit = values => {
    const {email,password,phone} = values;

    setIsLoading(true)
    dispatch(register({email,password,phone},()=>setIsLoading(false)))
  }

  const handleClose = () => {
    setShown(false)
  }

  const handleFormSwitch = () => {
    setIsRegistering(!isRegistering)
  }


  return (
    <>
      <Icon 
        data-title='Account' 
        size='large' 
        icon={FaUser()} 
        fill={config.colors[0]} 
        background={config.colors[3]}
        onClick={()=>setShown(!shown)}
        style={{display:auth.uid?'none':undefined}}
        type='button'
        {...props}
      />
      <If value={isRegistering} Else={(
        <Login uid={auth.uid} show={shown} onSwitch={handleFormSwitch} onHide={handleClose} loading={isLoading} onSubmit={handleLoginSubmit}/>
      )}>
        <Register uid={auth.uid} show={shown} onSwitch={handleFormSwitch} onHide={handleClose} loading={isLoading} onSubmit={handleRegisterSubmit}/>
      </If>
      
    </>
  )
}

export default Modal