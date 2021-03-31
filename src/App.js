import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from './Pages/Home/Home';

import './App.css';

function App() {
  
  return (
    <Router>
      <div className="App">
          <Switch>
            
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
