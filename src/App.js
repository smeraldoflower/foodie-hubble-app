import React from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import './css/App.css';
import Home from './pages/Home'
import About from './pages/About'

function App() {

  return (
    <Router>
      <div className="App">

        <h2>Foodie Hubble App</h2>

        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/About" component={About} />
          <Route path="/" component={Home} />
        </Switch>

      </div>
    </Router>

  );
}

export default App;
