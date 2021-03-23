import React from 'react'
import styled from 'styled-components';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import Page from '../../components/Page';
import Footer from './Footer'

import Orders from './Orders'
import Users from './Users'
import Products from './Products' 

const routes = [Orders,Users,Products];

export const Style = styled.div`
  padding:20px;
`

const Admin = props => {
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
      </Page.Body>
      <Footer routes={routes.map(route=>route.name)}/>
    </Page>
  )
}

Admin.path='/a'

export default Admin