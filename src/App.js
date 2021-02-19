import React from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer';
import Home from './pages/Home'
import About from './pages/About'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import SearchResults from './pages/SearchResults'
import RestaurantDetails from './components/RestaurantDetails';

function App() {

  return (
    
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/About" component={About} />
          <Route path="/Login" component={LoginPage} />
          <Route path="/SignUp" component={SignUpPage} />
          <Route path="/SearchResults/:foodtype" component={SearchResults} />
          <Route path="/restaurant/details/:id" component={RestaurantDetails}/>
          <Route path="/" component={Home} />
        </Switch>
        <Footer/>
      </div>
    </Router>

  );
}

export default App;
