import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Switch, Route } from 'react-router-dom';
import { Router, Switch, Route } from 'react-router-dom';
// import createBrowserHistory from 'history/createBrowserHistory';
import { createBrowserHistory as createHistory } from 'history';
import './index.css';
import App from './components/App';
import Jokes from './components/Jokes';
import reportWebVitals from './reportWebVitals';

// const history = createBrowserHistory();
const history = createHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route exact={true} path='/' component={App} />
      <Route path='/jokes' component={Jokes} />
    </Switch>
  </Router>,
  document.getElementById('root')
  );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
