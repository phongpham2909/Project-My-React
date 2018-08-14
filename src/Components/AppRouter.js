import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import HeaderForm from './HeaderForm';
import HomeForm  from './HomeForm';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

import '../App.css';


class AppRouter extends Component {
    render() {
      return (
        <div>
          <HeaderForm />
          <Router>
            <Switch>
              <Route path="/sign-up" component={SignUpForm} />
              <Route path="/sign-in" component={SignInForm} />
              <Route exact path="/" component={HomeForm} />
            </Switch>
          </Router>
        </div>
      );
    }
  }
  
  export default AppRouter;