import React from 'react' 
import { render } from 'react-dom'

import Home from './Home';

test('Page Renders Correctly',()=>{
  const root = document.createElement('div');
  render(Home,root);
})