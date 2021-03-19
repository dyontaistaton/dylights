import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Admin from './Admin';
import User from './User'

export const Pages = [Admin,User,Home];

const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        {Pages.map(page => <Route path={page.path} component={page}/>)}
      </Switch>
    </BrowserRouter>
  )
}

export default App