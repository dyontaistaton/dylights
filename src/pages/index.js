import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home';

export const Pages = [Home];

const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        {Pages.map(page => <Route component={page}/>)}
      </Switch>
    </BrowserRouter>
  )
}

export default App