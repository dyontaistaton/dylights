import React from 'react'
import styled from 'styled-components';

const Style = styled.div`
`

const Account = props => {
  return (
    <Style>
      <h3>My Account</h3>
      <h5> Work In Progress - Check In Later </h5>
    </Style>
  )
}

Account.name = 'Account'


export default Account