import React from 'react'
import styled from 'styled-components';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import Page from '../../components/Page';
import Footer from '../../components/General/RouteFooter'

import Account from './Account'
import Orders from './Orders'
import HomeButton from '../../components/General/HomeButton';

const routes = [Account,Orders];

export const Style = styled.div`
  position:relative;
  padding:20px;
`

const User = props => {
  const {path} = useRouteMatch()
  return (
    <Page>
      <Page.Header size='smaller'/>
      <Page.Body>
        <Switch>
          <Style>
            {routes.map(route=>(
              <Route path={`${path}/${route.name[0].toLowerCase()}`}>
                {route({})}
              </Route>
            ))} 
          </Style>
        </Switch>
        <HomeButton/>
      </Page.Body>
      <Footer routes={routes.map(route=>route.name)} start='/u'/>
    </Page>
  )
}

User.path='/u'

export default User