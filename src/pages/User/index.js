import React from 'react'
import {If} from '../../components/Logic';

const User = props => {
  const {uid} = useSelector(state => state.firebase.auth)
  
  return (
    <If value={uid}>
      // MAKE SEPERATE PAGES FOR LOGGED IN USER 
      // & OTHER USERS IF USER IS ADMIN
      // IF THERE IS NO CURRENT USER 
      // REDIRECT THEM BITCHESSSSS!!!

    </If>
  )
}