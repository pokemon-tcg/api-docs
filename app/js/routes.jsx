import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Home from './components/home';
import API from './components/api';

export default (
  <Route component={App} path='/'>
    <IndexRoute component={Home} />
    <Route path='/docs' component={API} />
  </Route>
);
