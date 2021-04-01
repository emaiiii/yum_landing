import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from './Pages/Home/Home';

import './App.css';

function App() {
  
  return (
    <Router>
      <div className="App">
          <Switch>
            
            {/*--About Us Page--*/}
            <Route path="/AboutUs">
              <h1>About Us</h1>
            </Route>

            {/*--Contact Us Page--*/}
            <Route path="/AboutUs">
              <h1>Contact Us</h1>
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
