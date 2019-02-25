import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import './App.css';
import Header from './components/Header';
import NotFound from './components/NotFound';
import Landing from './components/Landing';

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <div className="page-container">
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" render={() => (<div>Portfolio</div>)} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </ConnectedRouter>
  )
}

export default App;
