import React from 'react';
import {FaThumbsUp} from 'react-icons/fa';
import {Modal} from '../../General'
import {Flex} from '../../Layout';

const LoggedSplash = props => { 
  return (
    <Modal.Splash completed={props.authorized} center>
      <Flex d='column' center g='10px'>
        <FaThumbsUp size='125px'/>
        <h3>Logged In</h3>
        <h5>To Your Account</h5>
      </Flex>
    </Modal.Splash>
  )
}

export default LoggedSplash;