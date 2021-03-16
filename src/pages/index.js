import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Admin from './Admin'

export const Pages = [Admin,Home];

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