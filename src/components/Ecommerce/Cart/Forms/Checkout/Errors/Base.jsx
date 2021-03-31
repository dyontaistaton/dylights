import React from 'react'
import {FaTimesCircle} from 'react-icons/fa';
import {Flex} from '../../../../../Layout';

const Base = props => {
  const {icon,title,subtitle,description} = props; 

  return (
    <Flex center g='15px' d='column'>
      {icon||FaTimesCircle()}
      <h3>{title||'Card Declined'}</h3>
      <h5>{subtitle||'Not Much Info Here?'}</h5>
      <p>{description||'The card was declined with no reason why? Try again later maybe things will be better.'}</p>
    </Flex>
  )
}

export default Base;