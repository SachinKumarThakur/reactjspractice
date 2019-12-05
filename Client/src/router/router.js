import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import Home from '../component/home'
import Login from '../component/login'
const router = props => {
    return (
        <div>
            <Router history = {browserHistory}>
      <Route path = "/" component = {Home}>
         <Route path = "home" component = {Home} />
         <Route path = "login" component = {Login} />
      </Route>
   </Router>
        </div>
    );
};   

export default router;