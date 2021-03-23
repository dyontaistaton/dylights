import React from 'react'
import {useSelector} from 'react-redux';
import {useParams} from 'react-router';
import {If} from '../../components/Logic';
import Page from '../../components/Page'
import Me from './Me'
import Other from './Other'

const User = props => {
  const {uid} = useSelector(state => state.firebase.auth)
  const {id} = useParams()

  //* When User Is On His Own Page
  const isOnOwn = uid===id; 

  return (
    <Page>
      <Page.Header size='smaller'/>
      <Page.Body>
        <If value={uid}>

          {/* When User Is On His Own User Page */}
          <If value={isOnOwn}><Me id={id}/></If> 

          {/* When User Is On Another User's Page */}
          <If value={!isOnOwn}><Other id={id}/></If>

        </If>
      </Page.Body>
      
    </Page>
  )
}

User.path = '/u/:id'

export default User;