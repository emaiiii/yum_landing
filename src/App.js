import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from './Pages/Home/Home';
import Signin from './Pages/Signin/Signin';

import './App.css';

function App() {
  
  return (
    <Router>
      <div className="App">
          <Switch>
            {/*--Sign in Page--*/}
            <Route path="/signin">
              <Signin/>
            </Route>

            {/*--Sign up Page--*/}
            <Route path="/signup">
              <h1>sign up page</h1>
            </Route>

            {/*--Home Page--*/}
            <Route path="/">
              <Home/>
            </Route>

          </Switch>
      </div>
    </Router>
  );
}

export default App;
