import React from 'react';
import { Router, Switch, Route } from 'react-router';
import createBrowserHistory from "history/createBrowserHistory";
import {
  Dashboard,
  Profile,
  Products,
  Sales,
  Checkout,
  Login,
  Signup,
  NoMatch,
} from './components';

const history = createBrowserHistory();

export default class Routes extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      is_authenticated: true,
    }
  }

  render() {
    if(this.state.is_authenticated)
      return (
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/seller" component={Profile}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/products" component={Products}/>
            <Route path="/sales" component={Sales}/>
            <Route component={NoMatch}/>
          </Switch>
        </Router>
      )
    return (
      <Router history={history}>
        <Switch>
          <Route path="/:seller_id/:product_id" component={Checkout}/>
          <Route path="/signup" component={Signup}/>
          <Route component={Login}/>
        </Switch>
      </Router>
    )
  }
}
