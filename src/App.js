import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import './App.css';
import Header from './components/Header';


const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" render={() => (<div>Match</div>)} />
          <Route render={() => (<div>Miss</div>)} />
        </Switch>
      </div>
    </ConnectedRouter>
  )
}

export default App;
