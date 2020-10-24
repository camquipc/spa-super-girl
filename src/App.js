import React, { Fragment } from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import './App.css';


import Login from './components/Login';
import Home from './components/Home';




function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>

          <Route component={() => <div>Not Found ...</div>} />
        </Switch>
        <Switch>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;




