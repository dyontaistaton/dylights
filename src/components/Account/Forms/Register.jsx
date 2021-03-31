import React from 'react';
import {Modal} from '../../General';
import {Input,Form} from '../../Form';
import {Dynamic,Icon} from '../../Button';
import {FaSignInAlt} from 'react-icons/fa';
import LoggedSplash from './LoggedSplash';

const Register=props => {
  return (
    <Form
      initialValues={{
        email: '',
        password: '',
        phone: ''
      }}
      onSubmit={props.onSubmit}
      style={{margin: 0}}
    >
      <Modal {...props}>
        <Modal.Header>
          <hgroup>
            <h3>Register</h3>
            <h5>New Account</h5>
            <Icon
              size="smaller"
              data-title='Login'
              data-visible
              icon={FaSignInAlt()}
              onClick={props.onSwitch}
              style={{
                position: 'absolute',
                top: '20px',
                right: '65px'
              }}
              type='button'
            />
          </hgroup>
          
        </Modal.Header>
        <Modal.Body>
          <Input required autoComplete="email" name='email' label='Email' type='email' />
          <Input required autoComplete="tel" name='phone' label='Phone' type='tel' />
          <Input required autoComplete='new-password' name='password' label='Password' type='password' />
        </Modal.Body>
        <Modal.Footer>
          <Dynamic size="large" label='Register' width='100%' loading={props.loading} type='submit'/>
        </Modal.Footer>
        <LoggedSplash authorized={Boolean(props.uid)} />
      </Modal>
    </Form>
  );
};

export default Register;