import React from 'react' 
import {Modal} from '../../General' 
import {Input, Form} from '../../Form';
import {Dynamic, Icon} from '../../Button';
import {FaPlus} from 'react-icons/fa';
import LoggedSplash from './LoggedSplash'

const Login = props => { 
  return (
    <Form
      initialValues={{
        email:'',
        password:''
      }}
      onSubmit={props.onSubmit}
      style={{margin:0}}
    >
      <Modal {...props}>
        <Modal.Header>
          <h3>Login</h3>
          <h5>To Your Account</h5>
          <Icon size="smaller" data-title='Register' icon={FaPlus()} onClick={props.onSwitch} style={{
            position:'absolute',
            top:'20px',
            right:'65px'
          }}/>
        </Modal.Header>
        <Modal.Body>
          <Input name='email' label='Email'/>
          <Input name='password' label='Password' type='password'/>
        </Modal.Body>
        <Modal.Footer>
          <Dynamic size="large" label='Login' width='100%' loading={props.loading}/>
        </Modal.Footer>
        <LoggedSplash authorized={Boolean(props.uid)}/>
      </Modal>
    </Form> 
  )
}

export default Login;