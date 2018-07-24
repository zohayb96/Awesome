import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import store, { getMe } from './../app/store';
import LoginForm from './LoginForm';

const Main = withRouter(
  class extends Component {
    componentDidMount() {
      store.dispatch(getMe()).then(() => {
        this.props.history.push('/home');
      });
    }

    render() {
      return (
        <Switch>
          <Route path="/home" component={LoginForm} />
          <Route component={Login} />
        </Switch>
      );
    }
  }
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Main />
      <LoginForm />
    </Router>
  </Provider>,
  document.getElementById('app')
);
