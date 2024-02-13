import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SuccessOne from './Success';
import Failure from './Failure';
import Yay from './Yay';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route component={Failure} path="/failure" />
          <Route component={Yay} path="/yay" />
          <Route component={SuccessOne} path="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
