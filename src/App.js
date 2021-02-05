import React from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import './css/App.css';
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import SearchResults from './pages/SearchResults'
import RestaurantDetails from './components/RestaurantDetails';

function App() {

  return (
    <Router>
      <div className="App">
        <NavBar/>
        <nav>
          <Link to="/">Home </Link><br/>
          <Link to="/About">About </Link>
        </nav>



        <Switch>
          <Route path="/About" component={About} />
          <Route path="/SearchResults" component={SearchResults} />
          {/* <Route path="/restaurant/details/" component={RestaurantDetails}/> */}
          <Route path="/" component={Home} />
        </Switch>

      </div>
    </Router>

  );
}

export default App;
