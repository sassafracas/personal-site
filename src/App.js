import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import './App.css';
import Header from './components/Header';
import NotFound from './components/NotFound';


const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" render={() => (<div>Home</div>)} />
          <Route path="/about" render={() => (<div>About</div>)} />
          <Route path="/portfolio" render={() => (<div>Portfolio</div>)} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </ConnectedRouter>
  )
}

export default App;
